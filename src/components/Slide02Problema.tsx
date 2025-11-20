import { Clock, AlertTriangle, DollarSign } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide02Problema() {
  const problemas = [
    {
      icon: Clock,
      titulo: 'Tiempo',
      descripcion: 'Semanas para aprobar un cliente corporativo, múltiples idas y vueltas de documentación.',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: AlertTriangle,
      titulo: 'Falsos positivos',
      descripcion: 'Más del 80% de las alertas de LA/FT terminan siendo falsos positivos.',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: DollarSign,
      titulo: 'Riesgo reputacional',
      descripcion: 'Multas, inspecciones y desgaste del equipo ante procesos manuales y dispersos.',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden p-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A]/50 to-[#02023F]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-3xl" />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content Grid */}
      <div className="relative h-full flex items-center">
        <div className="grid grid-cols-2 gap-16 w-full">
          {/* Left Column */}
          <div className="flex items-center">
            <h2 className="text-white text-6xl leading-tight">
              El viaje actual del compliance:<br />
              <span className="text-[#3B82F6]">lento, costoso</span> y lleno de <span className="text-[#06B6D4]">fricción</span>.
            </h2>
          </div>

          {/* Right Column - Cards */}
          <div className="flex flex-col gap-6">
            {problemas.map((problema, index) => {
              const Icon = problema.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div 
                    className="relative bg-white/10 backdrop-blur-sm border-2 rounded-2xl p-8 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden"
                    style={{ borderColor: problema.color }}
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon with gradient background */}
                      <div 
                        className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${problema.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-2xl mb-3">{problema.titulo}</h3>
                        <p className="text-white/80 text-lg leading-relaxed">{problema.descripcion}</p>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1.5"
                      style={{ 
                        background: `linear-gradient(90deg, ${problema.color} 0%, ${problema.color}60 50%, ${problema.color} 100%)`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="absolute bottom-20 left-20 right-20 z-10">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-5 border border-[#3B82F6]/30">
          <p className="text-[#3B82F6] text-2xl text-center">
            El desafío: ser más rápidos que el riesgo, sin perder rigor regulatorio.
          </p>
        </div>
      </div>
    </div>
  );
}