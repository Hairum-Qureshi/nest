import { Schema, model } from "mongoose";
import { IUser } from "../interfaces";

const userSchema = new Schema(
	{
		_id: {
			type: String
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
		diaryIDs: [
			{
				type: String,
				ref: "Diary"
			}
		],
		favoriteDiaries: [
			{
				type: String,
				ref: "Diary"
			}
		],
		diaryPin: {
			type: Number
		}
	},
	{
		timestamps: true
	}
);

export default model<IUser>("User", userSchema);
