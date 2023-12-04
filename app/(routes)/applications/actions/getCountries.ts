import { COUNTRIES } from '@/app/contants/endpoints';

export async function getCountries() {
	const response = await fetch(COUNTRIES);

	if (!response.ok) {
		throw new Error('Failed to fetch countries data');
	}

	return response.json();
}
