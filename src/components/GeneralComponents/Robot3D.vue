<template>
  <div 
    ref="container" 
    :style="{ width: width, height: width }"
    class="robot-container"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const props = defineProps({
  width: {
    type: String,
    default: '200px'
  },
  animationSpeed: {
    type: Number,
    default: .60
  },
  hoverSpeed: {
    type: Number,
    default: .60
  },
  mouseX: {
    type: Number,
    default: 0
  },
  mouseY: {
    type: Number,
    default: 0
  },
  isRotationHover: {
    type: Boolean,
    default: false
  },
  isAnimationHover: {
    type: Boolean,
    default: false
  }
})

const container = ref(null)
let scene, camera, renderer, mixer, model
let currentAction = null
let actions = {}
let animationFrame = null
let greetingTimer = null
let currentAnimationType = 'default'
let targetRotationY = 0
let targetRotationX = 0

const hoverAnimations = ["ThumbsUp", 'Dance']
const greetingAnimations = ["Yes", "No"]
const defaultAnimation = "Walking"

const playRandomHoverAnimation = () => {
  if (!props.isAnimationHover) return
  
  const availableAnimations = hoverAnimations.filter(name => actions[name])
  if (availableAnimations.length === 0) return
  
  const randomAnimation = availableAnimations[Math.floor(Math.random() * availableAnimations.length)]
  playAnimation(randomAnimation, false)
  currentAnimationType = 'hover'
}

const playGreetingAnimation = () => {
  if (props.isAnimationHover) return
  
  const availableGreetings = greetingAnimations.filter(name => actions[name])
  if (availableGreetings.length === 0) return
  
  const randomGreeting = availableGreetings[Math.floor(Math.random() * availableGreetings.length)]
  playAnimation(randomGreeting, false)
  currentAnimationType = 'greeting'
}

const playAnimation = (animationName, loop = true) => {
  if (!actions[animationName]) return
  
  if (currentAction) currentAction.stop()
  
  currentAction = actions[animationName]
  currentAction.reset()
    .setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce)
    .setEffectiveTimeScale(loop ? props.animationSpeed : props.hoverSpeed)
    .play()
  
  if (!loop) {
    currentAction.clampWhenFinished = true
  }
}

const startDefaultAnimation = () => {
  playAnimation(defaultAnimation, true)
  currentAnimationType = 'default'
}

const onAnimationFinished = (event) => {
  if (event.action !== currentAction) return
  
  if (props.isAnimationHover && currentAnimationType === 'hover') {
    playRandomHoverAnimation()
  } else if (!props.isAnimationHover && currentAnimationType === 'greeting') {
    startDefaultAnimation()
  } else if (!props.isAnimationHover) {
    startDefaultAnimation()
  }
}

const startGreetingTimer = () => {
  const randomInterval = (Math.random() * 60000) + 60000
  
  greetingTimer = setTimeout(() => {
    if (!props.isAnimationHover && currentAnimationType === 'default') {
      playGreetingAnimation()
    }
    startGreetingTimer()
  }, randomInterval)
}

const initThreeJS = () => {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  camera.position.set(0, 1, 3)
  
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true 
  })
  renderer.setClearColor(0x000000, 0)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight.position.set(10, 10, 5)
  directionalLight.castShadow = true
  scene.add(directionalLight)
  
  const frontLight = new THREE.DirectionalLight(0xffffff, 0.6)
  frontLight.position.set(0, 5, 10)
  scene.add(frontLight)
  
  container.value.appendChild(renderer.domElement)
}

const loadModel = () => {
  const loader = new GLTFLoader()
  
  loader.load('/models/RobotExpressive.glb', (gltf) => {
    model = gltf.scene
    scene.add(model)
    
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
    
    if (gltf.animations && gltf.animations.length) {
      mixer = new THREE.AnimationMixer(model)
      
      gltf.animations.forEach((clip) => {
        actions[clip.name] = mixer.clipAction(clip)
      })
      
      mixer.addEventListener('finished', onAnimationFinished)
      
      startDefaultAnimation()
      startGreetingTimer()
    }
    
    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    
    model.position.copy(center).multiplyScalar(-1)
    
    const maxDim = Math.max(size.x, size.y, size.z)
    const distance = maxDim * 0.98
    
    camera.position.set(0, size.y * 0.2, distance)
    camera.lookAt(0, size.y * 0.1, 0)
  })
}

const animate = () => {
  animationFrame = requestAnimationFrame(animate)
  
  if (mixer) mixer.update(0.016)
  
  if (model) {
    model.rotation.y += (targetRotationY - model.rotation.y) * 0.1
    model.rotation.x += (targetRotationX - model.rotation.x) * 0.1
  }
  
  renderer.render(scene, camera)
}

const updateSize = () => {
  if (!renderer || !container.value) return
  
  const rect = container.value.getBoundingClientRect()
  const size = rect.width
  
  camera.aspect = 1
  camera.updateProjectionMatrix()
  
  renderer.setSize(size, size)
}

watch(() => props.isAnimationHover, (newIsAnimationHover) => {
  if (newIsAnimationHover && currentAnimationType !== 'hover') {
    playRandomHoverAnimation()
  }
})

watch(() => props.isRotationHover, (newIsRotationHover) => {
  if (!newIsRotationHover) {
    targetRotationY = 0
    targetRotationX = 0
  }
})

watch([() => props.mouseX, () => props.mouseY], ([newMouseX, newMouseY]) => {
  if (props.isRotationHover) {
    targetRotationY = -newMouseX * 0.5
    targetRotationX = newMouseY * 0.3
  }
})

onMounted(() => {
  initThreeJS()
  loadModel()
  animate()
  
  setTimeout(updateSize, 100)
  
  window.addEventListener('resize', updateSize)
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  
  if (greetingTimer) {
    clearTimeout(greetingTimer)
  }
  
  if (mixer) {
    mixer.removeEventListener('finished', onAnimationFinished)
  }
  
  if (renderer) {
    container.value?.removeChild(renderer.domElement)
    renderer.dispose()
  }
  
  window.removeEventListener('resize', updateSize)
})

watch(() => props.width, () => {
  setTimeout(updateSize, 100)
})
</script>

<style scoped>
.robot-container {
  display: inline-block;
  cursor: pointer;
}
</style>