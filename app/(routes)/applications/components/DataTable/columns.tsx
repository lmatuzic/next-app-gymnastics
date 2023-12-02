'use client';

import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { addHours, format, parseISO } from 'date-fns';
import { date } from 'zod';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type GymnastApplication = {
	id: string;
	firstName: string;
	lastName: string;
	country: string;
	phone: string;
	programName: string;
	categoryName: string;
	teamName: string;
	status: 'applied' | 'declined' | 'canceled' | 'awaiting response';
	date: string;
	club: string;
	dateOfBirth: Date;
};

export const columns: ColumnDef<GymnastApplication>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => (
			<>
				<span className='mr-1'>{row.original.firstName}</span>
				<span>{row.original.lastName}</span>
			</>
		),
	},
	{
		accessorKey: 'discipline',
		header: 'Discipline',
	},
	{
		accessorKey: 'program',
		header: 'Program',
		cell: ({ row }) => <span>{row.original.programName}</span>,
	},
	{
		accessorKey: 'category',
		header: 'Category',
		cell: ({ row }) => <span>{row.original.categoryName}</span>,
	},
	{
		accessorKey: 'team',
		header: 'Team',
		cell: ({ row }) => <span>{row.original.teamName}</span>,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => <span>{row.original.status}</span>,
	},
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => {
			const date = new Date(row.original.date);
			const formattedDate = format(date, 'MM.dd.yyyy HH:mm');

			return <span>{formattedDate}</span>;
		},
	},
];
