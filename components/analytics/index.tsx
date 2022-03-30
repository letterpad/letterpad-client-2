/* eslint-disable @typescript-eslint/no-explicit-any */
import GA from './GoogleAnalytics';
import Plausible from './Plausible';
import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';
import siteMetadata from '@/data/siteMetadata';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
    sa_event?: (...args: any[]) => void;
  }
}

const isProduction = process.env.NODE_ENV === 'production';

interface Props {
  data: {
    google_analytics: string;
    plausible_data_domain: string;
    umami_id: string;
  };
}

const Analytics: React.VFC<Props> = ({ data }) => {
  return (
    <>
      {isProduction && data?.plausible_data_domain && <Plausible id={data.plausible_data_domain} />}
      {/* {isProduction && data.simpleAnalytics && <SimpleAnalytics />} */}
      {isProduction && data?.umami_id && <Umami id={data.umami_id} />}
      {isProduction && data?.google_analytics && <GA id={data.google_analytics} />}
    </>
  );
};

export default Analytics;
