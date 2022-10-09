import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import { BlogSEO } from '@/components/SEO';
import formatDate from '@/lib/utils/formatDate';
// import Comments from '@/components/comments';
import ScrollTop from '@/components/ScrollTop';
import { MeFragment, PageFragmentFragment, SettingsFragment } from '@/lib/graphql';
import { ZigZag } from './creatives/zigzag';

interface Props {
  data: PageFragmentFragment;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
  site_name: string;
  settings: SettingsFragment['settings'];
  me: MeFragment['me'];
}
export default function Creative({ site_name, data, next, prev, settings, me }: Props) {
  const { slug, publishedAt, title, excerpt, updatedAt, cover_image, tags } = data;
  if (settings.__typename !== 'Setting') return null;
  if (me.__typename !== 'Author' || data.author.__typename !== 'Author') return null;
  const authorDetails = [
    {
      name: data.author.name,
      avatar: data.author.avatar,
      occupation: me.occupation,
      company: me.company_name,
      email: settings.site_email,
      twitter: me.social.twitter,
      linkedin: me.social.linkedin,
      github: me.social.github,
      banner: settings.banner.src,
      logo: settings.site_logo.src,
    },
  ];
  return (
    <SectionContainer>
      <BlogSEO
        url={`${settings.site_url}${slug}`}
        date={publishedAt}
        title={title}
        summary={excerpt}
        lastmod={updatedAt}
        images={[cover_image.src]}
        slug={slug}
        tags={tags.__typename === 'TagsNode' ? tags.rows.map((t) => t.name) : []}
        fileName={title}
        site_name={site_name}
        authorDetails={authorDetails}
      />
      <ScrollTop />
      <article>
        <div id="creative">
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <ZigZag data={data} />
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
