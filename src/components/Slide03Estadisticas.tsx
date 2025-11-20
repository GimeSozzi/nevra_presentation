import { TrendingUp, AlertCircle, DollarSign, ChevronRight } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide03Estadisticas() {
  const kpis = [
    {
      icon: TrendingUp,
      numero: '+40%',
      label: 'Tiempo en tareas manuales',
      detalle: 'del tiempo del equipo se va en KYC/KYB manual repetitivo',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: AlertCircle,
      numero: '80%',
      label: 'Falsos positivos en alertas',
      detalle: 'de las alertas AML son falsas y consumen horas de revisión',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: DollarSign,
      numero: '$X millones',
      label: 'Costo de incumplimiento',
      detalle: 'entre multas regulatorias y procesos de remediación',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
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
            El costo del cumplimiento <span className="text-[#3B82F6]">ineficiente</span>
          </h2>
          <p className="text-[#374151] text-2xl">
            Datos que reflejan la realidad operativa del sector financiero
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative bg-white rounded-3xl p-10 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full"
                  style={{ borderColor: kpi.color }}
                >
                  {/* Header with Icon and Metric */}
                  <div className="flex flex-col items-center mb-8 relative z-10">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div 
                        className={`relative w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${kpi.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Metric */}
                    <div className="text-center">
                      <div 
                        className="text-7xl leading-none mb-4 bg-gradient-to-br bg-clip-text text-transparent"
                        style={{ 
                          backgroundImage: `linear-gradient(135deg, ${kpi.color} 0%, ${kpi.color}cc 100%)`
                        }}
                      >
                        {kpi.numero}
                      </div>
                      <div className="h-1 w-20 mx-auto rounded-full"
                        style={{ backgroundColor: kpi.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-[#02023F] text-2xl mb-4 leading-tight text-center">
                      {kpi.label}
                    </h3>
                    <div className="flex items-start gap-2">
                      <ChevronRight 
                        className="w-5 h-5 mt-1 flex-shrink-0" 
                        style={{ color: kpi.color }}
                      />
                      <p className="text-[#374151] text-lg leading-relaxed">
                        {kpi.detalle}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ 
                      background: `linear-gradient(90deg, ${kpi.color} 0%, ${kpi.color}60 50%, ${kpi.color} 100%)`
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
              Datos basados en <span className="text-[#3B82F6]">benchmarks internacionales</span> de AML y estudios de consultoras globales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}