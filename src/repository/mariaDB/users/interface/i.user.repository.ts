import { UserEntity } from "../../../../models/user.model";

export interface IUserRepository {
  getUser(): Promise<typeof UserEntity>;
  addUser(user: any): Promise<number>;
  editUser(edituser: any, callback: any): Promise<number>;
  deleteUser(deleteuser: any, callback: any): void;
}