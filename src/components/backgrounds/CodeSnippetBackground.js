import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const CodeSnippetBackground = () => {
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

    // Load a font for the code snippets
    const fontLoader = new FontLoader();
    fontLoader.load(
      "/fonts/helvetiker_regular.typeface.json",
      (font) => {
        console.log("Font loaded successfully:", font);

        const codeSnippets = [
          "function helloWorld() {",
          "  console.log('Hello, World!');",
          "}",
          "const react = require('react');",
          "class App extends React.Component {",
          "  render() { return <div>Hello</div>; }",
          "}",
        ];

        codeSnippets.forEach((snippet, index) => {
          const textGeometry = new TextGeometry(snippet, {
            font: font,
            size: 0.005, // Adjust size
            height: 0.001, // Adjust depth
            curveSegments: 120, // Add smoothness
          });

          const textMaterial = new THREE.MeshPhongMaterial({
            color: index % 2 === 0 ? 0x00ff00 : 0x0077ff, // Green and blue for syntax highlighting
            shininess: 10, // Add shininess for a glossy effect
          });

          const textMesh = new THREE.Mesh(textGeometry, textMaterial);
          textMesh.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          );
          scene.add(textMesh);
        });
      },
      undefined,
      (error) => {
        console.error("Error loading font:", error);
      }
    );

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Bright white light
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    camera.position.z = 15;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      scene.traverse((object) => {
        if (object.isMesh) {
          object.rotation.x += 0.01;
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
      style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
    ></div>
  );
};

export default CodeSnippetBackground;