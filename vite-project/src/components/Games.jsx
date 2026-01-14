import React from "react";
import "./Games.css";
import { motion } from "framer-motion";
import { FaGamepad, FaTrophy, FaUsers } from "react-icons/fa";

const Games = () => {
    const games = [
        {
            id: 1,
            title: "Alien Rush",
            category: "Action",
            players: "Single Player",
            description: "Race through alien worlds and defeat enemies as your favorite Ben 10 aliens!",
            icon: <FaGamepad />,
            difficulty: "Easy",
        },
        {
            id: 2,
            title: "Omnitrix Battle",
            category: "Fighting",
            players: "Multiplayer",
            description: "Challenge your friends in epic alien vs alien battles!",
            icon: <FaTrophy />,
            difficulty: "Medium",
        },
        {
            id: 3,
            title: "Alien Puzzle Quest",
            category: "Puzzle",
            players: "Single Player",
            description: "Solve mind-bending puzzles using unique alien abilities.",
            icon: <FaGamepad />,
            difficulty: "Hard",
        },
        {
            id: 4,
            title: "Team Tennyson",
            category: "Adventure",
            players: "Co-op",
            description: "Join forces with Gwen and Grandpa Max in this cooperative adventure!",
            icon: <FaUsers />,
            difficulty: "Medium",
        },
    ];

    return (
        <section id="games" className="games-section">
            <div className="games-header">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Games
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="games-subtitle"
                >
                    Play as your favorite aliens and save the world!
                </motion.p>
            </div>

            <div className="games-grid">
                {games.map((game, index) => (
                    <motion.div
                        key={game.id}
                        className="game-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -15 }}
                    >
                        <div className="game-icon">{game.icon}</div>
                        <div className="game-content">
                            <div className="game-tags">
                                <span className="category-tag">{game.category}</span>
                                <span className={`difficulty-tag ${game.difficulty.toLowerCase()}`}>
                                    {game.difficulty}
                                </span>
                            </div>
                            <h3 className="game-title">{game.title}</h3>
                            <p className="game-description">{game.description}</p>
                            <div className="game-footer">
                                <span className="players-info">{game.players}</span>
                                <button className="play-game-btn">Play Now</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="games-cta"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h3>Ready for More Action?</h3>
                <p>Download the Ben 10 mobile app for exclusive games and content!</p>
                <button className="download-btn">Download App</button>
            </motion.div>
        </section>
    );
};

export default Games;
