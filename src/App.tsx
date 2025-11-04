import { Navbar1 } from '@/components/ui/navbar-1'
import LightRays from '@/components/ui/LightRays'
import { RainbowButtonDemo } from '@/components/ui/demo'

function App() {
  return (
    <div className="min-h-screen bg-black dark relative">
      <LightRays
        raysOrigin="top-center"
        raysColor="#d4ededff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <Navbar1 />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 pt-32">
        <h1 className="text-5xl font-bold drop-shadow-lg mb-8">Elevate Winter of Code</h1>
      </div>
      {/* Additional content can be added here */}
    </div>
  )
}

export default App
