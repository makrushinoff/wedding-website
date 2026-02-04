import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './PhotoUpload.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import weddingIcon from '../assets/wedding.svg';

const PhotoUpload = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleUploadClick = () => {
    // Тут буде посилання на Google Drive папку для завантаження
    window.open('https://drive.google.com/drive/folders/YOUR_FOLDER_ID', '_blank');
  };

  return (
    <section className="photo-upload" ref={ref}>
      <motion.div
        className="photo-upload-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="photo-upload-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="photo-icon-circle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PhotoCameraIcon sx={{ fontSize: 60, color: '#FFFFFF' }} />
          </motion.div>

          <h2 className="section-title">Поділіться спогадами</h2>

          <p className="photo-upload-message">
            Зробили фото чи відео на нашому святі?
            Завантажте їх у спільну папку, щоб ми могли разом насолоджуватися спогадами!
          </p>

          <motion.button
            className="upload-button"
            onClick={handleUploadClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 20px rgba(197, 217, 227, 0.3)",
                "0 8px 30px rgba(197, 217, 227, 0.5)",
                "0 4px 20px rgba(197, 217, 227, 0.3)"
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
            <CloudUploadIcon sx={{ fontSize: 24 }} />
            <span>Завантажити фото/відео</span>
          </motion.button>

          <motion.p
            className="photo-upload-note"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Папка відкриється в Google Drive. Підтримуються всі формати фото та відео
          </motion.p>
        </motion.div>

        {/* Decorative wedding icons */}
        <motion.img
          src={weddingIcon}
          alt="Wedding"
          className="photo-wedding-icon icon-1"
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
          className="photo-wedding-icon icon-2"
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
      </motion.div>
    </section>
  );
};

export default PhotoUpload;