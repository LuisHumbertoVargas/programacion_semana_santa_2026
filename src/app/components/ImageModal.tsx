import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Video, MapPin, Users, Heart, Download } from 'lucide-react';
import { useEffect } from 'react';
import programacionPDF from '../../assets/document/Programación_Semana_Santa_2026.pdf';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  evento: {
    id: number;
    dia: string;
    fecha: string;
    descripcion: string;
    horarios: { hora: string; actividades: string[]; }[];
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

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = programacionPDF;
    link.download = 'Programación_Semana_Santa_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Enhanced event information
  const eventDetails = {
    1: { // Domingo de Ramos
      tipo: "Misa solemne con procesión",
      duracion: "2 horas aproximadamente",
      recomendacion: "Preparar el corazón con oración personal y unir nuestras voces desde casa",
      especial: "Procesión con palmas y ramos recordando la entrada triunfal de Jesús en Jerusalén"
    },
    2: { // Martes Santo
      tipo: "Misa vespertina",
      duracion: "1 hora aproximadamente",
      recomendacion: "Crear un ambiente de silencio y paz para meditar en los misterios de la fe",
      especial: "Reflexión sobre los misterios del Reino y el anuncio de la Pasión"
    },
    3: { // Miércoles Santo
      tipo: "Misa de unción",
      duracion: "1 hora aproximadamente",
      recomendacion: "Aprovechar la gracia del Sacramento de la Reconciliación para purificar el alma",
      especial: "Conmemoración de la unción de Jesús en Betania y la traición de Judas"
    },
    4: { // Jueves Santo
      tipo: "Misa de la Cena del Señor",
      duracion: "2.5 horas aproximadamente",
      recomendacion: "Preparar el corazón para vivir el gesto humilde del servicio y la adoración",
      especial: "Institución de la Eucaristía y lavatorio de pies como gesto de servicio humilde"
    },
    5: { // Viernes Santo
      tipo: "Celebración de la Pasión",
      duracion: "3 horas aproximadamente",
      recomendacion: "Vivir este día con espíritu de penitencia y oración silenciosa",
      especial: "Vía Crucis y adoración de la Cruz recordando el sacrificio redentor de Cristo"
    },
    6: { // Sábado Santo
      tipo: "Vigilia Pascual",
      duracion: "2.5 horas aproximadamente",
      recomendacion: "Preparar el corazón para recibir la luz de Cristo resucitado",
      especial: "Bendición del fuego nuevo y celebración de la luz de Cristo resucitado"
    },
    7: { // Domingo de Resurrección
      tipo: "Misa de Pascua de Resurrección",
      duracion: "2 horas aproximadamente",
      recomendacion: "Unirse a la alegría de la resurrección con fe renovada y esperanza viva",
      especial: "Celebración gloriosa de la victoria de Cristo sobre la muerte y el pecado"
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
          className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 lg:items-center bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-[900px] max-w-[90vw] mx-4 max-h-[85vh] sm:max-h-[90vh] overflow-hidden bg-gradient-to-b from-[#f0ebe0] via-[#e8dcc0] to-[#dfd4b8] rounded-2xl shadow-2xl border border-[#47575a]/30 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 bg-[#47575a]/60 hover:bg-[#47575a]/80 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col lg:flex-row flex-1 min-h-0">
              {/* Image Section */}
              <div className="w-full lg:w-3/5 h-64 sm:h-80 lg:h-[500px] relative flex-shrink-0">
                {/* Exact same overlays as EventCard */}
                <div className="absolute inset-0 bg-gradient-to-br to-black/5 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#47575a]/20 to-transparent z-20" />
                
                <img
                  src={evento.imagen}
                  alt={evento.dia}
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: '50% 20%',
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
                      className="text-3xl sm:text-3xl lg:text-5xl text-purple-50/98 mb-2 sm:mb-2 lg:mb-2 tracking-wide"
                      style={{ 
                        fontFamily: 'Cormorant Garamond, serif',
                        fontWeight: 300,
                        textShadow: '0 0 20px rgba(139, 92, 246, 0.7), 0 0 40px rgba(139, 92, 246, 0.4)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {evento.dia}
                    </h2>
                    <div className="flex items-center gap-4 sm:gap-3 lg:gap-3 text-purple-200/90">
                      <Calendar className="w-6 h-6 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
                      <p className="tracking-[0.2em] uppercase text-base sm:text-sm lg:text-sm font-light" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                        {evento.fecha}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="w-full lg:w-2/5 p-8 sm:p-6 lg:p-8 flex flex-col bg-gradient-to-b from-[#e8dcc0]/50 to-[#dfd4b8]/80 overflow-y-auto">
                {/* Key Information */}
                <div className="space-y-6 sm:space-y-4 lg:space-y-4 mb-8 sm:mb-6 lg:mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 sm:gap-3 lg:gap-3 text-[#47575a]"
                  >
                    <svg className="w-6 h-6 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#4a5538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1 lg:flex-none">
                      <p className="text-base sm:text-xs lg:text-xs uppercase tracking-wider opacity-70">Duración estimada</p>
                      <p className="text-base sm:text-sm lg:text-sm font-medium">{details.duracion}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-r from-[#c3aa85]/40 to-[#e8dcc0]/50 border-l-4 border-[#4a5538] rounded-lg p-6 sm:p-4 lg:p-4"
                  >
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#4a5538] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-base sm:text-xs lg:text-xs uppercase tracking-wider opacity-90 mb-2 text-[#47575a]/80">Recomendaciones</p>
                        <p className="text-base sm:text-sm lg:text-sm leading-relaxed text-[#47575a]/95">{details.recomendacion}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Compact Schedule */}
                <div className="border-t border-[#4a5f63]/30 pt-6 sm:pt-4 lg:pt-4 mb-8 sm:mb-6 lg:mb-6">
                  <h3 
                    className="text-[#47575a] text-base sm:text-sm lg:text-sm tracking-[0.25em] mb-4 sm:mb-3 lg:mb-3 uppercase font-medium flex items-center gap-4" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    <Clock className="w-6 h-6 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                    <span className="text-base sm:text-sm lg:text-sm">Horarios principales</span>
                  </h3>
                  <div className="space-y-6 sm:space-y-4 lg:space-y-4 max-h-56 sm:max-h-48 lg:max-h-48 overflow-y-auto pr-2">
                    {evento.horarios.map((horario, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + idx * 0.1 }}
                        className="space-y-4"
                      >
                        <div className="text-[#47575a] font-semibold text-lg sm:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                          {horario.hora}
                        </div>
                        <div className="space-y-3 ml-6">
                          {horario.actividades.map((actividad, actIdx) => (
                            <motion.div
                              key={actIdx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.0 + idx * 0.1 + actIdx * 0.05 }}
                              className="flex items-start gap-4 text-[#4a5f63]"
                            >
                              <div className="text-[#4a5538] text-lg mt-0.5">✓</div>
                              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.1rem' }} className="leading-relaxed text-base sm:text-[0.8rem] lg:text-[0.8rem]">
                                {actividad}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live Stream Button - Mobile optimized */}
                <div className="pt-6 sm:pt-4 lg:pt-4 border-t border-[#4a5f63]/30 mt-auto">
                  <div className="space-y-4">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => alert('Transmisión en vivo próximamente disponible')}
                      className="w-full bg-[#4a5f63] hover:bg-[#5a6f73] text-white py-4 sm:py-3 lg:py-3 px-6 sm:px-6 lg:px-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 text-lg sm:text-base lg:text-base"
                    >
                      <Video className="w-6 h-6 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
                      <span className="font-medium text-base sm:text-sm lg:text-sm">Transmisión en vivo</span>
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={downloadPDF}
                      className="w-full bg-[#4a5f63] hover:bg-[#5a6f73] text-white py-4 sm:py-3 lg:py-3 px-6 sm:px-6 lg:px-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 text-lg sm:text-base lg:text-base"
                    >
                      <Download className="w-6 h-6 sm:w-5 sm:h-5 lg:w-5 lg:h-5" />
                      <span className="font-medium text-base sm:text-sm lg:text-sm">Descargar programa</span>
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
