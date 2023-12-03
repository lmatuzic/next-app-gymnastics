'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/components/shadcn/Select';
import { Country } from '@/app/typings/countries';

type CountryDropdownProps = {
	countries: Country[];
	selectedCountryValue: string | undefined;
	handleSelectChange: (option: any) => void;
};

export function CountryDropdown({
	countries,
	selectedCountryValue,
	handleSelectChange,
}: CountryDropdownProps) {
	return (
		<Select value={selectedCountryValue} onValueChange={(e) => handleSelectChange(e)}>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Select country' />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{countries.map((country) => (
						<SelectItem value={country.name} key={country.name}>
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
