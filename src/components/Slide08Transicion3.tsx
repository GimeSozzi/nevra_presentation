import { ArrowRight } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide08Transicion3() {
  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #02023F 0%, #1E3A8A 50%, #02023F 100%)'
      }}
    >
      {/* Animated background elements - más prominentes */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/20 blur-3xl motion-safe:animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/20 blur-3xl motion-safe:animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B82F6 1px, transparent 1px),
            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-20 text-center">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-white text-7xl leading-tight mb-8">
            Ahora, el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#3B82F6]">Portal Interno</span>
          </h2>
          <p className="text-white/80 text-3xl max-w-4xl mx-auto leading-relaxed">
            Del caos de archivos dispersos al poder de la gestión inteligente del riesgo
          </p>
        </div>

        {/* Transition indicator - más destacado */}
        <div className="flex items-center gap-8">
          <div className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20">
            <p className="text-white/70 text-xl">Portal Cliente</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-white/40 to-transparent" />
            <div className="p-3 rounded-full bg-[#06B6D4]/20 border-2 border-[#06B6D4]">
              <ArrowRight className="w-7 h-7 text-[#06B6D4]" />
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-white/40 to-transparent" />
          </div>

          <div className="px-8 py-4 rounded-2xl bg-gradient-to-br from-[#06B6D4]/30 to-[#3B82F6]/30 backdrop-blur-sm border-2 border-[#06B6D4] shadow-2xl shadow-[#06B6D4]/30">
            <p className="text-white text-xl">Portal Interno</p>
          </div>
        </div>
      </div>
    </div>
  );
}