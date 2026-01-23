import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './ColorPalette.css';

const ColorPalette = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colors = [
    { name: 'Беж', hex: '#F5EEE6', row: 1 },
    { name: 'Рожевий', hex: '#FFD3D8', row: 1 },
    { name: 'М\'ятний', hex: '#D4E5E4', row: 1 },
    { name: 'Блакитний', hex: '#C5D9E3', row: 1 },
    { name: 'Персиковий', hex: '#FFE5B4', row: 2 },
    { name: 'Ванільний', hex: '#F5F3D0', row: 2 },
    { name: 'Шавлієвий', hex: '#D4E5D4', row: 2 },
    { name: 'Кремовий', hex: '#F5F0E8', row: 2 },
    { name: 'Піщаний', hex: '#E5D8B4', row: 3 },
    { name: 'Пудровий', hex: '#C5D9E3', row: 3 },
    { name: 'Абрикос', hex: '#FFD4C4', row: 3 },
    { name: 'Лавандовий', hex: '#D5C8D9', row: 3 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const colorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="color-palette" ref={ref}>
      <motion.div
        className="palette-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Кольорова гама</h2>
        <p className="palette-subtitle">
          Ми будемо раді, якщо ваш образ включатиме ці кольори
        </p>

        <motion.div
          className="palette-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className="color-swatch"
              variants={colorVariants}
            >
              <div
                className="color-box"
                style={{ backgroundColor: color.hex }}
              ></div>
              <p className="color-name">{color.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Elegant lace-like patterns */}
      <div className="palette-ornament ornament-lace-left"></div>
      <div className="palette-ornament ornament-lace-right"></div>
      <div className="palette-ornament ornament-frame-top"></div>
      <div className="palette-ornament ornament-frame-bottom"></div>
    </section>
  );
};

export default ColorPalette;
