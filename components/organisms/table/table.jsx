import React from 'react';
import { Flex, Box, Text } from 'rebass';
import hexToRgba from 'hex-to-rgba';
import { statusColor, statusLabel, regionLabel } from '../../../utility/helpers';

const Table = ({ columns, data }) => {
  console.log('tabel data: ', data);
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
    >
      <Flex className="progress-table-searchbar" flexDirection="row" alignItems="center" p={4}>
        <Text variant="heading4">Build Progress</Text>
      </Flex>
      <Box
        className="progress-table-content"
        sx={{
          overflowY: 'scroll',
          position: 'relative',
          height: 'calc(90vh - 140px)',
        }}
      >
        <Flex
          className="progress-table-columns"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          py={3}
          width={1}
          bg="white"
          sx={{
            borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
            borderTop: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
            position: 'sticky',
            top: 0,
          }}
        >
          {columns.map(item => (
            <Box key={item} width={1} px={4}>
              <Text
                variant="progress"
                fontWeight="bold"
                color="textGray"
                sx={{
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </Text>
            </Box>
          ))}
        </Flex>
        <Box className="progress-table-items">
          {data &&
            data.map(
              item =>
                item.title && (
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-around"
                    key={item.title}
                    width={1}
                    sx={{
                      borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
                      height: '48px',
                    }}
                  >
                    <Box width={1} px={4}>
                      <Text variant="progress" color="textGray" fontWeight="bold">
                        {item.title}
                      </Text>
                    </Box>
                    <Box width={1} px={4}>
                      <Text variant="progress">{regionLabel(item.region)}</Text>
                    </Box>
                    <Box width={1} px={4}>
                      <Box
                        bg={hexToRgba(statusColor(item.locationStatus), '0.1')}
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
                          color={statusColor(item.locationStatus)}
                          fontWeight="bold"
                          letterSpacing="1.1px"
                          as="p"
                        >
                          {statusLabel(item.locationStatus)}
                        </Text>
                      </Box>
                    </Box>
                    <Box width={1} px={4}>
                      <Text variant="progress">{item.locationType || 'N/A'}</Text>
                    </Box>
                    <Box width={1} px={4}>
                      <Text variant="progress">{item.dateStarted || 'N/A'}</Text>
                    </Box>
                    <Box width={1} px={4}>
                      <Text variant="progress">{item.dateCompleted || 'N/A'}</Text>
                    </Box>
                  </Flex>
                )
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default Table;
