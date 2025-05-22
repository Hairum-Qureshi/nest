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
	favoriteDiaries: IDiary[]
	createdAt: Date;
	updatedAt: Date;
}
