import { Router } from "express";
import { createUser, getAllUsers, getOneUser, loginUser } from "../controller/usercontroller";
import { createGoal, getAllGoals } from "../controller/goalController";

const router: any = Router();

router.route("/create-user").get(createUser);
router.route("/login-user").post(loginUser);
router.route("/get-one-user").get(getOneUser);
router.route("/get-one-user").get(getAllUsers);

//goal endpoint

router.route("/update-goal-status/:goalID").pacth(createGoal);
router.route("/create-user").post(createGoal);
router.route("/create-goal").get(getAllGoals);

export default router;
