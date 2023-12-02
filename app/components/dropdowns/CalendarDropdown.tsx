'use client';

import { Calendar } from '@/app/components/shadcn/Calendar';
import { Dispatch, SetStateAction } from 'react';

type CalendarDropdownProps = {
	date: Date | undefined;
	handleSetDate: Dispatch<SetStateAction<Date | undefined>>;
};

export default function CalendarDropdown({ date, handleSetDate }: CalendarDropdownProps) {
	return (
		<Calendar
			initialFocus
			mode='single'
			captionLayout='dropdown-buttons' //Also: dropdown | buttons
			fromYear={1980}
			toYear={2023}
			selected={date}
			onSelect={handleSetDate}
			// numberOfMonths={2}
			className='border rounded-md'
		/>
	);
}
