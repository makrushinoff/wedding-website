import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './RSVP.css';
import Object1 from '../assets/Object.svg';
import Object2 from '../assets/Object 2.svg';
import Object3 from '../assets/Object 3.svg';
import ChatGPTFlower4 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 4.svg';
import ChatGPTFlower5 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 5.svg';
import ChatGPTFlower6 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 6.svg';
import ChatGPTFlower7 from '../assets/ChatGPT Image Jan 23, 2026, 08_08_49 PM 7.svg';

const RSVP = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isHovered, setIsHovered] = useState(false);

  const handleRSVPClick = () => {
    window.open('https://docs.google.com/forms/d/1nx1be-UkPJLqb_LaoALb4jTgTAhMy60mK_Zz-p3QgHY/viewform', '_blank');
  };

  // Static positioned flowers
  const flowers = [
    { src: Object1, top: '10%', left: '5%', rotate: -15, scale: 0.8 },
    { src: Object2, top: '15%', right: '8%', rotate: 20, scale: 0.9 },
    { src: Object3, top: '35%', left: '3%', rotate: -25, scale: 0.7 },
    { src: ChatGPTFlower4, top: '45%', right: '5%', rotate: 15, scale: 0.85 },
    { src: ChatGPTFlower5, bottom: '35%', left: '7%', rotate: -20, scale: 0.75 },
    { src: ChatGPTFlower6, bottom: '20%', right: '10%', rotate: 25, scale: 0.8 },
    { src: ChatGPTFlower7, bottom: '10%', left: '12%', rotate: -10, scale: 0.7 },
  ];

  return (
    <section className="rsvp" ref={ref}>
      {/* Fixed decorative flowers */}
      {flowers.map((flower, index) => (
        <motion.img
          key={index}
          src={flower.src}
          className="rsvp-flower"
          style={{
            top: flower.top,
            bottom: flower.bottom,
            left: flower.left,
            right: flower.right,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={isInView ? {
            opacity: 0.3,
            scale: flower.scale,
            rotate: flower.rotate
          } : {
            opacity: 0,
            scale: 0,
            rotate: 0
          }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          alt=""
        />
      ))}

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

          <motion.p
            className="rsvp-deadline"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Просимо підтвердити якомога раніше
          </motion.p>

          <p className="rsvp-message">
            Просимо вас заповнити форму, де ви зможете підтвердити свою присутність на святі
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
      </motion.div>
    </section>
  );
};

export default RSVP;
