export interface IDiary {
	_id: string;
	authorUID: string;
	content: string;
	title: string;
	isPassProtected: boolean;
	monthID: string;
	date: string;
	year: number;
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
	year: number;
	monthCollections: IMonthCollection[];
}

export interface IMonthCollection extends BaseCollection {
	yearID: string;
	month: number;
	diaryIDs: string[] | IDiary[];
	datesWritten: number[];
}

enum SubscriptionTiers {
	FREE = "FREE",
	PRO = "PRO",
	PREMIUM = "PREMIUM"
}

enum SubscriptionTypes {
	MONTHLY = "MONTHLY",
	YEARLY = "YEARLY"
}

export interface IUser {
	_id: string;
	fullName: string;
	email: string;
	password: string;
	diaryPin: number;
	yearCollections: IYearCollection[];
	subscriptionTier: SubscriptionTiers;
	subscriptionType: SubscriptionTypes;
	subscriptionExpiry: Date;
	createdAt: Date;
	updatedAt: Date;
}
