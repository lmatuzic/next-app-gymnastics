'use client';

import { CountryDropdown } from '@/app/components/dropdowns/CountryDropdown';
import ProgramDropdown from '@/app/components/dropdowns/ProgramDropdown';
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
import { programs } from '@/app/contants/applications';
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
			country: {
				code: '',
			},
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
									<CountryDropdown countries={countries} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex items-center'>
					<FormField
						control={form.control}
						name='country'
						render={() => (
							<FormItem>
								<FormLabel className='text-xs'>Program and category</FormLabel>
								<FormControl>
									<ProgramDropdown programs={programs} />
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
