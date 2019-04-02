import Grid from '@material-ui/core/Grid'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import SEO from './SEO'
import config from '../../site-config'

const GlobalStyle = createGlobalStyle`
  // Anything after critical CSS load
`

interface LayoutProps {
  children: any
  seo: {
    isPost: boolean
    node?: any
  }
}

const Layout = ({ children, seo }: LayoutProps) => (
  <>
    <GlobalStyle />
    <SEO postSEO={seo.isPost} config={config} postNode={seo.node} />
    <Grid container direction="column">
      <Grid item>
        <SiteHeader />
      </Grid>
      <Grid item>
        <main>{children}</main>
      </Grid>
    </Grid>
    <SiteFooter />
  </>
)

export default Layout
