import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Evento {
  id: number;
  dia: string;
  fecha: string;
  descripcion: string;
  horarios: string[];
  imagen: string;
  icono: LucideIcon;
  destacado?: boolean;
}

interface EventCardProps {
  evento: Evento;
  index: number;
}

export function EventCard({ evento, index }: EventCardProps) {
  const Icon = evento.icono;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`grid md:grid-cols-2 gap-4 md:gap-8 items-center max-w-full ${
        index % 2 === 0 ? '' : 'md:grid-flow-dense'
      }`}>
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? '' : 'md:col-start-2'} shadow-2xl`}
        >
          <div className="aspect-[5/4] relative group">
            {/* Image with enhanced effects */}
            <div className="absolute inset-0 bg-gradient-to-br to-black/5 z-10" />
            <img
              src={evento.imagen}
              alt={evento.dia}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75"
              style={{ filter: 'contrast(1.1) saturate(1.2)', objectPosition: '50% 55%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-900/20 to-transparent z-20" />
            
            {/* Subtle animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-0 transition-opacity duration-700 z-30" />
          </div>
        </motion.div>

        {/* Content */}
        <div className={`${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'} px-2 md:px-4`}>
          <div className="space-y-6">
            {/* Día y Fecha */}
            <div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-20 h-[2px] bg-gradient-to-r from-purple-500/60 to-purple-400/40 mb-8 shadow-lg shadow-purple-500/30"
              />
              <h2 
                className="text-5xl md:text-6xl text-purple-50/98 mb-4 tracking-wide"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 300,
                  textShadow: '0 0 30px rgba(139, 92, 246, 0.35), 0 0 60px rgba(139, 92, 246, 0.15)',
                  letterSpacing: '0.05em'
                }}
              >
                {evento.dia}
              </h2>
              <p className="text-purple-200/80 tracking-[0.2em] uppercase text-base font-light" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                {evento.fecha}
              </p>
            </div>

            {/* Descripción */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-purple-100/80 leading-relaxed text-lg" 
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              {evento.descripcion}
            </motion.p>

            {/* Horarios */}
            <div className="space-y-4 pt-8">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-purple-200/90 text-sm tracking-[0.25em] mb-6 uppercase font-medium" 
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                Horarios
              </motion.h3>
              <div className="space-y-3">
                {evento.horarios.map((horario, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center gap-4 text-purple-100/70 group cursor-default"
                  >
                    <div className="relative">
                      <div className="w-2 h-2 bg-purple-400/70 rounded-full group-hover:bg-purple-300 group-hover:scale-150 transition-all duration-500" />
                      <div className="absolute inset-0 w-2 h-2 bg-purple-400/50 rounded-full animate-ping" />
                    </div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1rem' }} className="group-hover:text-purple-100/90 transition-colors duration-300">
                      {horario}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}