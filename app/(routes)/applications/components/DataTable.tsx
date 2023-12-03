'use client';

import useDataTable from '@/app/(routes)/applications/hooks/useDataTable';
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
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { Fragment, useState } from 'react';

interface DataTableProps {
	data: GymnastApplication[];
	countries: Country[];
}

export function DataTable({ data, countries }: DataTableProps) {
	const [isRowExpanded, setIsRowExpanded] = useState(false);

	const handleToggleRowExpansion = () => {
		setIsRowExpanded((prevExpanded) => !prevExpanded);
	};

	const { dataTableColumns, renderSubComponent } = useDataTable({
		countries,
		isRowExpanded,
		handleToggleRowExpansion,
	});

	const table = useReactTable({
		data,
		columns: dataTableColumns,
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
	});

	return (
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

									{isRowExpanded ? (
										<TableRow>
											<TableCell className='text-xs'>{renderSubComponent(row)}</TableCell>
										</TableRow>
									) : null}
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
	);
}
