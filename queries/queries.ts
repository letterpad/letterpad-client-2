import gql from 'graphql-tag';

export const settingsFragment = gql`
  fragment settings on Query {
    settings {
      ... on Setting {
        __typename
        site_footer
        site_favicon {
          src
        }
        subscribe_embed
        css
        site_title
        site_email
        site_description
        site_tagline
        banner {
          src
        }
        site_logo {
          src
        }
        menu {
          type
          slug
          label
        }
      }
    }
  }
`;
export const meFragment = gql`
  fragment me on Query {
    me {
      ... on Author {
        name
        bio
        avatar
        social {
          twitter
          facebook
          github
          instagram
        }
      }
    }
  }
`;
export const pageFragment = gql`
  fragment pageFragment on Post {
    ... on Post {
      id
      slug
      title
      reading_time
      html
      publishedAt
      updatedAt
      excerpt
      tags {
        name
        slug
      }
      author {
        name
        avatar
      }
      cover_image {
        src
      }
    }
    __typename
  }
`;
export const postsFragment = gql`
  fragment postsFragment on PostsNode {
    __typename
    ... on PostsNode {
      count
      rows {
        id
        title
        slug
        cover_image {
          src
        }
        author {
          avatar
          name
        }
        publishedAt
        reading_time
        excerpt
        tags {
          slug
          name
        }
      }
    }
  }
`;

export const pageQuery = gql`
  query PageQuery($slug: String) {
    post(filters: { slug: $slug }) {
      ...pageFragment
      __typename
    }
  }
  ${pageFragment}
`;

export const postsQuery = gql`
  query postsQuery($tagSlug: String!) {
    posts(filters: { tagSlug: $tagSlug }) {
      ...postsFragment
    }
  }
  ${postsFragment}
`;

// export const baseQuery = gql`
//   query BaseQuery {
//     settings {
//       ... on Setting {
//         __typename
//         site_footer
//         site_favicon {
//           src
//         }
//         subscribe_embed
//         css
//         site_title
//         site_description
//         site_tagline
//         banner {
//           src
//         }
//         site_logo {
//           src
//         }
//         menu {
//           type
//           slug
//           label
//         }
//       }
//     }
//     me {
//       ... on Author {
//         name
//         social {
//           twitter
//           facebook
//           github
//           instagram
//         }
//       }
//     }
//   }
// `;

// export const postsQuery = gql`
//   query PostsQuery($tagSlug: String!) {
//     posts(filters: { tagSlug: $tagSlug }) {
//       ... on PostsNode {
//         count
//         rows {
//           id
//           title
//           slug
//           cover_image {
//             src
//           }
//           author {
//             avatar
//             name
//           }
//           publishedAt
//           reading_time
//           excerpt
//           tags {
//             slug
//             name
//           }
//         }
//       }
//     }
//     tag(slug: $tagSlug) {
//       ... on Tags {
//         name
//         slug
//       }
//       ... on TagResultError {
//         message
//       }
//     }
//   }
// `;

// export const pageQuery = gql`
//   query PageQuery($slug: String) {
//     post(filters: { slug: $slug }) {
//       ... on Post {
//         id
//         slug
//         title
//         reading_time
//         html
//         publishedAt
//         updatedAt
//         excerpt
//         tags {
//           name
//           slug
//         }
//         author {
//           name
//           avatar
//         }
//         cover_image {
//           src
//         }
//       }
//       __typename
//     }
//   }
// `;
