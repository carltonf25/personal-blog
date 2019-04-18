import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components';

import Layout from './layout';

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI;
    font-size: 0.8 rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark(sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `

const Archive = ({location}) => (
    <StaticQuery
        query={POST_ARCHIVE_QUERY}
        render={({ allMarkdownRemark }) => (
            <>
                <aside>
                    {console.log(allMarkdownRemark)}
                    <h3>Archive</h3>
                    <ArchiveList>
                    {allMarkdownRemark.edges.map(edge => (
                        <li key={edge.node.frontmatter.slug}>
                            <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                        </li>
                    ))}
                    </ArchiveList>
                </aside>
            </>
        )}
    />
)

export default Archive; 
