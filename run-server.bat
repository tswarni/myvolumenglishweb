@echo off
REM MyVolumeEnglish Java Server Launcher (Windows Batch)
REM This script compiles and runs the Java server

echo.
echo ╔════════════════════════════════════════╗
echo ║  MyVolumeEnglish - Java Server Setup   ║
echo ╚════════════════════════════════════════╝
echo.

REM Check if Java is installed
java -version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Java is not installed or not in PATH
    echo.
    echo Please install Java from: https://www.oracle.com/java/technologies/downloads/
    echo Then restart your computer and try again.
    pause
    exit /b 1
)

echo ✅ Java is installed
java -version
echo.

REM Set the port (default 8080, or use command line argument)
set PORT=8080
if not "%~1"=="" set PORT=%~1

echo 📁 Compiling JavaServer.java...
javac JavaServer.java

if errorlevel 1 (
    echo ❌ Compilation failed!
    pause
    exit /b 1
)

echo ✅ Compilation successful!
echo.
echo 🚀 Starting server on port %PORT%...
echo.

REM Run the server
java JavaServer %PORT%

pause
