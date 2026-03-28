/// <reference types="vite/client" />

import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Cross, Flame, Church, Heart, Sun, Download } from 'lucide-react';
import { EventCard } from './EventCard';
import programacionPDF from '../../assets/document/Programación_Semana_Santa_2026.pdf';

import domingo_de_ramos from '../../assets/images/domingo_ramos.jpeg';
import lunes_santo from '../../assets/images/lunes_santo.jpeg';
import martes_santo from '../../assets/images/martes_santo.jpg';
import miercoles_santo from '../../assets/images/miercoles_santo.jpeg';
import jueves_santo from '../../assets/images/jueves_santo.jpeg';
import viernes_santo from '../../assets/images/viernes_santo.jpeg';
import sabado_santo from '../../assets/images/sabado_santo.jpeg';
import domingo_de_resurreccion from '../../assets/images/domingo_de_resurreccion_a.jpeg';

const eventos = [
  {
    id: 1,
    dia: 'Domingo de Ramos',
    fecha: '29 de Marzo',
    descripcion: 'Unimos nuestras voces en oración celebrando el ingreso mesiánico de Jesús a Jerusalén, viviendo desde nuestros hogares la alegría de recibir al Rey que viene en nombre del Señor.',
    horarios: [
      { hora: '9:00 AM', actividades: ['Bendición de Ramos', 'Santa Misa'] }
    ],
    imagen: domingo_de_ramos,
    icono: Church,
  },
  {
    id: 2,
    dia: 'Lunes Santo',
    fecha: '30 de Marzo',
    descripcion: 'Día para profundizar en la oración personal y comunitaria, acompañando a Jesús en su camino hacia Jerusalén mediante la reflexión silenciosa y la unión de corazones en fe.',
    horarios: [
      { hora: '8:00 AM', actividades: ['Laudes y Santo Rosario'] },
      { hora: '9:00 AM', actividades: ['Santa Misa', 'Sacramento de la Confesión'] }
    ],
    imagen: lunes_santo,
    icono: Heart,
  },
  {
    id: 3,
    dia: 'Martes Santo',
    fecha: '31 de Marzo',
    descripcion: 'Tiempo sagrado para meditar en los misterios de la pasión, fortaleciendo nuestro espíritu con la oración del Rosario y la gracia del Sacramento de la Reconciliación.',
    horarios: [
      { hora: '8:00 AM', actividades: ['Laudes y Santo Rosario'] },
      { hora: '9:00 AM', actividades: ['Santa Misa', 'Sacramento de la Confesión'] }
    ],
    imagen: martes_santo,
    icono: Heart,
  },
  {
    id: 4,
    dia: 'Miércoles Santo',
    fecha: '01 de Abril',
    descripcion: 'Preparamos nuestro corazón para vivir los misterios centrales de nuestra fe, uniéndonos en oración por la conversión y la fidelidad al seguimiento de Cristo.',
    horarios: [
      { hora: '8:00 AM', actividades: ['Laudes y Santo Rosario'] },
      { hora: '9:00 AM', actividades: ['Santa Misa', 'Sacramento de la Confesión'] }
    ],
    imagen: miercoles_santo,
    icono: Cross,
  },
  {
    id: 5,
    dia: 'Jueves Santo',
    fecha: '02 de Abril',
    descripcion: 'Vivimos en comunidad el amor infinito de Jesús en la Última Cena, participando del lavatorio de pies como gesto de humildad y servicio, adorando su presencia real en el Monumento.',
    horarios: [
      { hora: '6:00 PM', actividades: ['MISSA IN CENA DOMINI', 'Lavatorio de pies', 'Mandamiento del amor', 'Procesión al Monumento'] },
      { hora: '8:00 PM', actividades: ['Hora Santa por turnos de Adoración'] },
      { hora: '11:00 PM', actividades: ['Getsemaní, en el monumento Eucaristico'] }
    ],
    imagen: jueves_santo,
    icono: Flame,
    destacado: true,
  },
  {
    id: 6,
    dia: 'Viernes Santo',
    fecha: '03 de Abril',
    descripcion: 'Acompañamos devotamente a Cristo en su camino al Calvario, meditando sus siete palabras desde la cruz y uniéndonos a su sacrificio redentor con fe y esperanza en la resurrección.',
    horarios: [
      { hora: '9:00 AM', actividades: ['Via Crucis'] },
      { hora: '3:00 PM', actividades: ['Liturgia de la Pasión del Señor', 'Sermón de las 7 palabras', 'Sagrada Comunión', 'Adoración de la Santa Cruz', 'Procesion al Santo Sepulcro'] }
    ],
    imagen: viernes_santo,
    icono: Cross,
    destacado: true,
  },
  {
    id: 7,
    dia: 'Sábado Santo',
    fecha: '04 de Abril',
    descripcion: 'Vigilia de oración y esperanza en la victoria de la luz sobre las tinieblas, preparando nuestros corazones para recibir la alegría pascual y el testimonio de la fe viva.',
    horarios: [
      { hora: '9:00 AM', actividades: ['Siete Dolores de la Santísima Virgen María'] },
      { hora: '9:00 PM', actividades: ['Bendición del fuego'] },
      { hora: '10:30 PM', actividades: ['VIGILIA DE PASCUA DE RESURRECCIÓN'] }
    ],
    imagen: sabado_santo,
    icono: Flame,
  },
  {
    id: 8,
    dia: 'Domingo de Resurrección',
    fecha: '05 de Abril',
    descripcion: 'Celebramos con júbilo la victoria de Cristo sobre la muerte, proclamando su resurrección como fuente de esperanza y vida nueva para toda la humanidad redimida.',
    horarios: [
      { hora: '9:00 AM', actividades: ['Santa Misa del día de Resurrección'] }
    ],
    imagen: domingo_de_resurreccion,
    icono: Sun,
    destacado: true,
  },
];

