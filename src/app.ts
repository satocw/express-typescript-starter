import express from "express";
import path from "path";

// Controllers (route handlers)
import * as homeController from "./controllers/home";
import * as apiController from "./controllers/api";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/api/spawn", apiController.spawn);

export default app;
