@echo off
echo ========================================
echo  Smart Farmer Assistant - Starting...
echo ========================================
echo.

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Python is not installed or not in PATH
    echo Please install Python from: https://www.python.org/downloads/
    echo Make sure to check "Add Python to PATH" during installation
    pause
    exit /b 1
)

REM Check if Node.js/npm is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js/npm is not installed or not in PATH
    echo Please install Node.js from: https://nodejs.org/
    echo Make sure to check "Add to PATH" during installation
    pause
    exit /b 1
)

echo [OK] Python found
echo [OK] Node.js found
echo.

REM Start Backend Server in a new window
echo Starting FastAPI Backend Server...
start "Smart Farmer - Backend" cmd /c "cd /d %~dp0backend && uvicorn main:app --host 0.0.0.0 --port 8000"

REM Wait a moment for backend to initialize
timeout /t 3 /nobreak >nul

REM Start Frontend Server in a new window
echo Starting React Frontend Server...
start "Smart Farmer - Frontend" cmd /c "cd /d %~dp0frontend && npm run dev"

echo.
echo ========================================
echo  Both servers are starting...
echo ========================================
echo  Backend:  http://localhost:8000
echo  Frontend: http://localhost:3000
echo  API Docs: http://localhost:8000/docs
echo ========================================
echo.
echo The servers are running in separate windows.
echo Close those windows to stop the servers.
echo.
echo Press any key to exit this window...
pause >nul
