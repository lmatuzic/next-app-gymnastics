'use client';

import { Button } from '@/app/components/shadcn/Button';
import StatusIndicator from '@/app/components/status/StatusIndicator';
import { GymnastApplication } from '@/app/typings/applications';
import { Country } from '@/app/typings/countries';
import { ColumnDef, Row } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ArrowUpDown, ChevronDown } from 'lucide-react';
import { useCallback, useMemo } from 'react';

interface UseDataTableProps {
	countries: Country[];
	expandedRowId: string | null;
	handleToggleRowExpansion: (row: Row<GymnastApplication>) => void;
	rotateArrowClass: string;
}

export default function useDataTable({
	countries,
	expandedRowId,
	handleToggleRowExpansion,
	rotateArrowClass,
}: UseDataTableProps) {
	const renderSubComponent = useCallback((row: Row<GymnastApplication>) => {
		const date = new Date(row.original.dateOfBirth);
		const formattedDate = format(date, 'MM.dd.yyyy');

		return (
			<>
				<div>
					<span className='mr-1 font-bold'>Date of birth:</span>
					{formattedDate}
				</div>

				<div>
					<span className='mr-1 font-bold'>Phone number:</span>
					{row.original.phone}
				</div>
			</>
		);
	}, []);

	const dataTableColumns: ColumnDef<GymnastApplication>[] = useMemo(() => {
		return [
			{
				accessorKey: 'firstName',
				header: 'Name',
				cell: ({ row }) => (
					<>
						<div>
							<span className='mr-1'>{row.original.firstName}</span>
							<span>{row.original.lastName}</span>
						</div>

						<div className='text-xs text-textSecondary'>
							<span className='mr-1'>
								{countries.find((country) => country.code === row.original.country)?.flag}
							</span>

							<span>{row.original.club}</span>
						</div>
					</>
				),
			},
			{
				accessorKey: 'discipline',
				header: ({ column }) => {
					return (
						<Button
							variant='ghost'
							onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
						>
							Discipline
							<ArrowUpDown className='w-4 h-4 ml-2' />
						</Button>
					);
				},
				cell: ({ row }) => {
					return <span>{row.getValue('discipline')}</span>;
				},
			},
			{
				accessorKey: 'programName',
				header: ({ column }) => {
					return (
						<Button
							variant='ghost'
							onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
						>
							Program
							<ArrowUpDown className='w-4 h-4 ml-2' />
						</Button>
					);
				},
				cell: ({ row }) => {
					return (
						<>
							<span>{row.getValue('programName')}</span>
						</>
					);
				},
			},
			{
				accessorKey: 'category',
				header: ({ column }) => {
					return (
						<Button
							variant='ghost'
							onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
						>
							Category
							<ArrowUpDown className='w-4 h-4 ml-2' />
						</Button>
					);
				},
				cell: ({ row }) => <span>{row.original.categoryName}</span>,
			},
			{
				accessorKey: 'team',
				header: ({ column }) => {
					return (
						<Button
							variant='ghost'
							onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
						>
							Team
							<ArrowUpDown className='w-4 h-4 ml-2' />
						</Button>
					);
				},
				cell: ({ row }) => <span>{row.original.teamName}</span>,
			},
			{
				accessorKey: 'status',
				header: ({ column }) => {
					return (
						<Button
							variant='ghost'
							onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
						>
							Status
							<ArrowUpDown className='w-4 h-4 ml-2' />
						</Button>
					);
				},
				cell: ({ row }) => <StatusIndicator text={row.getValue('status')} />,
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
			{
				id: 'expander',
				cell: ({ row }) => {
					return (
						<ChevronDown
							className={`cursor-pointer w-4`}
							onClick={() => handleToggleRowExpansion(row)}
						/>
					);
				},
			},
		];
	}, []);

	return { dataTableColumns, renderSubComponent };
}
