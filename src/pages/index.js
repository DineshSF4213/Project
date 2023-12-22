import React from 'react'
import { Link, graphql } from 'gatsby'
import Counter from './counter';

const index = ({data}) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.author}</p>
      <Link to="/page2">page2</Link>
      <Link to="/dir1/page3">page3</Link>
      <Counter />
    </div>
  );
}

export default index
export const query = graphql`
query FirstQuery {
  site{
    siteMetadata{
      title
      author
    }
  }
}
`
