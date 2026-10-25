import { useCallback } from "react";
import * as THREE from "three";
import { ThreeWebGpuCanvas } from "../core/ThreeWebGpuCanvas";

export function ThreeHpcTopology() {
  const handleInitScene = useCallback((scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    camera.position.set(0, 0, 7);

    // Node mesh grid
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(
      wireframe,
      new THREE.LineBasicMaterial({
        color: 0x00f5d4,
        transparent: true,
        opacity: 0.85,
      }),
    );
    line.name = "meshGrid";
    scene.add(line);

    // Inner glowing core
    const coreGeo = new THREE.SphereGeometry(0.8, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffe600,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.name = "innerCore";
    scene.add(core);

    // Orbital particle nodes
    const particleCount = 64;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.6 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff2a85,
      size: 0.12,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    particles.name = "nodes";
    scene.add(particles);
  }, []);

  const handleAnimate = useCallback(
    (scene: THREE.Scene, _camera: THREE.PerspectiveCamera, delta: number) => {
      const mesh = scene.getObjectByName("meshGrid");
      const core = scene.getObjectByName("innerCore");
      const nodes = scene.getObjectByName("nodes");

      if (mesh) {
        mesh.rotation.x += delta * 0.2;
        mesh.rotation.y += delta * 0.35;
      }
      if (core) {
        core.rotation.y -= delta * 0.45;
      }
      if (nodes) {
        nodes.rotation.z += delta * 0.15;
      }
    },
    [],
  );

  return (
    <div className="relative h-[320px] w-full sm:h-[400px]">
      <ThreeWebGpuCanvas
        onInitScene={handleInitScene}
        onAnimate={handleAnimate}
        height="100%"
        width="100%"
      />
      <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[11px] text-[var(--color-mfqc-cyan)]">
        ✦ Topología 3D WebGPU • 64 Nodos Heterogéneos Acelerados
      </div>
    </div>
  );
}
