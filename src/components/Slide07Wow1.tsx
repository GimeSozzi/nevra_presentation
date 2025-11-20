import { CheckCircle, Zap } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import { VideoFrame } from './VideoFrame';

export function Slide07Wow1() {
  const features = [
    'Onboarding digital en minutos sin fricción',
    'Validación de CUIT y datos de AFIP en tiempo real',
    'IA para extracción automática de documentos',
    'Verificación biométrica facial en vivo',
    'Legajo digital 360° unificado'
  ];

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
        {/* Left - Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-5xl mb-12 leading-tight">
            Portal del <span className="text-[#3B82F6]">Cliente</span>:<br />
            Experiencia sin fricción
          </h2>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="mt-1">
                  <CheckCircle className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <p className="text-white/90 text-xl leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 px-6 py-4 rounded-xl bg-[#3B82F6]/20 border border-[#3B82F6]/50">
            <p className="text-[#3B82F6] text-lg flex items-center gap-3">
              <Zap className="w-5 h-5" />
              Reducción del 80% en tiempo de onboarding
            </p>
          </div>
        </div>

        {/* Right - Video Frame */}
        <div className="h-[600px]">
          <VideoFrame 
            title="DEMO: Portal del Cliente"
            subtitle="Onboarding completo + IA documental + Biometría + Legajo 360°"
            accentColor="#3B82F6"
          />
        </div>
      </div>
    </div>
  );
}