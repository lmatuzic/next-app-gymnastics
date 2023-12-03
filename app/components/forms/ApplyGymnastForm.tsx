'use client';

import { DatePicker } from '@/app/components/dates/DatePicker';
import { CountryDropdown } from '@/app/components/dropdowns/CountryDropdown';
import ProgramDropdown from '@/app/components/dropdowns/ProgramDropdown';
import { Button } from '@/app/components/shadcn/Button';
import { DialogClose } from '@/app/components/shadcn/Dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/components/shadcn/Form';
import { Input } from '@/app/components/shadcn/Input';
import { Country } from '@/app/typings/countries';
import { applicationSchema } from '@/lib/zod/schemas/applyGymnastSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import * as z from 'zod';

type ApplyGymnastForm = {
	countries: Country[];
};

type FormKey =
	| 'firstName'
	| 'lastName'
	| 'country'
	| 'programAndCategory'
	| 'dateOfBirth'
	| 'club'
	| 'team'
	| 'phone';

export default function ApplyGymnastForm({ countries }: ApplyGymnastForm) {
	const form = useForm<z.infer<typeof applicationSchema>>({
		resolver: zodResolver(applicationSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			country: '',
			programAndCategory: '',
			dateOfBirth: undefined,
			club: '',
			team: '',
			phone: '',
		},
	});

	const control = form.control;
	const { field } = useController({ name: 'country', control });

	const handleSelectChange = (key: FormKey, option: any) => {
		field.onChange(option.value);
		form.setValue(key, option);
		form.clearErrors(key);
	};

	const onSubmit = (values: z.infer<typeof applicationSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex flex-col items-baseline gap-4 sm:flex-row'>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-xs'>First name</FormLabel>

								<FormControl>
									<Input placeholder='First name' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-xs'>Last name</FormLabel>

								<FormControl>
									<Input placeholder='Last name' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='country'
						render={() => (
							<FormItem>
								<FormLabel className='text-xs'>Country</FormLabel>

								<FormControl>
									<CountryDropdown
										countries={countries}
										selectedCountryValue={
											countries.find((country) => country.code === field.value)?.name
										}
										handleSelectChange={(e) => handleSelectChange('country', e)}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex flex-col items-baseline gap-4 sm:flex-row'>
					<FormField
						control={form.control}
						name='programAndCategory'
						render={() => (
							<FormItem className='w-full'>
								<FormLabel className='text-xs'>Program and category</FormLabel>

								<FormControl>
									<ProgramDropdown />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='dateOfBirth'
						render={() => (
							<FormItem className='w-full'>
								<FormLabel className='text-xs'>Date of birth</FormLabel>

								<FormControl>
									<DatePicker />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex flex-col items-center gap-4 sm:flex-row'>
					<FormField
						control={form.control}
						name='club'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-xs'>Club (optional)</FormLabel>

								<FormControl>
									<Input placeholder='Club' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='team'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-xs'>Team (optional)</FormLabel>

								<FormControl>
									<Input placeholder='Team' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem className='sm:w-1/2'>
							<FormLabel className='text-xs'>Phone (optional)</FormLabel>

							<FormControl>
								<Input placeholder='Phone' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='flex items-center justify-end pt-4 border-t border-solid border-bgSecondaryMedium'>
					<DialogClose asChild>
						<Button variant='link' className='font-normal text-black'>
							Cancel
						</Button>
					</DialogClose>

					<Button type='submit'>Save</Button>
				</div>
			</form>
		</Form>
	);
}
