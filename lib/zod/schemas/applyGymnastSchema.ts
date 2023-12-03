import * as z from 'zod';

export const applicationSchema = z.object({
	firstName: z.string().min(1, 'Required').max(50),
	lastName: z.string().min(1, 'Required').max(50),
	country: z.string().min(1, 'Required'),
	programAndCategory: z.string().min(1, 'Required'),
	dateOfBirth: z.date({ required_error: 'Required' }),
	club: z.string(),
	team: z.string(),
	phone: z.string(),
});
