import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>🌾 Smart Farmer Assistant</h3>
                        <p>Empowering farmers with AI-powered insights for better crop planning and higher profits.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#input-section">Get Started</a></li>
                            <li><a href="#weather-section">Weather</a></li>
                            <li><a href="#price-section">Prices</a></li>
                            <li><a href="#recommendation-section">Recommendations</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>📧 support@smartfarmer.com</p>
                        <p>📱 +91 98765 43210</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Smart Farmer Assistant | Built with React & FastAPI</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
