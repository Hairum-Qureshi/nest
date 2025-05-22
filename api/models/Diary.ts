import { Schema, model } from "mongoose";
import IDiary from "../interfaces";

export const diarySchema = new Schema<IDiary>(
	{
		_id: {
			type: String,
			required: true,
			unique: true
		},
		authorUID: {
			type: String,
			ref: "User"
		},
		content: {
			type: String,
			required: true
		},
		title: {
			type: String
		},
		diaryPassword: {
			type: Number
		},
		isPassProtected: {
			type: Boolean,
			default: false
		},
		favorite: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

export const Diary = model<IDiary>("Diary", diarySchema);
