import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class CreateProductMiddleware implements NestMiddleware {
  use(req: Request, red: Response, next: NextFunction) {
    req.body.valor = req.body.valor * 1.25
    next();
  }
}