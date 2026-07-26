"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


function NeuralSphere() {

  const meshRef = useRef<THREE.Mesh>(null);


  useFrame((state) => {

    if (!meshRef.current) return;


    meshRef.current.rotation.y += 0.003;

    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime) * 0.2;

  });



  return (

    <mesh ref={meshRef}>


      <icosahedronGeometry
        args={[1.4, 3]}
      />


      <meshStandardMaterial

        color="#00ffff"

        wireframe

        emissive="#00ffff"

        emissiveIntensity={0.7}

      />


    </mesh>

  );

}



export default function AIObject() {


  return (

    <div
        className="
        absolute
        right-[-80px]
        top-[180px]
        w-[1600px]
        h-[420px]
        opacity-80
        pointer-events-none
        "
    >


      <Canvas
        camera={{
          position:[0,0,5],
        }}
        style={{ pointerEvents: "none" }}
      >


        <ambientLight intensity={0.5}/>


        <pointLight
          position={[3,3,3]}
          intensity={2}
          color="#00ffff"
        />


        <NeuralSphere />


        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />


      </Canvas>


    </div>

  );

}