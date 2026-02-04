import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Transfer.css';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Transfer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="transfer" ref={ref}>
      <motion.div
        className="transfer-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Трансфер до локацій
        </motion.h2>
        <motion.p className="transfer-subtitle" variants={itemVariants}>
          Оскільки локація знаходиться доволі далеко від Тернополя - ми організували безкоштовний трансфер для всіх гостей
        </motion.p>

        <motion.div className="buses-container" variants={itemVariants}>
          {/* Автобус 1 */}
          <motion.div
            className="bus-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bus-icon-wrapper">
              <DirectionsBusIcon sx={{ fontSize: 50, color: '#FFFFFF' }} />
            </div>
            <h3 className="bus-title">Підгайці</h3>
            <div className="bus-info">
              <p className="bus-time">Час відправлення: 10:00</p>
              <p className="bus-note">Місце збору буде уточнено</p>
              <a
                href="https://maps.google.com/maps?q=Pidhaytsi,+Ternopil+Oblast,+Ukraine"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                <LocationOnIcon sx={{ fontSize: 18 }} />
                <span>Показати на карті</span>
              </a>
            </div>
          </motion.div>

          {/* Автобус 2 */}
          <motion.div
            className="bus-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bus-icon-wrapper">
              <DirectionsBusIcon sx={{ fontSize: 50, color: '#FFFFFF' }} />
            </div>
            <h3 className="bus-title">Тернопіль</h3>
            <div className="bus-info">
              <p className="bus-time">Час відправлення: 11:30</p>
              <p className="bus-note">Збір на Збаразькому кільці</p>
              <a
                href="https://maps.google.com/maps?q=49.5570,25.5895"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                <LocationOnIcon sx={{ fontSize: 18 }} />
                <span>Показати на карті</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.p className="transfer-footer" variants={itemVariants}>
          Автобуси повернуть вас назад після святкування
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Transfer;