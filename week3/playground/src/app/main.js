import THREE from "three/three.min"

var scene, camera, renderer

var createRenderer = function(){
  renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(0x000000, 1.0)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true;
  renderer.shadowMapType = THREE.PCFSoftShadowMap
}

var createCamera = function(){
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  )
  camera.position.x = 15
  camera.position.y = 16
  camera.position.z = 13
  camera.lookAt(scene.position) // <-- scene.position is center of our scene
}

var createSphere = function(){
  var sphereGeometry = new THREE.SphereGeometry(6, 30, 30)
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: "red"
  })
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
  sphere.castShadow = true;
  scene.add(sphere)
}

var createLight = function(){
  var spotlight = new THREE.SpotLight(0xffffff)
  spotlight.position.set(10, 20, 20)
  spotlight.shadow.camera.near = 20;
  spotlight.shadow.camera.far = 50;
  spotlight.castShadow = true;
  scene.add(spotlight)
}

var createPlane = function(){
  var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(40,40),
    new THREE.MeshLambertMaterial({
      color: 0xcccccc
    })
  );
  plane.receiveShadow = true;
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.y = -5;
  scene.add(plane)
}

var init = function(){
  scene = new THREE.Scene()

  createRenderer()
  createCamera()
  createSphere()
  createLight()
  createPlane()

  document.body.appendChild(renderer.domElement)

  render()
}

var render = function(){
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

init()
