import * as THREE from 'three'
import * as dat from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.9/+esm'

const gui = new dat.GUI()

const getWidth = () => window.innerWidth
const getHeight = () => window.innerHeight
const getAspect = () => getWidth() / getHeight()

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(+75.0, getAspect(), +0.1, +1e3)

const renderer = new THREE.WebGLRenderer({ precision: 'lowp' })
renderer.setSize(getWidth(), getHeight())
document.body.appendChild(renderer.domElement)

document.body.style.margin = '0'

function animate() {
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()

//

const geometry = new THREE.PlaneGeometry(10, 10)
const material = new THREE.MeshBasicMaterial({ color: 0x0099ff, side: THREE.DoubleSide })
const plane = new THREE.Mesh(geometry, material)
plane.rotation.x = Math.PI / 2
plane.rotation.z = Math.PI / 2
scene.add(plane)

camera.position.y = 7.5
camera.position.z = 7.5

camera.rotation.x = -Math.PI * 0.25
