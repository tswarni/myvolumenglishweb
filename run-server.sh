#!/bin/bash

# MyVolumeEnglish Java Server Launcher (Mac/Linux)
# This script compiles and runs the Java server

echo ""
echo "╔════════════════════════════════════════╗"
echo "║  MyVolumeEnglish - Java Server Setup   ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "❌ Error: Java is not installed"
    echo ""
    echo "Please install Java from: https://www.oracle.com/java/technologies/downloads/"
    echo ""
    echo "For Mac using Homebrew:"
    echo "  brew install openjdk"
    echo ""
    echo "For Linux (Ubuntu/Debian):"
    echo "  sudo apt install default-jdk"
    echo ""
    echo "Then restart your terminal and try again."
    exit 1
fi

echo "✅ Java is installed"
java -version
echo ""

# Set the port (default 8080, or use command line argument)
PORT=${1:-8080}

echo "📁 Compiling JavaServer.java..."
javac JavaServer.java

if [ $? -ne 0 ]; then
    echo "❌ Compilation failed!"
    exit 1
fi

echo "✅ Compilation successful!"
echo ""
echo "🚀 Starting server on port $PORT..."
echo ""

# Run the server
java JavaServer $PORT
