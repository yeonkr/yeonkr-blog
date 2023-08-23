import * as React from 'react';

import { NotionPage } from 'components';
import { domain } from 'lib/config';
import { resolveNotionPage } from 'lib/resolve-notion-page';
import { NotionPageHeader } from '~/components/NotionPageHeader';

export const getStaticProps = async a => {
  try {
    const props = await resolveNotionPage(domain);

    return { props, revalidate: 10 };
  } catch (err) {
    console.error('page error', domain, err);

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err;
  }
};

// export default function NotionDomainPage(props) {
//   // console.log(props);
//   return <NotionPage {...props} />;
// }

export default function NotionDomainPage(props) {
  // console.log(props);
  return (
    <>
      <div
        style={{
          width: '100%',
          paddingBottom: '2.3vh',
        }}
      >
        <div
          style={{
            height: '30vh',
          }}
        >
          <div
            style={{
              boxShadow: '2px 2px 8px 4px hsla(0,0%,6%,.1)',
              width: '100%',
              backgroundImage: 'url(/sky.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              minWidth: '100%',
              minHeight: '100%',
            }}
          ></div>
        </div>
      </div>

      <NotionPage {...props} />
    </>
  );
}
