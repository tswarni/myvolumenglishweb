# 🌊 MyVolumeEnglish - Java Server Setup

## Running MyVolumeEnglish with Java

This guide explains how to run MyVolumeEnglish using a Java HTTP server instead of Python or Node.js.

---

## ✅ Prerequisites

You need **Java 8 or higher** installed on your computer.

### Check if Java is Installed

**Windows (PowerShell):**
```powershell
java -version
```

**Mac/Linux (Terminal):**
```bash
java -version
```

You should see output like:
```
java version "11.0.15" 2021-10-19 LTS
Java(TM) SE Runtime Environment 18.9
```

### Install Java (if needed)

1. Visit: https://www.oracle.com/java/technologies/downloads/
2. Download Java 11 or later (Java SE Runtime Environment - JRE)
3. Install and follow the setup wizard
4. Restart your computer
5. Verify installation with `java -version`

---

## 🚀 Quick Start (Easiest Way)

### Windows Users - Using Batch Script

1. Open File Explorer
2. Navigate to: `MyVolumeEnglish` folder
3. **Double-click** `run-server.bat`
4. The server will compile and start automatically
5. Visit: **http://localhost:8080** in your browser

### Windows Users - Using PowerShell Script

1. Open PowerShell
2. Navigate to the MyVolumeEnglish folder:
   ```powershell
   cd "C:\Users\User\OneDrive\ドキュメント\tutorial\MyVolumeEnglish"
   ```
3. Run the PowerShell script:
   ```powershell
   .\run-server.ps1
   ```
4. Visit: **http://localhost:8080** in your browser

**If you get a permission error:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Mac/Linux Users

1. Open Terminal
2. Navigate to the MyVolumeEnglish folder:
   ```bash
   cd ~/Documents/tutorial/MyVolumeEnglish
   ```
3. Compile the Java server:
   ```bash
   javac JavaServer.java
   ```
4. Run the server:
   ```bash
   java JavaServer
   ```
5. Visit: **http://localhost:8080** in your browser

---

## 🎛️ Custom Port

By default, the server runs on **port 8080**. If you want to use a different port:

### Windows Batch:
```batch
run-server.bat 3000
```

### PowerShell:
```powershell
.\run-server.ps1 3000
```

### Mac/Linux:
```bash
java JavaServer 3000
```

Then visit: **http://localhost:3000**

---

## 📝 Manual Compilation & Execution

If the scripts don't work, you can manually compile and run:

### Step 1: Compile the Java File
```bash
javac JavaServer.java
```

This creates `JavaServer.class`

### Step 2: Run the Server
```bash
java JavaServer
```

Or with a custom port:
```bash
java JavaServer 3000
```

### Step 3: Access in Browser
Open your browser and visit: **http://localhost:8080**

---

## 🔧 How It Works

The `JavaServer.java` file creates a lightweight HTTP server that:

✅ **Serves static files** - HTML, CSS, JavaScript, images
✅ **Routes requests** - Directs requests to the correct files
✅ **Sets content types** - Properly handles different file types
✅ **Handles errors** - Returns appropriate HTTP status codes
✅ **CORS support** - Allows cross-origin requests
✅ **API endpoints** - Foundation for future backend features

### Key Features:

1. **Static File Serving**
   - Serves `index.html`, `styles.css`, `script.js`
   - Auto-routes `/` to `index.html`
   - Proper MIME type handling

2. **Security**
   - Prevents directory traversal attacks
   - Validates file paths
   - Access control headers

3. **Logging**
   - Timestamps for all requests
   - HTTP status codes
   - File paths accessed

4. **API Foundation**
   - `/api/health` - Server health check
   - `/api/articles` - Future articles endpoint
   - CORS headers for frontend requests

---

## 📊 Server Output

When the server starts, you should see:

```
╔════════════════════════════════════════╗
║   🌊 MyVolumeEnglish Server Running   ║
╚════════════════════════════════════════╝

📍 Server Address: http://localhost:8080
📁 Root Directory: C:\Users\User\OneDrive\ドキュメント\tutorial\MyVolumeEnglish

✅ Ready to serve files!

Press Ctrl+C to stop the server
```

---

## 🌐 Accessing the Server

Once running, you can access:

- **Main Website**: http://localhost:8080
- **Home Page**: http://localhost:8080/index.html
- **Articles Section**: http://localhost:8080#articles
- **Health Check**: http://localhost:8080/api/health

---

## 🛑 Stopping the Server

