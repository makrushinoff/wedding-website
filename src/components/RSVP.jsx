import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './RSVP.css';
 import weddingIcon from '../assets/wedding.svg';

const RSVP = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isHovered, setIsHovered] = useState(false);

  const handleRSVPClick = () => {
    window.open('https://docs.google.com/forms/d/1nx1be-UkPJLqb_LaoALb4jTgTAhMy60mK_Zz-p3QgHY/viewform', '_blank');
  };

  return (
    <section className="rsvp" ref={ref}>
      <motion.div
        className="rsvp-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="rsvp-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">Анкета гостя</h2>

          <p className="rsvp-message">
            Просимо вас заповнити форму, де ви зможете підтвердити свою присутність на святі, та дати нам знати про свої вподобання
          </p>

          <motion.div className="rsvp-button-wrapper">
            <motion.button
              className="rsvp-button"
              onClick={handleRSVPClick}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(168, 201, 168, 0.5)",
                  "0 8px 30px rgba(168, 201, 168, 0.7)",
                  "0 4px 20px rgba(168, 201, 168, 0.5)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="rsvp-button-icon">✉️</span>
              <span>Підтвердити присутність</span>
            </motion.button>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="rsvp-tooltip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Натисніть, щоб підтвердити!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="rsvp-note"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Якщо у вас викинкли питання - ми завжди відкриті до вас, тому пишіть/дзвоніть!
          </motion.p>
        </motion.div>

        {/* Decorative wedding icons */}
        <motion.img
          src={weddingIcon}
          alt="Wedding"
          className="rsvp-wedding-icon icon-1"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={weddingIcon}
          alt="Wedding"
          className="rsvp-wedding-icon icon-2"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Elegant romantic ornaments */}
        <div className="rsvp-ornament ornament-heart-wreath"></div>
        <div className="rsvp-ornament ornament-love-vines"></div>
        <div className="rsvp-ornament ornament-flourish-left"></div>
        <div className="rsvp-ornament ornament-flourish-right"></div>
      </motion.div>
    </section>
  );
};

export default RSVP;
