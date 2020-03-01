import React, { Fragment } from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';
import { NavLinkWrapper } from './styledAboutDropdown';

const AboutDropdown = ({ data }) => {
  return (
    // <DropdownContainer width={400} className="about-dropdown" sx={{ transform: 'translateX(0px)' }}>
    <Box p={8} width={400}>
      {data.map((item, i) =>
        item.dropdownDescription ? (
          // <Link href={item.dropdownLink} key={i}>
          <Box sx={{ cursor: 'pointer', '&:hover': { color: '#494849' } }}>
            <Text fontSize={[3, 4]} fontWeight={500} lineHeight={1.7}>
              {item.dropdownLabel}
            </Text>
            <Text fontSize={[2]} fontWeight="normal" lineHeight={1.4} mb={2}>
              {item.dropdownDescription}
            </Text>
          </Box>
        ) : // </Link>
        item.dropdownLinkType === 'internal' || item.dropdownLinkType === 'internalNewWindow' ? (
          // <Link href={item.dropdownLink} key={i}>
          <NavLinkWrapper
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
            <Box pl={[4]} className="about-dropdown-wrapper">
              <Text variant="paragraph" fontWeight={500}>
                {item.dropdownLabel}
              </Text>
              <Text fontSize={[2]} fontWeight="normal" color="textColor">
                {item.dropdownSubtitle}
              </Text>
            </Box>
          </NavLinkWrapper>
        ) : (
          // </Link>
          <NavLinkWrapper
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
            <Box pl={[4]} className="about-dropdown-wrapper">
              <Text variant="paragraph" fontWeight={500}>
                {item.dropdownLabel}
              </Text>
              <Text fontSize={[2]} fontWeight="normal" color="textColor">
                {item.dropdownSubtitle}
              </Text>
            </Box>
          </NavLinkWrapper>
        )
      )}
    </Box>
    // </DropdownContainer>
  );
};

export default AboutDropdown;
