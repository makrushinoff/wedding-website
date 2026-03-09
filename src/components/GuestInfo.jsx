import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './GuestInfo.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import photo1 from '../assets/photo_2026-03-09_12-07-18.jpg';
import photo2 from '../assets/photo_2025-06-08_18-59-45.jpg';
import photo5 from '../assets/IMG_1198.JPG';
import photo3 from '../assets/IMG_1199.JPG';
import photo4 from '../assets/IMG_1200.JPG';
import photo6 from '../assets/photo_2026-03-09_12-35-31.jpg';

const GuestInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const photos = [
    { src: photo1, alt: 'Оливка' },
    { src: photo2, alt: 'Даня і Аня' },
    { src: photo3, alt: 'Владиславчик' },
    { src: photo6, alt: 'Данька' },
    { src: photo4, alt: 'Віка' },
    { src: photo5, alt: 'Оливка і Віктор' },
  ];

  return (
    <section className="guest-info" id="info" ref={ref}>
      <motion.div
        className="guest-info-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Діти - дуже бажані гості на нашому святі</h2>

        <motion.div
          className="message-box"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="main-message">
            Ми дуже любимо дітей та не уявляємо наше святкування без них.
            Тож будемо раді, якщо батьки не залишать їх сумувати вдома!
          </p>
          <p className="sub-message">
            Святкування буде веселим для всіх, і ми подбаємо про те,
            щоб малечі було цікаво та комфортно, а батьки мали час трохи відпочити.
          </p>
        </motion.div>

        {photos.length > 0 && (
          <motion.div
            className="photos-gallery-wrapper"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="photos-gallery">
              <div className="photos-track">
                {/* Triple the photos for seamless loop */}
                {[...photos, ...photos, ...photos].map((photo, index) => (
                  <div
                    key={`photo-${index}`}
                    className="photo-item"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default GuestInfo;