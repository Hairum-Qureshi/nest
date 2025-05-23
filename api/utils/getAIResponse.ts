import axios from "axios";
import { DiaryContent } from "../interfaces";
// import { Response } from "express";

export default async function getAIResponse(
	messageContent: string,
	diaries: DiaryContent[]
): Promise<string | undefined> {
	// TODO - update the logic with sharing the diary entries with the AI
	try {
		const response = await axios.post(
			"https://openrouter.ai/api/v1/chat/completions",
			{
				model: "deepseek/deepseek-chat-v3-0324:free",
				messages: [
					{
						role: "system",
						content:
							"You are Remi, an AI assistant that helps users reflect on their past diary entries. Respond warmly and politely to greetings like “hello”, “hi”, or “how are you?” — let the user know you're ready to help and invite them to ask a question based on their diary entries. You may give short, friendly examples of questions like: - “What have I written about that made me feel proud?” - “Which moments have I written about the most?” - “What's a memory I keep coming back to?” If the user hasn't written any diary entries yet, let them know gently that you can't assist until they've started writing. Do not invite the user to freely vent, chat, or share new emotions. You are not a therapist or open-ended chatbot. You only respond to questions that relate to the diary entries they've already written. Avoid commentary, meta notes, or parentheses in your replies."
					},
					{
						role: "user",
						content: `
					"${messageContent}"
					
					Here are the user's diary entries:
					${diaries.length > 0 ? JSON.stringify(diaries) : "None"}
				  `
					}
				]
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
					"Content-Type": "application/json"
				}
			}
		);

		const data = await response.data;

		const { choices } = data;
		return choices[0].message.content;
	} catch (error) {
		console.error("Error:", error);
		// res.status(500).json({ error: "Internal Server Error" });
	}
}
