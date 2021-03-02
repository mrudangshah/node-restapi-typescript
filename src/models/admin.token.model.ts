import { model, Model } from 'mongoose';
import { AdminTokenModel } from '../repository/mongoDB/model/admin-token.model';
import { AdminTokenSchema } from '../repository/mongoDB/schema/admin-token.schema';

const AdminToken: Model<AdminTokenModel> = model<AdminTokenModel>('AdminToken', AdminTokenSchema);

export { AdminToken }