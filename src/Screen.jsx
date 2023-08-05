// @ts-nocheck
import React, { forwardRef, useState, useEffect } from 'react'
import { Float } from '@react-three/drei'
import { EffectComposer, GodRays, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useControls } from 'leva'
export default function Screen() {
  const [material, set] = useState()
  return (
    <>
      <Emitter ref={set} />
      {material && (
        <EffectComposer disableNormalPass multisampling={8}>
          <GodRays sun={material} exposure={0.34} decay={0.8} blur />
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={0.3}
          />
        </EffectComposer>
      )}
    </>
  )
}

const Emitter = forwardRef((props, forwardRef) => {
  const { sound } = useControls('Music', {
    sound: { value: false }
  })
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/HappyBirthday.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      mute: sound
    })
  )
  useEffect(() => {
    sound && video.play()
    sound &&
      window.addEventListener('touchstart', () => {
        document.getElementById('audio').muted = false
        document.getElementById('audio').play()
      })
    return () => video.play()
  }, [video, sound])

  return (
    <mesh ref={forwardRef} position={[0, 0, -15]} {...props}>
      <planeGeometry args={[16, 10]} />
      <meshBasicMaterial>
        <videoTexture
          attach='map'
          args={[video]}
          colorSpace={THREE.SRGBColorSpace}
        />
      </meshBasicMaterial>
      <mesh scale={[16.05, 10.05, 1]} position={[0, 0, -0.01]}>
        <planeGeometry />
        <meshBasicMaterial color='black' />
      </mesh>
    </mesh>
  )
})
