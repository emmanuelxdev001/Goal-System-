import { Request, Response } from "express"
import userModel from "../Models/userModel";

export const createUser = async(req: Request, res: Response):
Promise<Response> => {
    try {
        const { userName, email, password } = req.body;

        const user = await userModel.create({userName, email, password });

        return res.status(201).json({
            message: "User Created",
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

export const loginUser = async(req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({email, password });

        if (user) {
            if (user.password === password) {
                return res.status(200).json({
                    message: "Welcome back",
                    status: 202,
                    data: user,
                });
            }else {
                return res.status(404).json({
                    message: "password not correct",
                    status: 404,
                })
        }
    } 
    } catch (error) {
        return res.status(404).json({
            message: "Email not Found",
            status: 404,
            error: error,
        })
    }
}

export const getOneUser = async(req: Request, res: Response) => {
    try {
        const { userName, email, password } = req.body;

        const user = await userModel.create({userName, email, password });

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

export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const { userName, email, password } = req.body;

        const user = await userModel.find({userName, email, password });

        return res.status(201).json({
            message: "Users Found",
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

