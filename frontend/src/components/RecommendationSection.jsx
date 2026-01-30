import React from 'react';
import './RecommendationSection.css';

const RecommendationSection = ({ recommendations, season }) => {
    if (!recommendations || recommendations.length === 0) return null;

    return (
        <section id="recommendation-section" className="recommendation-section">
            <div className="container">
                <h2 className="section-title">Top Crop Recommendations</h2>
                <p className="section-subtitle">
                    Best crops for <strong>{season}</strong> based on weather and market analysis
                </p>

                <div className="crop-cards">
                    {recommendations.map((crop, index) => (
                        <div
                            key={index}
                            className="crop-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="crop-header">
                                <span className="crop-icon">{crop.icon}</span>
                                <h3 className="crop-name">{crop.name}</h3>
                            </div>

                            <div className="crop-details">
                                <div className="crop-detail">
                                    <span className="crop-label">Expected Profit:</span>
                                    <span className={`profit-badge profit-${crop.profit.toLowerCase()}`}>
                                        {crop.profit}
                                    </span>
                                </div>
                                <div className="crop-detail">
                                    <span className="crop-label">Best Season:</span>
                                    <span className="crop-value">{crop.season}</span>
                                </div>
                                <div className="crop-detail">
                                    <span className="crop-label">💧 Water Need:</span>
                                    <span className="crop-value">{crop.waterNeed}</span>
                                </div>
                                <div className="crop-detail">
                                    <span className="crop-label">📅 Growth Period:</span>
                                    <span className="crop-value">{crop.growth}</span>
                                </div>
                            </div>

                            <div className="crop-recommendation">
                                💡 {crop.recommendation}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendationSection;
