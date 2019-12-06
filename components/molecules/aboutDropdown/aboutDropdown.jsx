import React, { Fragment } from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';

const AboutDropdown = ({ data }) => {
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
          ) : (
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              pt={[6]}
              key={i}
            >
              <Image bg="black" width={['36px']} height={['36px']} sx={{ borderRadius: '100%' }} />
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
