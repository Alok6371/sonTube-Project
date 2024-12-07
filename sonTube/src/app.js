import express from "express"; // Import the Express framework to create and manage the web server.
import cors from "cors"; // Import CORS middleware to enable cross-origin requests.
import cookieParser from "cookie-parser"; // Import middleware to parse cookies in incoming requests.

const app = express(); // Create an instance of an Express application.

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Specifies the allowed origin for CORS requests, loaded from environment variables.
    credentials: true, // Enables credentials such as cookies, authorization headers, or TLS client certificates to be sent in cross-origin requests.
  })
); // Apply CORS middleware to handle cross-origin requests with specific configurations.

app.use(
  express.json({
    limit: "16kb", // Sets a size limit for JSON payloads in incoming requests to 16 kilobytes.
  })
); // Middleware to parse incoming requests with JSON payloads, enforcing the size limit.

app.use(
  express.urlencoded({
    extended: true, // Allows parsing of complex objects and arrays encoded in URL-encoded format.
  })
); // Middleware to parse incoming requests with URL-encoded payloads.

app.use(express.static("public")); // Serves static files (e.g., images, CSS, JavaScript) from the "public" directory.

app.use(cookieParser()); // Middleware to parse cookies attached to incoming client requests.

export { app }; // Exports the `app` instance for use in other parts of the application.
