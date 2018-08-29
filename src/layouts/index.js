import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/main.scss';

const Layout = ({ children, data }) => (
  <div className='app'>
    {
      console.log(data)
    }
    <Helmet
      // title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle='longtime' data={data}/>
    <div className='content'>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    allFile {
      edges {
        node {
          id
        }
      }
    }
  }
`
