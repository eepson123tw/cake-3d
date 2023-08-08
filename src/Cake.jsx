// @ts-nocheck
import React from 'react'
import {
  Text,
  Sparkles,
  useGLTF,
  Float,
  Center,
  OrbitControls,
  Environment
} from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva'
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: '#FFCCEE' })
export default function Cake(props) {
  const { nodes, materials } = useGLTF('cake.glb')
  const { name, bgColor } = useControls('Music', {
    name: { value: 'Keri,Eva' },
    bgColor: { value: '#000000' }
  })
  return (
    <>
      <color attach='background' args={[`${bgColor}`]} />
      <Center right position={[-3, 0.5, 0]}>
        <OrbitControls makeDefault />
        <Environment preset='sunset'></Environment>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[1, 2, 3]}
          intensity={0.1}
          shadow-normalBias={0.04}
        />
        <Float
          speed={1.75}
          floatIntensity={2}
          rotationIntensity={0.4}
          floatingRange={[0, 0.2]}
        >
          <group dispose={null}>
            <Sparkles
              position={[0, 1, 0]}
              count={50}
              scale={5}
              size={5}
              speed={0.1}
              noise={[0.01, 1, 1]}
              color={'#FFCC99'}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cake.geometry}
              material={materials.cakeTexture}
            ></mesh>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cakebase.geometry}
              material={materials.cakebaseTexture}
            />
            <mesh
              position={[-0.22, 0.9, 0.05]}
              castShadow
              receiveShadow
              geometry={nodes.cream.geometry}
              material={obstacleMaterial}
            />
            <mesh
              position={[-0.22, 1.85, 0.1]}
              scale={0.25}
              castShadow
              receiveShadow
              geometry={nodes.happyBirthday.geometry}
              material={materials.Text}
            />
          </group>
          <Text
            font=''
            fontSize={0.5}
            letterSpacing={-0.05}
            position={[1.5, 3, 0.75]}
            rotation={[-0.8, 0, 0]}
            color='white'
            material-toneMapped={false}
            material-fog={false}
            maxWidth={1}
            anchorX='center'
            anchorY='middle'
          >
            For {name}
          </Text>
        </Float>
      </Center>
    </>
  )
}
useGLTF.preload('cake.glb')
