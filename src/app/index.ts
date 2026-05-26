import express from "express";
import type { Express } from "express";

export function createApplication(): Express {
  const app = express();

  // middleware

  // routes
  app.get("/", (req, res) => {
    res.json({ message: "welcome to chaicode auth service" });
  });

  return app;
}
