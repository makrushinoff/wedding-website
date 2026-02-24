import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './ColorPalette.css';

import Object1 from '../assets/Object.svg';
import Object2 from '../assets/Object 2.svg';
import Object3 from '../assets/Object 3.svg';
import ChatGPTFlower4 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 4.svg';
import ChatGPTFlower5 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 5.svg';
import ChatGPTFlower6 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 6.svg';
import ChatGPTFlower7 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 7.svg';

const ColorPalette = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colors = [
    { name: 'Бежевий', hex: '#F5EEE6'},
    { name: 'Лимонний', hex: '#F5F3D0'},
    { name: 'Пудровий', hex: '#EBCFC5' },
    { name: 'Рожевий', hex: '#FFD3D8' },
    { name: 'Лавандовий', hex: '#D5C8D9' },
    { name: 'Блакитний', hex: '#C5D9E3' },
    { name: 'М\'ятний', hex: '#D4E5E4' },
    { name: 'Шавлієвий', hex: '#D4E5D4'},

  ];

  // Falling flowers configuration
  const flowers = [
    { src: Object1, left: '5%', delay: 0, duration: 8, rotate: -15 },
    { src: Object2, left: '15%', delay: 0.5, duration: 9, rotate: 20 },
    { src: Object3, left: '25%', delay: 1, duration: 7.5, rotate: -10 },
    { src: ChatGPTFlower4, left: '35%', delay: 1.5, duration: 8.5, rotate: 25 },
    { src: ChatGPTFlower5, left: '45%', delay: 0.8, duration: 9.5, rotate: -20 },
    { src: ChatGPTFlower6, left: '55%', delay: 1.8, duration: 8, rotate: 15 },
    { src: ChatGPTFlower7, left: '65%', delay: 0.3, duration: 7, rotate: -25 },
    { src: Object1, left: '75%', delay: 1.2, duration: 8.5, rotate: 10 },
    { src: Object2, left: '85%', delay: 0.6, duration: 9, rotate: -18 },
    { src: Object3, left: '95%', delay: 1.4, duration: 7.5, rotate: 22 },
    { src: ChatGPTFlower4, left: '10%', delay: 2, duration: 8, rotate: -12 },
    { src: ChatGPTFlower5, left: '20%', delay: 2.5, duration: 9, rotate: 18 },
    { src: ChatGPTFlower6, left: '70%', delay: 2.2, duration: 8.5, rotate: -22 },
    { src: ChatGPTFlower7, left: '80%', delay: 2.8, duration: 7.5, rotate: 14 },
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
      {/* Falling flowers animation */}
      {isInView && flowers.map((flower, index) => (
        <motion.img
          key={index}
          src={flower.src}
          className="falling-flower"
          initial={{
            top: '-100px',
            left: flower.left,
            opacity: 0,
            rotate: 0
          }}
          animate={{
            top: 'calc(100% - 80px)',
            opacity: [0, 0.4, 0.4, 0.3],
            rotate: flower.rotate
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            ease: "easeIn"
          }}
          alt=""
        />
      ))}

      <motion.div
        className="palette-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Дрес-код</h2>
        <p className="palette-subtitle">
          Святковий casual стиль у пастельних тонах
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
              >
              </div>
              <p className="color-name">{color.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ColorPalette;
