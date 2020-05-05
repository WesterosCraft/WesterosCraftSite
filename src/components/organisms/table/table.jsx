import React from 'react';
import { useTable, useSortBy, usePagination, useResizeColumns, useFlexLayout, useRowSelect } from 'react-table';
import { Flex, Box, Text } from 'rebass';

export const Table = ({ columns, data, maxWidth = '100%' }) => {
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

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
  );

  return (
    <Box
      className="table"
      maxWidth={maxWidth}
      mx="auto"
      mb={140}
      width={1}
      sx={{
        boxShadow: `0 3.9px 3.5px rgba(0, 0, 0, 0.046),
            0 9.4px 8.4px rgba(0, 0, 0, 0.065),
            0 17.7px 15.9px rgba(0, 0, 0, 0.073),
            0 31.5px 28.4px rgba(0, 0, 0, 0.076)
          `,
        height: 'auto',

        overflowY: 'hidden',
        border: '2px solid black',
      }}
      {...getTableProps()}
    >
      <Box
        py={5}
        className="table-content"
        sx={{
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {headerGroups.map((headerGroup) => (
          <div className="tr" key={headerGroup.index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Text
                as="p"
                fontWeight="bold"
                fontSize="14px"
                ml={4}
                sx={{
                  textTransform: 'uppercase',
                }}
                pb={4}
                key={column.index}
                {...column.getHeaderProps(headerProps)}
                className="th"
              >
                {column.render('Header')}
              </Text>
            ))}
          </div>
        ))}
        <Box
          className="table-items tbody"
          sx={{ border: 'none', borderTop: '1px solid black' }}
          {...getTableBodyProps()}
        >
          {page.map((row) => {
            prepareRow(row);
            return (
              <Flex
                className="tr"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-around"
                key={row.index}
                width={1}
                py={1}
                sx={{
                  borderBottom: '1px solid #e2e8f0',
                  minHeight: '48px',
                }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <Box width={1} px={4} key={i} {...cell.getCellProps(cellProps)} className="td">
                      <Text as="span" fontSize="14px">
                        {cell.render('Cell')}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
