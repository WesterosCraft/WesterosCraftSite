import React, { Fragment } from 'react';
import { Box, Flex, Text } from 'rebass';
import { WikiNav } from '../organisms/wikiNav/wikiNav';
import { WikiContent } from '../organisms/wikiContent';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const BreadcrumbItem = React.forwardRef(({ children, index, ...rest }, ref) => {
  return (
    <Text
      ref={ref}
      sx={{ cursor: 'pointer' }}
      fontSize={['14px', null, '16px']}
      color="white"
      pr={1}
      pl={index !== 0 && 1}
      {...rest}>
      {children}
    </Text>
  );
});

export const WikiLayout = ({ children, title, breadcrumb }) => {
  const navData = [
    {
      title: 'Regions',
      url: '',
      type: null,
      element: null,
      children: [
        {
          title: 'Beyond The Wall',
          url: 'https://westeroscraft.com/wiki/beyond-the-wall',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'beyond-the-wall'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'The Wall',
          url: 'https://westeroscraft.com/wiki/the-wall',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'the-wall'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'The North',
          url: 'https://westeroscraft.com/wiki/north',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'north'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'Riverlands',
          url: 'https://westeroscraft.com/wiki/riverlands',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'riverlands'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'The Vale',
          url: 'https://westeroscraft.com/wiki/vale',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'vale'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'Iron Islands',
          url: 'https://westeroscraft.com/wiki/iron-islands',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'iron-islands'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'Westerlands',
          url: 'https://westeroscraft.com/wiki/westerlands',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'westerlands'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'Crownlands',
          url: 'https://westeroscraft.com/wiki/crownlands',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'crownlands'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'Stormlands',
          url: 'https://westeroscraft.com/wiki/stormlands',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'stormlands'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'The Reach',
          url: 'https://westeroscraft.com/wiki/reach',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'reach'
          },
          parent: {
            title: 'Regions'
          }
        },
        {
          title: 'Dorne',
          url: 'https://westeroscraft.com/wiki/dorne',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'dorne'
          },
          parent: {
            title: 'Regions'
          }
        }
      ]
    },
    {
      title: 'Guides',
      url: '',
      type: null,
      element: null,
      children: [
        {
          title: 'Troubleshooting Guide',
          url: 'https://westeroscraft.com/wiki/guides/troubleshooting-guide',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'troubleshooting-guide'
          },
          parent: {
            title: 'Guides'
          }
        },
        {
          title: 'Basic Building Guide for Applicants',
          url: 'https://westeroscraft.com/wiki/guides/applicant-building-guide',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'applicant-building-guide'
          },
          parent: {
            title: 'Guides'
          }
        },
        {
          title: "New Builders' Guide",
          url: 'https://westeroscraft.com/wiki/guides/new-builders-guide',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'new-builders-guide'
          },
          parent: {
            title: 'Guides'
          }
        },
        {
          title: 'General Building Guidelines',
          url: 'https://westeroscraft.com/wiki/guides/general-building-guidelines',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'general-building-guidelines'
          },
          parent: {
            title: 'Guides'
          }
        }
      ]
    },
    {
      title: 'Miscellaneous',
      url: '',
      type: null,
      element: null,
      children: [
        {
          title: 'Frequently Asked Questions',
          url: 'https://westeroscraft.com/wiki/miscellaneous/frequently-asked-questions',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'frequently-asked-questions'
          },
          parent: {
            title: 'Miscellaneous'
          }
        },
        {
          title: 'Server Rules',
          url: 'https://westeroscraft.com/wiki/miscellaneous/server-rules',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'server-rules'
          },
          parent: {
            title: 'Miscellaneous'
          }
        },
        {
          title: 'Custom Resource Pack',
          url: 'https://westeroscraft.com/wiki/miscellaneous/custom-resource-pack',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'custom-resource-pack'
          },
          parent: {
            title: 'Miscellaneous'
          }
        },
        {
          title: 'Map Repository',
          url: 'https://westeroscraft.com/wiki/miscellaneous/map-repository',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'map-repository'
          },
          parent: {
            title: 'Miscellaneous'
          }
        },
        {
          title: 'Projects Orphanage',
          url: 'https://westeroscraft.com/wiki/miscellaneous/projects-orphanage',
          type: 'craft\\elements\\Entry',
          element: {
            slug: 'projects-orphanage'
          },
          parent: {
            title: 'Miscellaneous'
          }
        }
      ]
    }
  ];
  return (
    <Box className="wiki-layout" pb={[15, 20]}>
      <Box
        className="breadcrumb-wrapper"
        bg="green"
        py={6}
        px={[4, null, 5]}
        width={1}
        sx={{
          outline: '8px outset #50815e',
          outlineOffset: '-8px'
        }}>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          maxWidth={1120}
          mx="auto"
          width={1}
          px={[0, null, 5]}>
          {breadcrumb &&
            Array.isArray(breadcrumb) &&
            breadcrumb.length > 1 &&
            breadcrumb.map((crumb, i) => (
              <Fragment key={i}>
                <Link href={`${crumb.link}`} passHref>
                  <BreadcrumbItem key={i} index={i} crumb={crumb}>
                    {crumb.text}
                  </BreadcrumbItem>
                </Link>
                {breadcrumb.length - 1 !== i ? <IoIosArrowForward color="white" /> : null}
              </Fragment>
            ))}
        </Flex>
      </Box>
      <Flex
        className="wiki-layout-container"
        flexDirection={['column', null, 'row']}
        justifyContent="center"
        height="100%"
        mt={[10, null, 16]}
        px={5}
        maxWidth={1120}
        mx="auto">
        <WikiNav navData={navData} />
        <WikiContent title={title}>{children}</WikiContent>
      </Flex>
    </Box>
  );
};
