import { Cloud, Lock, Plug, RefreshCw, CheckCircle2 } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide15Arquitectura() {
  const pilares = [
    {
      icon: Cloud,
      title: 'Despliegue flexible',
      items: [
        'Infraestructura Cloud',
        'Cumplimiento con políticas de seguridad corporativa',
        'Escalabilidad según volumen de clientes'
      ],
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Plug,
      title: 'Integración sin fricción',
      items: [
        'APIs REST para conectar con core bancario',
        'Webhooks para sincronización de datos',
        'Compatibilidad con sistemas legados'
      ],
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Lock,
      title: 'Seguridad enterprise',
      items: [
        'Encriptación end-to-end de datos sensibles',
        'Controles de acceso granulares (RBAC)',
        'Cumplimiento GDPR, BCRA y regulaciones locales'
      ],
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: RefreshCw,
      title: 'Implementación gradual',
      items: [
        'Piloto en segmento específico (60-90 días)',
        'Rollout progresivo por unidades de negocio',
        'Migración asistida de datos históricos'
      ],
      color: '#10B981',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden p-20"
      style={{
        background: 'linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 25%, #ECFEFF 50%, #FFFFFF 75%, #F5F3FF 100%)'
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-10 right-20 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-10 left-20 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-14 relative">
          <h2 className="text-[#02023F] text-6xl leading-tight mb-4">
            Implementación <span className="text-[#3B82F6]">segura</span> e <span className="text-[#06B6D4]">integrable</span>
          </h2>
          <p className="text-[#374151] text-2xl">
            Diseñada para el ecosistema bancario
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative bg-white rounded-3xl p-8 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden"
                  style={{ borderColor: pilar.color }}
                >
                  {/* Header with icon and title */}
                  <div className="flex items-center gap-5 mb-8 pb-6 border-b-2 relative z-10"
                    style={{ borderColor: `${pilar.color}20` }}
                  >
                    {/* Icon */}
                    <div className="relative">
                      <div 
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${pilar.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-2xl flex-1"
                      style={{ color: pilar.color }}
                    >
                      {pilar.title}
                    </h3>

                    {/* Badge indicator */}
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${pilar.color}15` }}
                    >
                      <CheckCircle2 
                        className="w-5 h-5" 
                        style={{ color: pilar.color }}
                      />
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="space-y-5 relative z-10">
                    {pilar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        {/* Bullet */}
                        <div 
                          className="w-2.5 h-2.5 rounded-full mt-1.5 group-hover/item:scale-150 transition-transform"
                          style={{ backgroundColor: pilar.color }}
                        />
                        
                        <span className="text-[#374151] text-lg leading-relaxed flex-1">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom gradient accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ 
                      background: `linear-gradient(90deg, ${pilar.color} 0%, ${pilar.color}60 50%, ${pilar.color} 100%)`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 relative z-10">
          <div className="inline-block bg-white/90 backdrop-blur-lg rounded-2xl px-10 py-5 border-2 border-[#3B82F6]/30 shadow-xl">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <p className="text-[#374151] text-lg">
                <span className="text-[#3B82F6]">Soporte técnico local</span> durante todo el proceso de implementación y operación
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}