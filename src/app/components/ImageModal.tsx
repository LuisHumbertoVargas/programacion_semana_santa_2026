import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Video, MapPin, Users, Heart } from 'lucide-react';

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
  // Enhanced event information
  const eventDetails = {
    1: { // Domingo de Ramos
      location: "Parroquia Principal",
      expectedAttendance: "500+ fieles",
      liveStream: "https://meet.google.com/xxx-domingo-ramos",
      specialNote: "Se repartirán ramos benditos al finalizar la misa",
      requirements: "Llegar 15 minutos antes para buen asiento"
    },
    2: { // Martes Santo
      location: "Capilla del Santísimo",
      expectedAttendance: "200+ fieles",
      liveStream: "https://meet.google.com/xxx-martes-santo",
      specialNote: "Día de ayuno y oración personal",
      requirements: "Traer rosario para oración comunitaria"
    },
    3: { // Miércoles Santo
      location: "Iglesia Central",
      expectedAttendance: "300+ fieles",
      liveStream: "https://meet.google.com/xxx-miercoles-santo",
      specialNote: "Preparación espiritual para el Triduo Pascual",
      requirements: "Confesión disponible durante todo el día"
    },
    4: { // Jueves Santo
      location: "Catedral Diocesana",
      expectedAttendance: "800+ fieles",
      liveStream: "https://meet.google.com/xxx-jueves-santo",
      specialNote: "Ceremonia solemne con lavatorio de pies",
      requirements: "Traer velas para la procesión"
    },
    5: { // Viernes Santo
      location: "Templo Mayor",
      expectedAttendance: "1000+ fieles",
      liveStream: "https://meet.google.com/xxx-viernes-santo",
      specialNote: "Día de ayuno y abstinencia",
      requirements: "Vestir con sobriedad y respeto"
    },
    6: { // Sábado Santo
      location: "Santuario Mariano",
      expectedAttendance: "400+ fieles",
      liveStream: "https://meet.google.com/xxx-sabado-santo",
      specialNote: "Vigilia pascual de renovación bautismal",
      requirements: "Traer agua para bendición familiar"
    },
    7: { // Domingo de Resurrección
      location: "Basílica Principal",
      expectedAttendance: "1200+ fieles",
      liveStream: "https://meet.google.com/xxx-resurreccion",
      specialNote: "Fiesta principal del año litúrgico",
      requirements: "Llegar temprano, se esperan multitudes"
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
              <div className="lg:w-3/5 h-96 lg:h-[500px] relative">
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
                
                {/* Floating title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-purple-500/20"
                  >
                    <h2 
                      className="text-4xl lg:text-5xl text-purple-50/98 mb-2 tracking-wide"
                      style={{ 
                        fontFamily: 'Cormorant Garamond, serif',
                        fontWeight: 300,
                        textShadow: '0 0 25px rgba(139, 92, 246, 0.7), 0 0 50px rgba(139, 92, 246, 0.4)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {evento.dia}
                    </h2>
                    <div className="flex items-center gap-3 text-purple-200/90">
                      <Calendar className="w-5 h-5" />
                      <p className="tracking-[0.2em] uppercase text-sm font-light" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                        {evento.fecha}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="lg:w-2/5 p-6 lg:p-8 flex flex-col justify-between bg-gradient-to-b from-[#1a0f30]/50 to-[#120820]/80">
                {/* Key Information */}
                <div className="space-y-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3 text-purple-200/90"
                  >
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-70">Ubicación</p>
                      <p className="text-sm font-medium">{details.location}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 text-purple-200/90"
                  >
                    <Users className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-70">Asistencia esperada</p>
                      <p className="text-sm font-medium">{details.expectedAttendance}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-purple-400 mt-0.5" />
                      <div>
                        <p className="text-xs uppercase tracking-wider opacity-70 mb-1">Nota especial</p>
                        <p className="text-sm leading-relaxed text-purple-100/90">{details.specialNote}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-l-4 border-purple-500 rounded-lg p-4"
                  >
                    <p className="text-xs uppercase tracking-wider opacity-70 mb-2">Recomendaciones</p>
                    <p className="text-sm leading-relaxed text-purple-100/90">{details.requirements}</p>
                  </motion.div>
                </div>

                {/* Compact Schedule */}
                <div className="border-t border-purple-500/20 pt-4">
                  <h3 
                    className="text-purple-200/90 text-sm tracking-[0.25em] mb-3 uppercase font-medium flex items-center gap-2" 
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    <Clock className="w-4 h-4" />
                    Horarios principales
                  </h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {evento.horarios.map((horario, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + idx * 0.1 }}
                        className="flex items-start gap-2 text-purple-100/70"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400/70 rounded-full mt-2" />
                        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.85rem' }} className="leading-relaxed">
                          {horario}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live Stream Button - Moved to bottom */}
                <div className="mt-6 pt-4 border-t border-purple-500/20">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(details.liveStream, '_blank')}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-purple-500/30"
                  >
                    <Video className="w-5 h-5" />
                    <span className="font-medium">Unirse a transmisión en vivo</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
