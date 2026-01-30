import React, { useState } from 'react';
import './InputSection.css';

const InputSection = ({ onAnalyze, loading, error }) => {
    const [formData, setFormData] = useState({
        state: '',
        city: '',
        season: '',
        crop: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnalyze(formData);
    };

    return (
        <section id="input-section" className="input-section">
            <div className="container">
                <h2 className="section-title">🌱 Find Your Best Crop</h2>
                <p className="section-subtitle">
                    Enter your location and season to get personalized farming recommendations
                </p>

                <div className="input-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <select
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select State</option>
                                    <option value="punjab">Punjab</option>
                                    <option value="haryana">Haryana</option>
                                    <option value="uttar-pradesh">Uttar Pradesh</option>
                                    <option value="madhya-pradesh">Madhya Pradesh</option>
                                    <option value="maharashtra">Maharashtra</option>
                                    <option value="karnataka">Karnataka</option>
                                    <option value="andhra-pradesh">Andhra Pradesh</option>
                                    <option value="tamil-nadu">Tamil Nadu</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City / District</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Enter your city"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="season">Season</label>
                                <select
                                    id="season"
                                    name="season"
                                    value={formData.season}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Season</option>
                                    <option value="kharif">Kharif (Monsoon)</option>
                                    <option value="rabi">Rabi (Winter)</option>
                                    <option value="zaid">Zaid (Summer)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="crop">Crop (Optional)</label>
                                <select
                                    id="crop"
                                    name="crop"
                                    value={formData.crop}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Crop</option>
                                    <option value="rice">Rice</option>
                                    <option value="wheat">Wheat</option>
                                    <option value="cotton">Cotton</option>
                                    <option value="sugarcane">Sugarcane</option>
                                    <option value="maize">Maize</option>
                                    <option value="pulses">Pulses</option>
                                    <option value="vegetables">Vegetables</option>
                                </select>
                            </div>
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button type="submit" className="btn-submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="loading-spinner"></span>
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    Get Recommendations 🔍
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default InputSection;
