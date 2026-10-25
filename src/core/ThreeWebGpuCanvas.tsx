import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useChartPrintSnapshot } from "./useChartPrintSnapshot";

export interface ThreeWebGpuCanvasProps {
  onInitScene?: (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
  ) => void;
  onAnimate?: (scene: THREE.Scene, camera: THREE.PerspectiveCamera, delta: number) => void;
  className?: string;
  height?: number | string;
  width?: number | string;
}

export function ThreeWebGpuCanvas({
  onInitScene,
  onAnimate,
  className = "w-full h-full",
  height = "100%",
  width = "100%",
}: ThreeWebGpuCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [snapshotUrl, setSnapshotUrl] = useState<string | null>(null);
  const { isPrinting } = useChartPrintSnapshot();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // Create scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Standard high-performance WebGL renderer (three/webgpu fallback compatible)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true, // Necessary for instant print snapshotting
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    if (onInitScene) {
      onInitScene(scene, camera, renderer);
    }

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (onAnimate) {
        onAnimate(scene, camera, delta);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Capture initial high-res static frame for print
    setTimeout(() => {
      try {
        const dataUrl = renderer.domElement.toDataURL("image/png");
        setSnapshotUrl(dataUrl);
      } catch {
        // Ignore if context is unavailable
      }
    }, 500);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [onInitScene, onAnimate]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width, height, minHeight: typeof height === "number" ? `${height}px` : height }}
    >
      {/* If printing, display the high-res static vector/raster freeze frame */}
      {isPrinting && snapshotUrl && (
        <img
          src={snapshotUrl}
          alt="3D Visualization Snapshot"
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
    </div>
  );
}
