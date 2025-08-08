<template>
  <div 
    ref="container" 
    class="robot-container"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

// Referencias del template
const container = ref(null)

// Variables Three.js (NO reactivas)
let scene, camera, renderer, robot, animationId, clock
let head, body, leftArm, rightArm, leftLeg, rightLeg
let robotMaterial, eyeMaterial

// Estados (SÍ reactivos)
const isWaving = ref(false)
const isTurning = ref(false)
let walkCycle = 0

const initThree = () => {
  // Crear escena
  scene = new THREE.Scene()
  // Fondo transparente
  scene.background = null
  
  clock = new THREE.Clock()
  
  // Obtener dimensiones del contenedor
  const width = container.value.clientWidth || 400
  const height = container.value.clientHeight || 400
  
  // Crear cámara
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.set(0, 2, 5)
  camera.lookAt(0, 1, 0)
  
  // Crear renderer
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true, // Esto permite transparencia
    powerPreference: "high-performance"
  })
  renderer.setSize(width, height)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x000000, 0) // Fondo completamente transparente
  
  container.value.appendChild(renderer.domElement)
  
  // Luces
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(10, 10, 5)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 2048
  directionalLight.shadow.mapSize.height = 2048
  directionalLight.shadow.camera.near = 0.5
  directionalLight.shadow.camera.far = 50
  scene.add(directionalLight)
  
  // Suelo invisible pero que reciba sombras
  const floorGeometry = new THREE.PlaneGeometry(20, 20)
  const floorMaterial = new THREE.ShadowMaterial({ opacity: 0.1 })
  const floor = new THREE.Mesh(floorGeometry, floorMaterial)
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  scene.add(floor)
}

const createRobot = () => {
  // Materiales más parecidos al robot de la imagen
  robotMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xe8e8e8, // Gris claro como el robot de la imagen
    shininess: 150,
    specular: 0x555555
  })
  
  const accentMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x666666, // Gris más oscuro para detalles
    shininess: 100
  })
  
  eyeMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x0088ff, // Azul para los ojos como el robot original
    emissive: 0x002244
  })
  
  // Grupo principal del robot
  robot = new THREE.Group()
  
  // Cuerpo más redondeado y proporcionado
  const bodyGeometry = new THREE.CapsuleGeometry(0.6, 1.0, 4, 8)
  body = new THREE.Mesh(bodyGeometry, robotMaterial)
  body.position.y = 1.3
  body.castShadow = true
  robot.add(body)
  
  // Panel del pecho
  const chestGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 8)
  const chestPanel = new THREE.Mesh(chestGeometry, accentMaterial)
  chestPanel.position.set(0, 1.5, 0.55)
  chestPanel.castShadow = true
  robot.add(chestPanel)
  
  // Cabeza más redonda como el robot original
  const headGeometry = new THREE.SphereGeometry(0.5, 16, 16)
  head = new THREE.Mesh(headGeometry, robotMaterial)
  head.position.y = 2.6
  head.scale.set(1, 0.9, 1) // Ligeramente aplastada
  head.castShadow = true
  robot.add(head)
  
  // Visor/frente de la cabeza
  const visorGeometry = new THREE.SphereGeometry(0.45, 16, 16)
  const visor = new THREE.Mesh(visorGeometry, accentMaterial)
  visor.position.set(0, 0.05, 0.35)
  visor.scale.set(1, 0.7, 0.3)
  head.add(visor)
  
  // Ojos más grandes y expresivos
  const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8)
  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
  leftEye.position.set(-0.15, 0.05, 0.45)
  head.add(leftEye)
  
  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
  rightEye.position.set(0.15, 0.05, 0.45)
  head.add(rightEye)
  
  // Brazos más estilizados
  const upperArmGeometry = new THREE.CapsuleGeometry(0.12, 0.7, 4, 8)
  const leftUpperArm = new THREE.Mesh(upperArmGeometry, robotMaterial)
  leftUpperArm.position.set(-0.8, 1.8, 0)
  leftUpperArm.castShadow = true
  robot.add(leftUpperArm)
  
  const rightUpperArm = new THREE.Mesh(upperArmGeometry, robotMaterial)
  rightUpperArm.position.set(0.8, 1.8, 0)
  rightUpperArm.castShadow = true
  robot.add(rightUpperArm)
  
  // Antebrazos
  const forearmGeometry = new THREE.CapsuleGeometry(0.1, 0.6, 4, 8)
  leftArm = new THREE.Mesh(forearmGeometry, accentMaterial)
  leftArm.position.set(-0.8, 1.0, 0)
  leftArm.castShadow = true
  robot.add(leftArm)
  
  rightArm = new THREE.Mesh(forearmGeometry, accentMaterial)
  rightArm.position.set(0.8, 1.0, 0)
  rightArm.castShadow = true
  robot.add(rightArm)
  
  // Manos como esferas
  const handGeometry = new THREE.SphereGeometry(0.15, 8, 8)
  const leftHand = new THREE.Mesh(handGeometry, robotMaterial)
  leftHand.position.set(-0.8, 0.5, 0)
  leftHand.castShadow = true
  robot.add(leftHand)
  
  const rightHand = new THREE.Mesh(handGeometry, robotMaterial)
  rightHand.position.set(0.8, 0.5, 0)
  rightHand.castShadow = true
  robot.add(rightHand)
  
  // Piernas más proporcionadas
  const thighGeometry = new THREE.CapsuleGeometry(0.15, 0.8, 4, 8)
  const leftThigh = new THREE.Mesh(thighGeometry, robotMaterial)
  leftThigh.position.set(-0.25, 0.8, 0)
  leftThigh.castShadow = true
  robot.add(leftThigh)
  
  const rightThigh = new THREE.Mesh(thighGeometry, robotMaterial)
  rightThigh.position.set(0.25, 0.8, 0)
  rightThigh.castShadow = true
  robot.add(rightThigh)
  
  // Pantorrillas
  const shinGeometry = new THREE.CapsuleGeometry(0.12, 0.7, 4, 8)
  leftLeg = new THREE.Mesh(shinGeometry, accentMaterial)
  leftLeg.position.set(-0.25, 0.3, 0)
  leftLeg.castShadow = true
  robot.add(leftLeg)
  
  rightLeg = new THREE.Mesh(shinGeometry, accentMaterial)
  rightLeg.position.set(0.25, 0.3, 0)
  rightLeg.castShadow = true
  robot.add(rightLeg)
  
  // Pies más redondeados
  const footGeometry = new THREE.CapsuleGeometry(0.18, 0.4, 4, 8)
  const leftFoot = new THREE.Mesh(footGeometry, robotMaterial)
  leftFoot.position.set(-0.25, 0.05, 0.1)
  leftFoot.rotation.z = Math.PI / 2
  leftFoot.castShadow = true
  robot.add(leftFoot)
  
  const rightFoot = new THREE.Mesh(footGeometry, robotMaterial)
  rightFoot.position.set(0.25, 0.05, 0.1)
  rightFoot.rotation.z = Math.PI / 2
  rightFoot.castShadow = true
  robot.add(rightFoot)
  
  scene.add(robot)
}

