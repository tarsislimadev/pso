import * as THREE from 'three'

const getWidth = () => window.innerWidth
const getHeight = () => window.innerHeight
const getAspect = () => getWidth() / getHeight()

const getPlaneWidth = () => 10

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

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(getPlaneWidth(), getPlaneWidth()),
  new THREE.MeshBasicMaterial({ color: 0xffffff }),
)
plane.rotation.x = -Math.PI / 2
plane.rotation.z = Math.PI / 2
scene.add(plane)

camera.position.y = 7.5
camera.position.z = 7.5

camera.rotation.x = -Math.PI * 0.25

const spheres = Array.from(Array(40)).map(() => {
  const geometry = new THREE.SphereGeometry(0.1, 32, 16)
  const material = new THREE.MeshBasicMaterial({ color: 0x0066ff })
  const sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)
  return sphere
})

spheres.map((s, ix) => {
  const diff = Math.floor(getPlaneWidth() / 2) - 0.5
  s.position.x = (ix % 10) - diff
  s.position.z = Math.floor(ix / 10) - diff
})

setTimeout(() => {
  console.log('plane', plane.position)
  spheres.map((s, i) => console.log('sphere ' + i, s.position))
}, 1000)
