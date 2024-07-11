import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Product1 = () => {
  const { scene } = useGLTF('./product1/product1.gltf', true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!scene) {
    console.error('Failed to load GLTF file');
    return null;
  }

  console.log('GLTF file loaded successfully', scene);

  return (
    <mesh>
      <hemisphereLight intensity={5.35} groundColor="black" />
      <pointLight rotation={[0,0,0]} shadow={true}/>
      <primitive
        object={scene}
        position={[0,-1.1, 0]}
        scale={6}
        rotation={[0,0.5,0]}
      />
    </mesh>
  );
};

const Product1Canvas = () => {
  return (
    <Canvas frameLoop='demand' shadows camera={{ position: [20, 10, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
        <Product1 />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Product1Canvas;