import React from 'react';
import SEO from '../components/organisms/seo/seo';
import Popup from 'reactjs-popup';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Image } from 'rebass';
import { BlockBookLayout } from '../components/templates/blockBookLayout';
import { Engine, Scene } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core/Maths/math';

const DefaultPlayground = () => (
  <Engine canvasId="sample-canvas">
    <Scene>
      <freeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
      <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
      <sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)} />
      <ground name="ground1" width={6} height={6} subdivisions={2} />
    </Scene>
  </Engine>
);

const CategoryPage = ({ data, pageContext }) => {
  console.log('data', data);
  return (
    <>
      {pageContext && pageContext.data && (
        <SEO
          title={pageContext.data.pageTitle || pageContext.data.title}
          description={pageContext.data.pageDescription}
          image={pageContext.data.pageEntry && pageContext.data.pageImage[0].url}
        />
      )}
      x
      <BlockBookLayout
        title={(pageContext && pageContext.data && pageContext.data.title) || 'Category'}
        breadcrumb={pageContext.breadcrumb}
      >
        <Box
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: 'repeat(auto-fit, minmax(148px, 1fr))',
          }}
        >
          {data.craft.entries.map((entry) => (
            <Popup
              trigger={
                <Box
                  className="block"
                  key={entry.title}
                  sx={{
                    position: 'relative',
                    boxShadow: '0 0 0 2px #191a1b',
                    padding: 0,
                    zIndex: 1,
                    height: '100%',
                  }}
                >
                  <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      boxShadow: ' 0 0 0 2px #333333',
                      background: 'white',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                      '&:hover': {
                        boxShadow: ' 0 0 0 2px #333333',
                        transform: 'translate(-0.35em, -0.35em)',
                      },
                    }}
                    py={3}
                    px={2}
                  >
                    <Image
                      width={64}
                      height={64}
                      src={entry.textures && entry.textures[0] !== undefined ? entry.textures[0].url : null}
                    />
                    <Heading
                      mt={2}
                      variant="heading6"
                      fontSize="16px"
                      fontWeight="bold"
                      as="h6"
                      color="text"
                      fontFamily="heading"
                      textAlign="center"
                      lineHeight={1.2}
                    >
                      {entry.title}
                    </Heading>
                  </Flex>
                </Box>
              }
              modal
              closeOnDocumentClick
            >
              <DefaultPlayground />
              {/* <Heading>{entry.title}</Heading> */}
            </Popup>
          ))}
        </Box>
      </BlockBookLayout>
    </>
  );
};

export const pageQuery = graphql`
  query categoryQuery($id: [Int]) {
    craft {
      entries(section: "block", type: "block", relatedTo: $id) {
        title
        slug
        ... on Craft_block_block_Entry {
          parentBlockName
          blockId
          meta
          namespacedId
          blockType
          material
          sound
          blockCategory {
            title
          }
          textures {
            url
          }
        }
      }
    }
  }
`;

export default CategoryPage;
