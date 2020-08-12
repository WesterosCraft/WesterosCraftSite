import React, { useState, useMemo } from 'react';
import { WikiLayout } from '../components/templates/wikiLayout';
import { graphql } from 'gatsby';
import { EntryCard } from '../components/atoms/entryCard';
import { Flex } from 'rebass';
import { Link } from 'gatsby';
import { regionSlugFormatter } from '../utility/regionSlugFormatter';
import { Redactor } from '../components/atoms/redactor';
import { RegionFilters } from '../components/atoms/regionFilters/regionFilters';
import SEO from '../components/organisms/seo/seo';

const RegionPage = ({ pageContext, data }) => {
  const [items, setItems] = useState(data.craft.entries[0].children);
  const regionItems = useMemo(() => {
    return data.craft.entries[0].children;
  }, [data.craft.entries]);

  const onTypeChange = (option) => {
    if (option === null) {
      setItems(regionItems);
      return;
    }
    const filtered = regionItems.filter((thing) => thing.projectDetails[0].destinationType === option.value);
    setItems(filtered);
  };

  const onStatusChange = (option) => {
    if (option === null) {
      setItems(regionItems);
      return;
    }
    const filtered = regionItems.filter((thing) => thing.projectDetails[0].destinationStatus === option.value);
    setItems(filtered);
  };

  return (
    <>
      {pageContext && pageContext.data && (
        <SEO
          title={pageContext.data.pageTitle || pageContext.data.title}
          description={pageContext.data.pageDescription}
          image={pageContext.data.pageEntry && pageContext.data.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
        breadcrumb={pageContext.breadcrumb}
      >
        <Redactor dangerouslySetInnerHTML={{ __html: data.craft.entries[0].copy }} />
        <RegionFilters onTypeChange={onTypeChange} onStatusChange={onStatusChange} />
        <Flex flexDirection={['column', null, 'row']} flexWrap="wrap">
          {items.map((entry) => (
            <Link to={`/wiki/${regionSlugFormatter(entry.projectDetails[0].region)}/${entry.slug}`} key={entry.slug}>
              <EntryCard data={entry} key={entry.slug} />
            </Link>
          ))}
        </Flex>
      </WikiLayout>
    </>
  );
};

export const pageQuery = graphql`
  query RegionQuery($slug: [String]) {
    craft {
      entries(site: "westeroscraft", type: "wikiRegion", slug: $slug) {
        title
        ... on Craft_wiki_wikiRegion_Entry {
          title
          slug
          copy
          children(orderBy: "title") {
            title
            slug
            ... on Craft_wiki_wikiDestination_Entry {
              images {
                url
              }
              projectDetails {
                ... on Craft_projectDetails_details_BlockType {
                  region
                  house
                  destinationType
                  destinationStatus
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default RegionPage;
