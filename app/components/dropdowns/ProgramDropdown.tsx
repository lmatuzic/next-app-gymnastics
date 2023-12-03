'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/components/shadcn/Select';
import { programsAndCategories } from '@/app/contants/applications';

export default function ProgramDropdown() {
	return (
		<Select>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Select program' />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{programsAndCategories.map((item) => (
						<SelectItem value={item.name} key={item.name}>
							{item.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
