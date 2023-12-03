'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/components/shadcn/Select';
import { CountryDropdownProps } from '@/app/typings/countries';

export function CountryDropdown({ countries }: CountryDropdownProps) {
	return (
		<Select>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Select country' />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{countries.map((country) => (
						<SelectItem value={country.code} key={country.code}>
							<div className='flex items-center gap-2'>
								<span className='text-3xl'>{country.flag}</span>
								<span>{country.name.substring(0, 3).toUpperCase()}</span>
							</div>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
