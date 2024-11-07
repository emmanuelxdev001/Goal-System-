import { Document, model, models, Schema } from "mongoose";


export interface iGoal {
    title: string; 
    duration: string; 
    status: string; 
  }
  
interface iGoalData extends iGoal, Document {}

const goalModel = new Schema(
    {
        title: {
            type: String,
        },
        duration: {
            type: String,
        },
        status: {
            type: String,
        }
    }
)


export default model<iGoalData>("user", goalModel);
