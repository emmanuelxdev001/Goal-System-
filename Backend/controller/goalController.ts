import { Request, Response } from "express"
import goalModel from "../Models/goalModel";

export const createGoal = async(req: Request, res: Response) => {
    try {
        const { title, duration } = req.body;

        const user = await goalModel.create({ title, duration });

        return res.status(201).json({
            message: "Goal Created",
            status: 201,
            data: user,
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error",
            status: 404,
            error: error,
        })
    }
}

export const updateOneGoal = async(req: Request, res: Response) => {
    try {
        const {title, duration} = req.body;

        const user = await goalModel.create({title, duration});

        return res.status(201).json({
            message: "Goal Found",
            status: 201,
            data: user,
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error",
            status: 404,
            error: error,
        })
    }
}

export const getAllGoals = async(req: Request, res: Response) => {
    try {
        const {title, duration} = req.body;

        const user = await goalModel.find({title, duration});

        return res.status(201).json({
            message: "Goal Updated",
            status: 201,
            data: user,
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error",
            status: 404,
            error: error,
        })
    }
}

