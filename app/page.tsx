import { DataTable } from '@/app/(routes)/applications/components/DataTable/DataTable';
import { columns } from '@/app/(routes)/applications/components/DataTable/columns';
import Badge from '@/app/components/Badge';
import ApplyGymnastForm from '@/app/components/forms/ApplyGymnastForm';
import H1 from '@/app/components/headings/H1';
import { Button } from '@/app/components/shadcn/Button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/app/components/shadcn/Dialog';

async function getCountries() {
	const res = await fetch('https://elevien-fe-job.free.beeceptor.com/countries');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

async function getApplications() {
	const res = await fetch('https://elevien-fe-job.free.beeceptor.com/applications');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page() {
	const countries = await getCountries();
	const applications = await getApplications();

	console.log(applications);

	return (
		<div>
			<header className='flex items-center justify-between pb-8 mb-12 border-b border-solid border-bgSecondaryMedium'>
				<H1 text='My Applications' />

				<div className='flex items-center gap-4'>
					<Dialog>
						<DialogTrigger asChild>
							<Button>New application</Button>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle className='mb-8'>Apply gymnast</DialogTitle>
							</DialogHeader>

							<ApplyGymnastForm countries={countries} />
						</DialogContent>
					</Dialog>

					<div className='flex items-center gap-2 px-4 py-2.5 rounded bg-bgSecondary'>
						<Badge color='green' />
						<span className='text-sm font-bold'>Open</span>
					</div>
				</div>
			</header>

			<DataTable columns={columns} data={applications} />
		</div>
	);
}
