'use client';

import { CountryDropdown } from '@/app/components/dropdowns/CountryDropdown';
import { Button } from '@/app/components/shadcn/Button';
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
import { formSchema } from '@/lib/zod/schemas/applyGymnastSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

type ApplyGymnastForm = {
	countries: Country[];
};

export default function ApplyGymnastForm({ countries }: ApplyGymnastForm) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			country: '',
			programAndCategory: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex items-center gap-4'>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>First name</FormLabel>

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
								<FormLabel>Last name</FormLabel>
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
						render={({ field }) => (
							<FormItem>
								<FormLabel>Country</FormLabel>
								<FormControl>
									<CountryDropdown countries={countries} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
