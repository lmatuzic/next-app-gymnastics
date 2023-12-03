'use client';

import StatusIndicator from '@/app/components/StatusIndicator';
import { GymnastApplication } from '@/app/typings/applications';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';

export const columns: ColumnDef<GymnastApplication>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => (
			<>
				<div>
					<span className='mr-1'>{row.original.firstName}</span>
					<span>{row.original.lastName}</span>
				</div>

				<div className='text-xs text-textSecondary'>
					<span className='mr-1'>{row.original.country}</span>
					<span>{row.original.club}</span>
				</div>
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
		cell: ({ row }) => <StatusIndicator text={row.original.status} />,
	},
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => {
			const date = new Date(row.original.date);
			const formattedDate = format(date, 'MM.dd.yyyy. HH:mm');

			return <span className='text-xs text-textPrimaryLight'>{formattedDate}</span>;
		},
	},
];
