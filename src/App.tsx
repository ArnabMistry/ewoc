import { Navbar1 } from '@/components/ui/navbar-1'
import LightRays from '@/components/ui/LightRays'
import SplashCursor from '@/components/SplashCursor'

// import { RainbowButtonDemo } from '@/components/ui/demo'

function App() {
  return (
    <div className="min-h-screen bg-black dark relative">
      <SplashCursor />
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pt-20 px-4 sm:pt-28 md:pt-32">
  <h1
    className="
      font-['BebasNeuePro'] uppercase
      text-[2.75rem] sm:text-[3.75rem] md:text-[4.75rem]
      leading-tight tracking-widest
      text-white
      relative
    "
  >
    <span className="block">
      Elevate
    </span>
    <span className="block text-[#00FFAA]">
      Winter of Code
    </span>
    {/* Light flare overlay */}
    <span className="absolute inset-0 mix-blend-screen opacity-30 blur-[8px] text-[#FFD65A]">
      Elevate Winter of Code
    </span>
  </h1>

  <p className="mt-6 text-[#d5d5d5] text-[0.875rem] sm:text-[1.125rem] md:text-[1.375rem] max-w-xl leading-relaxed font-light">
    Build. Collaborate. Conquer the Winter with Code.
  </p>
</div>



      {/* Additional content can be added here */}
    </div>
  )
}

export default App
