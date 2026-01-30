// ===========================
// Mock Data
// ===========================

const mockWeatherData = {
    kharif: [
        { day: 'Mon', icon: '🌧️', temp: '28°C', rainfall: '15mm', humidity: '85%' },
        { day: 'Tue', icon: '⛈️', temp: '27°C', rainfall: '22mm', humidity: '88%' },
        { day: 'Wed', icon: '🌦️', temp: '29°C', rainfall: '12mm', humidity: '82%' },
        { day: 'Thu', icon: '☁️', temp: '30°C', rainfall: '5mm', humidity: '78%' },
        { day: 'Fri', icon: '🌧️', temp: '28°C', rainfall: '18mm', humidity: '86%' },
        { day: 'Sat', icon: '⛈️', temp: '26°C', rainfall: '25mm', humidity: '90%' },
        { day: 'Sun', icon: '🌦️', temp: '27°C', rainfall: '10mm', humidity: '80%' }
    ],
    rabi: [
        { day: 'Mon', icon: '☀️', temp: '18°C', rainfall: '0mm', humidity: '55%' },
        { day: 'Tue', icon: '🌤️', temp: '20°C', rainfall: '0mm', humidity: '50%' },
        { day: 'Wed', icon: '☀️', temp: '22°C', rainfall: '0mm', humidity: '48%' },
        { day: 'Thu', icon: '🌤️', temp: '19°C', rainfall: '2mm', humidity: '60%' },
        { day: 'Fri', icon: '☁️', temp: '17°C', rainfall: '3mm', humidity: '65%' },
        { day: 'Sat', icon: '☀️', temp: '21°C', rainfall: '0mm', humidity: '52%' },
        { day: 'Sun', icon: '🌤️', temp: '20°C', rainfall: '0mm', humidity: '54%' }
    ],
    zaid: [
        { day: 'Mon', icon: '☀️', temp: '35°C', rainfall: '0mm', humidity: '40%' },
        { day: 'Tue', icon: '🌤️', temp: '36°C', rainfall: '0mm', humidity: '38%' },
        { day: 'Wed', icon: '☀️', temp: '38°C', rainfall: '0mm', humidity: '35%' },
        { day: 'Thu', icon: '☀️', temp: '37°C', rainfall: '0mm', humidity: '42%' },
        { day: 'Fri', icon: '🌤️', temp: '34°C', rainfall: '2mm', humidity: '48%' },
        { day: 'Sat', icon: '☀️', temp: '36°C', rainfall: '0mm', humidity: '40%' },
        { day: 'Sun', icon: '☀️', temp: '37°C', rainfall: '0mm', humidity: '37%' }
    ]
};

const cropPriceData = {
    rice: { current: 2850, predicted: 3200, change: 12.3 },
    wheat: { current: 2200, predicted: 2450, change: 11.4 },
    cotton: { current: 6200, predicted: 6800, change: 9.7 },
    sugarcane: { current: 3100, predicted: 3350, change: 8.1 },
    maize: { current: 1950, predicted: 2150, change: 10.3 },
    pulses: { current: 5800, predicted: 6400, change: 10.3 },
    vegetables: { current: 2500, predicted: 2700, change: 8.0 }
};

