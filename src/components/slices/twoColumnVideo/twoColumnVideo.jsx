import React from 'react'
import { Box, Flex, Image } from 'rebass'
import { TwoColumnLayout } from '../../organisms/twoColumnLayout'
import { VideoEmbed } from '../../organisms/videoEmbed'
import { Text } from '../text'

export const TwoColumnVideo = ({ data }) => (
  <Box className="two-column-video">
    {console.log(data)}
    <TwoColumnLayout py={[120, null, 160]}>
      <TwoColumnLayout.ColumnOne>
        <Text data={data.children[0]} />
        {data.images && (
          <Flex width={1} flexWrap="wrap">
            {data.images.map((image) => (
              <Box width={[1, 1 / 2]} py={3} sx={{ textAlign: ['center', null, null, 'left'] }}>
                <Image src={image.url} maxHeight={36} />
              </Box>
            ))}
          </Flex>
        )}
      </TwoColumnLayout.ColumnOne>
      <TwoColumnLayout.ColumnTwo>
        <VideoEmbed data={data.children[1]} />
      </TwoColumnLayout.ColumnTwo>
    </TwoColumnLayout>
  </Box>
)

{
  /* <Text as="h5" variant="heading5">
                WesterosCraft is meticialulosy recreated the world of Game of Thrones
              </Text>
              <Text as="h2" variant="heading2" py={6}>
                over 1.5 billion blocks placed over 7.5 square miles
              </Text>
              <Text as="h5" variant="heading5">
                as seen in
              </Text>
              <Flex>
                <Box width={1}>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/minecraft-logo.svg"
                      alt="Minecraft"
                      width={1}
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '190px',
                      }}
                    />
                  </Box>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/va_logo.svg"
                      alt="VA Museum"
                      width={1}
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '63px',
                      }}
                    />
                  </Box>
                </Box>
                <Box width={1}>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/wired-logo.svg"
                      alt="Wired"
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '176px',
                      }}
                    />
                  </Box>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/kotaku_logo.svg"
                      alt="Kotaku"
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '192px',
                      }}
                    />
                  </Box>
                </Box>
              </Flex> */
}
