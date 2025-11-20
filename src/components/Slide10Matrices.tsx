import { Grid3x3, Activity, RefreshCw, TrendingUp } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';
import { VideoFrame } from './VideoFrame';

export function Slide10Matrices() {
  const features = [
    {
      icon: Grid3x3,
      title: 'Matrices dinámicas',
      description: 'Asignación inicial durante onboarding + re-cálculo automático diario',
      color: '#3B82F6'
    },
    {
      icon: RefreshCw,
      title: 'Evolución continua',
      description: 'Las matrices evolucionan con el comportamiento real del cliente',
      color: '#06B6D4'
    },
    {
      icon: Activity,
      title: 'Perfil transaccional',
      description: 'Perfil documental por IA + perfil transaccional actualizado diariamente',
      color: '#A855F7'
    },
    {
      icon: TrendingUp,
      title: 'Alertas adaptativas',
      description: 'Basadas en comportamiento real, no en reglas estáticas',
      color: '#10B981'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#F9FAFB] overflow-hidden p-20">
      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content Grid */}
      <div className="relative h-full grid grid-cols-2 gap-16 items-center">
        {/* Left - Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[#02023F] text-5xl leading-tight mb-8">
            Riesgo vivo:<br />
            <span className="text-[#3B82F6]">matrices dinámicas</span> y<br />
            <span className="text-[#06B6D4]">perfil transaccional</span>
          </h2>
          
          <p className="text-[#374151] text-xl mb-10">
            Evaluación continua que evoluciona con el cliente
          </p>

          <div className="space-y-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border-l-4 hover:shadow-lg transition-all"
                  style={{ borderColor: feature.color }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 
                        className="text-xl mb-2"
                        style={{ color: feature.color }}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-[#374151] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Video Frame */}
        <div className="h-[600px]">
          <VideoFrame 
            title="DEMO: Matrices de Riesgo"
            subtitle="Riesgo dinámico + Perfil transaccional + Alertas adaptativas"
            accentColor="#3B82F6"
            titleColor="#02023F"
          />
        </div>
      </div>
    </div>
  );
}