import React from 'react';
import { Flex, Box, Text, Button } from 'rebass';
import { Select, Input } from '@rebass/forms';

import hexToRgba from 'hex-to-rgba';
import { useTable, useSortBy, usePagination } from 'react-table';
import { statusColor, statusLabel, regionLabel } from '../../../utility/helpers';

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
        maxHeight: '90vh',
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
        <Text variant="heading4">Build Progress</Text>
        <Select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
          minWidth={120}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>

      <Box
        className="progress-table-content"
        sx={{
          overflowY: 'auto',
          position: 'relative',
          height: 'calc(90vh - 365px)',
        }}
      >
        {headerGroups.map(headerGroup => (
          <Flex
            className="progress-table-columns"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
            py={3}
            width={1}
            bg="white"
            key={headerGroup.index}
            sx={{
              borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
              borderTop: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
              position: 'sticky',
              top: 0,
            }}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map(column => (
              <Box key={column.index} width={1} px={4}>
                <Text
                  variant="progress"
                  fontWeight="bold"
                  color="textGray"
                  sx={{
                    textTransform: 'uppercase',
                  }}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                </Text>
              </Box>
            ))}
          </Flex>
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
                          <Box
                            bg={hexToRgba(statusColor(cell.value), '0.1')}
                            textAlign="center"
                            width="fit-content"
                            px={4}
                            py={1}
                            minWidth={120}
                            sx={{
                              borderRadius: '4px',
                            }}
                          >
                            <Text
                              variant="progress"
                              color={statusColor(cell.value)}
                              fontWeight="bold"
                              {...cell.getCellProps()}
                            >
                              {statusLabel(cell.value)}
                            </Text>
                          </Box>
                        </Box>
                      );
                    }
                    if (cell.column.Header === 'Destination') {
                      return (
                        <Box width={1} px={4} key={cell.index}>
                          <Text
                            variant="progress"
                            color="textGray"
                            fontWeight="bold"
                            {...cell.getCellProps()}
                          >
                            {cell.render('Cell')}
                          </Text>
                        </Box>
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
                    return (
                      <Box width={1} px={4} key={cell.index}>
                        <Text variant="progress" color="textGray" {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </Text>
                      </Box>
                    );
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

// const Table = ({ columns, data }) => {
//   return (
//     <Box
//       className="progress-table"
//       maxWidth={1264}
//       mx="auto"
//       my={140}
//       sx={{
//         boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px',
//         maxHeight: '90vh',
//         height: 'auto',
//         borderRadius: '4px',
//         overflowY: 'hidden',
//       }}
//     >
//       <Flex className="progress-table-searchbar" flexDirection="row" alignItems="center" p={4}>
//         <Text variant="heading4">Build Progress</Text>
//       </Flex>
//       <Box
//         className="progress-table-content"
//         sx={{
//           overflowY: 'scroll',
//           position: 'relative',
//           height: 'calc(90vh - 140px)',
//         }}
//       >
//         <Flex
//           className="progress-table-columns"
//           flexDirection="row"
//           alignItems="center"
//           justifyContent="space-around"
//           py={3}
//           width={1}
//           bg="white"
//           sx={{
//             borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
//             borderTop: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
//             position: 'sticky',
//             top: 0,
//           }}
//         >
//           {columns.map(item => (
//             <Box key={item} width={1} px={4}>
//               <Text
//                 variant="progress"
//                 fontWeight="bold"
//                 color="textGray"
//                 sx={{
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 {item}
//               </Text>
//             </Box>
//           ))}
//         </Flex>
//         <Box className="progress-table-items">
//           {data &&
//             data.map(
//               item =>
//                 item.title && (
//                   <Flex
//                     flexDirection="row"
//                     alignItems="center"
//                     justifyContent="space-around"
//                     key={item.title}
//                     width={1}
//                     sx={{
//                       borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
//                       height: '48px',
//                     }}
//                   >
//                     <Box width={1} px={4}>
//                       <Text variant="progress" color="textGray" fontWeight="bold">
//                         {item.title}
//                       </Text>
//                     </Box>
//                     <Box width={1} px={4}>
//                       <Text variant="progress">{regionLabel(item.region)}</Text>
//                     </Box>
//                     <Box width={1} px={4}>
//                       <Box
//                         bg={hexToRgba(statusColor(item.locationStatus), '0.1')}
//                         textAlign="center"
//                         width="fit-content"
//                         px={4}
//                         py={1}
//                         minWidth={120}
//                         sx={{
//                           borderRadius: '4px',
//                         }}
//                       >
//                         <Text
//                           variant="progress"
//                           color={statusColor(item.locationStatus)}
//                           fontWeight="bold"
//                           letterSpacing="1.1px"
//                           as="p"
//                         >
//                           {statusLabel(item.locationStatus)}
//                         </Text>
//                       </Box>
//                     </Box>
//                     <Box width={1} px={4}>
//                       <Text variant="progress">{item.locationType || 'N/A'}</Text>
//                     </Box>
//                     <Box width={1} px={4}>
//                       <Text variant="progress">{item.dateStarted || 'N/A'}</Text>
//                     </Box>
//                     <Box width={1} px={4}>
//                       <Text variant="progress">{item.dateCompleted || 'N/A'}</Text>
//                     </Box>
//                   </Flex>
//                 )
//             )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

export default Table;
