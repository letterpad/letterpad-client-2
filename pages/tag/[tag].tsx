import { TagSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { fetchProps } from '@/lib/client';
import generateRss from '@/lib/generate-rss';
import { TagsQueryQuery, TagsQueryQueryVariables } from '@/lib/graphql';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { getAllTags } from '@/lib/tags';
import kebabCase from '@/lib/utils/kebabCase';
import fs from 'fs';
import gql from 'graphql-tag';
import { GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import path from 'path';
import { meFragment, postsFragment, settingsFragment, tagsFragment } from 'queries/queries';
import { PostFrontMatter } from 'types/PostFrontMatter';

// const root = process.cwd();

// export async function getStaticPaths() {
//   const tags = await getAllTags('blog');

//   return {
//     paths: Object.keys(tags).map((tag) => ({
//       params: {
//         tag,
//       },
//     })),
//     fallback: false,
//   };
// }

// export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[]; tag: string }> = async (
//   context
// ) => {
//   const tag = context.params.tag as string;
//   const allPosts = await getAllFilesFrontMatter('blog');
//   const filteredPosts = allPosts.filter(
//     (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
//   );

//   // rss
//   if (filteredPosts.length > 0) {
//     const rss = generateRss(filteredPosts, `tags/${tag}/feed.xml`);
//     const rssPath = path.join(root, 'public', 'tags', tag);
//     fs.mkdirSync(rssPath, { recursive: true });
//     fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss);
//   }

//   return { props: { posts: filteredPosts, tag } };
// };

export const tagsQuery = gql`
  query TagsQuery($tagSlug: String!) {
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
  const response = await fetchProps<TagsQueryQuery, TagsQueryQueryVariables>(
    tagsQuery,
    { tagSlug: context.params.tag },
    context.req.headers.host
  );
  return {
    props: { ...response.props.data, tagName: context.params.tag },
  };
}
