import { TrendingDown, Shield, Clock, Scale, ChevronRight } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide14Beneficios() {
  const impactos = [
    {
      icon: Clock,
      metrica: '80%',
      label: 'Reducción en tiempo de onboarding',
      detalle: 'De semanas a horas en casos estándar',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingDown,
      metrica: '65%',
      label: 'Reducción de falsos positivos',
      detalle: 'Mayor precisión en detección de riesgos reales',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      metrica: '100%',
      label: 'Trazabilidad de decisiones',
      detalle: 'Auditoría completa ante reguladores',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Scale,
      metrica: '< 12 meses',
      label: 'Retorno de inversión',
      detalle: 'Ahorro operativo + mitigación de multas',
      color: '#10B981',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden p-20"
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 25%, #F1F5F9 50%, #FFFFFF 75%, #F8FAFC 100%)'
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-16 text-center relative">
          <h2 className="text-[#02023F] text-6xl leading-tight mb-6">
            Impacto medible en<br />
            <span className="text-[#3B82F6]">eficiencia</span> y <span className="text-[#06B6D4]">cumplimiento</span>
          </h2>
          <p className="text-[#374151] text-2xl">
            Métricas validadas en instituciones financieras de Latinoamérica
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {impactos.map((impacto, index) => {
            const Icon = impacto.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative bg-white rounded-3xl p-6 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full"
                  style={{ borderColor: impacto.color }}
                >
                  {/* Header with Icon and Metric */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    {/* Icon */}
                    <div className="relative">
                      <div 
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${impacto.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Metric */}
                    <div className="text-right">
                      <div 
                        className="text-6xl leading-none mb-2 bg-gradient-to-br bg-clip-text text-transparent"
                        style={{ 
                          backgroundImage: `linear-gradient(135deg, ${impacto.color} 0%, ${impacto.color}cc 100%)`
                        }}
                      >
                        {impacto.metrica}
                      </div>
                      <div className="h-1 w-16 ml-auto rounded-full"
                        style={{ backgroundColor: impacto.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-[#02023F] text-xl mb-3 leading-tight">
                      {impacto.label}
                    </h3>
                    <div className="flex items-start gap-2">
                      <ChevronRight 
                        className="w-5 h-5 mt-0.5 flex-shrink-0" 
                        style={{ color: impacto.color }}
                      />
                      <p className="text-[#374151] leading-relaxed">
                        {impacto.detalle}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent with gradient */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl"
                    style={{ 
                      background: `linear-gradient(90deg, ${impacto.color} 0%, ${impacto.color}80 50%, ${impacto.color} 100%)`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-10 py-4 border border-[#E5E7EB] shadow-lg">
            <p className="text-[#374151] text-lg">
              Datos basados en <span className="text-[#3B82F6]">implementaciones reales</span> en el sector financiero
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}