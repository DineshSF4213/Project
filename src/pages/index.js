import React from 'react'
import { Link, graphql } from 'gatsby'
import Counter from './counter';

const index = ({data}) => {
  return (
    <div>
     <img src='image5.jpg'></img>
    </div>
  );
}

export default index
export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          extension
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
