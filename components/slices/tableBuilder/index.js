import React from 'react';
import { Flex, Text, Box, Heading } from 'rebass';
import { useTable } from 'react-table';

export const TableBuilder = ({ data }) => {
  const { tableHeading, table } = data;

  const columns = React.useMemo(
    () =>
      table.rows[0].cells.map((cell) => ({
        id: cell.toLowerCase(),
        Header: cell,
        accessor: cell.toLowerCase()
      })),

    [table.rows]
  );
  const destruct = (obj, ...keys) =>
    keys.reduce((a, c) => ({ ...a, [c.toLowerCase()]: obj[c] }), {});

  const object = table.rows[0].cells;

  const args = Object.values(object);
  const subset1 = destruct(object, ...args);
  console.log('👉 ~ TableBuilder ~ subset1', subset1);

  const dataGenerator = () => {
    const [, ...rows] = table.rows;
    return table.rows.reduce((acc, { cells: [name, released, download] }, index) => {
      const key = table.rows[0].cells[index];
      return acc.concat({ name, released, download });
    }, []);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: dataGenerator()
  });

  return (
    <Flex flexDirection="column" maxWidth={1264} mx="auto" px={5}>
      <Heading mb={2}>{tableHeading || ''}</Heading>
      <Box
        p={4}
        as="table"
        className="table-builder table"
        sx={{
          borderSpacing: 0,
          boxShadow: `0 3.9px 3.5px rgba(0, 0, 0, 0.046),
    0 9.4px 8.4px rgba(0, 0, 0, 0.065),
    0 17.7px 15.9px rgba(0, 0, 0, 0.073),
    0 31.5px 28.4px rgba(0, 0, 0, 0.076)
    `,
          height: 'auto',
          borderRadius: '4px',
          overflowY: 'hidden',
          border: '2px solid var(--theme-colors-text)'
        }}
        {...getTableProps()}>
        <Box as="thead">
          {headerGroups.map((headerGroup, i) => (
            <Box
              as="tr"
              className="tr"
              key={i}
              backgroundColor="var(--theme-colors-gray-100)"
              {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <Heading
                  p={2}
                  color="var(--theme-colors-alt-text)"
                  fontSize="14px"
                  textAlign="left"
                  sx={{ textTransform: 'uppercase' }}
                  as="th"
                  key={i}
                  {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Heading>
              ))}
            </Box>
          ))}
        </Box>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Box as="tr" py={2} key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <Text p={2} fontSize="14px" as="td" key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </Text>
                  );
                })}
              </Box>
            );
          })}
        </tbody>
      </Box>
    </Flex>
  );
};
