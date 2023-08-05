import React from 'react'
import { Html, useProgress } from '@react-three/drei'
export default function Loader() {
  const { progress } = useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: '5vw',
          color: 'lightcoral',
          textAlign: 'center',
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}
