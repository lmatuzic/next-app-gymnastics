import * as z from 'zod';

export const applicationSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	country: z.object({
		code: z.string().min(2),
	}),
	programAndCategory: z.string().min(1),
	dateOfBirth: z.date({
		required_error: 'Please select a date and time',
		invalid_type_error: "That's not a date!",
	}),
	club: z.string(),
	team: z.string(),
	phone: z.string(),
});
