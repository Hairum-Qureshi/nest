export interface Diary {
	_id: string;
	authorUID: string;
	content: string;
	title: string;
	diaryPassword: number;
	isPassProtected: boolean;
	favorite: boolean;
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
	createdAt: Date;
	updatedAt: Date;
}
