import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.15, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const shellMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4f0e7,
      metalness: 0.72,
      roughness: 0.28,
      wireframe: true,
      transparent: true,
      opacity: 0.62,
    });

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xc7b27a,
      metalness: 0.55,
      roughness: 0.42,
      transparent: true,
      opacity: 0.9,
    });

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.34, 0.18, 96, 10),
      shellMaterial,
    );
    group.add(knot);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.78, 1),
      coreMaterial,
    );
    group.add(core);

    const orbitMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.16,
    });

    [1.9, 2.35, 2.8].forEach((radius, index) => {
      const points = [];
      for (let i = 0; i <= 96; i += 1) {
        const angle = (i / 96) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
      }
      const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), orbitMaterial);
      orbit.rotation.x = Math.PI / (2.8 + index * 0.4);
      orbit.rotation.y = Math.PI / (4.5 - index * 0.45);
      group.add(orbit);
    });

    const particleCount = 84;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.6 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.025,
        transparent: true,
        opacity: 0.36,
      }),
    );
    group.add(particles);

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    const key = new THREE.DirectionalLight(0xf4f0e7, 2.2);
    key.position.set(3, 4, 5);
    const rim = new THREE.PointLight(0xc7b27a, 4.5, 8);
    rim.position.set(-3, -2, 3);
    scene.add(ambient, key, rim);

    const pointer = { x: 0, y: 0 };
    const handlePointer = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.45;
    };

    const resize = () => {
      const width = mount.clientWidth || 640;
      const height = mount.clientHeight || 520;
      const isMobile = width < 700;
      camera.aspect = width / height;
      camera.position.set(0, isMobile ? 0.25 : 0.15, isMobile ? 8.6 : 7);
      group.scale.setScalar(isMobile ? 0.82 : 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();
    mount.addEventListener('pointermove', handlePointer);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.17 + pointer.x;
      group.rotation.x = Math.sin(elapsed * 0.45) * 0.12 + pointer.y;
      knot.rotation.z = elapsed * 0.08;
      core.rotation.x = elapsed * 0.18;
      core.rotation.y = elapsed * 0.22;
      particles.rotation.y = elapsed * -0.04;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeEventListener('pointermove', handlePointer);
      mount.removeChild(renderer.domElement);
      particleGeometry.dispose();
      knot.geometry.dispose();
      core.geometry.dispose();
      shellMaterial.dispose();
      coreMaterial.dispose();
      orbitMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="hero-scene-canvas"
    />
  );
};

export default ThreeHeroScene;
