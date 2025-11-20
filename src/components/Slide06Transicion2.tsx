import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import { VideoFrame } from './VideoFrame';

export function Slide06Transicion2() {
  return (
    <div className="relative w-full h-full overflow-hidden p-20" 
      style={{
        background: 'linear-gradient(135deg, #02023F 0%, #1E3A8A 50%, #02023F 100%)'
      }}
    >
      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content Grid */}
      <div className="h-full grid grid-cols-2 gap-16 items-center">
        {/* Left - Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-5xl mb-8 leading-tight">
            Demo en vivo:<br />
            <span className="text-[#3B82F6]">Arquitectura</span> y flujo general
          </h2>
          
          <div className="space-y-4 text-white/80 text-xl">
            <p>• Visión completa del ecosistema Nevra</p>
            <p>• Flujo de datos desde cliente hasta oficial</p>
            <p>• Integración con sistemas existentes</p>
          </div>
        </div>

        {/* Right - Video Frame */}
        <div className="h-[600px]">
          <VideoFrame 
            title="DEMO: Arquitectura General"
            subtitle="Vista end-to-end del sistema"
            accentColor="#3B82F6"
          />
        </div>
      </div>
    </div>
  );
}