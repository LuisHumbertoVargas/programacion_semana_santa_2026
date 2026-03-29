import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Video, MapPin, Users, Heart, Download } from 'lucide-react';
import React from 'react';
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
  const eventDetails: { [key: number]: { explicacion: string; recomendacion: string; duracion: string; } } = {
    1: {
      explicacion: 'El Segundo Domingo de Pasión es un grande y santo día, conmemora el último triunfo de Nuestro Señor Jesucristo sobre esta tierra y abre la Semana Santa. En este día, la Iglesia celebra la entrada triunfal de Nuestro Señor en Jerusalén; cuando la multitud, marchando antes y detrás de Él, cortaba palmas de los árboles y las arrojaban ante su paso, gritando: "Hosanna (gloria y honor) al Hijo de David. Bendito es El que viene en nombre del Señor". Y es en conmemoración de aquella entrada triunfal que las palmas se bendicen e inciensan en la solemne procesión. Las principales ceremonias de este día son la Bendición de los Ramos que le sigue un ritual similar al de la Misa con una Epístola, un Evangelio, un Prefacio y un Sanctus. Continúa con la Procesión y la Misa con la lectura de la Pasión.',
      recomendacion: 'Participe con devoción en la Bendición de Ramos llevando su palma o ramos bendecidos. Medite en el significado de la entrada triunfal de Jesús y su humildad al entrar en Jerusalén montado en un asno. Prepare su corazón para vivir intensamente la Semana Santa.',
      duracion: '2 horas'
    },
    2: {
      explicacion: 'Es un día de introspección y preparación para el camino al Calvario, la liturgia en este día se centra en la figura de Jesús como Siervo Sufriente. El evangelio de San Juan nos muestra el gesto de María en Betania, que es uno de los momentos más cargados de simbolismo y emoción de toda la Semana Santa. No es solo un acto de cariño; es un profético anuncio de la muerte y una lección sobre la generosidad sin límites.',
      recomendacion: 'Dedique tiempo a la oración personal y meditación. Contemple el gesto de María ungiendo los pies de Jesús como acto de amor y entrega. Participe en la confesión sacramental para purificar su alma.',
      duracion: '1 hora 30 minutos'
    },
    3: {
      explicacion: 'Es un día de silencio preventivo, preparándonos para el Triduo Pascual. Se nos presenta el Evangelio según San Marcos que nos lleva a vivir la pasión de Nuestro Señor Jesucristo de una manera muy "cruda". Marcos escribió el relato más antiguo y breve, y su objetivo es mostrar a un Jesús que sufre profundamente, abandonado por todos, para que los fieles nos preguntemos: "¿Realmente este hombre era el Hijo de Dios?".',
      recomendacion: 'Guarde silencio y reflexión. Medite en el sufrimiento de Jesús y su abandono. Participe en los actos litúrgicos con devoción y prepare su corazón para el Triduo Pascual.',
      duracion: '1 hora 45 minutos'
    },
    4: {
      explicacion: 'Es el último día de la Cuaresma y la víspera del Triduo Pascual. Meditamos el Evangelio según San Lucas en el que notamos que él es el "Evangelista de la Misericordia". Su relato no solo se enfoca en el dolor, sino en el perdón, la sanación y la dignidad de Jesús como Salvador.',
      recomendacion: 'Aproveche este último día de Cuaresma para intensificar su vida espiritual. Medite en la misericordia de Jesús y su amor por los pecadores. Participe en la confesión sacramental.',
      duracion: '1 hora 45 minutos'
    },
    5: {
      explicacion: 'La Misa de este día conmemora especialmente la Institución de la Sagrada Eucaristía en la Última Cena, y la Ordenación de los Apóstoles, y es, por lo tanto, una Misa de alegría y de acción de gracias. Por ende, la Iglesia hace de lado momentáneamente el penitencial color violeta, y se reviste con ornamentos blancos; el altar está decorado; se dice el Gloria. Durante este Gloria las campanas suenan, y desde ese momento hasta la Vigilia de Pascua permanecerán silenciosas.',
      recomendacion: 'Viva con especial devoción la Institución de la Eucaristía. Participe en el lavatorio de pies si es posible. Adore a Jesús en el Monumento durante la noche.',
      duracion: '6 horas'
    },
    6: {
      explicacion: 'Es la representación de la Sagrada Pasión del Señor que consta de cuatro grandes divisiones: I,II. Las primeras dos partes consisten en lecturas de las Escrituras y una oración, seguidas por la Pasión Según San Juan. En esta parte se preserva la forma de las primitivas reuniones de los Cristianos. III. La tercera parte consiste en el desvelamiento y adoración de la Cruz. Una Cruz velada se deja ver gradualmente, y por tres veces las palabras Venite adorémus llaman a los fieles a adorar de rodillas la Cruz. IV. La cuarta parte, la Comunión del Sacerdote y de los fieles. La liturgia muestra que no es una Misa, todos comulgan con hostias consagradas el día anterior.',
      recomendacion: 'Guarde silencio y ayuno como signo de duelo. Participe con devoción en la adoración de la Cruz. Medite en el sufrimiento de Jesús por nuestra salvación.',
      duracion: '2 horas 30 minutos'
    },
    7: {
      explicacion: 'La Función Solemne de la Vigilia Pascual, tiene la intención de mostrar litúrgicamente cómo la vida y la gracia fluyen hacia nosotros a partir de la muerte de Nuestro Señor: la Luz del Mundo es exhibida bajo el símbolo del Cirio Pascual, que disipa la noche del pecado con la luz de la gracia. Las aguas del bautismo son bendecidas. La gracias que Él nos ha ganado, y en el Bautismo nos concedió, y la renovación de nuestras promesas bautismales anuncian públicamente nuestro propósito de plasmar en lo futuro estas nuevas en nuestra vida diaria; y, finalmente, se llama a la Iglesia Triunfante a interceder por nosotros.',
      recomendacion: 'Viva con alegría y esperanza la Vigilia Pascual. Participe en la bendición del fuego y del agua. Renueve sus promesas bautismales con sinceridad.',
      duracion: '4 horas'
    },
    8: {
      explicacion: 'Día de Pascua de Resurrección o de Pascua Florida, es "el día que hizo el Señor", gocémonos y alegrémonos en él. La Iglesia da gracias a Dios porque con la victoria de su Hijo nos volvió a abrir el camino del cielo, rogándole secunde nuestros esfuerzos, para que podamos alcanzar el supremo bien que anhelamos. Regocijémonos todos en el Señor, sobre todo porque su triunfo y su Resurrección son también triunfo y resurrección nuestra, lo mismo que todos los misterios de su vida y de su muerte santísimas, en virtud del dogma consolador de la Comunión de los Santos.',
      recomendacion: 'Viva con gozo y alegría la Resurrección del Señor. Participe con entusiasmo en la celebración eucarística. Comparta la buena noticia de la Resurrección.',
      duracion: '1 hora 40 minutos'
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md min-h-screen min-w-screen"
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

            <div className="flex flex-col flex-1 min-h-0">
              {/* Image Section */}
              <div className="w-full h-80 sm:h-96 lg:h-[450px] relative flex-shrink-0">
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
                      className="text-5xl sm:text-5xl lg:text-7xl text-purple-50/98 mb-3 sm:mb-3 lg:mb-3 tracking-wide"
                      style={{ 
                        fontFamily: 'Cormorant Garamond, serif',
                        fontWeight: 400,
                        textShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(139, 92, 246, 0.5)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {evento.dia}
                    </h2>
                    <div className="flex items-center gap-4 sm:gap-3 lg:gap-3 text-purple-200/90">
                      <Calendar className="w-7 h-7 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
                      <p className="tracking-[0.2em] uppercase text-xl sm:text-lg lg:text-lg font-medium" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                        {evento.fecha}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="w-full p-8 sm:p-6 lg:p-8 flex flex-col bg-gradient-to-b from-[#e8dcc0]/50 to-[#dfd4b8]/80 overflow-y-auto">
                {/* Key Information */}
                <div className="space-y-6 sm:space-y-4 lg:space-y-4">
                  {/* Significado Litúrgico */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-[#4a5f63]/30 to-[#47575a]/20 border-l-4 border-[#c3aa85] rounded-lg p-6 sm:p-4 lg:p-4 max-w-none"
                  >
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#4a5538] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-lg sm:text-base lg:text-base uppercase tracking-wider opacity-90 mb-3 text-[#2a3a3a] font-semibold">Significado litúrgico</p>
                        <p className="text-lg sm:text-base lg:text-base leading-relaxed text-[#1a2a2a] font-medium" style={{ lineHeight: '1.8' }}>
                          {details.explicacion}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Preparación Espiritual */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-[#c3aa85]/40 to-[#e8dcc0]/50 border-l-4 border-[#4a5538] rounded-lg p-6 sm:p-4 lg:p-4 max-w-none"
                  >
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#4a5538] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-lg sm:text-base lg:text-base uppercase tracking-wider opacity-90 mb-3 text-[#2a3a3a] font-semibold">Preparación espiritual</p>
                        <p className="text-lg sm:text-base lg:text-base leading-relaxed text-[#1a2a2a] font-medium" style={{ lineHeight: '1.8' }}>
                          {details.recomendacion}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Duración estimada */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-4 sm:gap-3 lg:gap-3 text-[#2a3a3a] bg-[#f8f5f0]/50 rounded-lg p-4"
                  >
                    <svg className="w-6 h-6 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#4a5538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1 lg:flex-none">
                      <p className="text-lg sm:text-base lg:text-base uppercase tracking-wider opacity-90 font-semibold">Duración estimada</p>
                      <p className="text-lg sm:text-base lg:text-base font-bold text-[#1a2a2a]">{details.duracion}</p>
                    </div>
                  </motion.div>

                  {/* Compact Schedule */}
                  <div className="border-t border-[#4a5f63]/30 pt-6 sm:pt-4 lg:pt-4">
                    <h3 
                      className="text-[#2a3a3a] text-lg sm:text-base lg:text-base tracking-[0.25em] mb-4 sm:mb-3 lg:mb-3 uppercase font-semibold flex items-center gap-4" 
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      <svg className="w-6 h-6 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#4a5538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-base sm:text-sm lg:text-sm text-[#1a2a2a]">Horarios principales</span>
                    </h3>
                    <div className="space-y-3 sm:space-y-2 lg:space-y-2">
                      {evento.horarios.map((horario, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                          className="bg-gradient-to-r from-[#4a5f63]/20 to-[#47575a]/10 rounded-lg p-4 sm:p-3 lg:p-3"
                        >
                          <div className="flex items-center gap-3 mb-3 sm:mb-2 lg:mb-2">
                            <svg className="w-5 h-5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#4a5538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-lg sm:text-base lg:text-base font-bold text-[#1a2a2a]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {horario.hora}
                            </p>
                          </div>
                          <div className="space-y-2 sm:space-y-1 lg:space-y-1">
                            {horario.actividades.map((actividad, actIdx) => (
                              <motion.div
                                key={actIdx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 + idx * 0.1 + actIdx * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div className="text-[#4a5538] text-lg mt-0.5 pl-7">✓</div>
                                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.15rem', lineHeight: '1.6' }} className="leading-relaxed text-lg sm:text-base lg:text-base text-[#1a2a2a]">
                                  {actividad}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
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
                      onClick={() => {
                        const now = new Date();
                        const currentHour = now.getHours();
                        const currentDay = now.getDay();
                        
                        // Check if it's a celebration day and time based on actual event schedules (15 minutes before)
                        const isCelebrationTime = (
                          (currentDay === 0 && currentHour >= 7 && currentHour < 12) || // Domingo: 7:45 AM - 12:00 PM (15 min antes de 8:00 AM)
                          (currentDay >= 1 && currentDay <= 3 && currentHour >= 7 && currentHour < 11) || // Lunes a Miércoles: 7:45 AM - 11:00 AM (15 min antes de 8:00 AM)
                          (currentDay === 4 && currentHour >= 17 && currentHour < 23) || // Jueves: 5:45 PM - 11:00 PM (15 min antes de 6:00 PM)
                          (currentDay === 5 && (currentHour >= 8 && currentHour < 11 || currentHour === 14)) || // Viernes: 8:45 AM - 11:00 AM y 2:45 PM - 3:00 PM
                          (currentDay === 6 && (currentHour >= 8 && currentHour < 11 || currentHour >= 20)) // Sábado: 8:45 AM - 11:00 AM y 8:45 PM - 11:00 PM
                        );
                        
                        if (isCelebrationTime) {
                          window.open('https://meet.google.com/qum-tvuu-apt', '_blank');
                        } else {
                          // Show custom alert instead of browser alert
                          const customAlert = document.createElement('div');
                          customAlert.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm';
                          customAlert.innerHTML = `
                            <div class="bg-white rounded-2xl p-10 max-w-lg mx-4 shadow-2xl">
                              <div class="text-center">
                                <div class="w-20 h-20 bg-gradient-to-br from-[#4a5538] to-[#5e6a53] rounded-full flex items-center justify-center mx-auto mb-6">
                                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-[#2a3a3a] mb-4" style="font-family: 'Cormorant Garamond, serif'; font-weight: 700">Transmisión no disponible</h3>
                                <p class="text-gray-700 mb-8 text-xl font-semibold" style="font-family: 'Inter, sans-serif'; font-weight: 500">
                                  La transmisión en vivo está disponible únicamente durante los horarios de celebración litúrgica.
                                </p>
                                <button id="closeAlertBtn" class="bg-[#4a5538] text-white px-8 py-3 rounded-lg hover:bg-[#5e6a53] transition-colors font-bold text-xl" style="font-family: 'Inter, sans-serif'; font-weight: 600">
                                  Entendido
                                </button>
                              </div>
                            </div>
                          `;
                          document.body.appendChild(customAlert);
                          
                          // Add event listener to close alert safely
                          const closeBtn = document.getElementById('closeAlertBtn');
                          if (closeBtn) {
                            closeBtn.addEventListener('click', () => {
                              if (customAlert && customAlert.parentNode) {
                                customAlert.parentNode.removeChild(customAlert);
                              }
                            });
                          }
                        }
                      }}
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
