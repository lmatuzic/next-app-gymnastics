export type GymnastApplication = {
	id: string;
	firstName: string;
	lastName: string;
	country: string;
	phone: string;
	discipline: string;
	programName: string;
	categoryName: string;
	teamName: string;
	status: 'applied' | 'declined' | 'canceled' | 'awaiting response';
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
