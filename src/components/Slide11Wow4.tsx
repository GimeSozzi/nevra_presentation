import { CheckCircle } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import { VideoFrame } from './VideoFrame';

export function Slide11Wow4() {
  const features = [
    'Legajo digital 360° con toda la información unificada',
    'Matrices de riesgo automáticas (productos, segmentos, geografías)',
    'Scoring dinámico con IA y reglas de negocio',
    'Blockchain para trazabilidad inmutable de decisiones',
    'Monitoreo continuo y alertas en tiempo real'
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
            Portal <span className="text-[#06B6D4]">Interno</span>:<br />
            Control total del riesgo
          </h2>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="mt-1">
                  <CheckCircle className="w-6 h-6 text-[#A855F7]" />
                </div>
                <p className="text-white/90 text-xl leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 px-6 py-4 rounded-xl bg-[#06B6D4]/20 border border-[#06B6D4]/50">
            <p className="text-[#06B6D4] text-lg">
              🎯 95% de precisión en detección de riesgos
            </p>
          </div>
        </div>

        {/* Right - Video Frame */}
        <div className="h-[600px]">
          <VideoFrame 
            title="DEMO: Portal Interno"
            subtitle="Legajo 360° + Matrices + Blockchain + Monitoreo Continuo"
            accentColor="#06B6D4"
          />
        </div>
      </div>
    </div>
  );
}