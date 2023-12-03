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
import { APPLICATION } from '@/app/contants/endpoints';
import { useToast } from '@/app/hooks/useToast';
import { Country } from '@/app/typings/countries';
import { applicationSchema } from '@/lib/zod/schemas/applyGymnastSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
	const { toast } = useToast();

	const form = useForm<z.infer<typeof applicationSchema>>({
		resolver: zodResolver(applicationSchema),
		reValidateMode: 'onBlur',
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

	const handleSelectChange = (key: FormKey, option: any) => {
		form.setValue(key, option);
		form.clearErrors(key);
	};

	const handleSetBirthDate = (date: Date) => {
		form.setValue('dateOfBirth', date);
		form.clearErrors('dateOfBirth');
	};

	const closeApplicationDialog = () => {
		document.getElementById('close-dialog')?.click();
	};

	const onSubmit = async (values: z.infer<typeof applicationSchema>) => {
		try {
			const response = await fetch(APPLICATION, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			if (response.ok) {
				toast({
					title: 'Application submitted successfully!',
				});
			} else {
				toast({
					title: 'Failed to submit application.',
					variant: 'destructive',
				});
			}
		} catch (error) {
			console.error('Error:', error);
		} finally {
			closeApplicationDialog();
		}
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
						render={(data) => (
							<FormItem>
								<FormLabel className='text-xs'>Country</FormLabel>

								<FormControl>
									<CountryDropdown
										countries={countries}
										selectedCountry={data.field.value}
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
						render={(data) => {
							return (
								<FormItem className='w-full'>
									<FormLabel className='text-xs'>Program and category</FormLabel>

									<FormControl>
										<ProgramDropdown
											selectedProgramAndCategory={data.field.value}
											handleSelectChange={(e) => handleSelectChange('programAndCategory', e)}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name='dateOfBirth'
						render={(data) => {
							return (
								<FormItem className='w-full'>
									<FormLabel className='text-xs'>Date of birth</FormLabel>

									<FormControl>
										<DatePicker
											selectedDate={data.field.value}
											handleSetSelectedDate={(e) => handleSetBirthDate(e)}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							);
						}}
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
