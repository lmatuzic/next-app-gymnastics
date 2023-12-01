import { CountrySelect } from '@/app/components/dropdowns/CountrySelect';
import H1 from '@/app/components/headings/H1';

async function getCountries() {
	const res = await fetch('https://elevien-fe-job.free.beeceptor.com/countries');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page() {
	const countries = await getCountries();

	return (
		<div>
			<H1 text='Home page' />

			<CountrySelect countries={countries} />
		</div>
	);
}
