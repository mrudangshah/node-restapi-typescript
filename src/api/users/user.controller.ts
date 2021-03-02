import { Request, Response, NextFunction } from "express";
import { config, ENV } from '../../../config/config.json';
import { UserRepository } from '../../repository/mariaDB/users/user.repository';
import { isEmpty } from "../../../config/config.json";
import { UserModel } from "../../models/user.model";
import { MSGS } from "./user.constants";
import { UserValidator } from "./user.validator";
import { ActionType, ReturnValue } from "../../../config/common";

export class UserController {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {

      let userModel: UserModel[], statusCode: number;
      let userRepository = new UserRepository;

      userModel = await userRepository.getUser();
      statusCode = isEmpty(userModel) ? config.statusCode.empty : config.statusCode.successful;
      res.status(statusCode).json({ data: userModel });
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      let validate = UserValidator.Validate(req.body);

      if (validate === null) {
        let userRepository = new UserRepository;

        let isUserAdded = await userRepository.addUser(validate);
        if (isUserAdded === ReturnValue.Success) {
          res.status(config.statusCode.successful).json({ message: MSGS.USER_ADD });
        } else if (isUserAdded === ReturnValue.AlreadyExist) {
          res.status(config.statusCode.conflict).json({ message: MSGS.USER_ALREADY_EXIST });
        } else {
          res.status(config.statusCode.badRequest).json({ message: MSGS.USER_FAIL });
        }
      } else {
        res.status(config.statusCode.badRequest).json({ message: validate });
      }
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      let validate = UserValidator.Validate(req.body);

      if (validate === null) {
        let userRepository = new UserRepository;

        let isUserUpdated = await userRepository.editUser(validate);
        if (isUserUpdated === ReturnValue.Success) {
          res.status(config.statusCode.successful).json({ message: MSGS.USER_UPDATE });
        } else if (isUserUpdated === ReturnValue.AlreadyExist) {
          res.status(config.statusCode.conflict).json({ message: MSGS.USER_ALREADY_EXIST });
        } else {
          res.status(config.statusCode.badRequest).json({ message: MSGS.USER_ALREADY_EXIST });
        }
      } else {
        res.status(config.statusCode.badRequest).json({ message: validate });
      }
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      let userRepository = new UserRepository;
      let userDelete = await userRepository.deleteUser(req.params.id);
      if (userDelete === ReturnValue.IdNotFound) {
        res.status(config.statusCode.empty).json({ message: MSGS.USER_ID_NOT_EXISTS });
      } else if (userDelete === ReturnValue.Success) {
        res.status(config.statusCode.successful).json({ message: MSGS.USER_DELETE });
      } else if (userDelete === ReturnValue.Failed) {
        res.status(config.statusCode.successful).json({ message: MSGS.USER_FAIL });
      }
    } catch (error) {
      res.status(config.statusCode.badRequest).json({ message: error.message });
    }
  }

}