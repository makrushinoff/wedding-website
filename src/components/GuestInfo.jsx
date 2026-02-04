import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './GuestInfo.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import photo1 from '../assets/IMG_1196.JPG';
import photo2 from '../assets/IMG_1197.JPG';
import photo3 from '../assets/IMG_1198.JPG';
import photo4 from '../assets/IMG_1199.JPG';
import photo5 from '../assets/IMG_1200.JPG';

const GuestInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const photos = [
    { src: photo1, alt: 'Фото з племінниками 1' },
    { src: photo2, alt: 'Фото з племінниками 2' },
    { src: photo3, alt: 'Фото з племінниками 3' },
    { src: photo4, alt: 'Фото з племінниками 4' },
    { src: photo5, alt: 'Фото з племінниками 5' }
  ];

  return (
    <section className="guest-info" id="info" ref={ref}>
      <motion.div
        className="guest-info-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="heart-icon-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FavoriteIcon sx={{ fontSize: 60, color: '#FFD3D8' }} />
        </motion.div>

        <h2 className="section-title">Діти - дуже бажані гості на нашому святі</h2>

        <motion.div
          className="message-box"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="main-message">
            Ми дуже любимо дітей та не уявляємо наше святкування без них
            Тож будемо вельми вдячні, якщо батьки не залишать їх сумувати вдома!
          </p>
          <p className="sub-message">
            Святкування буде веселим для всіх, і ми подбаємо про те,
            щоб малечі було цікаво та комфортно, а батьки мали час трохи відпочити.
          </p>
        </motion.div>

        {photos.length > 0 && (
          <>
            {/* Фотографії зліва */}
            <motion.div
              className="photos-stack photos-left"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {photos.slice(0, Math.ceil(photos.length / 2)).map((photo, index) => (
                <motion.div
                  key={`left-${index}`}
                  className="photo-item"
                  style={{ zIndex: photos.length - index }}
                  initial={{ opacity: 0, rotate: -5 + index * 2 }}
                  animate={isInView ? {
                    opacity: 1,
                    rotate: -5 + index * 2
                  } : {
                    opacity: 0,
                    rotate: -5 + index * 2
                  }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 0,
                    zIndex: 100,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Фотографії справа */}
            <motion.div
              className="photos-stack photos-right"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {photos.slice(Math.ceil(photos.length / 2)).map((photo, index) => (
                <motion.div
                  key={`right-${index}`}
                  className="photo-item"
                  style={{ zIndex: photos.length - index }}
                  initial={{ opacity: 0, rotate: 5 - index * 2 }}
                  animate={isInView ? {
                    opacity: 1,
                    rotate: 5 - index * 2
                  } : {
                    opacity: 0,
                    rotate: 5 - index * 2
                  }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 0,
                    zIndex: 100,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default GuestInfo;