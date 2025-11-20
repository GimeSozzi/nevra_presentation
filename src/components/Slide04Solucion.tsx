import { Brain, User, Blocks } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide04Solucion() {
  const features = [
    {
      icon: Brain,
      label: 'IA multiagente que aprende y se adapta en tiempo real.',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: User,
      label: 'Supervisión humana que valida y mejora cada decisión.',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Blocks,
      label: 'Blockchain que asegura registros inmutables y auditables.',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A]/50 to-[#02023F]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#06B6D4]/10 blur-3xl" />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-20 text-center">
        {/* Main Title */}
        <div className="mb-12">
          <h2 className="text-white text-6xl leading-tight mb-6">
            <span className="text-[#3B82F6]">Nevra</span>: IA + Humanos + Blockchain
          </h2>
          <h3 className="text-white text-6xl leading-tight">
            para un compliance <span className="text-[#06B6D4]">auditable</span> y sin fricciones
          </h3>
        </div>

        {/* Subheadline */}
        <div className="mb-20 max-w-5xl">
          <p className="text-white/80 text-2xl leading-relaxed">
            De semanas a minutos: onboarding, legajo digital y monitoreo continuo en una sola plataforma modular.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative h-full"
              >
                <div 
                  className="relative bg-white/10 backdrop-blur-sm border-2 rounded-2xl p-12 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col"
                  style={{ borderColor: feature.color }}
                >
                  {/* Icon with gradient background */}
                  <div className="flex justify-center mb-8">
                    <div 
                      className={`relative w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-white text-lg leading-relaxed flex-1 flex items-center justify-center">
                    {feature.label}
                  </p>

                  {/* Bottom accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ 
                      background: `linear-gradient(90deg, ${feature.color} 0%, ${feature.color}60 50%, ${feature.color} 100%)`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}