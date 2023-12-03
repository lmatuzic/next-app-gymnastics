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

type ProgramDropdownProps = {
	selectedProgramAndCategory: string | undefined;
	handleSelectChange: (option: any) => void;
};

export default function ProgramDropdown({
	selectedProgramAndCategory,
	handleSelectChange,
}: ProgramDropdownProps) {
	return (
		<Select
			value={
				programsAndCategories.find(
					(programsAndCategory) => programsAndCategory.name === selectedProgramAndCategory
				)?.name
			}
			onValueChange={(e) => handleSelectChange(e)}
		>
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
