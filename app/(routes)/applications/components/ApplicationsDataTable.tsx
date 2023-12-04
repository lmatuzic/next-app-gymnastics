'use client';

import useDataTable from '@/app/(routes)/applications/hooks/useDataTable';
import H2 from '@/app/components/headings/H2';
import { Input } from '@/app/components/shadcn/Input';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/app/components/shadcn/Table';
import { GymnastApplication } from '@/app/typings/applications';
import { Country } from '@/app/typings/countries';
import {
	ColumnFiltersState,
	Row,
	SortingState,
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { Search } from 'lucide-react';
import { Fragment, useState } from 'react';

interface DataTableProps {
	data: GymnastApplication[];
	countries: Country[];
}

export function ApplicationsDataTable({ data, countries }: DataTableProps) {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
	const [rotateArrowClass, setRotateArrowClass] = useState('');

	const handleToggleRowExpansion = (row: Row<GymnastApplication>) => {
		setExpandedRowId((prevRowId) => {
			if (prevRowId === row.id) {
				return null;
			}

			return row.id;
		});
	};

	const { dataTableColumns, renderSubComponent } = useDataTable({
		countries,
		expandedRowId,
		handleToggleRowExpansion,
		rotateArrowClass,
	});

	const table = useReactTable({
		data,
		columns: dataTableColumns,
		state: {
			sorting,
			columnFilters,
		},
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
	});

	return (
		<>
			<div className='flex items-center py-4'>
				<Search className='absolute z-10 w-4 text-muted-foreground ml-2.5' />

				<Input
					placeholder='Search gymnasts by name'
					value={(table.getColumn('firstName')?.getFilterValue() as string) ?? ''}
					onChange={(event) => table.getColumn('firstName')?.setFilterValue(event.target.value)}
					className='relative max-w-sm pl-8'
				/>
			</div>

			<H2 text={`All requests (${data.length})`} className='my-6' />

			<div className='overflow-hidden border rounded-lg'>
				<Table className='text-sm'>
					<TableHeader className='rounded-lg bg-bgSecondary'>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} className='font-bold text-textPrimary'>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>

					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => {
								return (
									<Fragment key={row.original.id}>
										<TableRow
											key={row.id}
											data-state={row.getIsSelected() && 'selected'}
											className='odd:bg-[#FAFAFA]'
										>
											{row.getVisibleCells().map((cell) => (
												<TableCell key={cell.id}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</TableCell>
											))}
										</TableRow>

										{row.id === expandedRowId && (
											<TableRow>
												<TableCell className='text-xs'>{renderSubComponent(row)}</TableCell>
											</TableRow>
										)}
									</Fragment>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={dataTableColumns.length} className='h-24 text-center'>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</>
	);
}