const onMouseEnter = () => {
  if (!isTurning.value) {
    isTurning.value = true
    startTurnAnimation()
  }
}

const onMouseLeave = () => {
  isTurning.value = false
}

const startTurnAnimation = () => {
  const startRotation = robot.rotation.y
  const targetRotation = startRotation + Math.PI
  const duration = 1000
  const startTime = Date.now()
  
  const rotateTurn = () => {
    if (!isTurning.value) return
    
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI)
    
    robot.rotation.y = startRotation + (targetRotation - startRotation) * easeProgress
    
    if (progress < 1) {
      requestAnimationFrame(rotateTurn)
    } else {
      isTurning.value = false
    }
  }
  
  rotateTurn()
}

const startWaving = () => {
  if (isWaving.value) return
  
  isWaving.value = true
  const waveCount = 3
  let currentWave = 0
  
  const wave = () => {
    if (currentWave >= waveCount) {
      isWaving.value = false
      rightArm.rotation.z = 0
      return
    }
    
    const duration = 300
    const startTime = Date.now()
    const startRotation = rightArm.rotation.z
    const targetRotation = currentWave % 2 === 0 ? -Math.PI / 3 : 0
    
    const animateWave = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      rightArm.rotation.z = startRotation + (targetRotation - startRotation) * progress
      
      if (progress < 1) {
        requestAnimationFrame(animateWave)
      } else {
        currentWave++
        setTimeout(wave, 100)
      }
    }
    
    animateWave()
  }
  
  wave()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  const delta = clock.getDelta()
  walkCycle += delta * 2
  
  if (!isWaving.value && !isTurning.value) {
    // Animación de caminar
    leftLeg.rotation.x = Math.sin(walkCycle) * 0.3
    rightLeg.rotation.x = -Math.sin(walkCycle) * 0.3
    
    leftArm.rotation.x = -Math.sin(walkCycle) * 0.2
    rightArm.rotation.x = Math.sin(walkCycle) * 0.2
    
    // Pequeño balanceo del cuerpo
    body.rotation.z = Math.sin(walkCycle * 2) * 0.05
    robot.position.y = Math.abs(Math.sin(walkCycle * 2)) * 0.1
    
    // Saludo aleatorio más frecuente
    if (Math.random() < 0.005) { // 5 veces más probable que antes
      startWaving()
    }
  }
  
  // Pequeña animación en la cabeza
  head.rotation.y = Math.sin(walkCycle * 0.5) * 0.1
  
  renderer.render(scene, camera)
}

onMounted(() => {
  initThree()
  createRobot()
  animate()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  if (renderer) {
    renderer.dispose()
  }
  
  // Limpiar geometrías y materiales
  if (scene) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose()
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose())
        } else {
          object.material.dispose()
        }
      }
    })
  }
})
</script>

<style scoped>
.robot-container {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  /* Sin background para mantener transparencia */
}

.robot-container:hover {
  /* Efecto de hover sutil sin shadow */
  transform: scale(1.02);
  transition: transform 0.3s ease;
}
</style>