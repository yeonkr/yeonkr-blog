import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '70c0dee77f654e209cae4ebc18d078fc',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'yeonkr blog',
  domain: 'blog.yeonkr.com',
  author: 'yeonkr',

  // open graph metadata (optional)
  description: 'yeonkr blog - developer blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'yeonkr',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcf4d1bfb-c956-497b-b093-b5e9eadea04a%2Fcircle.png?table=block&id=70c0dee7-7f65-4e20-9cae-4ebc18d078fc&spaceId=e5da00b0-4ace-4862-bab5-d6a1647a1db3&width=250&userId=616cdf38-08ea-474d-8dcb-c3aeacb209f5&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'f97b9bba2b204de9b5481c99d72fabb9',
    },
    {
      title: 'About',
      pageId: 'f97b9bba2b204de9b5481c99d72fabb9',
      menuPage: true,
    },
    {
      title: 'Contact',
      pageId: 'e86659a26b344d318265e59026ceb3eb',
    },
    {
      title: 'Contact',
      pageId: 'e86659a26b344d318265e59026ceb3eb',
      menuPage: true,
    },
  ],

  // -------- custom configs (yeonkr) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
