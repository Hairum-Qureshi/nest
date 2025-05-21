export default interface IDiary {
	_id: string;
	authorUID: string;
	content: string;
	title: string;
	diaryPassword: number;
	isPassProtected: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export default interface IUser {
	_id: string;
	fullName: string;
	email: string;
	password: string;
	diaries: IDiary[];
	createdAt: Date;
	updatedAt: Date;
}
