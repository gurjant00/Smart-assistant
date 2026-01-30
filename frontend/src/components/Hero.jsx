import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToInput = () => {
        document.getElementById('input-section')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-icon">🌾</div>
                    <h1 className="hero-title">Smart Farmer Assistant</h1>
                    <p className="hero-tagline">
                        Predict Weather. Analyze Crop Prices. Grow Smart.
                    </p>
                    <button className="btn-primary" onClick={scrollToInput}>
                        Get Started
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M7.5 15L12.5 10L7.5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
