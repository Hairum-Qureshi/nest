export default interface IDiary {
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

export default interface IUser {
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
	USER,
	SYSTEM
}

export default interface IMessage {
	_id: string;
	userID: string;
	role: Role;
	content: string;
	relatableDiaries: [
		{
			diaryID: string;
			summary: string;
		}
	];
}
