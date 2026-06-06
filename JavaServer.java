import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Simple Java HTTP Server for MyVolumeEnglish
 * Serves static HTML, CSS, and JavaScript files
 * 
 * Usage: java JavaServer [port]
 * Default port: 8080
 * 
 * Example:
 *   java JavaServer          (runs on port 8080)
 *   java JavaServer 3000     (runs on port 3000)
 */
public class JavaServer {
    
    private static final String DEFAULT_PORT = "8080";
    private static final String WEB_ROOT = ".";
    
    public static void main(String[] args) throws Exception {
        // Get port from command line argument or use default
        int port = DEFAULT_PORT.isEmpty() ? 8080 : Integer.parseInt(
            args.length > 0 ? args[0] : DEFAULT_PORT
        );
        
        // Create HTTP server
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        
        // Set up context handlers
        server.createContext("/", new StaticFileHandler());
        server.createContext("/api/", new APIHandler());
        
        // Set thread pool
        server.setExecutor(java.util.concurrent.Executors.newFixedThreadPool(10));
        
        // Start server
        server.start();
        
        System.out.println("╔════════════════════════════════════════╗");
        System.out.println("║   🌊 MyVolumeEnglish Server Running   ║");
        System.out.println("╚════════════════════════════════════════╝");
        System.out.println();
        System.out.println("📍 Server Address: http://localhost:" + port);
        System.out.println("📁 Root Directory: " + new File(WEB_ROOT).getAbsolutePath());
        System.out.println();
        System.out.println("✅ Ready to serve files!");
        System.out.println();
        System.out.println("Press Ctrl+C to stop the server");
        System.out.println();
    }
    
    /**
     * Handler for serving static files (HTML, CSS, JS)
     */
    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String requestPath = exchange.getRequestURI().getPath();
            
            // Default to index.html for root path
            if (requestPath.equals("/")) {
                requestPath = "/index.html";
            }
            
            // Remove leading slash
            String filePath = requestPath.startsWith("/") ? 
                requestPath.substring(1) : requestPath;
            
            // Security: prevent directory traversal
            if (filePath.contains("..")) {
                sendError(exchange, 400, "Bad Request");
                return;
            }
            
            File file = new File(WEB_ROOT, filePath);
            
            // Check if file exists and is not a directory
            if (!file.exists() || file.isDirectory()) {
                // Try to serve index.html from the directory
                File indexFile = new File(file, "index.html");
                if (indexFile.exists()) {
                    file = indexFile;
                } else {
                    sendError(exchange, 404, "File not found: " + filePath);
                    return;
                }
            }
            
            // Determine content type
            String contentType = getContentType(file.getName());
            
            try {
                // Read file content
                byte[] fileContent = Files.readAllBytes(file.toPath());
                
                // Set response headers
                exchange.getResponseHeaders().set("Content-Type", contentType);
                exchange.getResponseHeaders().set("Content-Length", String.valueOf(fileContent.length));
                exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
                exchange.getResponseHeaders().set("Cache-Control", "max-age=3600");
                
                // Send response
                exchange.sendResponseHeaders(200, fileContent.length);
                OutputStream os = exchange.getResponseBody();
                os.write(fileContent);
                os.close();
                
                // Log request
                System.out.println("[" + getTimestamp() + "] 200 OK - " + requestPath);
                
            } catch (Exception e) {
                sendError(exchange, 500, "Internal Server Error: " + e.getMessage());
            }
        }
    }
    
    /**
     * Handler for API endpoints (placeholder for future use)
     */
    static class APIHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String requestPath = exchange.getRequestURI().getPath();
            String method = exchange.getRequestMethod();
            
            // CORS headers
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");
            
            // Handle preflight requests
            if ("OPTIONS".equals(method)) {
                exchange.sendResponseHeaders(204, -1);
                exchange.close();
                return;
            }
            
            // Health check endpoint
            if (requestPath.equals("/api/health")) {
                handleHealthCheck(exchange);
            }
            // Articles endpoint (future implementation)
            else if (requestPath.equals("/api/articles")) {
                handleArticles(exchange, method);
            }
            // Not found
            else {
                sendError(exchange, 404, "API endpoint not found");
            }
        }
        
        private void handleHealthCheck(HttpExchange exchange) throws IOException {
            String response = "{\"status\":\"ok\",\"message\":\"🌊 MyVolumeEnglish Server is running!\"}";
            sendJSON(exchange, 200, response);
            System.out.println("[" + getTimestamp() + "] 200 OK - /api/health");
        }
        
        private void handleArticles(HttpExchange exchange, String method) throws IOException {
            if ("GET".equals(method)) {
                // Return sample articles
                String response = "[{\"id\":1,\"title\":\"Sample Article\",\"level\":\"beginner\"}]";
                sendJSON(exchange, 200, response);
                System.out.println("[" + getTimestamp() + "] 200 OK - /api/articles");
            } else {
                sendError(exchange, 405, "Method Not Allowed");
            }
        }
    }
    
    /**
     * Helper method to send JSON response
     */
    private static void sendJSON(HttpExchange exchange, int statusCode, String json) throws IOException {
        byte[] responseBytes = json.getBytes("UTF-8");
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.getResponseHeaders().set("Content-Length", String.valueOf(responseBytes.length));
        exchange.sendResponseHeaders(statusCode, responseBytes.length);
        exchange.getResponseBody().write(responseBytes);
        exchange.close();
    }
    
    /**
     * Helper method to send error response
     */
    private static void sendError(HttpExchange exchange, int statusCode, String message) throws IOException {
        String errorResponse = "<!DOCTYPE html><html><body>" +
            "<h1>Error " + statusCode + "</h1>" +
            "<p>" + message + "</p>" +
            "</body></html>";
        
        byte[] responseBytes = errorResponse.getBytes("UTF-8");
        exchange.getResponseHeaders().set("Content-Type", "text/html");
        exchange.sendResponseHeaders(statusCode, responseBytes.length);
        exchange.getResponseBody().write(responseBytes);
        exchange.close();
        
        System.out.println("[" + getTimestamp() + "] " + statusCode + " ERROR - " + message);
    }
    
    /**
     * Determine MIME type based on file extension
     */
    private static String getContentType(String filename) {
        if (filename.endsWith(".html") || filename.endsWith(".htm")) {
            return "text/html";
        } else if (filename.endsWith(".css")) {
            return "text/css";
        } else if (filename.endsWith(".js")) {
            return "application/javascript";
        } else if (filename.endsWith(".json")) {
            return "application/json";
        } else if (filename.endsWith(".png")) {
            return "image/png";
        } else if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
            return "image/jpeg";
        } else if (filename.endsWith(".gif")) {
            return "image/gif";
        } else if (filename.endsWith(".svg")) {
            return "image/svg+xml";
        } else if (filename.endsWith(".ico")) {
            return "image/x-icon";
        } else if (filename.endsWith(".txt")) {
            return "text/plain";
        } else if (filename.endsWith(".xml")) {
            return "application/xml";
        } else if (filename.endsWith(".pdf")) {
            return "application/pdf";
        } else {
            return "application/octet-stream";
        }
    }
    
    /**
     * Get formatted timestamp for logging
     */
    private static String getTimestamp() {
        return new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date());
    }
}
