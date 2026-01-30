import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: '🌦️',
            title: 'Accurate Weather Predictions',
            description: 'Plan your farming activities with 7-day AI-powered weather forecasts including temperature, rainfall predictions.'
        },
        {
            icon: '💰',
            title: 'Market Price Insights',
            description: 'Make data-driven decisions with real-time crop price analysis and market trend predictions.'
        },
        {
            icon: '🌾',
            title: 'Smart Crop Selection',
            description: 'Get AI-powered recommendations on which crops to plant based on season and market conditions.'
        },
        {
            icon: '📈',
            title: 'Maximize Your Profits',
            description: 'Optimize farming strategy to achieve 20-30% higher yields and better ROI with smart planning.'
        },
        {
            icon: '🌱',
            title: 'Sustainable Farming',
            description: 'Reduce crop failures by 40% and minimize resource waste by planting the right crops.'
        },
        {
            icon: '📱',
            title: 'Easy & Fast',
            description: 'Simple mobile-friendly interface designed for farmers with quick insights in under 60 seconds.'
        }
    ];

    return (
        <section className="benefits-section">
            <div className="container">
                <h2 className="section-title">Why This Helps Farmers</h2>
                <p className="section-subtitle">
                    Empowering farmers with data-driven insights for better crop planning and higher profits
                </p>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
