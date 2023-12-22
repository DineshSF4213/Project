import React from 'react'
import { graphql } from 'gatsby'
// import Counter from './counter';

const index = ({data,}) => 
{
  return (
    
    <div>

      <h5>{data.frontmatter.title}</h5>
    </div>
  );
}

export default index
export const query = graphql`
  query MyFilesQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          author
        }
      }
    }
  }
  }
`;
