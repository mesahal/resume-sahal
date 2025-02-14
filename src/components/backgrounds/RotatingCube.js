import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    mountRef.current.appendChild(renderer.domElement);

    // Cube with Icons
    const geometry = new THREE.BoxGeometry();
    const materials = [
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/icons/react.png') }), // React
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/icons/js.png') }), // JavaScript
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/icons/python.png') }), // Python
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/icons/cpp.png') }), // C++
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/icons/git.png') }), // Git
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/icons/docker.png') }), // Docker
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
};

export default RotatingCube;