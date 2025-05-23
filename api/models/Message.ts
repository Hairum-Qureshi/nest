import { Schema, model } from "mongoose";
import IMessage from "../interfaces";

const messageSchema = new Schema(
	{
		_id: {
			type: String
		},
		userID: {
			type: String,
			ref: "User"
		},
		role: {
			type: String,
			enum: ["USER", "SYSTEM"]
		},
		content: {
			type: String,
			required: true
		},
		relatedDiaries: [
			{
				diaryID: { type: String, ref: "Diary" },
				summary: String
			}
		]
	},
	{
		timestamps: true
	}
);

export default model<IMessage>("Message", messageSchema);
