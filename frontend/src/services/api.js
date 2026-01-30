import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const analyzeAll = async (inputData) => {
    const response = await api.post('/api/analyze', inputData);
    return response.data;
};

export const getWeather = async (inputData) => {
    const response = await api.post('/api/weather', inputData);
    return response.data;
};

export const getCropPrice = async (inputData) => {
    const response = await api.post('/api/crop-price', inputData);
    return response.data;
};

export const getRecommendations = async (inputData) => {
    const response = await api.post('/api/recommendations', inputData);
    return response.data;
};

export default api;
