import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './GuestInfo.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const GuestInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoCards = [
    {
      title: 'Як дістатись',
      icon: DirectionsCarIcon,
      text: 'Літепло знаходиться в Тернопільській області, 30 км від Тернополя. Безкоштовна парковка на території. Можемо організувати трансфер для гостей - напишіть нам!',
      color: '#FFD3D8'
    },
    {
      title: 'Для дітей',
      icon: ChildCareIcon,
      text: 'Діти дуже вітаються! Буде окрема дитяча зона з аніматорами та іграми. Дитяче меню на банкеті.',
      color: '#FFE5B4'
    },
    {
      title: 'Фото та відео',
      icon: PhotoCameraIcon,
      text: 'У нас буде професійний фотограф та відеограф. Робіть фото на свій смартфон скільки завгодно! Просимо лише утриматись від спалаху під час церемонії.',
      color: '#D5C8D9'
    },
    {
      title: 'Дрес-код',
      icon: CheckroomIcon,
      text: 'Святковий casual стиль. Ми будемо раді, якщо ваш образ буде в пастельних тонах (рожевий, м\'ятний, блакитний, беж, лаванда). Святкування буде на відкритому повітрі - врахуйте це при виборі взуття.',
      color: '#D4E5D4'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="guest-info" id="info" ref={ref}>
      <motion.div
        className="guest-info-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Корисна інформація</h2>
        <p className="guest-info-subtitle">
          Все, що вам потрібно знати перед святкуванням
        </p>

        <motion.div
          className="info-list"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {infoCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                className="info-item"
                variants={cardVariants}
              >
                <div className="info-icon-wrapper" style={{ backgroundColor: card.color }}>
                  <IconComponent className="info-icon" sx={{ fontSize: 40, color: '#FFFFFF' }} />
                </div>
                <div className="info-content">
                  <h3 className="info-title">{card.title}</h3>
                  <p className="info-text">{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="info-ornament ornament-compass-left"></div>
      <div className="info-ornament ornament-compass-right"></div>
    </section>
  );
};

export default GuestInfo;
