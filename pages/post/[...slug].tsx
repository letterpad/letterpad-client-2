// import generateRss from '@/lib/generate-rss';
import { pageFragment, settingsFragment } from 'queries/queries';
import gql from 'graphql-tag';
import { InferGetServerSidePropsType } from 'next';
import { fetchProps } from '@/lib/client';
import { PageQueryWithHtmlQuery, PageQueryWithHtmlQueryVariables } from '@/lib/graphql';
import PostLayout from '@/layouts/PostLayout';

const pageQueryWithHtml = gql`
  query PageQueryWithHtml($slug: String) {
    post(filters: { slug: $slug }) {
      ...pageFragment
      ... on Post {
        html
        author {
          social {
            github
            twitter
            instagram
            facebook
          }
        }
      }
      __typename
    }
    ...settings
  }

  ${pageFragment}
  ${settingsFragment}
`;

export default function Blog({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (post.__typename === 'Post') {
    return (
      <PostLayout data={post}>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </PostLayout>
    );
  }
  return null;
}

export async function getServerSideProps(context) {
  const response = await fetchProps<PageQueryWithHtmlQuery, PageQueryWithHtmlQueryVariables>(
    pageQueryWithHtml,
    {
      slug: context.params.slug.join('/'),
    },
    context.req.headers.host
  );

  return {
    props: response.props.data,
  };
}
