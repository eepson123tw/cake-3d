import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Cake from './Cake.jsx'
import Screen from './Screen.jsx'
import { useControls } from 'leva'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <Canvas
    shadows
    camera={{
      fov: 18,
      near: 0.1,
      far: 200,
      position: [2, 9, 5]
    }}
  >
    <Cake />
    <Screen />
  </Canvas>
)
