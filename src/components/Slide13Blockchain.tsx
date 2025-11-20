import { Shield, Lock, FileCheck } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide13Blockchain() {
  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden p-20">
      {/* Blockchain nodes background pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Network nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#A855F7] motion-reduce:animate-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-6xl leading-tight mb-8">
            Cada decisión deja una <span className="text-[#A855F7]">huella inmutable</span><br />
            en blockchain privada
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Features */}
          <div className="space-y-8">
            {[
              {
                icon: Lock,
                title: 'Legajo encriptado en nube + hash en blockchain privada',
                color: '#A855F7'
              },
              {
                icon: FileCheck,
                title: 'Auditoría histórica y trazabilidad completa: quién hizo qué, cuándo y por qué',
                color: '#3B82F6'
              },
              {
                icon: Shield,
                title: 'Alineado con buenas prácticas de gobernanza de IA y estándares internacionales',
                color: '#06B6D4'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <p className="text-white/90 text-xl leading-relaxed pt-2">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right - Blockchain Flow Diagram */}
          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-[#3B82F6]/20 to-[#3B82F6]/10 rounded-xl p-8 border border-[#3B82F6]">
              <p className="text-[#3B82F6] text-sm uppercase tracking-wider mb-2">Paso 1</p>
              <p className="text-white text-2xl">Decisión de cumplimiento</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#3B82F6] to-[#06B6D4]" />
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-[#06B6D4]/20 to-[#06B6D4]/10 rounded-xl p-8 border border-[#06B6D4]">
              <p className="text-[#06B6D4] text-sm uppercase tracking-wider mb-2">Paso 2</p>
              <p className="text-white text-2xl">Registro en Nevra</p>
              <p className="text-white/60 text-sm mt-2">Datos encriptados + metadata</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#06B6D4] to-[#A855F7]" />
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-[#A855F7]/20 to-[#A855F7]/10 rounded-xl p-8 border border-[#A855F7]">
              <p className="text-[#A855F7] text-sm uppercase tracking-wider mb-2">Paso 3</p>
              <p className="text-white text-2xl">Huella blockchain</p>
              <p className="text-white/60 text-sm mt-2 font-mono">Hash: 0x7a8f3e...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}