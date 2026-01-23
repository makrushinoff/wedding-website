import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/img_1.png';
import ringImage from '../assets/img_4.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-images-collage">
        <motion.div
          className="hero-image-main"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={heroImage} alt="Андрій та Іра" />
        </motion.div>

        <motion.div
          className="hero-image-accent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img src={ringImage} alt="Обручки" />
        </motion.div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        {/* Монограма */}
        <motion.div
          className="monogram"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="monogram-circle">
            <span className="initial">А</span>
            <span className="ampersand">&</span>
            <span className="initial">І</span>
          </div>
        </motion.div>

        {/* Імена */}
        <motion.h1
          className="names"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Андрій та Іра
        </motion.h1>

        {/* Дата */}
        <motion.div
          className="date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="date-line"></div>
          <p>17 травня 2026</p>
          <div className="date-line"></div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          onClick={() => {
            const details = document.getElementById('details');
            if (details) details.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="scroll-arrow">↓</div>
          <div className="scroll-text">Прокрутіть вниз</div>
        </motion.button>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="float-element float-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="float-element float-2"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Elegant ornamental patterns */}
      <div className="ornament ornament-corner-tl"></div>
      <div className="ornament ornament-corner-tr"></div>
      <div className="ornament ornament-corner-bl"></div>
      <div className="ornament ornament-corner-br"></div>
      <div className="ornament ornament-divider-top"></div>
      <div className="ornament ornament-divider-bottom"></div>
    </section>
  );
};

export default Hero;
