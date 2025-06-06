import { Schema, model } from "mongoose";
import { IDiary } from "../interfaces";

export const diarySchema = new Schema<IDiary>(
	{
		_id: {
			type: String
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
		isPassProtected: {
			type: Boolean,
			default: false
		},
		favorite: {
			type: Boolean,
			default: false
		},
		monthID: {
			type: String,
			ref: "MonthCollection",
			required: true
		},
		date: {
			type: String
		},
		year: {
			
		}
	},
	{
		timestamps: true
	}
);

export const Diary = model<IDiary>("Diary", diarySchema);
