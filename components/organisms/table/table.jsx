import React from 'react';
import { Flex, Box, Text, Button } from 'rebass';
import { Select, Input } from '@rebass/forms';

import hexToRgba from 'hex-to-rgba';
import { useTable, useSortBy, usePagination } from 'react-table';
import { Progress } from 'semantic-ui-react';
import Badge from '../../atoms/badge/badge';
import { statusColor, statusLabel, regionLabel } from '../../../utility/helpers';
import { TableHeader, TableHeaderContainer, TableCell } from './styledTable';

const Table = ({ columns, data }) => {
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
    },
    useSortBy,
    usePagination
  );

  return (
    <Box
      className="progress-table"
      maxWidth={1264}
      mx="auto"
      my={140}
      sx={{
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px',
        height: 'auto',
        borderRadius: '4px',
        overflowY: 'hidden',
      }}
      {...getTableProps()}
    >
      <Progress progress percent={44} />
      <Flex
        className="progress-table-searchbar"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p={4}
      >
        <Text variant="heading4">Build Progress</Text>
        <Select
          value={pageSize}
          onChange={e => {
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
          ].map(pageSize => (
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
        {headerGroups.map(headerGroup => (
          <TableHeaderContainer key={headerGroup.index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableHeader
                key={column.index}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
              </TableHeader>
            ))}
          </TableHeaderContainer>
        ))}
        <Box className="progress-table-items" {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              row.original.title && (
                <Flex
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-around"
                  key={row.index}
                  width={1}
                  sx={{
                    borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
                    height: '48px',
                  }}
                  {...row.getRowProps()}
                >
                  {row.cells.map(cell => {
                    if (cell.column.Header === 'Status') {
                      return (
                        <Box width={1} px={4} key={cell.index}>
                          <Badge variant={statusColor(cell.value)} {...cell.getCellProps()}>
                            {statusLabel(cell.value)}
                          </Badge>
                        </Box>
                      );
                    }
                    if (cell.column.Header === 'Destination') {
                      return (
                        <TableCell fontWeight="bold" key={cell.index}>
                          {cell.render('Cell')}
                        </TableCell>
                      );
                    }
                    if (cell.column.Header === 'Region') {
                      return (
                        <Box width={1} px={4} key={cell.index}>
                          <Text variant="progress" color="textGray" {...cell.getCellProps()}>
                            {regionLabel(cell.value)}
                          </Text>
                        </Box>
                      );
                    }
                    return <TableCell key={cell.index}>{cell.render('Cell')}</TableCell>;
                  })}
                </Flex>
              )
            );
          })}
        </Box>
      </Box>
      <Box className="progress-table-footer">
        <Flex flexDirection="row" justifyContent="center" p={4} alignItems="center">
          <Button variant="utility" onClick={() => previousPage()} disabled={!canPreviousPage}>
            Back
          </Button>
          <Text fontSize={[3]} px={4}>
            Page
          </Text>
          <Input
            maxWidth={50}
            type="number"
            value={pageIndex + 1 || 1}
            onChange={e => {
              const pagex = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pagex);
            }}
          />
          <Text fontSize={[3]} px={4}>
            of {pageOptions.length}
          </Text>
          <Button variant="utility" onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Table;
