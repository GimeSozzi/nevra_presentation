# Nevra - Presentación Interactiva

Presentación interactiva moderna desarrollada con React, TypeScript y Vite que muestra la solución Nevra, una plataforma innovadora que integra Blockchain, IA y monitoreo en tiempo real.

## 🎯 Características

- **16 slides profesionales** con transiciones suaves
- **Navegación intuitiva**: teclado, botones y indicadores de progreso
- **Diseño responsive** con escalado automático (16:9)
- **Componentes modernos** con Radix UI y Tailwind CSS
- **Rendimiento optimizado** con Vite y React SWC

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar al directorio
cd nevra_presentacion

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📋 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run preview` | Previsualiza la build de producción |

## 🎮 Controles de Navegación

- **Flecha Derecha / Espacio**: Siguiente slide
- **Flecha Izquierda**: Slide anterior
- **Clic en indicadores**: Ir a slide específica
- **Botones laterales**: Navegación visual

## 📂 Estructura del Proyecto

```
nevra_presentacion/
├── src/
│   ├── components/
│   │   ├── Slide01Portada.tsx      # Slide de portada
│   │   ├── Slide02Problema.tsx     # Presentación del problema
│   │   ├── Slide03Estadisticas.tsx # Datos y estadísticas
│   │   ├── Slide04Solucion.tsx     # Propuesta de solución
│   │   ├── Slide05Arquitectura.tsx # Arquitectura del sistema
│   │   ├── Slide10Matrices.tsx     # Análisis de matrices
│   │   ├── Slide11Blockchain.tsx   # Integración Blockchain
│   │   ├── Slide12Monitoreo.tsx    # Sistema de monitoreo
│   │   ├── Slide13IA.tsx           # Inteligencia Artificial
│   │   ├── Slide14Beneficios.tsx   # Beneficios clave
│   │   ├── Slide16CTA.tsx          # Call to Action
│   │   └── ui/                     # Componentes UI reutilizables
│   ├── App.tsx                     # Componente principal
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Estilos globales
├── index.html
├── vite.config.ts
└── package.json
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Vite 6** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes accesibles sin estilos
- **Lucide React** - Íconos modernos
- **React SWC** - Compilador optimizado

## 📦 Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `dist/`

## 🔧 Personalización

Para modificar el contenido de las slides, edita los componentes correspondientes en `src/components/`. Cada slide es un componente React independiente que puedes personalizar según tus necesidades.

## 📄 Licencia

Este proyecto es privado y de uso interno.

---

Desarrollado con ❤️ para Nevra