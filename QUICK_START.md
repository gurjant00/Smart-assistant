# 🚀 Quick Start Guide

## Prerequisites

Before running the application, you need to install:

1. **Python** - [Download here](https://www.python.org/downloads/)
   - ✅ Check "Add Python to PATH" during installation
   
2. **Node.js** - [Download here](https://nodejs.org/)
   - ✅ Check "Add to PATH" during installation

3. **Restart your computer** after installation

## Installation & Run

### Method 1: Using Batch Files (Easiest)

1. **Double-click** `install.bat` to install all dependencies
2. **Double-click** `start.bat` to run the application
3. Your browser will automatically open to `http://localhost:3000`

### Method 2: Manual Commands

**Step 1 - Install Backend:**
```bash
cd backend
pip install -r requirements.txt
```

**Step 2 - Install Frontend:**
```bash
cd frontend
npm install
```

**Step 3 - Run Both Servers:**

Open **two separate terminals**:

**Terminal 1 (Backend):**
```bash
cd backend
python main.py
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## ❌ Troubleshooting

### "Python/npm not recognized"
- Install Python and Node.js (see Prerequisites above)
- Restart your computer
- Make sure "Add to PATH" was checked during installation

### "Port already in use"
- Close any programs using port 3000 or 8000
- Or change the ports in the configuration files

### Backend won't start
- Make sure you're in the `backend` folder
- Check that `requirements.txt` exists
- Try: `pip install fastapi uvicorn pydantic`

### Frontend won't start
- Make sure you're in the `frontend` folder
- Delete `node_modules` folder and run `npm install` again
- Check that `package.json` exists

## 🎯 What to Expect

Once both servers are running:
1. Fill out the form with your location and season
2. Click "Get Recommendations"
3. View weather forecasts, price predictions, and crop recommendations
4. All data is mock/demo data for demonstration purposes

---

**Need Help?** Check the full [README.md](README.md) for detailed documentation.
