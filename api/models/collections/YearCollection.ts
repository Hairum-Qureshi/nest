import { Schema, model } from "mongoose";
import { IYearCollection } from "../../interfaces";

export const yearCollectionSchema = new Schema<IYearCollection>(
	{
		_id: {
			type: String
		},
		userID: {
			type: String,
			ref: "User"
		},
		year: {
			type: Number,
			required: true,
			ref: "Diary"
		}
	},
	{
		timestamps: true
	}
);

export const YearCollection = model<IYearCollection>(
	"YearCollection",
	yearCollectionSchema
);
