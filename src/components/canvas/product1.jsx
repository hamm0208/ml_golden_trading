import React, { useRef } from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Product1 = ({ isMobile }) => {
  const { scene } = useGLTF('./product1_final/product1.gltf', true);
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh>
      <pointLight intensity={100} rotation={[0, 0, 0]} position={[0,10, 5]} />
      <pointLight intensity={100} rotation={[0, 0, 0]} position={[0,0, 5]} />
      <pointLight intensity={100} rotation={[0, 0, 0]} position={[0, 0, -5]} />
      <pointLight intensity={250} rotation={[0, 0, 0]} position={[5, 0, 0]} />
      <pointLight intensity={100} rotation={[0, 0, 0]} position={[-10, 0, 0]} />
      <primitive
        ref={meshRef}
        object={scene}
        position={isMobile?[0, -1.5, 0] :[0, -3, 0]}
        scale={isMobile? 9:10}
        rotation={[0, 0.5, 0]}
      />
    </mesh>
  );
};

const Product1Canvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameLoop='demand' shadows camera={{ position: [20, 10, 5], fov: 40 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          key={isMobile ? 'mobile' : 'desktop'}
          enableZoom={false}
          enableRotate={!isMobile}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Product1 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Product1Canvas;