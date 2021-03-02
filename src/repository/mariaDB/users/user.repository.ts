import { IUserRepository } from './interface';
import { UserEntity } from '../../../models/user.model';
import { ReturnValue } from '../../../../config/common';

export class UserRepository implements IUserRepository {
  tableName: string = 'users';

  async getUser(): Promise<typeof UserEntity> {
    try {
      let userData = UserEntity.findAll()
      return userData
    } catch (error) {
      throw new Error(error);
    }
  }

  async addUser(user: any): Promise<number> {
    try {
      let insertUser = await UserEntity.create({
        userName: user.userName,
        userLogo: user.userLogo,
        isActive: user.isActive
      })
      if (insertUser.affectedRows > 0) {
        return ReturnValue.Success;
      } else {
        return ReturnValue.Failed;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async editUser(edituser: any): Promise<number> {
    try {
      let editUser = await UserEntity.update({ userName: edituser.userName }, {
        where: {
          id: edituser.userId
        }
      });
      if (editUser.affectedRows > 0) {
        return ReturnValue.Success;
      } else {
        return ReturnValue.Failed;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(deleteuser: any): Promise<number> {
    try {
      let deleteUser = await UserEntity.destroy({
        where: {
          id: deleteuser
        }
      });
      if(deleteUser.affectedRows > 0) {
        return ReturnValue.Success;
      } else {
        return ReturnValue.Failed;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

}
