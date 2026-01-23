import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Чи потрібно підтверджувати присутність?',
      answer: 'Так, будь ласка, підтвердіть вашу присутність до 1 травня 2026 року через форму RSVP на сайті або за телефоном.',
      icon: '✉️'
    },
    {
      question: 'Чи можу я прийти з другом/подругою?',
      answer: 'Ми будемо раді бачити вас з супутником! Просто вкажіть це при підтвердженні присутності.',
      icon: '👥'
    },
    {
      question: 'Що з дрес-кодом?',
      answer: 'Дрес-код: святковий casual. Ми будемо раді, якщо ваш образ включатиме пастельні відтінки з нашої кольорової гами.',
      icon: '👔'
    },
    {
      question: 'Чи будуть розваги для дітей?',
      answer: 'Так! Ми плануємо зону для дітей з аніматорами та іграми.',
      icon: '🎈'
    },
    {
      question: 'Де припаркувати автомобіль?',
      answer: 'На території "Літепло" є безкоштовна парковка для гостей. Додаткові деталі будуть на карті.',
      icon: '🚗'
    },
    {
      question: 'Чи можна робити фото та відео?',
      answer: 'Так, звичайно! Але під час церемонії просимо робити фото без спалаху. У нас буде професійний фотограф.',
      icon: '📷'
    },
    {
      question: 'Що подарувати?',
      answer: 'Ваша присутність - найкращий подарунок! Якщо хочете, ми будемо вдячні за фінансову допомогу на наше майбутнє.',
      icon: '🎁'
    },
    {
      question: 'Як зв\'язатись з вами?',
      answer: 'Ви можете написати нам у месенджери або зателефонувати. Контакти є внизу сайту.',
      icon: '📞'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq" ref={ref}>
      <motion.div
        className="faq-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Часті питання</h2>
        <p className="faq-subtitle">
          Зібрали відповіді на найпопулярніші запитання. Натисніть на питання, щоб побачити відповідь!
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="faq-icon">{faq.icon}</span>
                <span className="faq-question-text">{faq.question}</span>
                <motion.span
                  className="faq-toggle"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-contact"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Не знайшли відповідь на ваше питання?</p>
          <motion.button
            className="faq-contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Напишіть нам
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="faq-ornament ornament-question-left"></div>
      <div className="faq-ornament ornament-question-right"></div>
    </section>
  );
};

export default FAQ;
