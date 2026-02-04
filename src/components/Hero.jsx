import {motion} from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/img_1.png';
import ringImage from '../assets/img_4.png';
import weddingIcon from '../assets/wedding.svg';

const Hero = () => {
    return (
        <section className="hero">
            {/* Mobile invitation title */}
            <motion.div
                className="invitation-title-mobile"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.3}}
            >
                <p>Запрошення на весілля</p>
            </motion.div>

            <div className="hero-grid">
                <div className="hero-images">
                    <motion.div
                        className="image-1"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, ease: "easeOut"}}
                    >
                        <img src={heroImage} alt="Андрій та Іра"/>
                    </motion.div>

                    <motion.div
                        className="image-2"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                    >
                        <img src={ringImage} alt="Обручки"/>
                    </motion.div>
                </div>

                <div className="hero-content">
                    {/* Desktop invitation title */}
                    <motion.div
                        className="invitation-title-desktop"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        <p>Запрошення на весілля</p>
                    </motion.div>

                    {/* Імена */}
                    <motion.div
                        className="names"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.6}}
                    >
                        <h1>Андрій та Іра</h1>
                    </motion.div>

                    {/* Дата */}
                    <motion.div
                        className="date"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.8}}
                    >
                        <div className="date-line"></div>
                        <p>17 травня 2026</p>
                        <div className="date-line"></div>
                    </motion.div>
                </div>
            </div>
            {/* Scroll indicator */}
            <motion.button
                className="scroll-indicator"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 1,
                    delay: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5
                }}
                onClick={() => {
                    const invitation = document.getElementById('invitation');
                    if (invitation) invitation.scrollIntoView({behavior: 'smooth'});
                }}
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
            >
                <div className="scroll-arrow">↓</div>
                <div className="scroll-text">Прокрутіть вниз</div>
            </motion.button>
        </section>
    )
}

export default Hero;

// {/* Elegant ornamental patterns */}
// {/*<div className="ornament ornament-corner-tl"></div>*/}
// {/*<div className="ornament ornament-corner-tr"></div>*/}
// {/*<div className="ornament ornament-corner-bl"></div>*/}
// {/*<div className="ornament ornament-corner-br"></div>*/}
// {/*<div className="ornament ornament-divider-top"></div>*/}
// {/*<div className="ornament ornament-divider-bottom"></div>*/}
