import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Box } from 'rebass';

import { Header } from '../components/organisms/header';
import { Footer } from '../components/organisms/footer';
import { initGA, logPageView } from '../utils/analytics';

const data = {
  navData: [
    {
      __typename: 'mainNav_Node',
      title: 'Home',
      url: 'https://westeroscraft.com/',
      uri: null,
      type: 'craft\\elements\\Entry',
      element: {
        __typename: 'home_home_Entry',
        slug: 'home',
        uri: '__home__'
      },
      children: [],
      navLogo: [
        {
          __typename: 'images_Asset',
          url: '/westeroscraft_logo.svg'
        }
      ]
    },
    {
      __typename: 'mainNav_Node',
      title: 'About',
      url: '',
      uri: null,
      type: null,
      element: null,
      children: [
        {
          __typename: 'mainNav_Node',
          title: 'About Us',
          url: 'https://westeroscraft.com/about',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'about_about_Entry',
            slug: 'about',
            uri: 'about'
          }
        },
        {
          __typename: 'mainNav_Node',
          title: 'Progress',
          url: 'https://westeroscraft.com/progress',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'progress_progress_Entry',
            slug: 'progress',
            uri: 'progress'
          }
        },
        {
          __typename: 'mainNav_Node',
          title: 'Rookery',
          url: 'https://westeroscraft.com/rookery',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'rookery_rookery_Entry',
            slug: 'rookery',
            uri: 'rookery'
          }
        }
      ],
      navLogo: []
    },
    {
      __typename: 'mainNav_Node',
      title: 'Community',
      url: '',
      uri: null,
      type: null,
      element: null,
      children: [
        {
          __typename: 'mainNav_Node',
          title: 'Forums',
          url: 'https://forum.westeroscraft.com',
          type: '',
          uri: null,
          element: null
        },
        {
          __typename: 'mainNav_Node',
          title: 'Discord',
          url: 'https://discord.gg/pBS5TH4',
          type: '',
          uri: null,
          element: null
        },
        {
          __typename: 'mainNav_Node',
          title: 'Merch',
          url: 'https://www.redbubble.com/people/westeroscraft/shop?asc=u',
          type: '',
          uri: null,
          element: null
        },
        {
          __typename: 'mainNav_Node',
          title: 'Apply',
          url: 'https://forum.westeroscraft.com/form/builder-application.3/select',
          type: null,
          uri: null,
          element: null
        }
      ],
      navLogo: []
    },
    {
      __typename: 'mainNav_Node',
      title: 'Resources',
      url: '',
      uri: null,
      type: '',
      element: null,
      children: [
        {
          __typename: 'mainNav_Node',
          title: 'Launcher',
          url: 'https://westeroscraft.com/launcher',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'launcher_launcher_Entry',
            slug: 'launcher',
            uri: 'launcher'
          }
        },
        {
          __typename: 'mainNav_Node',
          title: 'Downloads',
          url: 'https://westeroscraft.com/downloads',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'launcher_launcher_Entry',
            slug: 'downloads',
            uri: 'downloads'
          }
        },
        {
          __typename: 'mainNav_Node',
          title: 'Wiki',
          url: 'https://westeroscraft.com/wiki',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'wikiHome_wikiHome_Entry',
            slug: 'wiki',
            uri: 'wiki'
          }
        },
        {
          __typename: 'mainNav_Node',
          title: 'FAQ',
          url: 'https://westeroscraft.com/wiki/guides/frequently-asked-questions',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'wiki_wikiMiscellaneous_Entry',
            slug: 'frequently-asked-questions',
            uri: 'wiki/guides/frequently-asked-questions'
          }
        },
        {
          __typename: 'mainNav_Node',
          title: 'Donate',
          url: 'https://forum.westeroscraft.com/donate/',
          type: null,
          uri: null,
          element: null
        },
        {
          __typename: 'mainNav_Node',
          title: 'Rules and Guides',
          url: 'https://westeroscraft.com/wiki/guides/rules-and-guides',
          type: 'craft\\elements\\Entry',
          uri: null,
          element: {
            __typename: 'wiki_wikiGuide_Entry',
            slug: 'rules-and-guides',
            uri: 'wiki/guides/rules-and-guides'
          }
        }
      ],
      navLogo: []
    },
    {
      __typename: 'mainNav_Node',
      title: 'Map',
      url: 'http://mc.westeroscraft.com/',
      uri: null,
      type: '',
      element: null,
      children: [],
      navLogo: []
    }
  ],
  footerData: [
    {
      __typename: 'mainFooter_Node',
      title: 'About',
      url: '',
      type: null,
      element: null,
      children: [
        {
          __typename: 'mainFooter_Node',
          title: 'About Us',
          url: 'https://westeroscraft.com/about',
          type: 'craft\\elements\\Entry',
          element: {
            __typename: 'about_about_Entry',
            slug: 'about',
            uri: 'about'
          }
        },
        {
          __typename: 'mainFooter_Node',
          title: 'Progress',
          url: 'https://westeroscraft.com/progress',
          type: 'craft\\elements\\Entry',
          element: {
            __typename: 'progress_progress_Entry',
            slug: 'progress',
            uri: 'progress'
          }
        },
        {
          __typename: 'mainFooter_Node',
          title: 'Rookery',
          url: 'https://westeroscraft.com/rookery',
          type: 'craft\\elements\\Entry',
          element: {
            __typename: 'rookery_rookery_Entry',
            slug: 'rookery',
            uri: 'rookery'
          }
        }
      ]
    },
    {
      __typename: 'mainFooter_Node',
      title: 'About Us',
      url: 'https://westeroscraft.com/about',
      type: 'craft\\elements\\Entry',
      element: {
        __typename: 'about_about_Entry',
        slug: 'about',
        uri: 'about'
      },
      children: []
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Progress',
      url: 'https://westeroscraft.com/progress',
      type: 'craft\\elements\\Entry',
      element: {
        __typename: 'progress_progress_Entry',
        slug: 'progress',
        uri: 'progress'
      },
      children: []
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Rookery',
      url: 'https://westeroscraft.com/rookery',
      type: 'craft\\elements\\Entry',
      element: {
        __typename: 'rookery_rookery_Entry',
        slug: 'rookery',
        uri: 'rookery'
      },
      children: []
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Community',
      url: '',
      type: null,
      element: null,
      children: [
        {
          __typename: 'mainFooter_Node',
          title: 'Forum',
          url: '',
          type: null,
          element: null
        },
        {
          __typename: 'mainFooter_Node',
          title: 'Discord',
          url: 'https://discord.gg/pBS5TH4',
          type: '',
          element: null
        },
        {
          __typename: 'mainFooter_Node',
          title: 'Apply',
          url: 'https://forum.westeroscraft.com/form/builder-application.3/select',
          type: null,
          element: null
        }
      ]
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Forum',
      url: '',
      type: null,
      element: null,
      children: []
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Discord',
      url: 'https://discord.gg/pBS5TH4',
      type: '',
      element: null,
      children: []
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Apply',
      url: 'https://forum.westeroscraft.com/form/builder-application.3/select',
      type: null,
      element: null,
      children: []
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Resources',
      url: '',
      type: null,
      element: null,
      children: [
        {
          __typename: 'mainFooter_Node',
          title: 'Launcher',
          url: 'https://westeroscraft.com/launcher',
          type: 'craft\\elements\\Entry',
          element: {
            __typename: 'launcher_launcher_Entry',
            slug: 'launcher',
            uri: 'launcher'
          }
        },
        {
          __typename: 'mainFooter_Node',
          title: 'FAQ',
          url: 'https://westeroscraft.com/wiki/guides/frequently-asked-questions',
          type: 'craft\\elements\\Entry',
          element: {
            __typename: 'wiki_wikiMiscellaneous_Entry',
            slug: 'frequently-asked-questions',
            uri: 'wiki/guides/frequently-asked-questions'
          }
        }
      ]
    },
    {
      __typename: 'mainFooter_Node',
      title: 'Launcher',
      url: 'https://westeroscraft.com/launcher',
      type: 'craft\\elements\\Entry',
      element: {
        __typename: 'launcher_launcher_Entry',
        slug: 'launcher',
        uri: 'launcher'
      },
      children: []
    },
    {
      __typename: 'mainFooter_Node',
      title: 'FAQ',
      url: 'https://westeroscraft.com/wiki/guides/frequently-asked-questions',
      type: 'craft\\elements\\Entry',
      element: {
        __typename: 'wiki_wikiMiscellaneous_Entry',
        slug: 'frequently-asked-questions',
        uri: 'wiki/guides/frequently-asked-questions'
      },
      children: []
    }
  ]
};

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900|Sen:400,700,800&display=swap"
          rel="stylesheet"
        />
        <html lang="en" />
      </Helmet>
      <Header links={data.navData} />
      <Box
        as="main"
        className={`page-wrapper`}
        sx={{
          margin: `0 auto`,
          position: 'relative',
          overflow: 'hidden'
        }}
        pt={[3, null, 10]}>
        {children}
      </Box>
      <Footer links={data.navData} />
    </>
  );
};

export default Layout;
