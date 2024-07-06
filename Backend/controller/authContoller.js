import userModel from "../models/userModel.js";
import { hashPassword } from "../utils/authHelper.js";
import { passwordCompare } from "../utils/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res, next) => {
  try {
    const { name, email, phone, password, address } = req.body;
    if (!name) {
      next("name is requied");
    }

    // Check existing users

    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.status(200).send({
        success: true,
        message: "User Already Exist!",
      });
    }

    // user Registration

    const hashedPass = await hashPassword(password);

    // save process
    const user = new userModel();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = hashedPass;
    user.address = address;
    user.save();
    res
      .status(200)
      .send({ success: true, message: "User Register successfully !", user });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Registration Error", error });
  }
};
//export default registerController;

// Login Controller

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, messase: "Invalid Email & Password" });
    }
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      // next("User not Exist");
      return res.status(404).send({ success: false, message: "Invalid Email" });
    }

    const comparedPass = await passwordCompare(password, user.password);
    console.log(comparedPass);
    if (!comparedPass) {
      next("Invalid Password");
    } else {
      console.log("login");
      const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      console.log(token);
      res.status(200).send({ success: true, message: "login success!", token });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: "false", message: "Error in Login", error });
  }
};
