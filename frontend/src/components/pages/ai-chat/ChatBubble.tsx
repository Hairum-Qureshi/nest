import ReactMarkdown from "react-markdown";

interface ChatBubbleProps {
	isUser: boolean;
	content: string;
}

export default function ChatBubble({ isUser, content }: ChatBubbleProps) {
	return (
		<div
			className={`text-white m-5 ${
				isUser ? "ml-auto" : "mr-auto"
			} break-words p-1.5 w-fit max-w-[75%] ${
				isUser && "bg-emerald-950 border border-green-600 rounded-md"
			}`}
		>
			{isUser ? content : <ReactMarkdown>{content}</ReactMarkdown>}
		</div>
	);
}
