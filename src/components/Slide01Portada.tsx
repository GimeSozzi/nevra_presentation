import { ArrowRight } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import logoFidesnet from 'figma:asset/f4df3621a1d1bd007e2c03c245e5548ac614c5da.png';
import logoPewma from 'figma:asset/e284ca26abcddf88dfebaf24f56f2d7460e1f2de.png';

export function Slide01Portada() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#02023F] via-[#1E3A8A] to-[#02023F] overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B82F6 1px, transparent 1px),
            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02023F]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoWhite} alt="Nevra+" className="h-16" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl">
          <h2 className="text-7xl leading-tight mb-8">
            <span className="text-white">Prevención inteligente.</span><br />
            <span className="text-blue-400">Cumplimiento sin fricciones.</span>
          </h2>
          <p className="text-white/80 text-2xl leading-relaxed max-w-3xl">
            <span className="font-bold text-white">Nevra</span> es una plataforma que combina <span className="font-bold text-white">Inteligencia Artificial</span> y Humana + <span className="font-bold text-white">Blockchain</span> para la detección y prevención de lavado de activos (LA/FT).
          </p>
        </div>

        {/* Footer - Logos Alianzas */}
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            <img src={logoPewma} alt="Pewma" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="relative">
            <div className="text-white/70 text-xl flex items-center px-4">en alianza con</div>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            <img src={logoFidesnet} alt="Fidesnet" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}