import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const LaptopBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load a 3D laptop model
    const loader = new GLTFLoader();
    loader.load("/models/laptop.glb", (gltf) => {
      const laptop = gltf.scene;
      laptop.scale.set(10.5, 10.5, 10.5);
      laptop.position.set(0, 0, 0);
      scene.add(laptop);

      // Add glowing screen effect
      const screenMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        emissive: 0x00ff00,
        emissiveIntensity: 2,
      });
      laptop.traverse((child) => {
        if (child.isMesh && child.name === "Screen") {
          child.material = screenMaterial;
        }
      });
    });

    camera.position.z = 5;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      scene.traverse((object) => {
        if (object.isMesh) {
          object.rotation.y += 0.01;
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 10}}
    ></div>
  );
};

export default LaptopBackground;
