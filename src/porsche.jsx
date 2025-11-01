import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, SpotLight } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/scene.gltf');
  return <primitive object={scene} scale={[15, 15, 15]} />;
}

function Porsche() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      marginTop: '180px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 50
    }}>
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
          <SpotLight
            position={[0, 50, 10]}
            angle={0.7}
            penumbra={0.8}
            intensity={8}
            color={"#ff0000ff"}
            distance={100}
            castShadow
          />
          <Environment preset="warehouse" intensity={0.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Porsche;