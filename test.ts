import * as THREE from "three"

export default function init() {
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  animate()
}

init()