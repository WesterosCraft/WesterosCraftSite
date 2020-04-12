import React from 'react'
import { Box, Flex, Image } from 'rebass'
import { TwoColumnLayout } from '../../organisms/twoColumnLayout'
import { VideoEmbed } from '../../organisms/videoEmbed'
import { Text } from '../text'

export const TwoColumnVideo = ({ data }) => (
  <Box className="two-column-video">
    <TwoColumnLayout py={[120, null, 160]}>
      <TwoColumnLayout.ColumnOne>
        <Text data={data.children[0]} />
        {data.images && (
          <Flex width={1} flexWrap="wrap">
            {data.images.map((image) => (
              <Box width={[1, 1 / 2]} py={3} sx={{ textAlign: ['center', null, null, 'left'] }} key={image.url}>
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
