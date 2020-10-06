const RemarkablePlugins = require('./core/RemarkablePlugins');

const users = require('./showcase.json');
let communityRepos = [];
try {
  communityRepos = require('./community-repos.json');
} catch (e) {
  // We don't care if there are no repos synced locally
  // We only care if we are on the CI server and about to deploy
}
const defaultVersionShown = '0.61';
const baseUrl = '/api-documentation/';
const repoUrl = 'https://github.com/facebook/react-native';
const siteConfig = {
  title: 'Browzwear API',
  tagline: 'A framework for building native apps using React',
  url: 'https://facebook.github.io',
  baseUrl,
  projectName: 'react-native',
  repoUrl,
  defaultVersionShown,
  users,
  editUrl: 'https://github.com/facebook/react-native-website/blob/master/docs/',
  headerLinks: [
    {doc: 'Getting-Started/License-and-Authentication', label: 'Docs'},
    {search: true},
    {href: repoUrl, label: 'GitHub'},
    {external: true}
  ],
  headerIcon: 'img/header_logo.png',
  footerIcon: 'img/header_logo.png',
  favicon: 'img/favicon.ico',
  colors: {
    brand: '#ffab40', // orange
    dark: '#282c34', // dark blue
    deepdark: '#20	232a', // really dark blue
    light: '#373940', // light blue
    text: '#1a1a1a', // black substitute
    subtle: '#6d6d6d', // light grey for text
    divider: '#ececec', // very light grey
    tintColor: '#f7f7f7', // slightly off white
    backgroundColor: 'white',
    // we don't use these any more but docusaurus complains if we don't
    primaryColor: 'black',
    secondaryColor: 'gray',
  },
  blogSidebarCount: 'ALL',
  algolia: {
    apiKey: '2c98749b4a1e588efec53b2acec13025',
    indexName: 'react-native-versions',
    algoliaOptions: {
      facetFilters: ['tags:VERSION'],
      hitsPerPage: 5,
    },
  },
  facebookAppId: '1677033832619985',
  twitter: 'reactnative',
  markdownPlugins: [
    RemarkablePlugins.SnackPlayer,
    RemarkablePlugins.ReactNativeWebPlayer,
  ],
  usePrism: ['javascript', 'js', 'jsx', 'java', 'objective-c', 'json'],
  highlight: {
    theme: 'solarized-dark',
  },
  gaTrackingId: 'UA-41298772-2',
  scripts: [
    'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
    'https://snack.expo.io/embed.js',
    'https://platform.twitter.com/widgets.js',
    'https://buttons.github.io/buttons.js',
    baseUrl + 'js/codeblocks.js',
    baseUrl + 'js/tabs.js',
    baseUrl + 'js/docs-rating.js',
  ],
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  docsSideNavCollapsible: true,
  onPageNav: 'separate',
};

module.exports = siteConfig;
