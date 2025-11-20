import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide01Portada } from './components/Slide01Portada';
import { Slide02Problema } from './components/Slide02Problema';
import { Slide03Estadisticas } from './components/Slide03Estadisticas';
import { Slide04Solucion } from './components/Slide04Solucion';
import { Slide05Arquitectura } from './components/Slide05Arquitectura';
import { Slide06Transicion2 } from './components/Slide06Transicion2';
import { Slide07Wow1 } from './components/Slide07Wow1';
import { Slide08Transicion3 } from './components/Slide08Transicion3';
import { Slide09Wow4 } from './components/Slide09Wow4';
import { Slide10Matrices } from './components/Slide10Matrices';
import { Slide11Blockchain } from './components/Slide11Blockchain';
import { Slide12Monitoreo } from './components/Slide12Monitoreo';
import { Slide13IA } from './components/Slide13IA';
import { Slide14Beneficios } from './components/Slide14Beneficios';
import { Slide15Arquitectura } from './components/Slide15Arquitectura';
import { Slide16CTA } from './components/Slide16CTA';

const slides = [
  Slide01Portada,
  Slide02Problema,
  Slide03Estadisticas,
  Slide04Solucion,
  Slide05Arquitectura,
  Slide06Transicion2,
  Slide07Wow1,
  Slide08Transicion3,
  Slide09Wow4,
  Slide10Matrices,
  Slide11Blockchain,
  Slide12Monitoreo,
  Slide13IA,
  Slide14Beneficios,
  Slide15Arquitectura,
  Slide16CTA,
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