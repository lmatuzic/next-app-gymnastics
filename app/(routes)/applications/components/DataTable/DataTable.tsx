'use client';

import useDataTable from '@/app/(routes)/applications/components/DataTable/useDataTable';
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
		<div className='border rounded-md'>
			<Table className='text-sm'>
				<TableHeader className='bg-[#EAE9EF]'>
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
							console.log(row.getIsSelected());

							row.originalSubRows;

							return (
								<Fragment key={row.original.id}>
									<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
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
