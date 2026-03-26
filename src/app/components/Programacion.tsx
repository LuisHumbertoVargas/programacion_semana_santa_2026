import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Cross, Flame, Church, Heart, Sun } from 'lucide-react';
import { EventCard } from './EventCard';

const eventos = [
  {
    id: 1,
    dia: 'Domingo de Ramos',
    fecha: '29 de Marzo',
    descripcion: 'Conmemora la entrada triunfal de Jesús en Jerusalén.',
    horarios: ['9:00 AM - Bendición de Ramos', '9:00 AM - Santa Misa'],
    imagen: '/src/assets/images/domingo_de_ramos.jpg',
    icono: Church,
  },
  {
    id: 2,
    dia: 'Martes Santo',
    fecha: '31 de Marzo',
    descripcion: 'Día de reflexión y recogimiento.',
    horarios: ['9:00 AM - Santa Misa', '9:00 AM - Sacramento de la Confesión'],
    imagen: '/src/assets/images/martes_santo.jpg',
    icono: Heart,
  },
  {
    id: 3,
    dia: 'Miércoles Santo',
    fecha: '1 de Abril',
    descripcion: 'Día de preparación para los misterios pascuales.',
    horarios: ['9:00 AM - Santa Misa', '9:00 AM - Sacramento de la Confesión'],
    imagen: '/src/assets/images/miercoles_santo.jpg',
    icono: Cross,
  },
  {
    id: 4,
    dia: 'Jueves Santo',
    fecha: '2 de Abril',
    descripcion: 'Institución de la Eucaristía y Lavatorio de pies.',
    horarios: ['7:30 PM - Misa en recuerdo de la Cena del Señor', '7:30 PM - Lavatorio de los pies', '7:30 PM - Mandamiento del amor', '7:30 PM - Procesión al Monumento', '9:00 PM - Hora Santa por turnos de Adoración', '11:00 PM - Getsemani en el monumento Eucarístico'],
    imagen: '/src/assets/images/jueves_santo.jpg',
    icono: Flame,
    destacado: true,
  },
  {
    id: 5,
    dia: 'Viernes Santo',
    fecha: '3 de Abril',
    descripcion: 'Pasión y Muerte del Señor.',
    horarios: ['9:00 AM - Via Crucis', '3:00 PM - Liturgia de la Pasión del Señor', '3:00 PM - Sermón de las 7 palabras', '3:00 PM - Sagrada comunión', '3:00 PM - Adoración de la Santa Cruz', '3:00 PM - Procesión al Santo Sepulcro'],
    imagen: '/src/assets/images/viernes_santo.jpg',
    icono: Cross,
    destacado: true,
  },
  {
    id: 6,
    dia: 'Sábado Santo',
    fecha: '4 de Abril',
    descripcion: 'Vigilia Pascual y preparación para la Resurrección.',
    horarios: ['9:00 AM - Siete Dolores de la Santísima Virgen María', '9:00 PM - Bendición del fuego', '10:30 PM - Vigilia de Pascua de Resurrección'],
    imagen: '/src/assets/images/sabado_santo.jpg',
    icono: Flame,
  },
  {
    id: 7,
    dia: 'Domingo de Resurrección',
    fecha: '5 de Abril',
    descripcion: 'Celebración de la Resurrección de Cristo.',
    horarios: ['9:00 AM - Santa Misa del día de Resurrección'],
    imagen: '/src/assets/images/domingo_de_resurreccion.jpg',
    icono: Sun,
    destacado: true,
  },
];

export function Programacion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120820] via-[#1a0f30] to-[#120820]">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-black/60 via-purple-900/20 to-black/60 border-b border-purple-500/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-purple-300/60 hover:text-purple-200 transition-all duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>Volver</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent mx-auto mb-8 shadow-lg shadow-purple-400/30" />
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-purple-50/95 mb-6 tracking-[0.15em] uppercase"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 200,
                textShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.1)',
                letterSpacing: '0.2em'
              }}
            >
              Programación
            </h1>
            <p className="text-purple-300/70 tracking-[0.25em] uppercase text-lg mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
              Semana Santa
            </p>
            <p className="text-purple-400/60 tracking-[0.2em] uppercase text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              29 de Marzo - 5 de Abril, 2026
            </p>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent mx-auto mt-8 shadow-lg shadow-purple-400/30" />
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative">
          {/* Vertical timeline line */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/30 via-purple-400/20 to-purple-500/30" /> */}
          
          <div className="space-y-16">
            {eventos.map((evento, index) => (
              <EventCard key={evento.id} evento={evento} index={index} />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-purple-800/5 to-purple-900/10 blur-3xl" />
          <div className="relative">
            <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent mx-auto mb-12 shadow-lg shadow-purple-400/20" />
            <div className="max-w-2xl mx-auto">
              <h3 className="text-purple-100/70 text-xl italic mb-8 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                "Y al tercer día resucitó de entre los muertos"
              </h3>
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mx-auto mb-8" />
              <span className="text-purple-200/60 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                © 2026 Todos los derechos reservados.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}