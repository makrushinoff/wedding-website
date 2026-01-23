import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Invitation.css';

const Invitation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="invitation" ref={ref}>
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
            З великою радістю запрошуємо вас на наше весілля!
          </p>

          <p className="invitation-message">
            Цей день стане особливим для нас, і ми будемо щасливі
            поділитися цим святом з найдорожчими нам людьми.
          </p>

          <p className="invitation-message">
            Приєднуйтесь до нас, щоб разом відсвяткувати початок
            нашого спільного життя, наповненого любов'ю та щастям!
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

        {/* Decorative elements */}
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
