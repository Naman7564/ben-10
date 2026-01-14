import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FaRocket, FaHeart, FaUsers, FaGlobe } from "react-icons/fa";

const About = () => {
    const stats = [
        { icon: <FaRocket />, value: "10+", label: "Alien Forms" },
        { icon: <FaGlobe />, value: "100+", label: "Episodes" },
        { icon: <FaUsers />, value: "1M+", label: "Fans Worldwide" },
        { icon: <FaHeart />, value: "15+", label: "Years Running" },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="about-title">About Ben 10</h2>
                    <p className="about-text">
                        Ben 10 follows the adventures of <strong>Ben Tennyson</strong>, a 10-year-old boy who
                        discovers a mysterious alien device called the <strong>Omnitrix</strong> during his
                        summer vacation with his Grandpa Max and cousin Gwen.
                    </p>
                    <p className="about-text">
                        The Omnitrix allows Ben to transform into <strong>10 different alien heroes</strong>,
                        each with unique superpowers. From the super-strong Four Arms to the lightning-fast XLR8,
                        Ben uses these incredible abilities to fight evil aliens and protect Earth from various
                        threats.
                    </p>
                    <p className="about-text">
                        With great power comes great responsibility, and Ben must learn to use his newfound
                        abilities wisely while balancing the challenges of being a regular kid. Join Ben on his
                        epic journey as he discovers what it truly means to be a hero!
                    </p>

                    <div className="about-features">
                        <div className="feature-item">
                            <div className="feature-icon">🎬</div>
                            <div className="feature-info">
                                <h4>Original Series</h4>
                                <p>Started in 2005, captivating audiences worldwide</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🌟</div>
                            <div className="feature-info">
                                <h4>Multiple Spin-offs</h4>
                                <p>Alien Force, Ultimate Alien, Omniverse & more</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🎮</div>
                            <div className="feature-info">
                                <h4>Games & Merchandise</h4>
                                <p>Video games, toys, and collectibles for fans</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-stats"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="omnitrix-showcase"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="omnitrix-circle">
                            <div className="omnitrix-core"></div>
                        </div>
                        <h3>The Omnitrix</h3>
                        <p>The most powerful device in the universe</p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="about-footer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="footer-text">
                    "It's hero time!" - Ben Tennyson
                </p>
            </motion.div>
        </section>
    );
};

export default About;
