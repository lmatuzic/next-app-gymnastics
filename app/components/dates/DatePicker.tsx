'use client';

import CalendarDropdown from '@/app/components/dropdowns/CalendarDropdown';
import { Button } from '@/app/components/shadcn/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/shadcn/Popover';
import { cn } from '@/app/utils/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

// type DatePickerProps = {
// 	selectedDate: Date;
// };

export function DatePicker() {
	const [date, setDate] = useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-full justify-start text-left font-normal focus:border-primaryVariantJudge',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className='w-4 h-4 mr-2' />
					{date ? format(date, 'PPP') : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>

			<PopoverContent className='w-auto p-0' align='start'>
				<CalendarDropdown date={date} handleSetDate={setDate} />
			</PopoverContent>
		</Popover>
	);
}
