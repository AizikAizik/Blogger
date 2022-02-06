import { gql, request } from "graphql-request";

const endpoint = process.env.GRAPH_CMS_ENDPOINT!;

async function getPosts() {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              ... on Author {
                id
                name
                bio
                photo {
                  url
                }
              }
            }
            createdAt
            excerpt
            featuredImage {
              url
            }
            slug
            title
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const data = await request(endpoint, query);

  return data.postsConnection.edges;
}

async function getRecentPosts() {
  const query = gql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const data = await request(endpoint, query);

  return data.posts;
}

export { getPosts, getRecentPosts };
