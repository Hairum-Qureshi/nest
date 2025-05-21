import uniqid from "uniqid";
import { Request, Response } from "express";
import User from "../models/User";
import IUser from "../interfaces";
import bcrypt from "bcrypt";
import generateAndSetCookie from "../utils/generateAndSetCookie";

const sign_up = async (req: Request, res: Response): Promise<void> => {
	try {
		const { fullName, email, password, confirmPassword } = req.body;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]/;

		if (!fullName || !email || !password || !confirmPassword) {
			res.status(400).json({ message: "Please fill in all fields" });
			return;
		}

		if (password !== confirmPassword) {
			res.status(400).json({ message: "Passwords do not match" });
			return;
		}

		if (!emailRegex.test(email)) {
			res.status(400).json({ message: "Invalid email" });
			return;
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			res
				.status(400)
				.json({ message: "An account already exists with this email" });
			return;
		}

		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			res.status(400).json({ message: "Email already in use" });
			return;
		}

		if (password.length < 8) {
			res
				.status(400)
				.json({ message: "Password must be at least 8 characters long" });
			return;
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user: IUser = await new User({
			_id: uniqid(),
			fullName,
			email,
			password: hashedPassword
		}).save()

		if (user) {
			generateAndSetCookie(user._id, res);
			res.status(201).json(user);
		} else {
			res.status(500).json({ message: "Failed to create user" });
		}
	} catch (error) {
		console.log(
			"Error inside of sign_up function in authentication controller: ".red
				.bold,
			error
		);
	}
};

const sign_in = async (req: Request, res: Response): Promise<void> => {
	try {
	} catch (error) {
		console.log(
			"Error inside of sign_in function in authentication controller: ".red
				.bold,
			error
		);
	}
};

const sign_out = async (req: Request, res: Response): Promise<void> => {
	try {
	} catch (error) {
		console.log(
			"Error inside of sign_out function in authentication controller: ".red
				.bold,
			error
		);
	}
};

export { sign_up, sign_in, sign_out };
