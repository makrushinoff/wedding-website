import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="footer" ref={ref}>
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="footer-contacts"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="contact-section">
            <h4 className="contact-title">Андрій</h4>
            <div className="contact-info">
              <PhoneIcon sx={{ fontSize: 18, color: '#C5A880' }} />
              <a href="tel:+380958429377" className="contact-link">+380 95 84 29 377</a>
            </div>
            <div className="contact-info">
              <EmailIcon sx={{ fontSize: 18, color: '#C5A880' }} />
              <a href="mailto:makrushinoff@gmail.com" className="contact-link">makrushinoff@gmail.com</a>
            </div>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-section">
            <h4 className="contact-title">Іра</h4>
            <div className="contact-info">
              <PhoneIcon sx={{ fontSize: 18, color: '#C5A880' }} />
              <a href="tel:+380680328939" className="contact-link">+380 68 032 89 39</a>
            </div>
            <div className="contact-info">
              <EmailIcon sx={{ fontSize: 18, color: '#C5A880' }} />
              <a href="mailto:foxmaster110518@gmail.com" className="contact-link">foxmaster110518@gmail.com</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-message"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FavoriteIcon sx={{ fontSize: 20, color: '#FFD3D8' }} />
          <p>Дякуємо, що будете з нами у цей особливий день!</p>
          <FavoriteIcon sx={{ fontSize: 20, color: '#FFD3D8' }} />
        </motion.div>

        <motion.p
          className="footer-copyright"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          © 2026 Андрій & Іра
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;