export function Programacion() {
  const navigate = useNavigate();

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = programacionPDF;
    link.download = 'Programación_Semana_Santa_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8dcc0] via-[#dfd4b8] to-[#d4c8a8] overflow-x-hidden">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#47575a] via-[#4a5f63] to-[#47575a] border-b border-[#4a5538]/40 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a5538]/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 mb-8 group"
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
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#4a5538] to-transparent mx-auto mb-8" />
            <h1 
              className="text-4xl max-[420px]:text-3xl max-[336px]:text-[1.72rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 tracking-[0.15em] uppercase"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 200,
                textShadow: '0 0 40px rgba(74, 85, 56, 0.4), 0 0 80px rgba(74, 85, 56, 0.2)',
                letterSpacing: '0.2em'
              }}
            >
              Programación
            </h1>
            <p className="text-white/90 tracking-[0.25em] uppercase text-lg mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200 }}>
              Semana Santa
            </p>
            <p className="text-white/80 tracking-[0.2em] uppercase text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              29 de Marzo - 05 de Abril, 2026
            </p>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#4a5538] to-transparent mx-auto mt-8" />
            
            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadPDF}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white py-3 sm:py-3 px-6 sm:px-8 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 mx-auto text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium hidden sm:block" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Descargar programación
                </span>
                <span className="font-medium sm:hidden" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Descargar PDF
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#47575a]/10 via-[#5e6a53]/5 to-[#47575a]/10 blur-3xl" />
          <div className="relative">
            <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#5e6a53]/40 to-transparent mx-auto mb-12 shadow-lg shadow-[#5e6a53]/20" />
            <div className="max-w-2xl mx-auto">
              <h3 className="text-[#47575a]/70 text-xl italic mb-8 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                "Y al tercer día resucitó de entre los muertos"
              </h3>
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#5e6a53]/30 to-transparent mx-auto mb-8" />
              <span className="text-[#49584a]/60 text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                © 2026 - Todos los derechos reservados
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}