import { getApplications } from '@/app/(routes)/applications/actions/getApplications';
import { getCountries } from '@/app/(routes)/applications/actions/getCountries';
import ApplicationDialog from '@/app/(routes)/applications/components/ApplicationDialog';
import { ApplicationsDataTable } from '@/app/(routes)/applications/components/ApplicationsDataTable';
import ApplyGymnastForm from '@/app/(routes)/applications/components/ApplyGymnastForm';
import H1 from '@/app/components/headings/H1';
import Badge from '@/app/components/status/Badge';
import { GymnastApplication } from '@/app/typings/applications';

export default async function ApplicationsPage() {
	const countries = await getCountries();
	const applications: GymnastApplication[] = await getApplications();

	return (
		<div>
			<header className='flex flex-col items-center justify-between pb-8 mb-6 border-b border-solid sm:flex-row border-dividerMedium'>
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

			<ApplicationsDataTable data={applications} countries={countries} />
		</div>
	);
}
