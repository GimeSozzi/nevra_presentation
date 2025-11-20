import { Bell, Kanban, Clock } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';
import { VideoFrame } from './VideoFrame';

export function Slide12Monitoreo() {
  const features = [
    {
      icon: Bell,
      title: 'Alertas automáticas',
      description: 'Generadas según perfil documental + transaccional del cliente',
      color: '#3B82F6'
    },
    {
      icon: Kanban,
      title: 'Prioridad por IA',
      description: 'Enfoca al equipo donde más importa según scoring de riesgo',
      color: '#06B6D4'
    },
    {
      icon: Clock,
      title: 'SLA tracking',
      description: 'Demuestra cumplimiento de tiempos ante el regulador',
      color: '#A855F7'
    }
  ];

  return (
    <div className="relative w-full h-full bg-white overflow-hidden p-20">
      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content Grid */}
      <div className="relative h-full grid grid-cols-2 gap-16 items-center">
        {/* Left - Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[#02023F] text-5xl leading-tight mb-8">
            Monitoreo continuo y<br />
            <span className="text-[#06B6D4]">alertas inteligentes</span>
          </h2>
          
          <p className="text-[#374151] text-xl mb-10">
            Sistema Kanban con priorización automática
          </p>

          <div className="space-y-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-l-4 hover:shadow-lg transition-all"
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
                      <h4 className="text-[#02023F] text-xl mb-2">{feature.title}</h4>
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
            title="DEMO: Monitoreo Continuo"
            subtitle="Tablero Kanban + Alertas automáticas + SLA tracking"
            accentColor="#06B6D4"
            titleColor="#02023F"
          />
        </div>
      </div>
    </div>
  );
}