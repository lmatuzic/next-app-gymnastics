'use client';

import StatusIndicator from '@/app/components/StatusIndicator';
import { GymnastApplication } from '@/app/typings/applications';
import { Country } from '@/app/typings/countries';
import { ColumnDef, Row } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ChevronDown } from 'lucide-react';
import { useCallback, useMemo } from 'react';

interface UseDataTableProps {
	countries: Country[];
	isRowExpanded: boolean;
	handleToggleRowExpansion: () => void;
}

export default function useDataTable({
	countries,
	isRowExpanded,
	handleToggleRowExpansion,
}: UseDataTableProps) {
	const renderSubComponent = useCallback((row: Row<GymnastApplication>) => {
		const date = new Date(row.original.dateOfBirth);
		const formattedDate = format(date, 'MM.dd.yyyy');

		return (
			<>
				<div>
					<span className='font-bold'>Date of birth:</span> {formattedDate}
				</div>

				<div>
					<span className='font-bold'>Phone number:</span>
					{row.original.phone}
				</div>
			</>
		);
	}, []);

	const dataTableColumns: ColumnDef<GymnastApplication>[] = useMemo(() => {
		return [
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
				header: 'Discipline',
			},
			{
				accessorKey: 'program',
				header: 'Program',
				cell: ({ row }) => {
					return (
						<>
							<span>{row.original.programName}</span>
						</>
					);
				},
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
			{
				id: 'expander',
				cell: ({ row }) => {
					return (
						<ChevronDown
							className={`cursor-pointer w-4 ${isRowExpanded ? 'rotate-180' : ''}`}
							onClick={handleToggleRowExpansion}
						/>
					);
				},
			},
		];
	}, []);

	return { isRowExpanded, handleToggleRowExpansion, dataTableColumns, renderSubComponent };
}
