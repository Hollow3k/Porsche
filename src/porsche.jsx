import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, SpotLight } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/scene.gltf');
  return <primitive object={scene} scale={[14, 14, 14   ]} />;
}

function Porsche() {
  return (
    <div style={{ width: '100vw', height: '100vh', marginTop: '150px', zIndex:10000 }}>
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
          {/* Main overhead light */}
          <SpotLight
            position={[0, 50, 0]}
            angle={0.7}
            penumbra={0.8}
            intensity={2}
            color={"#e0e0e0"}
            distance={100}
            castShadow
          />
          {/* Subtle fill light */}
          <SpotLight
            position={[-30, 30, 30]}
            angle={0.8}
            penumbra={1}
            intensity={1}
            color={"#404040"}
            distance={80}
            castShadow
          />
          {/* Environment lighting */}
          <Environment preset="city" intensity={0.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Porsche;