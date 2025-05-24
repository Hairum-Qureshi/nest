import { useEffect, useRef, useState } from "react";
import background from "../../../assets/background.png";
import ChatBubble from "./ChatBubble";
import useStore from "../../../hooks/zustand/authStore";
import useChat from "../../../hooks/useChat";
import { Role } from "../../../interfaces";

export default function AIChat() {
	const { sendMessage, data } = useChat();
	const [showIntroduction, setShowIntroduction] = useState(true);
	const [message, setMessage] = useState("");
	const { currentUserData } = useStore();
	const chatContainerRef = useRef<HTMLDivElement>(null);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			setShowIntroduction(false);
			sendMessage(message);
			setMessage("");
		}
	};

	useEffect(() => {
		if (data?.length === 0) {
			setShowIntroduction(true);
		} else if (data?.length > 0) {
			setShowIntroduction(false);
		}
	}, [data]);

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [data]);

	// TODO - need to prevent users from spamming the chat while the AI is generating a response

	return (
		<div
			style={{ backgroundImage: `url(${background})` }}
			className="bg-cover bg-no-repeat w-full min-h-screen max-h-auto"
		>
			<div
				className={`w-11/12 m-auto h-screen flex items-start justify-center ${
					showIntroduction && "pt-40"
				} overflow-y-auto`}
			>
				<div className="flex flex-col items-center w-full mb-24">
					{showIntroduction && (
						<>
							<h1 className="text-5xl text-amber-300 font-semibold drop-shadow-[0_0_5px_#22c55e]">
								Hi {currentUserData?.fullName.split(" ")[0]}, I'm Remi
							</h1>
							<h3 className="text-green-400 mt-4 w-2/3 text-center text-lg drop-shadow-[0_0_5px_#22c55e]">
								I'm an AI who follows along with your stories with the sole goal
								of helping you recall memories, answer questions you have about
								your journey, and help reflect on it too.
							</h3>
						</>
					)}
					<div className="w-full">
						{data?.map((message, index) => (
							<ChatBubble
								key={index}
								isUser={message.role === Role.USER}
								content={message.content}
							/>
						))}
					</div>
					<div ref={chatContainerRef}></div>
					<div className="w-full absolute bottom-0 p-3 flex justify-center">
						<div className="flex flex-col items-center min-w-3/5">
							<textarea
								className="w-full border-2 border-green-600 rounded-md p-3 bg-green-950 text-white outline-none mb-2 resize-y h-14 min-h-14 max-h-40 text-lg"
								onKeyDown={handleKeyDown}
								value={message}
								onChange={e => setMessage(e.target.value)}
							/>
							<p className="text-lime-500 text-sm">Remi can make mistakes</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
