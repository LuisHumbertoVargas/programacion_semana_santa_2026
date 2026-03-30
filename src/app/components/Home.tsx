import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';

import semanaSantaImage from '../../assets/images/calvario.jpg';

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let startY = 0;
    let isScrolling = false;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      isScrolling = true;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isScrolling) return;
      
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;
      
      // Si el swipe es hacia abajo (diff < 0) y es significativo
      if (diff < -50) {
        navigate('/programacion');
      }
      
      isScrolling = false;
    };

    // Solo en dispositivos móviles
    if (window.innerWidth <= 768) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
      
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [navigate]);

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-[#e8dcc0]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 h-full min-h-[100dvh]">
        <img
          src={semanaSantaImage}
          alt="Semana Santa"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: '50% 65%',
            height: '100dvh'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#4a5538]/15 to-black/15 sm:from-black/40 sm:via-[#4a5538]/20 sm:to-black/30 md:from-black/40 md:via-[#4a5538]/20 md:to-black/30 lg:from-black/50 lg:via-[#4a5538]/20 lg:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a5f63]/10 via-transparent to-[#4a5f63]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Decorative Top Border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#4a5538] to-transparent mx-auto mb-12"
          />

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pl-2 text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] mb-6 text-white uppercase"
            style={{ 
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textShadow: '0 0 40px rgba(74, 85, 56, 0.6), 0 4px 20px rgba(0,0,0,0.9)'
            }}
          >
            Semana Santa
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[1.6rem] md:text-2.5xl lg:text-3xl text-[#ffffff]/95 mb-8 tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            2026
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-55 leading-relaxed font-medium"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 500,
              textShadow: '0 0 40px rgba(74, 85, 56, 0.6), 0 4px 20px rgba(0,0,0,0.9)'
            }}
          >
            Siete días de fe, tradición y recogimiento.
            <br />
            Un viaje espiritual que conmemora la Pasión, Muerte y Resurrección de Nuestro Señor Jesucristo.
          </motion.p>

          {/* Decorative Center Border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="w-20 h-[1px] bg-[#4a5538]/50 mx-auto mb-10 lg:mb-0 xl:mb-0"
          />

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-2 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(74, 85, 56, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/programacion')}
              className="px-12 py-4 lg:px-14 lg:py-5 border border-[#4a5538]/50 rounded-md bg-[#4a5f63]/40 backdrop-blur-md text-white hover:bg-[#4a5f63]/50 hover:border-[#4a5538]/60 transition-all duration-500 tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}
            >
              Ver Programación
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            onClick={() => navigate('/programacion')}
          >
            <ChevronDown className="w-8 h-8 text-[#4a5538]/60" />
          </motion.div>
        </motion.div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-[#4a5538]/30" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r border-t border-[#4a5538]/30" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-[#4a5538]/30" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-[#4a5538]/30" />
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient opacity-60" 
        style={{ 
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)' 
        }} 
      />
    </div>
  );
}