const cropRecommendations = {
    kharif: [
        { 
            name: 'Rice', 
            icon: '🌾', 
            profit: 'High', 
            season: 'Kharif (Monsoon)',
            waterNeed: 'High',
            growth: '120-150 days',
            recommendation: 'Excellent choice for monsoon season. High rainfall supports rice cultivation. Expected market demand is strong.'
        },
        { 
            name: 'Cotton', 
            icon: '🌿', 
            profit: 'High', 
            season: 'Kharif (Monsoon)',
            waterNeed: 'Medium',
            growth: '150-180 days',
            recommendation: 'Cotton thrives in warm monsoon climate. Market prices are trending upward. Good profit margins expected.'
        },
        { 
            name: 'Maize', 
            icon: '🌽', 
            profit: 'Medium', 
            season: 'Kharif (Monsoon)',
            waterNeed: 'Medium',
            growth: '80-110 days',
            recommendation: 'Quick growing crop with moderate returns. Lower investment required compared to rice and cotton.'
        }
    ],
    rabi: [
        { 
            name: 'Wheat', 
            icon: '🌾', 
            profit: 'High', 
            season: 'Rabi (Winter)',
            waterNeed: 'Medium',
            growth: '110-130 days',
            recommendation: 'Perfect for winter season. Cool weather supports excellent grain development. Strong market demand guaranteed.'
        },
        { 
            name: 'Mustard', 
            icon: '🌻', 
            profit: 'Medium', 
            season: 'Rabi (Winter)',
            waterNeed: 'Low',
            growth: '90-120 days',
            recommendation: 'Ideal for dry winter conditions. Growing demand for mustard oil. Good alternative to wheat.'
        },
        { 
            name: 'Pulses', 
            icon: '🫘', 
            profit: 'High', 
            season: 'Rabi (Winter)',
            waterNeed: 'Low',
            growth: '100-120 days',
            recommendation: 'High market value with low water requirements. Excellent soil enrichment properties. Strong export potential.'
        }
    ],
    zaid: [
        { 
            name: 'Watermelon', 
            icon: '🍉', 
            profit: 'High', 
            season: 'Zaid (Summer)',
            waterNeed: 'High',
            growth: '65-90 days',
            recommendation: 'Perfect summer crop with high profit margins. Growing consumer demand in summer season. Quick returns on investment.'
        },
        { 
            name: 'Cucumber', 
            icon: '🥒', 
            profit: 'Medium', 
            season: 'Zaid (Summer)',
            waterNeed: 'Medium',
            growth: '50-70 days',
            recommendation: 'Fast-growing vegetable with steady demand. Lower investment required. Multiple harvests possible.'
        },
        { 
            name: 'Muskmelon', 
            icon: '🍈', 
            profit: 'Medium', 
            season: 'Zaid (Summer)',
            waterNeed: 'Medium',
            growth: '65-80 days',
            recommendation: 'Good summer alternative with moderate returns. Growing health-conscious consumer base. Export opportunities available.'
        }
    ]
};

// ===========================
// Utility Functions
// ===========================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function capitalizeWords(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// ===========================
// Weather Display
// ===========================

