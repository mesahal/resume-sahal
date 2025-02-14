import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const GalaxySpiral = () => {
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

    // Particles
    const particlesCount = 5000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const radius = Math.random() * 10;
      const angle = Math.random() * Math.PI * 2;
      const spiral = Math.random() * 0.5;

      positions[i * 3] = Math.cos(angle) * radius * spiral;
      positions[i * 3 + 1] = Math.sin(angle) * radius * spiral;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Random colors for a cosmic look
      colors[i * 3] = Math.random() * 0.5 + 0.5; // Reddish
      colors[i * 3 + 1] = Math.random() * 0.3; // Greenish
      colors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // Bluish
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // Particle Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 15;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles in a spiral
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
    ></div>
  );
};

export default GalaxySpiral;