import { Box, Grommet } from 'grommet'
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import siteTheme from '../theme/theme'

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
  <Grommet theme={siteTheme}>
    <GlobalStyle />
    <SEO postSEO={seo.isPost} config={config} postNode={seo.node} />
    <Box direction="column" align="center">
      <Box width="xlarge">
        <SiteHeader />
        <main>
          <Box direction="row-responsive">
            <Box basis="xlarge">{children}</Box>
          </Box>
        </main>
      </Box>
    </Box>
    <SiteFooter />
  </Grommet>
)

export default Layout
