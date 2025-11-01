import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, SpotLight } from '@react-three/drei';
import './porsche.css';

function Model() {
  const { scene } = useGLTF('/scene.gltf');
  const [s, setS] = useState(14);

  useEffect(() => {
    function updateScale() {
      const w = window.innerWidth;
      const ref = 1440;

      let scale;
      if (w <= 1000) {
        scale = (w / ref) * 14;
      } else {
        const base = (1000 / ref) * 14;
        const extra = ((w - 1000) / ref) * 7; // dampened growth after 1000px
        scale = base + extra;
      }

      scale = Math.max(4, Math.min(80, scale));
      setS(Number(scale.toFixed(2)));
    }

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return <primitive object={scene} scale={[s, s, s]} />;
}

function Porsche() {
  return (
    <div className="model" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas shadows camera={{ position: [90, 90, 90], fov: 20 }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <SpotLight position={[0, 50, 0]} angle={0.7} penumbra={0.8} intensity={2} color={"#e0e0e0"} distance={100} castShadow />
          <SpotLight position={[-30, 30, 30]} angle={0.8} penumbra={1} intensity={1} color={"#404040"} distance={80} castShadow />
          <Environment preset="city" intensity={0.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Porsche;