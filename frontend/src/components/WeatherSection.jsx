import React from 'react';
import './WeatherSection.css';

const WeatherSection = ({ weather, location }) => {
    if (!weather || weather.length === 0) return null;

    return (
        <section id="weather-section" className="weather-section">
            <div className="container">
                <h2 className="section-title">Weather Prediction</h2>
                <p className="section-subtitle">
                    7-Day Weather Forecast for <strong>{location}</strong>
                </p>

                <div className="weather-cards">
                    {weather.map((day, index) => (
                        <div
                            key={index}
                            className="weather-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="weather-day">{day.day}</div>
                            <div className="weather-icon">{day.icon}</div>
                            <div className="weather-temp">{day.temp}</div>
                            <div className="weather-details">
                                <div className="weather-detail">
                                    <span className="weather-label">💧</span>
                                    <span>{day.rainfall}</span>
                                </div>
                                <div className="weather-detail">
                                    <span className="weather-label">💨</span>
                                    <span>{day.humidity}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeatherSection;
