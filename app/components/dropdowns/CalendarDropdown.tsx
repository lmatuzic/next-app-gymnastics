'use client';

import { Calendar } from '@/app/components/shadcn/Calendar';
import { Dispatch, SetStateAction } from 'react';

type CalendarDropdownProps = {
	date: Date | undefined;
	handleSetDate: (date: Date) => void;
};

export default function CalendarDropdown({ date, handleSetDate }: CalendarDropdownProps) {
	return (
		<Calendar
			initialFocus
			mode='single'
			captionLayout='dropdown-buttons' // dropdown | buttons | dropdown-buttons
			fromYear={1980}
			toYear={2023}
			selected={date}
			onSelect={(e) => handleSetDate(e as Date)}
			// numberOfMonths={2}
			className='border rounded-md'
		/>
	);
}