### Windows:
- Press **Ctrl + C** in the Command Prompt/PowerShell
- Or close the window

### Mac/Linux:
- Press **Ctrl + C** in the Terminal

---

## ❌ Troubleshooting

### Problem: "Java not found" or "java: command not found"
**Solution:**
1. Install Java from https://www.oracle.com/java/technologies/downloads/
2. Restart your computer
3. Try again

### Problem: "Port 8080 already in use"
**Solution:**
- Use a different port: `java JavaServer 3000`
- Or kill the process using port 8080 (see below)

**Windows - Kill process on port 8080:**
```powershell
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**Mac/Linux - Kill process on port 8080:**
```bash
lsof -i :8080
kill -9 <PID>
```

### Problem: "Permission denied" on PowerShell script
**Solution:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Problem: Compilation fails with "class file has wrong version"
**Solution:**
- Your Java version might not match the compiled files
- Delete any `.class` files: `del *.class`
- Try compiling again: `javac JavaServer.java`

### Problem: Cannot access website from other computers
**Solution:**
- By default, server only listens on localhost
- To make it accessible externally, modify JavaServer.java:
  - Change: `InetSocketAddress(port)` 
  - To: `InetSocketAddress("0.0.0.0", port)`
- Recompile and restart

---

## 🔄 Recompiling Changes

If you modify `JavaServer.java`:

1. Delete old compiled files:
   ```bash
   # Windows
   del *.class
   
   # Mac/Linux
   rm *.class
   ```

2. Recompile:
   ```bash
   javac JavaServer.java
   ```

3. Run again:
   ```bash
   java JavaServer
   ```

---

## 📦 File Structure

```
MyVolumeEnglish/
├── JavaServer.java          # Java HTTP server source code
├── JavaServer.class         # Compiled Java class (generated)
├── run-server.bat           # Windows batch launcher
├── run-server.ps1           # PowerShell launcher
├── index.html               # Main website
├── styles.css               # Styling
├── script.js                # JavaScript functionality
├── README.md                # Main documentation
└── JAVA-SERVER.md           # This file
```

---

## 🚀 Advanced Usage

### Multi-threaded Server

The Java server uses a thread pool of 10 threads by default:
```java
server.setExecutor(java.util.concurrent.Executors.newFixedThreadPool(10));
```

This allows handling multiple concurrent requests efficiently.

### Adding New API Endpoints

To add new API endpoints, modify the `APIHandler` class:

```java
static class APIHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String requestPath = exchange.getRequestURI().getPath();
        
        if (requestPath.equals("/api/mynewendpoint")) {
            handleMyNewEndpoint(exchange);
        }
    }
    
    private void handleMyNewEndpoint(HttpExchange exchange) throws IOException {
        String response = "{\"data\":\"Hello World\"}";
        sendJSON(exchange, 200, response);
    }
}
```

Then recompile and restart the server.

---

## 🔐 Security Considerations

⚠️ **Important**: This server is designed for development/learning purposes:

1. ✅ **Safe for localhost** - Running on your computer
2. ⚠️ **Not for production** - Use proper web servers (Apache, Nginx, Tomcat) for production
3. ⚠️ **No authentication** - Files are publicly accessible when running
4. ⚠️ **Limited features** - No compression, caching, SSL/TLS by default

For production deployment, consider:
- Apache Tomcat
- Spring Boot embedded server
- Docker containerization
- Reverse proxy (Nginx)
- SSL/TLS certificates

---

## 🎓 Learning Resources

### Java Documentation
- [Oracle Java Documentation](https://docs.oracle.com/en/java/javase/11/)
- [Java HttpServer API](https://docs.oracle.com/en/java/javase/11/docs/api/com.sun.net.httpserver/module-summary.html)

### Web Development
- [HTTP Protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

## ✨ What's Next?

The Java server currently serves your website. You can:

1. **Enhance with Spring Boot** - Add more features with a framework
2. **Add Database** - Connect to MongoDB or MySQL
3. **Implement APIs** - Build backend endpoints for authentication
4. **Add Caching** - Improve performance with caching
5. **Deploy Online** - Host on AWS, Azure, or other cloud providers

---

## 💡 Tips

- **Keep it running**: Don't close the terminal while using the server
- **Port forwarding**: If accessing from other devices, configure port forwarding
- **Log monitoring**: Watch the server logs to debug issues
- **File permissions**: Ensure files are readable by the Java process

---

*Created: June 5, 2026*  
*Last Updated: June 5, 2026*  
*Version: 1.0*  
*Status: Ready for Development*