function displayWeather(season, location) {
    const weatherContainer = document.querySelector('.weather-cards');
    const locationName = document.getElementById('location-name');
    
    locationName.textContent = location;
    weatherContainer.innerHTML = '';
    
    const weatherData = mockWeatherData[season] || mockWeatherData.kharif;
    
    weatherData.forEach((day, index) => {
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="weather-day">${day.day}</div>
            <div class="weather-icon">${day.icon}</div>
            <div class="weather-temp">${day.temp}</div>
            <div class="weather-details">
                <div class="weather-detail">💧 ${day.rainfall}</div>
                <div class="weather-detail">💨 ${day.humidity}</div>
            </div>
        `;
        
        weatherContainer.appendChild(card);
    });
}

// ===========================
// Price Chart
// ===========================

function displayPriceChart(crop) {
    const canvas = document.getElementById('priceChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;
    
    const priceData = cropPriceData[crop] || cropPriceData.rice;
    
    // Update price displays
    document.getElementById('current-price').textContent = `₹${priceData.current.toLocaleString()}`;
    document.getElementById('predicted-price').textContent = `₹${priceData.predicted.toLocaleString()}`;
    document.getElementById('price-change').textContent = `+${priceData.change}%`;
    
    // Sample data for 6 months
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const startPrice = priceData.current - 500;
    const endPrice = priceData.predicted;
    const increment = (endPrice - startPrice) / 5;
    
    const prices = months.map((month, index) => startPrice + (increment * index));
    
    // Draw chart
    const padding = 40;
    const chartWidth = canvas.width - (padding * 2);
    const chartHeight = canvas.height - (padding * 2);
    
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    const priceRange = maxPrice - minPrice;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }
    
    // Draw line
    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    prices.forEach((price, index) => {
        const x = padding + (chartWidth / (prices.length - 1)) * index;
        const y = padding + chartHeight - ((price - minPrice) / priceRange) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#2d7a3e';
    prices.forEach((price, index) => {
        const x = padding + (chartWidth / (prices.length - 1)) * index;
        const y = padding + chartHeight - ((price - minPrice) / priceRange) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Draw labels
    ctx.fillStyle = '#6c757d';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    
    months.forEach((month, index) => {
        const x = padding + (chartWidth / (prices.length - 1)) * index;
        ctx.fillText(month, x, canvas.height - padding + 20);
    });
    
    // Y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const price = minPrice + (priceRange / 5) * (5 - i);
        const y = padding + (chartHeight / 5) * i;
        ctx.fillText(`₹${Math.round(price)}`, padding - 10, y + 5);
    }
}

// ===========================
// Crop Recommendations
// ===========================

function displayCropRecommendations(season) {
    const cropCardsContainer = document.getElementById('crop-cards');
    const selectedSeasonSpan = document.getElementById('selected-season');
    
    selectedSeasonSpan.textContent = capitalizeWords(season);
    cropCardsContainer.innerHTML = '';
    
    const recommendations = cropRecommendations[season] || cropRecommendations.kharif;
    
    recommendations.forEach((crop, index) => {
        const card = document.createElement('div');
        card.className = 'crop-card';
        card.style.animationDelay = `${index * 0.15}s`;
        
        const profitClass = `profit-${crop.profit.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="crop-header">
                <span class="crop-icon">${crop.icon}</span>
                <h3 class="crop-name">${crop.name}</h3>
            </div>
            <div class="crop-details">
                <div class="crop-detail">
                    <span class="crop-label">Expected Profit:</span>
                    <span class="profit-badge ${profitClass}">${crop.profit}</span>
                </div>
                <div class="crop-detail">
                    <span class="crop-label">Best Season:</span>
                    <span class="crop-value">${crop.season}</span>
                </div>
                <div class="crop-detail">
                    <span class="crop-label">Water Requirement:</span>
                    <span class="crop-value">${crop.waterNeed}</span>
                </div>
                <div class="crop-detail">
                    <span class="crop-label">Growth Period:</span>
                    <span class="crop-value">${crop.growth}</span>
                </div>
            </div>
            <div class="crop-recommendation">
                💡 ${crop.recommendation}
            </div>
        `;
        
        cropCardsContainer.appendChild(card);
    });
}

// ===========================
// Form Submission
// ===========================

document.getElementById('farmerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const state = formData.get('state');
    const city = formData.get('city');
    const season = formData.get('season');
    const crop = formData.get('crop') || 'rice';
    
    // Create location string
    const location = `${capitalizeWords(city)}, ${capitalizeWords(state)}`;
    
    // Display results
    displayWeather(season, location);
    displayPriceChart(crop);
    displayCropRecommendations(season);
    
    // Update selected crop name in price section
    document.getElementById('selected-crop-name').textContent = crop ? capitalizeWords(crop) : 'Rice';
    
    // Show results container
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.classList.add('active');
    
    // Scroll to weather section
    setTimeout(() => {
        scrollToSection('weather-section');
    }, 300);
});

// ===========================
// Initialize
// ===========================

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    console.log('Smart Farmer Assistant initialized');
    
    // Add animation class to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.input-card, .weather-card, .price-card, .crop-card, .benefit-card').forEach(card => {
        observer.observe(card);
    });
});

// Make scrollToSection globally available
window.scrollToSection = scrollToSection;
