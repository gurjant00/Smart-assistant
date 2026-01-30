@echo off
echo ========================================
echo  Smart Farmer Assistant - Installation
echo ========================================
echo.

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Python is not installed or not in PATH
    echo Please install Python first from: https://www.python.org/downloads/
    pause
    exit /b 1
)

REM Check if Node.js/npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js/npm is not installed or not in PATH
    echo Please install Node.js first from: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Python found
echo [OK] Node.js/npm found
echo.

REM Install Backend Dependencies
echo ========================================
echo  Installing Backend Dependencies...
echo ========================================
cd /d %~dp0backend
pip install -r requirements.txt
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install backend dependencies
    pause
    exit /b 1
)
echo [OK] Backend dependencies installed
echo.

REM Install Frontend Dependencies
echo ========================================
echo  Installing Frontend Dependencies...
echo ========================================
cd /d %~dp0frontend
npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install frontend dependencies
    pause
    exit /b 1
)
echo [OK] Frontend dependencies installed
echo.

echo ========================================
echo  Installation Complete!
echo ========================================
echo.
echo You can now run the application using start.bat
echo.
pause
