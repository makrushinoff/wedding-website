import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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
  const [flowerCount, setFlowerCount] = useState(10);

  useEffect(() => {
    const calculateFlowerCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setFlowerCount(8); // Mobile
      } else if (width < 1024) {
        setFlowerCount(12); // Tablet
      } else {
        setFlowerCount(16); // Desktop
      }
    };

    calculateFlowerCount();
    window.addEventListener('resize', calculateFlowerCount);
    return () => window.removeEventListener('resize', calculateFlowerCount);
  }, []);

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

  // Available flower images
  const flowerImages = [Object1, Object2, Object3, ChatGPTFlower4, ChatGPTFlower5, ChatGPTFlower6, ChatGPTFlower7];

  // Generate flowers dynamically based on screen width
  const flowers = Array.from({ length: flowerCount }, (_, i) => ({
    src: flowerImages[i % flowerImages.length],
    left: `${(i * (100 / flowerCount)) + (Math.random() * 5)}%`,
    delay: Math.random() * 3,
    duration: 7 + Math.random() * 2.5,
    rotate: (Math.random() - 0.5) * 50
  }));

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
