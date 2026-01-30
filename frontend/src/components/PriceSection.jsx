import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PriceSection.css';

const PriceSection = ({ price }) => {
    if (!price) return null;

    const capitalizeWords = (str) => {
        return str.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    return (
        <section id="price-section" className="price-section">
            <div className="container">
                <h2 className="section-title">Crop Price Analysis</h2>
                <p className="section-subtitle">
                    Market trends and price predictions for <strong>{capitalizeWords(price.crop)}</strong>
                </p>

                <div className="price-grid">
                    <div className="price-card">
                        <div className="price-icon">💰</div>
                        <h3>Current Market Price</h3>
                        <div className="current-price">
                            <span className="price-value">₹{price.current.toLocaleString()}</span>
                            <span className="price-unit">per quintal</span>
                        </div>
                    </div>

                    <div className="price-card">
                        <div className="price-icon">📈</div>
                        <h3>Predicted Price (30 days)</h3>
                        <div className="predicted-price">
                            <span className="price-value trend-up">₹{price.predicted.toLocaleString()}</span>
                            <span className="price-change">+{price.change}%</span>
                        </div>
                    </div>

                    <div className="price-card">
                        <div className="price-icon">🎯</div>
                        <h3>Profit Potential</h3>
                        <div className="profit-potential">
                            <span className="price-value">₹{(price.predicted - price.current).toLocaleString()}</span>
                            <span className="price-unit">potential gain</span>
                        </div>
                    </div>
                </div>

                <div className="chart-container">
                    <h3 className="chart-title">6-Month Price Comparison Graph</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={price.monthly_data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="price" fill="#4caf50" name="Price (₹/quintal)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default PriceSection;
