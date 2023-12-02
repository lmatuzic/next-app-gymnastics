export type Application = {
	id: string;
	firstName: string;
	lastName: string;
	country: string;
	phone: string;
	discipline: string;
	programName: string;
	categoryName: string;
	teamName: string;
	status: string;
	date: Date;
	club: string;
	dateOfBirth: Date;
};

export type Program = {
	name: string;
};

export type Category = {
	name: string;
};
