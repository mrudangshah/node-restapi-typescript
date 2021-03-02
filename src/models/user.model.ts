import { Sequelize, DataTypes, Model } from 'sequelize';
import { SQLize } from "../../config/sequelize-db.config";
import { UsersTableName } from '../../config/sequelize-sync.config'

class UserModel extends Model {
  userId: number;
  userName: string;
  userLogo: string;
  isActive: number;

  constructor(
    userId: number,
    userName: string,
    userLogo: string,
    isActive: number
  ) {

    super();
    this.userId = userId
    this.userName = userName
    this.userLogo = userLogo
    this.isActive = isActive
  }
}

const UserEntity = SQLize.define(UsersTableName, {
  id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
  },
  userName: {
		type: DataTypes.STRING,
		allowNull: false,
  },
  userLogo: {
		type: DataTypes.STRING,
		allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  createdAt: {
		type: 'TIMESTAMP',
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	},
	updatedAt: {
		type: 'TIMESTAMP',
		allowNull: true
	}
}, {freezeTableName: true})

export { UserModel, UserEntity }