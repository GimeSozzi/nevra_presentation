import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide01Portada } from './components/Slide01Portada';
import { Slide02Problema } from './components/Slide02Problema';
import { Slide04PreguntaCritica } from './components/Slide04PreguntaCritica';
import { Slide05Nevra3Pilares } from './components/Slide05Nevra3Pilares';
import { Slide05Arquitectura } from './components/Slide05Arquitectura';
import { Slide07Modules } from './components/Slide07Modules';
import { Slide06DiferencialNevra } from './components/Slide06DiferencialNevra';
import { Slide07TransicionCliente } from './components/Slide07TransicionCliente';
import { Slide08ConceptoOnboarding } from './components/Slide08ConceptoOnboarding';
import { Slide09ExperienciaMobile } from './components/Slide09ExperienciaMobile';
import { Slide08VideoOnboarding } from './components/Slide08VideoOnboarding';
import { Slide10ImpactoMedible } from './components/Slide10ImpactoMedible';
import { Slide11TransicionInterno } from './components/Slide11TransicionInterno';
import { Slide13ConceptoLegajo } from './components/Slide13ConceptoLegajo';
import { Slide12VideoLegajo } from './components/Slide12VideoLegajo';
import { Slide15ConceptoMatrices } from './components/Slide15ConceptoMatrices';
import { Slide13VideoMatricesDDC } from './components/Slide13VideoMatricesDDC';
import { Slide14ImpactoOperativo } from './components/Slide14ImpactoOperativo';
import { Slide17ConceptoMonitoreo } from './components/Slide17ConceptoMonitoreo';
import { Slide16VideoIAAnalista } from './components/Slide16VideoIAAnalista';
import { Slide19ConceptoAgenteIA } from './components/Slide19ConceptoAgenteIA';
import { Slide20VideoAgenteIA } from './components/Slide20VideoAgenteIA';
import { Slide19ConceptoBlockchain } from './components/Slide19ConceptoBlockchain';
import { Slide15VideoBlockchain } from './components/Slide15VideoBlockchain';
import { Slide18XAICritico } from './components/Slide18XAICritico';
import { Slide17VideoXAI } from './components/Slide17VideoXAI';
import { Slide19DiferenciadoresUnicos } from './components/Slide19DiferenciadoresUnicos';
import { Slide29Preguntas } from './components/Slide29Preguntas';
import { Slide16CTA } from './components/Slide16CTA';
import { Slide30MuchasGracias } from './components/Slide30MuchasGracias';

const slides = [
  // ACTO 1: EL PROBLEMA (3 slides)
  Slide01Portada,              // 1. Portada
  Slide02Problema,             // 3. Problemas Operativos
  
  // ACTO 2: LA SOLUCIÓN - NEVRA (5 slides)
  Slide04PreguntaCritica,      // 4. Pregunta Crítica
  Slide05Nevra3Pilares,        // 5. Nevra - 3 Pilares
  Slide05Arquitectura,         // 6. Arquitectura Dual
  Slide07Modules,              // 7. Módulos de la Plataforma
  Slide06DiferencialNevra,     // 8. ¿Por qué Nevra es diferente?
  
  // ACTO 3: PORTAL CLIENTE - ONBOARDING (5 slides)
  Slide07TransicionCliente,    // 9. Transición: Portal Cliente
  Slide08ConceptoOnboarding,   // 10. Concepto: Onboarding Inteligente (IA + Biometría)
  Slide09ExperienciaMobile,    // 11. Experiencia Multiplataforma
  Slide08VideoOnboarding,      // 12. VIDEO: Onboarding
  Slide10ImpactoMedible,       // 13. Impacto Medible (cliente)
  
  // ACTO 4: PORTAL INTERNO - EL PODER REAL (10 slides)
  Slide11TransicionInterno,    // 14. Transición: Portal Interno
  Slide13ConceptoLegajo,       // 15. Concepto: Legajo Digital 360°
  Slide12VideoLegajo,          // 16. VIDEO: Legajo 360°
  Slide15ConceptoMatrices,     // 17. Concepto: Matrices Inteligentes
  Slide13VideoMatricesDDC,     // 18. VIDEO: Matrices + DDC
  Slide14ImpactoOperativo,     // 19. Impacto Operativo (respiro)
  Slide17ConceptoMonitoreo,    // 20. Concepto: Monitoreo Continuo IA
  Slide16VideoIAAnalista,      // 21. VIDEO: Monitoreo Continuo
  Slide19ConceptoAgenteIA,     // 22. Concepto: Agente IA
  Slide20VideoAgenteIA,        // 23. VIDEO: Agente IA
  Slide19ConceptoBlockchain,   // 24. Concepto: Blockchain Inmutable
  Slide15VideoBlockchain,      // 25. VIDEO: Blockchain
  Slide18XAICritico,           // 26. Por Qué XAI es Crítico
  Slide17VideoXAI,             // 27. VIDEO: XAI Explicable
  
  // ACTO 5: CIERRE (5 slides)
  Slide19DiferenciadoresUnicos,// 28. Lo Único de Nevra
  Slide16CTA,                  // 29. CTA Final - El futuro es Nevra
  Slide29Preguntas,            // 30. Preguntas
  Slide30MuchasGracias,        // 31. Muchas Gracias
];

// Dimensiones fijas de la slide (16:9)
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);

  // Establecer título de la página
  useEffect(() => {
    document.title = 'Nevra - Presentación';
  }, []);

  // Calcular escala para ajustar la slide a la ventana
  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / SLIDE_WIDTH;
      const scaleY = window.innerHeight / SLIDE_HEIGHT;
      const newScale = Math.min(scaleX, scaleY);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-[#02023F] overflow-hidden flex items-center justify-center">
      {/* Slide Container with fixed size and scaling */}
      <div 
        className="relative bg-white"
        style={{
          width: `${SLIDE_WIDTH}px`,
          height: `${SLIDE_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}
      >
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        disabled={currentSlide === 0}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed group z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed group z-10"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-[#02023F]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-[#3B82F6]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-[#02023F]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 z-10">
        <span className="text-white/90 text-sm">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}