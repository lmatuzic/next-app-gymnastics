import { APPLICATIONS } from '@/app/contants/endpoints';

export async function getApplications() {
	const response = await fetch(APPLICATIONS);

	if (!response.ok) {
		throw new Error('Failed to fetch applications data');
	}

	return response.json();
}
