import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import colors from "colors";
import authentication from "./routes/authentication";
import mongoose from "mongoose";
import user from "./routes/user";
import chat from "./routes/chat";

dotenv.config();
colors.enable();

const app = express();

const corsOptions = {
	origin: "http://localhost:5174",
	credentials: true,
	optionSuccessStatus: 200
};

app.use(cors(corsOptions)); // <-- for CORS
app.use(cookieParser()); // <-- allows you to read req.cookies
app.use(express.json()); // <-- without this, req.body won't work (for JSON data being passed to the backend)
app.use(express.urlencoded({ extended: true })); // <-- without this, you won't be able to read form data
app.use("/api/auth", authentication);
app.use("/api/user", user);
app.subscribe("/api/chat", chat);

const PORT: number = +process.env.PORT! || 4000; // <-- if your port # is different, change it

app.get("/test", async (req, res) => {
	try {
		const response = await fetch(
			"https://openrouter.ai/api/v1/chat/completions",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					model: "deepseek/deepseek-chat-v3-0324:free",
					messages: [
						{
							role: "system",
							content:
								"You are Remi, an AI that only responds to questions based on the user's diary entries. Politely decline unrelated questions."
						},
						{
							role: "user",
							content: "Who are you?"
						}
					]
				})
			}
		);

		const data = await response.json();

		const { choices } = data;
		res.status(200).json(choices[0].message);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(PORT, () => {
	const connectToMongoDB = async () => {
		try {
			const conn = await mongoose.connect(process.env.MONGO_URI!);
			console.log(
				"Successfully connected to MongoDB on host:".yellow,
				`${conn.connection.host}`.green.bold
			);
			console.log(`Server listening on port ${PORT}!`.yellow.bold);
		} catch (error) {
			console.error(error);
		}
	};

	connectToMongoDB();
});
