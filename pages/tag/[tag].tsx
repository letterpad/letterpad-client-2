import { TagSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { fetchProps } from '@/lib/client';
import { TagPostsQueryQuery, TagPostsQueryQueryVariables } from '@/lib/graphql';
import gql from 'graphql-tag';
import { InferGetServerSidePropsType } from 'next';
import { meFragment, postsFragment, settingsFragment, tagsFragment } from 'queries/queries';

export const tagsQuery = gql`
  query TagPostsQuery($tagSlug: String!) {
    posts(filters: { tagSlug: $tagSlug }) {
      ...postsFragment
    }
    tag(slug: $tagSlug) {
      ...tagsFragment
    }
    ...me
    ...settings
  }
  ${tagsFragment}
  ${postsFragment}
  ${meFragment}
  ${settingsFragment}
`;

export default function Tag({
  posts,
  tag,
  me,
  tagName,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // Capitalize first letter and convert space to dash
  // const title = tagName[0].toUpperCase() + tagName.split(' ').join('-').slice(1);
  if (posts.__typename === 'PostError') return null;
  return (
    <>
      <TagSEO
        title={`${tagName} - ${siteMetadata.title}`}
        description={`${tagName} tags - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={tagName} />
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetchProps<TagPostsQueryQuery, TagPostsQueryQueryVariables>(
    tagsQuery,
    { tagSlug: context.params.tag },
    context.req.headers.host
  );
  return {
    props: { ...response.props.data, tagName: context.params.tag },
  };
}
