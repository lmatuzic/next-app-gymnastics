import { APPLICATION } from '@/app/contants/endpoints';
import { applicationSchema } from '@/lib/zod/schemas/applyGymnastSchema';
import * as z from 'zod';

export async function submitApplication(formValues: z.infer<typeof applicationSchema>) {
	const response = await fetch(APPLICATION, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formValues),
	});

	return response;
}
