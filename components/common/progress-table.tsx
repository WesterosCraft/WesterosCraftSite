import React from 'react';
import { Select, Table, Thead, Tbody, Tr, Th, Td, Flex, Input, Button, ButtonGroup } from '@chakra-ui/react';
import {
	useTable,
	usePagination,
	useSortBy,
	useFilters,
	useGroupBy,
	useExpanded,
	useRowSelect,
	useGlobalFilter,
	useAsyncDebounce,
} from 'react-table';
import { matchSorter } from 'match-sorter';

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }: any) {
	const count = preFilteredRows.length;

	return (
		<Input
			size='xs'
			value={filterValue || ''}
			onChange={(e) => {
				setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
			}}
			placeholder={`Search ${count} builds...`}
		/>
	);
}

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }: any) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<span>
			Search:{' '}
			<input
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} records...`}
				style={{
					fontSize: '1.1rem',
					border: '0',
				}}
			/>
		</span>
	);
}

function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
	return matchSorter(rows, filterValue, { keys: [(row: any) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val: any) => !val;

const ProgressTable = ({ columns, data, updateMyData, skipReset }: any) => {
	const filterTypes = React.useMemo(
		() => ({
			fuzzyText: fuzzyTextFilterFn,
			text: (rows: any, id: any, filterValue: any) => {
				return rows.filter((row: any) => {
					const rowValue = row.values[id];
					return rowValue !== undefined
						? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
						: true;
				});
			},
		}),
		[]
	);

	const defaultColumn = React.useMemo(
		() => ({
			// Let's set up our default Filter UI
			Filter: DefaultColumnFilter,
			// And also our default editable cell
			// Cell: EditableCell,
		}),
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		nextPage,
		previousPage,
		state,
		setPageSize,
		preGlobalFilteredRows,
		setGlobalFilter,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			filterTypes,
			updateMyData,
			autoResetPage: !skipReset,
			autoResetSelectedRows: !skipReset,
			disableMultiSort: true,
		},
		useGlobalFilter,
		useFilters,
		useGroupBy,
		useSortBy,
		useExpanded,
		usePagination,
		useRowSelect
	);

	// Render the UI for your table
	return (
		<>
			{/* <GlobalFilter
			preGlobalFilteredRows={preGlobalFilteredRows}
				globalFilter={state.globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>	 */}
			<Table
				fontSize='sm'
				width='full'
				size='md'
				m={3}
				borderWidth='1px'
				borderColor='gray.200'
				variant='striped'
				{...getTableProps()}
			>
				<Thead>
					{headerGroups.map((headerGroup, i) => (
						<Tr {...headerGroup.getHeaderGroupProps()} key={i}>
							{headerGroup.headers.map((column, i) => (
								<Th {...column.getHeaderProps()} key={i}>
									<div>
										<span {...column.getSortByToggleProps()}>
											{column.render('Header')}
											{/* Add a sort direction indicator */}
											{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
										</span>
									</div>
									{/* Render the columns filter UI */}
									<div>{column.canFilter ? column.render('Filter') : null}</div>
								</Th>
							))}
						</Tr>
					))}
				</Thead>
				<Tbody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<Tr {...row.getRowProps()} key={i}>
								{row.cells.map((cell, i) => {
									return (
										<Td {...cell.getCellProps()} key={i}>
											{cell.render('Cell')}
										</Td>
									);
								})}
							</Tr>
						);
					})}
				</Tbody>
			</Table>
			{/*
        Pagination can be built however you'd like.
        This is just a very basic UI implementation:
      */}
			<Flex direction='row' align='center' className='pagination'>
				<span>
					Page
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>

				<Select
					width='100px'
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}
				>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</Select>
				<ButtonGroup variant='outline' size='sm'>
					<Button onClick={() => previousPage()} disabled={!canPreviousPage}>
						Previous
					</Button>
					<Button onClick={() => nextPage()} disabled={!canNextPage}>
						Next
					</Button>
				</ButtonGroup>
			</Flex>
		</>
	);
};

// Define a custom filter filter function!
function filterGreaterThan(rows: any, id: any, filterValue: any) {
	return rows.filter((row: any) => {
		const rowValue = row.values[id];
		return rowValue >= filterValue;
	});
}

filterGreaterThan.autoRemove = (val: any) => typeof val !== 'number';

export default ProgressTable;
