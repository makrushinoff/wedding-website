import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EnvelopeInvitation.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';

const EnvelopeInvitation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <section className="envelope-section">
      <motion.div
        className="envelope-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              className="envelope-wrapper"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="envelope" onClick={handleOpen}>
                {/* Envelope Back */}
                <div className="envelope-back">
                  <div className="envelope-triangle"></div>
                </div>

                {/* Envelope Front with Flap */}
                <motion.div
                  className="envelope-flap"
                  whileHover={{ rotateX: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="heart-seal">
                    <FavoriteIcon />
                  </div>
                </motion.div>

                {/* Letter Inside (Peeking) */}
                <motion.div
                  className="letter-peek"
                  initial={{ y: 0 }}
                  whileHover={{ y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="letter-content-preview">
                    <p className="monogram-preview">А & І</p>
                    <p className="text-preview">Запрошення</p>
                  </div>
                </motion.div>

                {/* Envelope Body */}
                <div className="envelope-body">
                  <div className="envelope-text">
                    <p className="envelope-names">Андрій та Іра</p>
                    <p className="envelope-hint">Натисніть щоб відкрити</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="invitation"
              className="opened-invitation"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              {/* Decorative Frame */}
              <div className="invitation-frame">
                <motion.div
                  className="corner-decoration top-left"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.div
                  className="corner-decoration top-right"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
                <motion.div
                  className="corner-decoration bottom-left"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.div
                  className="corner-decoration bottom-right"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </div>

              <motion.div
                className="invitation-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <motion.div
                  className="monogram-circle"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                >
                  <span>А & І</span>
                </motion.div>

                <motion.h2
                  className="invitation-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Запрошуємо на весілля
                </motion.h2>

                <motion.div
                  className="invitation-names"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="bride-name">Андрія</span>
                  <span className="and">&</span>
                  <span className="groom-name">Іри</span>
                </motion.div>

                <motion.div
                  className="invitation-date"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="date-line"></div>
                  <span className="date">17 травня 2026</span>
                  <div className="date-line"></div>
                </motion.div>

                <motion.p
                  className="invitation-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  Дорогі наші рідні та друзі!
                </motion.p>

                <motion.p
                  className="invitation-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  З великою радістю запрошуємо вас розділити з нами
                  найщасливіший день нашого життя. Ваша присутність
                  зробить це свято незабутнім.
                </motion.p>

                <motion.div
                  className="invitation-details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <div className="detail-item">
                    <p className="detail-label">Вінчання</p>
                    <p className="detail-time">12:00</p>
                    <p className="detail-location">Церква Св. Михаїла, Тернопіль</p>
                  </div>
                  <div className="detail-divider">•</div>
                  <div className="detail-item">
                    <p className="detail-label">Святкування</p>
                    <p className="detail-time">14:00</p>
                    <p className="detail-location">Ресторан "Літепло"</p>
                  </div>
                </motion.div>

                <motion.p
                  className="invitation-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  З любов'ю, Андрій та Іра
                </motion.p>

                {/* Floating hearts animation */}
                <motion.div
                  className="floating-hearts"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="floating-heart"
                      animate={{
                        y: [-20, -40, -20],
                        x: [0, (i - 2) * 15, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                    >
                      <FavoriteIcon />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default EnvelopeInvitation;