# Smart Farmer Assistant - React + FastAPI

A full-stack web application that helps farmers make data-driven decisions about crop selection using weather predictions and crop price analysis.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **Recharts** - Charts and data visualization

### Backend
- **FastAPI** - High-performance Python web framework
- **Uvicorn** - ASGI web server
- **Pydantic** - Data validation

## 📁 Project Structure

```
Nirman/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
│
└── frontend/
    ├── src/
    │   ├── components/      # React components
    │   │   ├── Hero.jsx
    │   │   ├── InputSection.jsx
    │   │   ├── WeatherSection.jsx
    │   │   ├── PriceSection.jsx
    │   │   ├── RecommendationSection.jsx
    │   │   ├── BenefitsSection.jsx
    │   │   └── Footer.jsx
    │   ├── services/
    │   │   └── api.js       # API service
    │   ├── App.jsx          # Main app component
    │   ├── main.jsx         # Entry point
    │   └── index.css        # Global styles
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download Python](https://www.python.org/)
- **npm** or **yarn** package manager

### Step 1: Install Node.js (if not installed)
Download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm.

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
```

3. Activate the virtual environment:
- **Windows:**
  ```bash
  venv\Scripts\activate
  ```
- **Mac/Linux:**
  ```bash
  source venv/bin/activate
  ```

4. Install Python dependencies:
```bash
pip install -r requirements.txt
```

5. Start the FastAPI server:
```bash
python main.py
```

The backend will run at: **http://localhost:8000**

API Documentation: **http://localhost:8000/docs**

### Step 3: Frontend Setup

1. Open a **new terminal** and navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run at: **http://localhost:3000**

## 🎯 Usage

1. **Make sure both servers are running:**
   - Backend: `http://localhost:8000`
   - Frontend: `http://localhost:3000`

2. **Open your browser** and go to `http://localhost:3000`

3. **Fill out the form:**
   - Select your state (e.g., Punjab)
   - Enter your city (e.g., Ludhiana)
   - Choose a season (Kharif, Rabi, or Zaid)
   - Optionally select a crop

4. **Click "Get Recommendations"** to see:
   - 7-day weather forecast
   - Crop price predictions with chart
   - Top 3 recommended crops for your season

## 🌐 API Endpoints

### Backend API Routes

**Base URL:** `http://localhost:8000`

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | API health check |
| `/api/weather` | POST | Get 7-day weather forecast |
| `/api/crop-price` | POST | Get crop price predictions |
| `/api/recommendations` | POST | Get crop recommendations |
| `/api/analyze` | POST | Get all data in one call |

### Example API Request

```javascript
// POST /api/analyze
{
  "state": "punjab",
  "city": "Ludhiana",
  "season": "kharif",
  "crop": "rice"
}
```

## 🎨 Features

✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Weather Forecasting** - 7-day weather predictions with icons
✅ **Price Analysis** - Interactive bar charts showing price trends
✅ **Crop Recommendations** - AI-powered suggestions based on season
✅ **Modern UI** - Clean, agriculture-themed design with smooth animations
✅ **Fast Performance** - Optimized with Vite and FastAPI

## 🐛 Troubleshooting

### Backend Issues

**Error: `npm: command not found`**
- Install Node.js from [nodejs.org](https://nodejs.org/)

**Error: `pip: command not found`**
- Ensure Python is installed and added to PATH

**Error: `ModuleNotFoundError`**
- Activate virtual environment and run `pip install -r requirements.txt`

### Frontend Issues

**Error: `Cannot connect to backend`**
- Ensure backend server is running on port 8000
- Check Vite proxy configuration in `vite.config.js`

**Error: `Module not found`**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Backend Deployment
For production, use a production ASGI server:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available for educational and demonstration purposes.

## 👨‍💻 Developer

Built with ❤️ for farmers everywhere

---

**Note:** This is a demo application with mock data. For production use, integrate real weather APIs and market price databases.
