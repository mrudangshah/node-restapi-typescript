import { Schema } from 'mongoose';

export const AdminTokenSchema = new Schema({
  userName: String,
  userEmail: String,
  token: String
});