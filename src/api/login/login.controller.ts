import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { AdminAuthRepository } from "../../repository/mongoDB/admin-auth/admin-auth.repository"

export class LoginController {

  public async checkResponse(req: Request, res: Response, next: NextFunction) {
    try{
      res.status(200).json({ message: "Hello World" });
    } catch (error) {
      next(error)
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const adminlogin = {
        user_name: "John Doe",
        user_email: "test@malinator.com",
        password: "test@1234"
      }
      let repositry = new AdminAuthRepository()
      const token = await jwt.sign({ adminlogin }, "myRandomJWTToken");
      let login = await repositry.createAdminAuth(adminlogin, token)
      res.status(200).json({ data: login, message: "LOGIN_SUCCESSFUL" });
    } catch (error) {
      next (error)
    }
  }

  public async redirectLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const adminlogin = {
        user_name: "John Doe",
        user_email: "test@malinator.com",
        password: "test@1234"
      }
      let repositry = new AdminAuthRepository()
      const token = await jwt.sign({ adminlogin }, "myRandomJWTToken");
      let login = await repositry.createAdminAuth(adminlogin, req.body.token)
      res.status(200).json({ data: login, message: "LOGIN_SUCCESSFUL" });
    } catch (error) {
      next (error)
    }
  }
}