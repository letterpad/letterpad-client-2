import { meFragment, pageFragment, settingsFragment } from 'queries/queries';
import gql from 'graphql-tag';
import { InferGetServerSidePropsType } from 'next';
import { fetchProps } from '@/lib/client';

import PostLayout from '@/layouts/PostLayout';
import { PreviewQueryQuery, PreviewQueryQueryVariables } from '@/lib/graphql';

export const previewQuery = gql`
  query PreviewQuery($previewHash: String) {
    post(filters: { previewHash: $previewHash }) {
      ...pageFragment
      ... on Post {
        html
        author {
          name
          avatar
        }
      }
      __typename
    }
    ...me
    ...settings
  }
  ${pageFragment}
  ${meFragment}
  ${settingsFragment}
`;

export default function Blog({
  post,
  settings,
  me,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (post.__typename === 'Post' && settings.__typename === 'Setting') {
    return (
      <PostLayout data={{ post, settings, me }}>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </PostLayout>
    );
  }
  return null;
}

export async function getServerSideProps(context) {
  const response = await fetchProps<PreviewQueryQuery, PreviewQueryQueryVariables>(
    previewQuery,
    { previewHash: context.params.hash },
    context.req.headers.host
  );
  return {
    props: response.props.data,
  };
}
