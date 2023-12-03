import ApplicationDialog from '@/app/(routes)/applications/components/ApplicationDialog';
import ApplyGymnastForm from '@/app/(routes)/applications/components/ApplyGymnastForm';
import { DataTable } from '@/app/(routes)/applications/components/DataTable';
import H1 from '@/app/components/headings/H1';
import Badge from '@/app/components/status/Badge';
import { APPLICATIONS, COUNTRIES } from '@/app/contants/endpoints';
import { GymnastApplication } from '@/app/typings/applications';

async function getCountries() {
	const res = await fetch(COUNTRIES);

	if (!res.ok) {
		throw new Error('Failed to fetch countries data');
	}

	return res.json();
}

async function getApplications() {
	const res = await fetch(APPLICATIONS);

	if (!res.ok) {
		throw new Error('Failed to fetch applications data');
	}

	return res.json();
}

export default async function ApplicationsPage() {
	const countries = await getCountries();
	const applications: GymnastApplication[] = await getApplications();

	return (
		<div>
			<header className='flex flex-col items-center justify-between pb-8 mb-12 border-b border-solid sm:flex-row border-dividerMedium'>
				<H1 text='My Applications' className='mb-8 sm:mb-0' />

				<div className='flex items-center gap-4'>
					<ApplicationDialog>
						<ApplyGymnastForm countries={countries} />
					</ApplicationDialog>

					<div className='flex items-center gap-2 px-4 py-2.5 rounded bg-bgSecondary'>
						<Badge color='green' />
						<span className='text-sm font-bold'>Open</span>
					</div>
				</div>
			</header>

			<DataTable data={applications} countries={countries} />
		</div>
	);
}
