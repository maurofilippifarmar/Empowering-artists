import express from "express";
import { auth } from "../middleware/auth.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { rules } from "../middleware/validators.js";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  loginUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

//routes

//get all users
router.get("/", auth, getAllUsers);
//create user
router.post("/", rules, createUser);
//login user
router.post("/login", isAdmin, loginUser);
// logout user
//router.delete('/logout', auth, logoutUser);
//verify token on page refresh
router.get("/refreshpage", auth, (req, res) => {
  res.json({ success: true, data: req.user });
});
//get user
router.get("/:id", auth, getSingleUser);
//update user
router.patch("/:id", auth, updateUser);
//delete user
router.delete("/:id", auth, isAdmin, deleteUser);

export default router;
