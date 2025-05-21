import { Schema, model } from "mongoose";
import IUser from "../interfaces";
import {  Diary } from "./Diary"; 

const userSchema = new Schema(
	{
		_id: {
			type: String,
			required: true,
			unique: true
		},
		fullName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
        diaries: {
            type: [Diary],
            default: []
        }
	},
	{
		timestamps: true
	}
);

export default model<IUser>("User", userSchema);
