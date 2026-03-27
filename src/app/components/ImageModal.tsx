import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Video, MapPin, Users, Heart, Download } from 'lucide-react';
import { generateProgramacionPDF } from './ProgramacionPDF';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  evento: {
    id: number;
    dia: string;
    fecha: string;
    descripcion: string;
    horarios: string[];
    imagen: string;
    icono: any;
    destacado?: boolean;
  };
}

export function ImageModal({ isOpen, onClose, evento }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  // Enhanced event information
  const eventDetails = {
    1: { // Domingo de Ramos
      tipo: "Celebración Solemne",
      duracion: "2 horas aproximadamente",
      recomendacion: "Llegar 15 minutos antes para buen asiento",
      especial: "Se repartirán ramos benditos al finalizar la misa"
    },
    2: { // Martes Santo
      tipo: "Celebración Litúrgica",
      duracion: "1 hora aproximadamente",
      recomendacion: "Traer rosario para oración comunitaria",
      especial: "Día de ayuno y oración personal"
    },
    3: { // Miércoles Santo
      tipo: "Misa Vespertina",
      duracion: "1 hora aproximadamente",
      recomendacion: "Confesión disponible durante todo el día",
      especial: "Preparación espiritual para el Triduo Pascual"
    },
    4: { // Jueves Santo
      tipo: "Misa de la Cena del Señor",
      duracion: "2.5 horas aproximadamente",
      recomendacion: "Traer velas para la procesión",
      especial: "Ceremonia solemne con lavatorio de pies"
    },
    5: { // Viernes Santo
      tipo: "Celebración de la Pasión",
      duracion: "3 horas aproximadamente",
      recomendacion: "Vestir con sobriedad y respeto",
      especial: "Día de ayuno y abstinencia"
    },
    6: { // Sábado Santo
      tipo: "Vigilia Pascual",
      duracion: "2.5 horas aproximadamente",
      recomendacion: "Traer agua para bendición familiar",
      especial: "Vigilia pascual de renovación bautismal"
    },
    7: { // Domingo de Resurrección
      tipo: "Misa de Pascua de Resurrección",
      duracion: "2 horas aproximadamente",
      recomendacion: "Llegar temprano, se esperan multitudes",
      especial: "Fiesta principal del año litúrgico"
    }
  };

  const details = eventDetails[evento.id as keyof typeof eventDetails] || eventDetails[1];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-[900px] max-w-[90vw] mx-4 max-h-[90vh] overflow-hidden bg-gradient-to-b from-[#120820] via-[#1a0f30] to-[#120820] rounded-2xl shadow-2xl border border-purple-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 bg-black/60 hover:bg-black/80 text-purple-300 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="w-full lg:w-3/5 h-64 sm:h-80 lg:h-[500px] relative">
                {/* Exact same overlays as EventCard */}
                <div className="absolute inset-0 bg-gradient-to-br to-black/5 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-900/20 to-transparent z-20" />
                
                <img
                  src={evento.imagen}
                  alt={evento.dia}
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: '50% 55%',
                    filter: 'contrast(1.1) saturate(1.2)'
                  }}
                />
                
                {/* Mobile optimized title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-black/30 lg:bg-black/30 backdrop-blur-md rounded-xl p-3 sm:p-4 lg:p-4 border border-purple-500/20"
                  >
                    <h2 
                      className="text-2xl sm:text-3xl lg:text-5xl text-purple-50/98 mb-1 sm:mb-2 lg:mb-2 tracking-wide"
                      style={{ 
                        fontFamily: 'Cormorant Garamond, serif',
                        fontWeight: 300,
                        textShadow: '0 0 20px rgba(139, 92, 246, 0.7), 0 0 40px rgba(139, 92, 246, 0.4)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {evento.dia}
                    </h2>
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-3 text-purple-200/90">
                      <Calendar className="w-3 h-3 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
                      <p className="tracking-[0.2em] uppercase text-xs sm:text-sm lg:text-sm font-light" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                        {evento.fecha}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-gradient-to-b from-[#1a0f30]/50 to-[#120820]/80">
                {/* Key Information */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-4 mb-4 sm:mb-6 lg:mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 sm:gap-3 lg:gap-3 text-purple-200/90"
                  >
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-purple-400" />
                    <div className="flex-1 lg:flex-none">
                      <p className="text-[10px] sm:text-xs lg:text-xs uppercase tracking-wider opacity-70">Tipo de celebración</p>
                      <p className="text-xs sm:text-sm lg:text-sm font-medium">{details.tipo}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-2 sm:gap-3 lg:gap-3 text-purple-200/90"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1 lg:flex-none">
                      <p className="text-[10px] sm:text-xs lg:text-xs uppercase tracking-wider opacity-70">Duración estimada</p>
                      <p className="text-xs sm:text-sm lg:text-sm font-medium">{details.duracion}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3 sm:p-4 lg:p-4"
                  >
                    <div className="flex items-start gap-2">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-[10px] sm:text-xs lg:text-xs uppercase tracking-wider opacity-90 mb-1 text-purple-200/80">Nota especial</p>
                        <p className="text-xs sm:text-sm lg:text-sm leading-relaxed text-purple-100/95">{details.especial}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-l-4 border-purple-500 rounded-lg p-3 sm:p-4 lg:p-4"
                  >
                    <div className="flex items-start gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-[10px] sm:text-xs lg:text-xs uppercase tracking-wider opacity-90 mb-2 text-purple-200/80">Recomendaciones</p>
                        <p className="text-xs sm:text-sm lg:text-sm leading-relaxed text-purple-100/95">{details.recomendacion}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Compact Schedule */}
                <div className="border-t border-purple-500/20 pt-3 sm:pt-4 lg:pt-4 mb-4 sm:mb-6 lg:mb-6">
                  <h3 
                    className="text-purple-200/90 text-xs sm:text-sm lg:text-sm tracking-[0.25em] mb-2 sm:mb-3 lg:mb-3 uppercase font-medium flex items-center gap-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                    <span className="text-xs sm:text-sm lg:text-sm">Horarios principales</span>
                  </h3>
                  <div className="space-y-1 sm:space-y-2 lg:space-y-2 max-h-32 sm:max-h-40 lg:max-h-40 overflow-y-auto pr-2">
                    {evento.horarios.map((horario, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + idx * 0.1 }}
                        className="flex items-start gap-2 text-purple-100/70"
                      >
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-1.5 lg:h-1.5 bg-purple-400/70 rounded-full mt-1.5 sm:mt-2 lg:mt-2 flex-shrink-0" />
                        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.75rem' }} className="leading-relaxed text-xs sm:text-[0.85rem] lg:text-[0.85rem]">
                          {horario}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live Stream Button - Mobile optimized */}
                <div className="mt-auto pt-3 sm:pt-4 lg:pt-4 border-t border-purple-500/20">
                  <div className="space-y-3">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => alert('Transmisión en vivo próximamente disponible')}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-2 sm:py-3 lg:py-3 px-4 sm:px-6 lg:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 lg:gap-3 shadow-lg shadow-purple-500/30 text-sm sm:text-base lg:text-base"
                    >
                      <Video className="w-3 h-3 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
                      <span className="font-medium text-xs sm:text-sm lg:text-sm">Transmisión en vivo</span>
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={generateProgramacionPDF}
                      className="w-full bg-gradient-to-r from-purple-800/80 to-purple-700/80 hover:from-purple-700/80 hover:to-purple-600/80 text-white py-2 sm:py-3 lg:py-3 px-4 sm:px-6 lg:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 lg:gap-3 shadow-lg shadow-purple-600/30 border border-purple-500/30 text-sm sm:text-base lg:text-base"
                    >
                      <Download className="w-3 h-3 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
                      <span className="font-medium text-xs sm:text-sm lg:text-sm">Descargar programa completo</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
