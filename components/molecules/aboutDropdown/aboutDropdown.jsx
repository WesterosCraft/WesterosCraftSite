import React, { Fragment } from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import Link from 'next/link';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';

const AboutDropdown = ({ data }) => {
  console.log('data', data);
  return (
    <DropdownContainer width={400} className="about-dropdown" sx={{ transform: 'translateX(0px)' }}>
      <Box p={8}>
        {data.map((item, i) =>
          item.dropdownDescription ? (
            <Fragment key={i}>
              <Text variant="heading6">{item.dropdownLabel}</Text>
              <Text fontSize={[2]} fontWeight="normal">
                {item.dropdownDescription}
              </Text>
            </Fragment>
          ) : item.dropdownLinkType === 'internal' ||
            item.dropdownLinkType === 'internalNewWindow' ? (
            <Link href={item.dropdownLink} key={i}>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                height={68}
                as="a"
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={item.dropdownIcon[0].url}
                  width={['36px']}
                  height={['36px']}
                  sx={{ borderRadius: '100%' }}
                />
                <Box pl={[4]}>
                  <Text variant="paragraph">{item.dropdownLabel}</Text>
                  <Text fontSize={[2]} fontWeight="normal">
                    {item.dropdownSubtitle}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ) : (
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              height={68}
              as="a"
              href={item.dropdownLink}
              key={i}
            >
              <Image
                src={item.dropdownIcon[0].url}
                width={['36px']}
                height={['36px']}
                sx={{ borderRadius: '100%' }}
              />
              <Box pl={[4]}>
                <Text variant="paragraph">{item.dropdownLabel}</Text>
                <Text fontSize={[2]} fontWeight="normal">
                  {item.dropdownSubtitle}
                </Text>
              </Box>
            </Flex>
          )
        )}
      </Box>
    </DropdownContainer>
  );
};

export default AboutDropdown;
