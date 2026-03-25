import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Cross, Flame, Church, Heart, Sun } from 'lucide-react';
import { EventCard } from './EventCard';

const eventos = [
  {
    id: 1,
    dia: 'Domingo de Ramos',
    fecha: '13 de Abril',
    descripcion: 'Conmemora la entrada triunfal de Jesús en Jerusalén.',
    horarios: ['9:00 AM - Bendición de Ramos', '9:00 AM - Santa Misa'],
    imagen: 'https://images.unsplash.com/photo-1594007654729-407eedc4af65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwYnJhbmNoJTIwY2h1cmNofGVufDF8fHx8MTc3NDQwMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    icono: Church,
  },
  {
    id: 2,
    dia: 'Martes Santo',
    fecha: '15 de Abril',
    descripcion: 'Día de reflexión y recogimiento.',
    horarios: ['9:00 AM - Santa Misa', '9:00 AM - Sacramento de la Confesión'],
    imagen: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMGRhcmslMjB3b29kJTIwYmVhbXN8ZW58MXx8fHwxNzc0NDAyNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icono: Heart,
  },
  {
    id: 3,
    dia: 'Miércoles Santo',
    fecha: '16 de Abril',
    descripcion: 'Día de preparación para los misterios pascuales.',
    horarios: ['9:00 AM - Santa Misa', '9:00 AM - Sacramento de la Confesión'],
    imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zcyUyMGluJTIwY2h1cmNofGVufDF8fHx8MTc3NDQwMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    icono: Cross,
  },
  {
    id: 4,
    dia: 'Jueves Santo',
    fecha: '17 de Abril',
    descripcion: 'Institución de la Eucaristía y Lavatorio de pies.',
    horarios: ['7:30 PM - Misa en recuerdo de la Cena del Señor', '7:30 PM - Lavatorio de los pies', '7:30 PM - Mandamiento del amor', '7:30 PM - Procesión al Monumento', '9:00 PM - Hora Santa por turnos de Adoración', '11:00 PM - Getsemani en el monumento Eucarístico'],
    imagen: 'https://images.unsplash.com/photo-1533973280439-dfd664596a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGNhbmRsZSUyMGNpcmNsZSUyMGNoYXJ0fGVufDF8fHx8MTc3NDQwMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    icono: Flame,
    destacado: true,
  },
  {
    id: 5,
    dia: 'Viernes Santo',
    fecha: '18 de Abril',
    descripcion: 'Pasión y Muerte del Señor.',
    horarios: ['9:00 AM - Via Crucis', '3:00 PM - Liturgia de la Pasión del Señor', '3:00 PM - Sermón de las 7 palabras', '3:00 PM - Sagrada comunión', '3:00 PM - Adoración de la Santa Cruz', '3:00 PM - Procesión al Santo Sepulcro'],
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zcyUyMG9uJTIwaGlsbCUyMGR1c2t8ZW58MXx8fHwxNzc0NDAyNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icono: Cross,
    destacado: true,
  },
  {
    id: 6,
    dia: 'Sábado Santo',
    fecha: '19 de Abril',
    descripcion: 'Vigilia Pascual y preparación para la Resurrección.',
    horarios: ['9:00 AM - Siete Dolores de la Santísima Virgen María', '9:00 PM - Bendición del fuego', '10:30 PM - Vigilia de Pascua de Resurrección'],
    imagen: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2FuZGxlcyUyMHNob2VzfGVufDF8fHx8MTc3NDQwMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    icono: Flame,
  },
  {
    id: 7,
    dia: 'Domingo de Resurrección',
    fecha: '20 de Abril',
    descripcion: 'Celebración de la Resurrección de Cristo.',
    horarios: ['9:00 AM - Santa Misa del día de Resurrección'],
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHN1bnJpc2UlMjB0aHJvdWdoJTIwY2xvdWRzfGVufDF8fHx8MTc3NDQwMjY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
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
              className="text-7xl md:text-8xl text-purple-50/95 mb-6 tracking-[0.15em] uppercase"
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
              13 - 20 de Abril, 2026
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
              <p className="text-purple-100/70 text-xl italic mb-8 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                "Y al tercer día resucitó de entre los muertos"
              </p>
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mx-auto mb-8" />
              <p className="text-purple-200/60 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Los horarios pueden estar sujetos a cambios. Consulte con su parroquia local.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}