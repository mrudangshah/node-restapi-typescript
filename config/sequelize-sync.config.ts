import { SyncOptions } from "sequelize/types";

/**
 * All Model sync config. https://sequelize.org/master/manual/model-basics.html#model-synchronization
 
 * Model.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
 * Model.sync({ force: true }) - This creates the table, dropping it first if it already existed
 * Model.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
 */

// Campaign Session Sync Configuration
const UserSyncConfig: SyncOptions = {
    alter: false,
    logging: false
};
const UsersTableName = 'Users'


export { 
  UserSyncConfig,
  UsersTableName
}