import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Details.css';
import backgroundImage from '../assets/img.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {
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
    <section className="details" ref={ref} style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <motion.div
        className="details-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Час і місце проведення
        </motion.h2>

        <motion.div className="events-container" variants={itemVariants}>
          {/* Вінчання */}
          <motion.div
            className="event-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="event-title">Вінчання</h3>
            <div className="event-info">
              <p className="event-time">12:00</p>
              <p className="event-label">Церква Св. Михаїла</p>
              <p className="event-location">Тернопіль</p>
              <motion.button
                className="location-button"
                onClick={() => window.open('https://maps.google.com/?q=Церква+Св.+Михаїла+Тернопіль', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Показати на карті
                <LocationOnIcon sx={{ fontSize: 18, marginLeft: '0.5rem' }} />
              </motion.button>
            </div>
          </motion.div>

          {/* Весілля */}
          <motion.div
            className="event-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="event-title">Святкування</h3>
            <div className="event-info">
              <p className="event-time">14:00</p>
              <p className="event-label">Літепло</p>
              <p className="event-location">30 км від Тернополя</p>
              <motion.button
                className="location-button"
                onClick={() => window.open('https://maps.google.com/?q=Літепло+Тернопільська+область', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Показати на карті
                <LocationOnIcon sx={{ fontSize: 18, marginLeft: '0.5rem' }} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Details;
