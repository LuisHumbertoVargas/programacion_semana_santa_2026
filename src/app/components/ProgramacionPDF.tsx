import jsPDF from 'jspdf';
import domingo_de_ramos from '../../assets/images/domingo_de_ramos.jpg';
import martes_santo from '../../assets/images/martes_santo.jpg';
import miercoles_santo from '../../assets/images/miercoles_santo.jpg';
import jueves_santo from '../../assets/images/jueves_santo.jpg';
import viernes_santo from '../../assets/images/viernes_santo.jpg';
import sabado_santo from '../../assets/images/sabado_santo.jpg';
import domingo_de_resurreccion from '../../assets/images/domingo_de_resurreccion.jpg';

export const generateProgramacionPDF = () => {
  const doc = new jsPDF();
  
  // Colores del sitio
  const purple: [number, number, number] = [139, 92, 246];
  const darkBg: [number, number, number] = [18, 8, 32];
  const lightPurple: [number, number, number] = [26, 15, 48];
  
  // Página completa con fondo
  doc.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
  doc.rect(0, 0, 210, 297, 'F');
  
  // Gradiente header más pequeño
  for(let i = 0; i < 30; i++) {
    const alpha = 1 - (i / 30);
    doc.setFillColor(lightPurple[0] * alpha, lightPurple[1] * alpha, lightPurple[2] * alpha);
    doc.rect(0, i * 0.8, 210, 0.8, 'F');
  }
  
  // Línea decorativa como en el sitio
  doc.setFillColor(purple[0], purple[1], purple[2]);
  doc.rect(60, 25, 90, 1, 'F');
  
  // Título principal imitando estilo del sitio (Cormorant Garamond)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.setFont('times', 'bold'); // Times New Roman es similar a Cormorant Garamond
  doc.text('PROGRAMACION', 105, 40, { align: 'center' });
  
  doc.setFontSize(20);
  doc.setFont('times', 'normal'); // Mantener serif para consistencia
  doc.text('Semana Santa', 105, 50, { align: 'center' });
  
  // Fechas con estilo sans-serif (como Inter)
  doc.setFontSize(12);
  doc.setTextColor(200, 200, 200);
  doc.setFont('helvetica', 'normal'); // Helvetica es similar a Inter
  doc.text('29 de Marzo - 05 de Abril, 2026', 105, 60, { align: 'center' });
  
  // Línea decorativa inferior
  doc.setFillColor(purple[0], purple[1], purple[2]);
  doc.rect(60, 70, 90, 1, 'F');
  
  // Contenido de eventos con datos reales del sitio e imágenes
  const eventos = [
    { 
      dia: 'Domingo de Ramos', 
      fecha: '29 de Marzo', 
      descripcion: 'Conmemora la entrada triunfal de Jesus en Jerusalen.',
      horarios: ['9:00 AM - Bendicion de Ramos', '9:00 AM - Santa Misa'],
      imagen: domingo_de_ramos
    },
    { 
      dia: 'Martes Santo', 
      fecha: '31 de Marzo', 
      descripcion: 'Dia de reflexion y recogimiento.',
      horarios: ['9:00 AM - Santa Misa', '9:00 AM - Sacramento de la Confesion'],
      imagen: martes_santo
    },
    { 
      dia: 'Miercoles Santo', 
      fecha: '01 de Abril', 
      descripcion: 'Dia de preparacion para los misterios pascuales.',
      horarios: ['9:00 AM - Santa Misa', '9:00 AM - Sacramento de la Confesion'],
      imagen: miercoles_santo
    },
    { 
      dia: 'Jueves Santo', 
      fecha: '02 de Abril', 
      descripcion: 'Institucion de la Eucaristia y Lavatorio de pies.',
      horarios: [
        '7:30 PM - Misa en recuerdo de la Cena del Senor', 
        '7:30 PM - Lavatorio de los pies', 
        '7:30 PM - Mandamiento del amor', 
        '7:30 PM - Procesion al Monumento', 
        '9:00 PM - Hora Santa por turnos de Adoracion', 
        '11:00 PM - Getsemani en el monumento Eucaristico'
      ],
      imagen: jueves_santo
    },
    { 
      dia: 'Viernes Santo', 
      fecha: '03 de Abril', 
      descripcion: 'Pasion y Muerte del Senor.',
      horarios: [
        '9:00 AM - Via Crucis', 
        '3:00 PM - Liturgia de la Pasion del Senor', 
        '3:00 PM - Sermón de las 7 palabras', 
        '3:00 PM - Sagrada comunion', 
        '3:00 PM - Adoracion de la Santa Cruz', 
        '3:00 PM - Procesion al Santo Sepulcro'
      ],
      imagen: viernes_santo
    },
    { 
      dia: 'Sabado Santo', 
      fecha: '04 de Abril', 
      descripcion: 'Vigilia Pascual y preparacion para la Resurreccion.',
      horarios: [
        '9:00 AM - Siete Dolores de la Santisima Virgen Maria', 
        '9:00 PM - Bendicion del fuego', 
        '10:30 PM - Vigilia de Pascua de Resurreccion'
      ],
      imagen: sabado_santo
    },
    { 
      dia: 'Domingo de Resurreccion', 
      fecha: '05 de Abril', 
      descripcion: 'Celebracion de la Resurreccion de Cristo.',
      horarios: ['9:00 AM - Santa Misa del dia de Resurreccion'],
      imagen: domingo_de_resurreccion
    }
  ];
  
  let yPosition = 80;
  
  eventos.forEach((evento, index) => {
    // Verificar si necesitamos nueva página
    if (yPosition > 190) {
      doc.addPage();
      yPosition = 30;
      
      // Reaplicar fondo en nueva página
      doc.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
      doc.rect(0, 0, 210, 297, 'F');
      
      // Header mejorado en nuevas páginas
      doc.setFillColor(purple[0], purple[1], purple[2]);
      doc.rect(0, 0, 210, 15, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('times', 'bold'); // Serif como Cormorant Garamond
      doc.text('Programación - Semana Santa 2026', 105, 10, { align: 'center' });
    }
    
    // Calcular altura dinámica según cantidad de horarios
    const horariosCount = evento.horarios.length;
    const cardHeight = horariosCount > 4 ? 110 : 85; // Más altura para eventos con muchos horarios
    
    // Background para cada evento con altura dinámica
    doc.setFillColor(lightPurple[0], lightPurple[1], lightPurple[2]);
    doc.roundedRect(15, yPosition - 5, 180, cardHeight, 3, 3, 'F');
    
    // Borde púrpura
    doc.setDrawColor(purple[0], purple[1], purple[2]);
    doc.roundedRect(15, yPosition - 5, 180, cardHeight, 3, 3);
    
    // Imagen con mejor proporción (más alta)
    try {
      // Para la primera imagen (Domingo de Ramos), usar proporción más cuadrada
      if (index === 0) {
        doc.addImage(evento.imagen, 'JPEG', 20, yPosition, 45, 45);
      } else {
        doc.addImage(evento.imagen, 'JPEG', 20, yPosition, 50, 50);
      }
    } catch (error) {
      // Si hay error con la imagen, dibujar un rectángulo placeholder
      const placeholderSize = index === 0 ? 45 : 50;
      doc.setFillColor(100, 100, 100);
      doc.rect(20, yPosition, placeholderSize, placeholderSize, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.text('Imagen', 20 + placeholderSize/2, yPosition + placeholderSize/2, { align: 'center' });
    }
    
    // Día con estilo del sitio (imitando Cormorant Garamond)
    doc.setTextColor(purple[0], purple[1], purple[2]);
    doc.setFontSize(18);
    doc.setFont('times', 'bold'); // Serif como en el sitio
    doc.text(evento.dia, 80, yPosition + 10);
    
    // Fecha con estilo sans-serif (imitando Inter)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal'); // Sans-serif como en el sitio
    doc.text(evento.fecha, 80, yPosition + 20);
    
    // Descripción con estilo sans-serif (imitando Inter)
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const splitDescription = doc.splitTextToSize(evento.descripcion, 110);
    doc.text(splitDescription, 80, yPosition + 30);
    
    // Todos los horarios completos con estilo sans-serif (imitando Inter)
    doc.setTextColor(180, 180, 180);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    let horarioY = yPosition + 45;
    evento.horarios.forEach((horario, idx) => {
      if (horarioY < yPosition + cardHeight - 15) { // Espacio dinámico según altura
        const horarioText = horario.length > 50 ? horario.substring(0, 47) + '...' : horario;
        doc.text(`• ${horarioText}`, 80, horarioY);
        horarioY += 7; // Más espaciado entre horarios
      }
    });
    
    // Enlace virtual con estilo sans-serif (imitando Inter)
    doc.setTextColor(purple[0], purple[1], purple[2]);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('• Conectarse: meet.google.com/qum-tvuu-apt', 80, yPosition + cardHeight - 10);
    
    yPosition += cardHeight + 10; // Espacio dinámico según altura de tarjeta
  });
  
  // Footer profesional con estilo del sitio
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Footer con gradiente púrpura
    doc.setFillColor(purple[0], purple[1], purple[2]);
    doc.rect(0, 280, 210, 17, 'F');
    
    // Información del footer más profesional
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('times', 'bold'); // Serif como Cormorant Garamond para títulos
    doc.text('Semana Santa 2026', 105, 285, { align: 'center' });
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal'); // Sans-serif como Inter para descripción
    doc.text('Celebracion de la Pasion, Muerte y Resurreccion de nuestro Senor Jesucristo', 105, 290, { align: 'center' });
    doc.text(`${i} / ${totalPages}`, 105, 295, { align: 'center' });
  }
  
  // Guardar PDF
  doc.save('Programacion_Semana_Santa_2026.pdf');
};
