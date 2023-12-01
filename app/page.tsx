import Badge from '@/app/components/Badge';
import { CountryDropdown } from '@/app/components/dropdowns/CountryDropdown';
import H1 from '@/app/components/headings/H1';
import { Button } from '@/app/components/shadcn/Button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
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

export default async function Page() {
	const countries = await getCountries();

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
								<DialogTitle>Apply gymnast</DialogTitle>

								<DialogDescription>
									This action cannot be undone. This will permanently delete your account and remove
									your data from our servers.
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>

					<div className='flex items-center gap-2 px-4 py-2.5 rounded bg-bgSecondary'>
						<Badge color='green' />
						<span className='text-sm font-bold'>Open</span>
					</div>
				</div>
			</header>

			<CountryDropdown countries={countries} />
		</div>
	);
}
