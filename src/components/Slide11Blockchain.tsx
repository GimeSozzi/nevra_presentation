import { Shield, Lock, FileCheck } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide11Blockchain() {
  const features = [
    {
      icon: Lock,
      title: 'Legajo encriptado en nube + hash en blockchain privada',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileCheck,
      title: 'Auditoría histórica y trazabilidad completa: quién hizo qué, cuándo y por qué',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Alineado con buenas prácticas de gobernanza de IA y estándares internacionales',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden p-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A]/50 to-[#02023F]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#A855F7]/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl" />

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
          <div className="space-y-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div 
                    className="relative bg-white/10 backdrop-blur-sm border-2 rounded-2xl p-6 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden"
                    style={{ borderColor: item.color }}
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon with gradient background */}
                      <div 
                        className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <p className="text-white/90 text-xl leading-relaxed pt-2 flex-1">
                        {item.title}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1.5"
                      style={{ 
                        background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}60 50%, ${item.color} 100%)`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Blockchain Flow Diagram */}
          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="relative bg-gradient-to-r from-[#3B82F6]/20 to-[#3B82F6]/10 rounded-xl p-8 border border-[#3B82F6]">
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
                style={{ 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #3B82F6cc 100%)' 
                }}
              >
                <span className="text-white text-lg">1</span>
              </div>
              
              <p className="text-[#3B82F6] text-sm uppercase tracking-wider mb-2">Paso 1</p>
              <p className="text-white text-2xl">Decisión de cumplimiento</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#3B82F6] to-[#06B6D4]" />
            </div>

            {/* Step 2 */}
            <div className="relative bg-gradient-to-r from-[#06B6D4]/20 to-[#06B6D4]/10 rounded-xl p-8 border border-[#06B6D4]">
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
                style={{ 
                  background: 'linear-gradient(135deg, #06B6D4 0%, #06B6D4cc 100%)' 
                }}
              >
                <span className="text-white text-lg">2</span>
              </div>
              
              <p className="text-[#06B6D4] text-sm uppercase tracking-wider mb-2">Paso 2</p>
              <p className="text-white text-2xl">Registro en Nevra</p>
              <p className="text-white/60 text-sm mt-2">Datos encriptados + metadata</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#06B6D4] to-[#A855F7]" />
            </div>

            {/* Step 3 */}
            <div className="relative bg-gradient-to-r from-[#A855F7]/20 to-[#A855F7]/10 rounded-xl p-8 border border-[#A855F7]">
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
                style={{ 
                  background: 'linear-gradient(135deg, #A855F7 0%, #A855F7cc 100%)' 
                }}
              >
                <span className="text-white text-lg">3</span>
              </div>
              
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