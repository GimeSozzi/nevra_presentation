interface VideoFrameProps {
  title: string;
  subtitle: string;
  accentColor?: string;
  titleColor?: string;
}

export function VideoFrame({ 
  title, 
  subtitle, 
  accentColor = '#3B82F6',
  titleColor = 'rgba(255, 255, 255, 0.6)'
}: VideoFrameProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <p 
          className="text-lg uppercase tracking-wider mb-2"
          style={{ color: titleColor }}
        >
          {title}
        </p>
        <div 
          className="h-1 w-24 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Video Frame - Tamaño fijo y centrado */}
      <div className="flex-1 flex items-center justify-center">
        <div 
          className="relative w-full h-full max-h-[600px] rounded-2xl overflow-hidden"
          style={{
            border: `3px solid ${accentColor}`,
            boxShadow: `0 20px 60px ${accentColor}40`
          }}
        >
          {/* Video placeholder con gradiente */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A] to-[#02023F]"
          >
            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, ${accentColor} 1px, transparent 1px),
                  linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Subtitle label */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#02023F] to-transparent">
            <p className="text-white text-2xl">
              {subtitle}
            </p>
          </div>

          {/* Play indicator (opcional) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
              style={{ 
                backgroundColor: `${accentColor}30`,
                border: `2px solid ${accentColor}`
              }}
            >
              <svg 
                className="w-10 h-10 ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: accentColor }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}