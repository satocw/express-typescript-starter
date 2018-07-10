import { Response, Request, NextFunction } from "express";

export let spawn = (req: Request, res: Response, next: NextFunction) => {
  res.send("OK");
};
