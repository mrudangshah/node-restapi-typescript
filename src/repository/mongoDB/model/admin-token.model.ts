import { Document } from 'mongoose';

interface AdminTokenModel extends Document {
  userName: string;
  userEmail: string;
  token: string;
}

export {
  AdminTokenModel
}