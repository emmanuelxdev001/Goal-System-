import { Document, model, models, Schema } from "mongoose";


export interface iUser {
    userName: string; 
    email: string; 
    password: string; 
  }
  
interface iUserData extends iUser, Document {}

const userModel = new Schema(
    {
        userName: {
            type: String,
        },
       email: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    { timestamps: true }
)


export default model<iUserData>("user", userModel);
