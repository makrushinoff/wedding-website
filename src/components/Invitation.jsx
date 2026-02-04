import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Invitation.css';

const Invitation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="invitation" id="invitation" ref={ref}>
      <motion.div
        className="invitation-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="invitation-text"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="invitation-greeting">Дорогі наші!</p>

          <p className="invitation-main">
            Любов привела нас до одного з найщасливіших днів у нашому житті.
          </p>

          <p className="invitation-message">
            Запрошуємо вас на наше весілля, щоб разом відсвяткувати початок нашої спільної історії.
          </p>

          <p className="invitation-message">
            Ваша присутність зробить цей день ще теплішим і незабутнім.
          </p>

          <motion.div
            className="invitation-signature"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>З любов'ю,</p>
            <p className="signature-names">Андрій та Іра</p>
          </motion.div>
        </motion.div>

        {/* Decorative hearts */}
        <motion.div
          className="invitation-heart heart-left"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ♥
        </motion.div>
        <motion.div
          className="invitation-heart heart-right"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          ♥
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Invitation;
