export interface Diary {
	_id: string;
	authorUID: string;
	content: string;
	title: string;
	isPassProtected: boolean;
	favorite: boolean;
	monthID: string;
	date: string;
	year: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserData {
	_id: string;
	fullName: string;
	email: string;
	password: string;
	diaries: Diary[];
	favoriteDiaries: Diary[];
	diaryPin: number;
	createdAt: Date;
	updatedAt: Date;
}

export enum Role {
	USER = "USER",
	SYSTEM = "SYSTEM"
}

interface DiaryContent {
	diaryID: string;
	summary: string;
}

export interface Message {
	_id: string;
	userID: string;
	role: Role;
	content: string;
	relatedDiaries: DiaryContent[];
}

export interface CollectionYear {
	_id: string;
	year: number;
}
