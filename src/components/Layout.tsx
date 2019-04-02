import Grid from '@material-ui/core/Grid'
import React from 'react'
import { Global, css } from '@emotion/core'

import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import SEO from './SEO'
import config from '../../site-config'

const globalStyles = css`
  // Any styles to apply globally after critical CSS load
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
    <Global styles={globalStyles} />
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
