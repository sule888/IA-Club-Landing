<template>
  <div 
    ref="container" 
    :style="{ width: width, height: width }"
    class="robot-container"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
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
    default: .34
  },
  hoverSpeed: {
    type: Number,
    default: .35
  }
})

const container = ref(null)
let scene, camera, renderer, mixer, model
let currentAction = null
let actions = {}
let animationFrame = null
const onMouseEnter = () => {
 const hoverAnimations = ["ThumbsUp", 'Dance', "Standing"]
 const availableAnimations = hoverAnimations.filter(name => actions[name])
 
 if (availableAnimations.length === 0) return
 
 const randomAnimation = availableAnimations[Math.floor(Math.random() * availableAnimations.length)]
 
 if (currentAction) currentAction.stop()
 currentAction = actions[randomAnimation]
 currentAction.reset()
   .setLoop(THREE.LoopOnce)
   .setEffectiveTimeScale(props.hoverSpeed)
   .play()
 
 currentAction.clampWhenFinished = true
 
 currentAction.getMixer().addEventListener('finished', () => {
   const nextAnimation = availableAnimations.find(name => name !== randomAnimation)
   if (nextAnimation) {
     currentAction = actions[nextAnimation]
     currentAction.reset()
       .setLoop(THREE.LoopOnce)
       .setEffectiveTimeScale(props.hoverSpeed)
       .play()
     currentAction.clampWhenFinished = true
   }
 })
}
const onMouseLeave = () => {
  setTimeout(() => {
    startDefaultAnimations()
  }, 500)
}

const startDefaultAnimations = ( ) => {
  const defaultAnimations = [ 'Walking' ]
  const availableAnimations = defaultAnimations.filter(name => actions[name])
  
  if (availableAnimations.length > 0) {
    const randomAnimation = availableAnimations[Math.floor(Math.random() * availableAnimations.length)]
    
    if (currentAction) currentAction.stop()
    currentAction = actions[randomAnimation]
    currentAction.reset()
      .setLoop(THREE.LoopRepeat)
      .setEffectiveTimeScale(props.animationSpeed)
      .play()
  }
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
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(10, 10, 5)
  directionalLight.castShadow = true
  scene.add(directionalLight)
  
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
    
    console.log('Available animations:', gltf.animations.map(clip => clip.name))
    
    if (gltf.animations && gltf.animations.length) {
      mixer = new THREE.AnimationMixer(model)
      
      gltf.animations.forEach((clip) => {
        actions[clip.name] = mixer.clipAction(clip)
        actions[clip.name].setLoop(THREE.LoopOnce)
      })
      
      startDefaultAnimations()
    }
    
    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    
    model.position.copy(center).multiplyScalar(-1)
    
    const maxDim = Math.max(size.x, size.y, size.z)
    const distance = maxDim * 1.5
    
    camera.position.set(0, size.y * 0.2, distance)
    camera.lookAt(0, size.y * 0.1, 0)
  })
}

const animate = () => {
  animationFrame = requestAnimationFrame(animate)
  
  if (mixer) mixer.update(0.016)
  
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