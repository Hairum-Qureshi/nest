import { Schema, model } from "mongoose";
import { IMonthCollection } from "../../interfaces";

export const monthCollectionSchema = new Schema<IMonthCollection>(
	{
		_id: {
			type: String
		},
		userID: {
			type: String,
			ref: "User"
		},
		yearID: {
			type: String,
			ref: "YearCollection"
		},
		month: {
			type: Number,
			required: true,
			ref: "Diary"
		},
		diaryIDs: [
			{
				type: String,
				ref: "Diary"
			}
		],
		datesWritten: {
			type: [Number]
		}
	},
	{
		timestamps: true
	}
);

export const MonthCollection = model<IMonthCollection>(
	"MonthCollection",
	monthCollectionSchema
);
