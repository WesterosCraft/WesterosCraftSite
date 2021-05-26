import React from 'react';
import { Flex, Image, Text, Box } from 'rebass';
import { Button } from '../../../components/atoms/button';
import { FiExternalLink } from 'react-icons/fi';
import { camelCaseFormatter, formatDate } from '../../../utils/helpers';
import { urlFor } from '../../../utils/sanity';
import _lowerCase from 'lodash/lowerCase';

export const ProjectDetails = ({ data }) => {
  const {
    application,
    banner,
    buildType,
    dateCompleted,
    dateStarted,
    images,
    name,
    projectLead,
    projectStatus,
    region,
    house,
    warp,
    dynmapInformation
  } = data || {};

  return (
    <>
      <Flex flexDirection="row" justifyContent="space-between" alignItems="baseline" width={1}>
        <Text
          fontFamily="heading"
          variant="heading3"
          as="h3"
          mb={5}
          mt={data && images && images.length > 0 ? 5 : 0}>
          Project details
          {data && application && (
            <a
              href={application}
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: 'none', marginLeft: '8px' }}>
              <FiExternalLink size="18px" color="var(--theme-colors-text)" />
            </a>
          )}
        </Text>
        {data && dynmapInformation && (
          <Box>
            <Button
              href={`http://mc.westeroscraft.com/?mapname=flat&zoom=${
                dynmapInformation.zoom || 3
              }&x=${dynmapInformation.xCoord}&y=${dynmapInformation.yCoord}`}
              variant="white">
              View Map
            </Button>
          </Box>
        )}
      </Flex>
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        width={[1, 2 / 3, 1]}
        mb={10}
        mx="auto">
        {data && banner && (
          <Image alt={`${name}-banner`} src={urlFor(banner.asset._ref)} maxHeight={150} />
        )}
        <Flex
          as="ol"
          flexDirection="column"
          width={[1, null, null, '42%']}
          sx={{ paddingInlineStart: 0 }}>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              Region
            </Text>
            <Text as="p" width={1 / 2}>
              {camelCaseFormatter(region)}
            </Text>
          </Flex>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              House
            </Text>
            <Text as="p" width={1 / 2}>
              {house}
            </Text>
          </Flex>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              Status
            </Text>
            <Text as="p" width={1 / 2}>
              {camelCaseFormatter(projectStatus)}
            </Text>
          </Flex>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              Date started
            </Text>
            <Text as="p" width={1 / 2}>
              {formatDate(dateStarted)}
            </Text>
          </Flex>
        </Flex>
        <Flex
          as="ol"
          flexDirection="column"
          width={[1, null, null, '42%']}
          sx={{ paddingInlineStart: 0 }}>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              Type
            </Text>
            <Text as="p" width={1 / 2}>
              {camelCaseFormatter(buildType)}
            </Text>
          </Flex>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              Warp
            </Text>
            <Text as="p" width={1 / 2}>
              {warp && `/${_lowerCase(warp)}`}
            </Text>
          </Flex>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              Project lead(s)
            </Text>
            <Text as="p" width={1 / 2}>
              {projectLead}
            </Text>
          </Flex>
          <Flex
            as="li"
            justifyContent={['space-between', null, null, 'flex-start']}
            py={2}
            width={1}>
            <Text as="h4" fontWeight={600} width={1 / 2}>
              Date completed
            </Text>
            <Text as="p" width={1 / 2}>
              {formatDate(dateCompleted)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
