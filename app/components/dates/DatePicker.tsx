'use client';

import CalendarDropdown from '@/app/components/dropdowns/CalendarDropdown';
import { Button } from '@/app/components/shadcn/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/shadcn/Popover';
import { cn } from '@/app/utils/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
// import { useState } from 'react';

type DatePickerProps = {
	selectedDate: Date;
	handleSetSelectedDate: (date: Date) => void;
};

export function DatePicker({ selectedDate, handleSetSelectedDate }: DatePickerProps) {
	// const [date, setDate] = useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-full justify-start text-left font-normal focus:border-primaryVariantJudge',
						!selectedDate && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className='w-4 h-4 mr-2' />
					{selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>

			<PopoverContent className='w-auto p-0' align='start'>
				<CalendarDropdown date={selectedDate} handleSetDate={handleSetSelectedDate} />
			</PopoverContent>
		</Popover>
	);
}
