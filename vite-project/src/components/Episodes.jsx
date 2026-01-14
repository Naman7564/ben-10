import React from "react";
import "./Episodes.css";
import { motion } from "framer-motion";

const Episodes = () => {
    const episodes = [
        {
            id: 1,
            title: "And Then There Were 10",
            season: "Season 1",
            episode: "Episode 1",
            description: "Ben discovers the Omnitrix and transforms for the first time.",
            image: "/images/episode1.jpg",
            duration: "22 min",
        },
        {
            id: 2,
            title: "Washington B.C.",
            season: "Season 1",
            episode: "Episode 2",
            description: "Ben battles Dr. Animo and his mutant creatures in Washington D.C.",
            image: "/images/episode2.jpg",
            duration: "22 min",
        },
        {
            id: 3,
            title: "The Krakken",
            season: "Season 1",
            episode: "Episode 3",
            description: "A sea monster threatens a cruise ship, and Ben must save the day.",
            image: "/images/episode3.jpg",
            duration: "22 min",
        },
        {
            id: 4,
            title: "Permanent Retirement",
            season: "Season 1",
            episode: "Episode 4",
            description: "Ben visits his Aunt Vera's retirement community.",
            image: "/images/episode4.jpg",
            duration: "22 min",
        },
        {
            id: 5,
            title: "Hunted",
            season: "Season 1",
            episode: "Episode 5",
            description: "Ben becomes the prey when alien bounty hunters arrive on Earth.",
            image: "/images/episode5.jpg",
            duration: "22 min",
        },
        {
            id: 6,
            title: "Tourist Trap",
            season: "Season 1",
            episode: "Episode 6",
            description: "The team encounters a mysterious roadside attraction.",
            image: "/images/episode6.jpg",
            duration: "22 min",
        },
    ];

    return (
        <section id="episodes" className="episodes-section">
            <div className="episodes-header">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Episodes
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="episodes-subtitle"
                >
                    Relive the epic adventures of Ben Tennyson
                </motion.p>
            </div>

            <div className="episodes-grid">
                {episodes.map((episode, index) => (
                    <motion.div
                        key={episode.id}
                        className="episode-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -10 }}
                    >
                        <div className="episode-image">
                            <div className="episode-placeholder">
                                <span className="episode-number">{episode.id}</span>
                            </div>
                            <div className="episode-overlay">
                                <button className="play-button">▶</button>
                            </div>
                        </div>
                        <div className="episode-info">
                            <div className="episode-meta">
                                <span className="season-tag">{episode.season}</span>
                                <span className="duration">{episode.duration}</span>
                            </div>
                            <h3 className="episode-title">{episode.title}</h3>
                            <p className="episode-description">{episode.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Episodes;
