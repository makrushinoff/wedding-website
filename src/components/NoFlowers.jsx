import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import './NoFlowers.css';

const NoFlowers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section className="no-flowers" id="no-flowers" ref={ref}>
      <motion.div
        className="no-flowers-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flower-icon-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LocalFloristIcon className="flower-icon" />
        </motion.div>

        <motion.div
          className="no-flowers-text"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="no-flowers-title">Про квіти</h2>

          <p className="no-flowers-message">
            Ми дуже цінуємо ваші наміри, але дуже просимо
            не дарувати нам живі квіти.
          </p>

          <p className="no-flowers-reason">
            Якщо все ж маєте таке бажання - краще обрати щось більш практичне, що залишиться з нами надовго і буде нагадувати про цей день.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NoFlowers;