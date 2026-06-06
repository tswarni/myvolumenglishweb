#!/usr/bin/env pwsh

# MyVolumeEnglish Java Server Launcher (PowerShell)
# This script compiles and runs the Java server

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  MyVolumeEnglish - Java Server Setup   ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if Java is installed
try {
    $javaVersion = java -version 2>&1
    Write-Host "✅ Java is installed" -ForegroundColor Green
    Write-Host $javaVersion[0]
}
catch {
    Write-Host "❌ Error: Java is not installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Java from: https://www.oracle.com/java/technologies/downloads/" -ForegroundColor Yellow
    Write-Host "Then restart your computer and try again."
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Set the port (default 8080, or use command line argument)
$port = if ($args.Count -gt 0) { $args[0] } else { 8080 }

Write-Host "📁 Compiling JavaServer.java..." -ForegroundColor Yellow
javac JavaServer.java

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Compilation failed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Compilation successful!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Starting server on port $port..." -ForegroundColor Cyan
Write-Host ""

# Run the server
java JavaServer $port
