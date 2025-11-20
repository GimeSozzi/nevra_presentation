import { Grid3x3, Activity, RefreshCw, BarChart } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide12Matrices() {
  return (
    <div className="relative w-full h-full bg-[#F9FAFB] overflow-hidden p-20">
      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="h-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-[#02023F] text-5xl leading-tight">
            Riesgo vivo: <span className="text-[#3B82F6]">matrices dinámicas</span><br />
            y <span className="text-[#06B6D4]">perfil transaccional</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Column - Matrices de Riesgo */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#3B82F6]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#3B82F6]/70 flex items-center justify-center">
                <Grid3x3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#02023F] text-2xl">Matrices de riesgo</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <p className="text-[#4B5563] leading-relaxed">
                  Asignación de riesgo durante el onboarding y re-cálculo automático diario.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <RefreshCw className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <p className="text-[#4B5563] leading-relaxed">
                  Matrices iniciales y dinámicas que evolucionan con el comportamiento del cliente.
                </p>
              </div>
            </div>

            {/* Decorative heatmap illustration */}
            <div className="mt-6 grid grid-cols-4 gap-2">
              {[
                ['#E0F2FE', '#BAE6FD', '#7DD3FC', '#3B82F6'],
                ['#BAE6FD', '#7DD3FC', '#3B82F6', '#2563EB'],
                ['#7DD3FC', '#3B82F6', '#2563EB', '#1E40AF'],
                ['#3B82F6', '#2563EB', '#1E40AF', '#1E3A8A']
              ].flat().map((color, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Perfil Transaccional */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#06B6D4]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#06B6D4]/70 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#02023F] text-2xl">Perfil transaccional</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart className="w-4 h-4 text-[#06B6D4]" />
                </div>
                <p className="text-[#4B5563] leading-relaxed">
                  Perfil documental generado por IA + perfil transaccional dinámico (diario).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity className="w-4 h-4 text-[#06B6D4]" />
                </div>
                <p className="text-[#4B5563] leading-relaxed">
                  Alertas adaptativas basadas en comportamiento, no en reglas estáticas.
                </p>
              </div>
            </div>

            {/* Decorative chart */}
            <div className="mt-6 h-28 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, index) => (
                <div 
                  key={index}
                  className="flex-1 bg-gradient-to-t from-[#06B6D4] to-[#06B6D4]/50 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}