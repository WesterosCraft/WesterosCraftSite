import React, { useMemo } from 'react';
import { Flex, Box, Text, Button } from 'rebass';
import { Select, Input } from '@rebass/forms';
import { useTable, useSortBy, usePagination, useResizeColumns, useFlexLayout, useRowSelect } from 'react-table';
import { TableHeader, TableHeaderContainer } from './styledProgressTable';
import { camelCaseFormatter } from '../../../utility/helpers';

export const ProgressTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Level',
        accessor: 'destinationLevel',
        filterable: false,
      },
      {
        Header: 'Destination',
        accessor: 'title',
        filterable: false,
      },
      {
        Header: 'Region',
        accessor: 'region',
        filterable: false,
      },
      {
        Header: 'Status',
        accessor: 'destinationStatus',
        filterable: true,
      },
      {
        Header: 'Type',
        accessor: 'destinationType',
        filterable: false,
      },
      {
        Header: 'House',
        accessor: 'house',
        filterable: false,
      },
      {
        Header: 'Warp',
        accessor: 'warp',
        filterable: false,
      },
    ],
    [],
  );

  const headerProps = (props, { column }) => getStyles(props, column.align);

  const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

  const getStyles = (props, align = 'left') => [
    props,
    {
      style: {
        justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
      },
    },
  ];

  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useSortBy,
    usePagination,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
  );

  return (
    <Box
      className="progress-table table"
      maxWidth={1264}
      mx="auto"
      mb={140}
      sx={{
        boxShadow: `0 3.9px 3.5px rgba(0, 0, 0, 0.046),
        0 9.4px 8.4px rgba(0, 0, 0, 0.065),
        0 17.7px 15.9px rgba(0, 0, 0, 0.073),
        0 31.5px 28.4px rgba(0, 0, 0, 0.076)
      `,
        border: '1px solid #e2e8f0',
        height: 'auto',
        borderRadius: '4px',
        overflowY: 'hidden',
      }}
      {...getTableProps()}
    >
      <Flex
        className="progress-table-searchbar"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p={4}
      >
        <Text variant="heading4">Project List</Text>
        <Select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          minWidth={120}
        >
          {[
            { size: 10, label: 10 },
            { size: 20, label: 20 },
            { size: 30, label: 30 },
            { size: 40, label: 40 },
            { size: 50, label: 50 },
            { size: data.length, label: 'All' },
          ].map((pageSize) => (
            <option key={pageSize.size} value={pageSize.size}>
              Show {pageSize.label}
            </option>
          ))}
        </Select>
      </Flex>
      <Box
        className="progress-table-content"
        sx={{
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {headerGroups.map((headerGroup) => (
          <TableHeaderContainer className="tr" key={headerGroup.index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader key={column.index} {...column.getHeaderProps(headerProps)} className="th">
                {column.render('Header')}
              </TableHeader>
            ))}
          </TableHeaderContainer>
        ))}
        <Box className="progress-table-items tbody" sx={{ border: 'none' }} {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              row.original.title && (
                <Flex
                  className="tr"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-around"
                  key={row.index}
                  width={1}
                  sx={{
                    borderBottom: '1px solid #e2e8f0',
                    height: '48px',
                  }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, i) => (
                    <Box width={1} px={4} key={i} {...cell.getCellProps(cellProps)} className="td">
                      <Text fontSize="14px">{camelCaseFormatter(cell.value)}</Text>
                    </Box>
                  ))}
                </Flex>
              )
            );
          })}
        </Box>
      </Box>
      <Box className="progress-table-footer">
        <Flex flexDirection="row" justifyContent="center" p={4} alignItems="center">
          <Button variant="red" onClick={() => previousPage()} disabled={!canPreviousPage}>
            Back
          </Button>
          <Text fontSize={[3]} px={4}>
            Page
          </Text>
          <Input
            maxWidth={50}
            type="number"
            value={pageIndex + 1 || 1}
            onChange={(e) => {
              const pagex = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pagex);
            }}
            p="8px"
          />
          <Text fontSize={[3]} px={4}>
            of {pageOptions.length}
          </Text>
          <Button variant="red" onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
