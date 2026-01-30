from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime, timedelta

app = FastAPI(title="Smart Farmer Assistant API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===========================
# Models
# ===========================

class FarmInput(BaseModel):
    state: str
    city: str
    season: str
    crop: Optional[str] = None

class WeatherDay(BaseModel):
    day: str
    icon: str
    temp: str
    rainfall: str
    humidity: str

class CropPrice(BaseModel):
    crop: str
    current: int
    predicted: int
    change: float
    monthly_data: List[dict]

class CropRecommendation(BaseModel):
    name: str
    icon: str
    profit: str
    season: str
    waterNeed: str
    growth: str
    recommendation: str

# ===========================
# Mock Data
# ===========================

WEATHER_DATA = {
    "kharif": [
        {"day": "Mon", "icon": "🌧️", "temp": "28°C", "rainfall": "15mm", "humidity": "85%"},
        {"day": "Tue", "icon": "⛈️", "temp": "27°C", "rainfall": "22mm", "humidity": "88%"},
        {"day": "Wed", "icon": "🌦️", "temp": "29°C", "rainfall": "12mm", "humidity": "82%"},
        {"day": "Thu", "icon": "☁️", "temp": "30°C", "rainfall": "5mm", "humidity": "78%"},
        {"day": "Fri", "icon": "🌧️", "temp": "28°C", "rainfall": "18mm", "humidity": "86%"},
        {"day": "Sat", "icon": "⛈️", "temp": "26°C", "rainfall": "25mm", "humidity": "90%"},
        {"day": "Sun", "icon": "🌦️", "temp": "27°C", "rainfall": "10mm", "humidity": "80%"}
    ],
    "rabi": [
        {"day": "Mon", "icon": "☀️", "temp": "18°C", "rainfall": "0mm", "humidity": "55%"},
        {"day": "Tue", "icon": "🌤️", "temp": "20°C", "rainfall": "0mm", "humidity": "50%"},
        {"day": "Wed", "icon": "☀️", "temp": "22°C", "rainfall": "0mm", "humidity": "48%"},
        {"day": "Thu", "icon": "🌤️", "temp": "19°C", "rainfall": "2mm", "humidity": "60%"},
        {"day": "Fri", "icon": "☁️", "temp": "17°C", "rainfall": "3mm", "humidity": "65%"},
        {"day": "Sat", "icon": "☀️", "temp": "21°C", "rainfall": "0mm", "humidity": "52%"},
        {"day": "Sun", "icon": "🌤️", "temp": "20°C", "rainfall": "0mm", "humidity": "54%"}
    ],
    "zaid": [
        {"day": "Mon", "icon": "☀️", "temp": "35°C", "rainfall": "0mm", "humidity": "40%"},
        {"day": "Tue", "icon": "🌤️", "temp": "36°C", "rainfall": "0mm", "humidity": "38%"},
        {"day": "Wed", "icon": "☀️", "temp": "38°C", "rainfall": "0mm", "humidity": "35%"},
        {"day": "Thu", "icon": "☀️", "temp": "37°C", "rainfall": "0mm", "humidity": "42%"},
        {"day": "Fri", "icon": "🌤️", "temp": "34°C", "rainfall": "2mm", "humidity": "48%"},
        {"day": "Sat", "icon": "☀️", "temp": "36°C", "rainfall": "0mm", "humidity": "40%"},
        {"day": "Sun", "icon": "☀️", "temp": "37°C", "rainfall": "0mm", "humidity": "37%"}
    ]
}

CROP_PRICES = {
    "rice": {"current": 2850, "predicted": 3200, "change": 12.3},
    "wheat": {"current": 2200, "predicted": 2450, "change": 11.4},
    "cotton": {"current": 6200, "predicted": 6800, "change": 9.7},
    "sugarcane": {"current": 3100, "predicted": 3350, "change": 8.1},
    "maize": {"current": 1950, "predicted": 2150, "change": 10.3},
    "pulses": {"current": 5800, "predicted": 6400, "change": 10.3},
    "vegetables": {"current": 2500, "predicted": 2700, "change": 8.0}
}

CROP_RECOMMENDATIONS = {
    "kharif": [
        {
            "name": "Cotton",
            "icon": "🌿",
            "profit": "High",
            "season": "Kharif (Monsoon)",
            "waterNeed": "Medium",
            "growth": "150-180 days",
            "recommendation": "Cotton thrives in warm monsoon climate. Market prices are trending upward. Good profit margins expected."
        },
        {
            "name": "Rice",
            "icon": "🌾",
            "profit": "High",
            "season": "Kharif (Monsoon)",
            "waterNeed": "High",
            "growth": "120-150 days",
            "recommendation": "Excellent choice for monsoon season. High rainfall supports rice cultivation. Expected market demand is strong."
        },
        {
            "name": "Soyabean",
            "icon": "🫘",
            "profit": "Medium",
            "season": "Kharif (Monsoon)",
            "waterNeed": "Medium",
            "growth": "90-120 days",
            "recommendation": "Good alternative with moderate returns. Growing demand for soybean oil. Lower investment required."
        }
    ],
    "rabi": [
        {
            "name": "Wheat",
            "icon": "🌾",
            "profit": "High",
            "season": "Rabi (Winter)",
            "waterNeed": "Medium",
            "growth": "110-130 days",
            "recommendation": "Perfect for winter season. Cool weather supports excellent grain development. Strong market demand guaranteed."
        },
        {
            "name": "Mustard",
            "icon": "🌻",
            "profit": "Medium",
            "season": "Rabi (Winter)",
            "waterNeed": "Low",
            "growth": "90-120 days",
            "recommendation": "Ideal for dry winter conditions. Growing demand for mustard oil. Good alternative to wheat."
        },
        {
            "name": "Pulses",
            "icon": "🫘",
            "profit": "High",
            "season": "Rabi (Winter)",
            "waterNeed": "Low",
            "growth": "100-120 days",
            "recommendation": "High market value with low water requirements. Excellent soil enrichment properties. Strong export potential."
        }
    ],
    "zaid": [
        {
            "name": "Watermelon",
            "icon": "🍉",
            "profit": "High",
            "season": "Zaid (Summer)",
            "waterNeed": "High",
            "growth": "65-90 days",
            "recommendation": "Perfect summer crop with high profit margins. Growing consumer demand in summer season. Quick returns on investment."
        },
        {
            "name": "Cucumber",
            "icon": "🥒",
            "profit": "Medium",
            "season": "Zaid (Summer)",
            "waterNeed": "Medium",
            "growth": "50-70 days",
            "recommendation": "Fast-growing vegetable with steady demand. Lower investment required. Multiple harvests possible."
        },
        {
            "name": "Muskmelon",
            "icon": "🍈",
            "profit": "Medium",
            "season": "Zaid (Summer)",
            "waterNeed": "Medium",
            "growth": "65-80 days",
            "recommendation": "Good summer alternative with moderate returns. Growing health-conscious consumer base. Export opportunities available."
        }
    ]
}

# ===========================
# Helper Functions
# ===========================

def generate_monthly_data(current: int, predicted: int) -> List[dict]:
    """Generate 6-month price trend data"""
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    start_price = current - 500
    increment = (predicted - start_price) / 5
    
    data = []
    for i, month in enumerate(months):
        price = round(start_price + (increment * i))
        data.append({"month": month, "price": price})
    
    return data

# ===========================
# API Endpoints
# ===========================

@app.get("/")
async def root():
    return {"message": "Smart Farmer Assistant API", "version": "1.0.0"}

@app.post("/api/weather")
async def get_weather(input_data: FarmInput) -> List[WeatherDay]:
    """Get 7-day weather forecast based on season"""
    season = input_data.season.lower()
    
    if season not in WEATHER_DATA:
        raise HTTPException(status_code=400, detail=f"Invalid season: {season}")
    
    return WEATHER_DATA[season]

@app.post("/api/crop-price")
async def get_crop_price(input_data: FarmInput) -> CropPrice:
    """Get crop price prediction and historical data"""
    crop = input_data.crop.lower() if input_data.crop else "rice"
    
    if crop not in CROP_PRICES:
        raise HTTPException(status_code=400, detail=f"Invalid crop: {crop}")
    
    price_data = CROP_PRICES[crop]
    monthly_data = generate_monthly_data(price_data["current"], price_data["predicted"])
    
    return CropPrice(
        crop=crop,
        current=price_data["current"],
        predicted=price_data["predicted"],
        change=price_data["change"],
        monthly_data=monthly_data
    )

@app.post("/api/recommendations")
async def get_recommendations(input_data: FarmInput) -> List[CropRecommendation]:
    """Get crop recommendations based on season"""
    season = input_data.season.lower()
    
    if season not in CROP_RECOMMENDATIONS:
        raise HTTPException(status_code=400, detail=f"Invalid season: {season}")
    
    return CROP_RECOMMENDATIONS[season]

@app.post("/api/analyze")
async def analyze_all(input_data: FarmInput) -> dict:
    """Get all data in one call (weather, price, recommendations)"""
    weather = await get_weather(input_data)
    price = await get_crop_price(input_data)
    recommendations = await get_recommendations(input_data)
    
    return {
        "weather": weather,
        "price": price,
        "recommendations": recommendations,
        "location": f"{input_data.city}, {input_data.state}"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
