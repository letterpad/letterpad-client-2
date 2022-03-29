import { fetchProps } from '@/lib/client';
import { AboutQueryQuery, AboutQueryQueryVariables } from '@/lib/graphql';
import { InferGetServerSidePropsType } from 'next';
import { meFragment, settingsFragment } from 'queries/queries';
import AuthorLayout from '@/layouts/AuthorLayout';
import gql from 'graphql-tag';

const aboutQuery = gql`
  query AboutQuery {
    ...me
    ...settings
  }
  ${meFragment}
  ${settingsFragment}
`;

export default function About({
  settings,
  me,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (me.__typename === 'AuthorNotFoundError') return <div>Author not found</div>;
  if (settings.__typename === 'SettingError') return <div>Setting not found</div>;

  const { name, social, avatar = '/static/images/avatar.png', bio } = me;
  const { site_email } = settings;
  return (
    <AuthorLayout
      data={{
        avatar: avatar || '/static/images/avatar.png',
        name,
        github: social.github,
        twitter: social.twitter,
        email: site_email,
        company: '',
        linkedin: '',
        occupation: '',
      }}
    >
      {bio}
    </AuthorLayout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetchProps<AboutQueryQuery, AboutQueryQueryVariables>(
    aboutQuery,
    {},
    context.req.headers.host
  );

  return {
    props: response.props.data,
  };
}
