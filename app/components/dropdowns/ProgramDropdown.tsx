'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/app/components/shadcn/Select';
import { Program } from '@/app/typings/applications';

export type ProgramDropdownProps = {
	programs: Program[];
};

export default function ProgramDropdown({ programs }: ProgramDropdownProps) {
	return (
		<Select>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Select program' />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{programs.map((program) => (
						<SelectItem value={program.name} key={program.name}>
							<div className='flex items-center gap-2'>
								<span>{program.name}</span>
							</div>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
