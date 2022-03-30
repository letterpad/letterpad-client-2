import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
// import { getAllFilesFrontMatter } from '@/lib/mdx';
import formatDate from '@/lib/utils/formatDate';
import { InferGetServerSidePropsType } from 'next';
// import { PostFrontMatter } from 'types/PostFrontMatter';
// import NewsletterForm from '@/components/NewsletterForm';
import gql from 'graphql-tag';
import { fetchProps, PageProps } from '@/lib/client';
import {
  HomeQueryQuery,
  HomeQueryQueryVariables,
  NavigationType,
  PageQueryQuery,
  PageQueryQueryVariables,
  PostsQueryQuery,
  PostsQueryQueryVariables,
} from '@/lib/graphql';
import {
  meFragment,
  pageFragment,
  pageQuery,
  postsFragment,
  postsQuery,
  settingsFragment,
} from 'queries/queries';

const MAX_DISPLAY = 5;

const homeQuery = gql`
  query HomeQuery {
    ...settings
    ...me
  }

  ${settingsFragment}
  ${meFragment}
`;

export default function Home({
  settings,
  me,
  isPage,
  page,
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <PageSEO title={settings.site_title} description={settings.site_description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {settings.site_tagline}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {settings.site_description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.__typename === 'PostError' ? 'No posts found.' : ''}
          {posts.__typename === 'PostsNode' && posts.rows.length === 0 && 'No posts found.'}

          {posts.__typename === 'PostsNode' &&
            posts.rows.map((post) => {
              const { slug, publishedAt, title, tags, excerpt } = post;
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link href={`${slug}`} className="text-gray-900 dark:text-gray-100">
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag.name} text={tag.name} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {excerpt}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
        </ul>
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchProps<HomeQueryQuery, HomeQueryQueryVariables>(
    homeQuery,
    {},
    context.req.headers.host
  );

  if (data.props.data.settings.__typename === 'SettingError') {
    throw new Error('Could not load settings');
  }

  if (data.props.data.me.__typename === 'AuthorNotFoundError') {
    throw new Error('Could not load author');
  }

  const { menu } = data.props.data.settings;
  const firstItemOfMenu = menu[0];
  const isHomePageACollectionOfPosts = firstItemOfMenu.type === NavigationType.Tag;
  const isHomePageASinglePage = firstItemOfMenu.type === NavigationType.Page;

  const result = {
    props: {
      me: data.props.data.me,
      settings: data.props.data.settings,
      isPage: isHomePageASinglePage,
      isPosts: isHomePageACollectionOfPosts,
      posts: null as PageProps<PostsQueryQuery>['data']['posts'] | null,
      page: null as PageProps<PageQueryQuery>['data']['post'] | null,
    },
  };

  if (isHomePageACollectionOfPosts) {
    const posts = await fetchProps<PostsQueryQuery, PostsQueryQueryVariables>(
      postsQuery,
      { tagSlug: firstItemOfMenu.slug },
      context.req.headers.host
    );
    result.props = {
      ...result.props,
      posts: posts.props.data.posts,
    };
  }

  if (isHomePageASinglePage) {
    const page = await fetchProps<PageQueryQuery, PageQueryQueryVariables>(
      pageQuery,
      { slug: firstItemOfMenu.slug },
      context.req.headers.host
    );
    result.props = {
      ...result.props,
      page: page.props.data.post,
    };
  }
  return {
    props: result.props,
  };
}
