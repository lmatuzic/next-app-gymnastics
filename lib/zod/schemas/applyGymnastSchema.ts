import * as z from 'zod';

export const formSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	country: z.string().min(1),
	programAndCategory: z.string().min(2).max(50),
});
