export interface IDiary {
	_id: string;
	authorUID: string;
	content: string;
	title: string;
	diaryPassword: number;
	isPassProtected: boolean;
	favorite: boolean;
	monthID: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IUser {
	_id: string;
	fullName: string;
	email: string;
	password: string;
	diaries: IDiary[];
	favoriteDiaries: IDiary[];
	createdAt: Date;
	updatedAt: Date;
}

enum Role {
	USER = "USER",
	SYSTEM = "SYSTEM"
}

export interface DiaryContent {
	diaryID: string;
	summary: string;
}

export interface IMessage {
	_id: string;
	userID: string;
	role: Role;
	content: string;
	relatedDiaries: DiaryContent[];
}

interface BaseCollection {
	_id: string;
	userID: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IYearCollection extends BaseCollection {
	year: number; // e.g., 2025
}

export interface IMonthCollection extends BaseCollection {
	yearID: string; // foreign key to YearCollection._id
	month: number; // 0–11 or 1–12 (your choice, but be consistent)
}
