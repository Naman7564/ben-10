import React from "react";
import "./MobileHeader.css";
import { FaChevronLeft, FaShareAlt } from "react-icons/fa";

const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <button className="header-btn back-btn">
                <FaChevronLeft size={20} />
            </button>
            <h2 className="header-title">Alien Encyclopedia</h2>
            <button className="header-btn share-btn">
                <FaShareAlt size={18} />
            </button>
        </div>
    );
};

export default MobileHeader;
