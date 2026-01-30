import React, { useState } from 'react';
import Hero from './components/Hero';
import InputSection from './components/InputSection';
import WeatherSection from './components/WeatherSection';
import PriceSection from './components/PriceSection';
import RecommendationSection from './components/RecommendationSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import { analyzeAll } from './services/api';
import './App.css';

function App() {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAnalyze = async (formData) => {
        setLoading(true);
        setError(null);

        try {
            const data = await analyzeAll(formData);
            setResults(data);

            // Scroll to results after a short delay
            setTimeout(() => {
                document.getElementById('weather-section')?.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 300);
        } catch (err) {
            setError('Failed to fetch data. Please ensure the backend is running.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <Hero />
            <InputSection onAnalyze={handleAnalyze} loading={loading} error={error} />

            {results && (
                <>
                    <WeatherSection
                        weather={results.weather}
                        location={results.location}
                    />
                    <PriceSection price={results.price} />
                    <RecommendationSection
                        recommendations={results.recommendations}
                        season={results.weather?.[0]?.day || 'this season'}
                    />
                </>
            )}

            <BenefitsSection />
            <Footer />
        </div>
    );
}

export default App;
