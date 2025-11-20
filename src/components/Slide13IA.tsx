import { MessageSquare, Database, TrendingUp, CheckCircle } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import { VideoFrame } from './VideoFrame';

export function Slide13IA() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Chat con políticas',
      description: 'Preguntas en lenguaje natural (\"¿qué hacemos con un cliente PEP?\")',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'SQL Natural',
      description: 'Consultas tipo: \"muéstrame los clientes de alto riesgo del último mes\"',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Análisis predictivo',
      description: 'Modelos de ML que anticipan cambios de riesgo antes de que ocurran',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden p-20"
      style={{
        background: 'linear-gradient(135deg, #02023F 0%, #1E3A8A 50%, #02023F 100%)'
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#A855F7]/15 blur-3xl" />

      {/* Animated AI particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#3B82F6] motion-reduce:animate-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 2}s infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content Grid */}
      <div className="relative h-full grid grid-cols-2 gap-16 items-center">
        {/* Left - Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-6xl mb-8 leading-tight">
            La <span className="text-[#3B82F6]">Inteligencia Artificial</span><br />
            como analista 24/7 del equipo
          </h2>
          
          <p className="text-white/70 text-xl mb-10">
            Asistencia inteligente en cada decisión de cumplimiento
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div 
                    className="relative bg-white/10 backdrop-blur-sm border-2 rounded-2xl p-5 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden"
                    style={{ borderColor: feature.color }}
                  >
                    <div className="flex items-start gap-5">
                      {/* Icon with gradient background */}
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 
                          className="text-xl mb-1.5"
                          style={{ color: feature.color }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

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

        {/* Right - Video Frame */}
        <div className="h-[600px]">
          <VideoFrame 
            title="DEMO: Inteligencia Artificial"
            subtitle="Chat con políticas + SQL Natural + Análisis predictivo"
            accentColor="#A855F7"
          />
        </div>
      </div>
    </div>
  );
}