import { Link } from 'gatsby'
import { Box, Heading, Text, Menu, Grid } from 'grommet'
import * as React from 'react'

import siteConfig from '../../site-config'

export default () => (
  <header>
    <Grid columns={['flex', 'small']} gap="small">
      <Box margin="small">
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
          }}
          to="/"
        >
          <Heading textAlign="left" color="brand" margin="small">
            {siteConfig.title}
          </Heading>
        </Link>
      </Box>
      <Box align="center" margin={{ top: 'medium' }}>
        <Menu
          label="social"
          items={[
            { label: 'First Action', onClick: () => {} },
            { label: 'Second Action', onClick: () => {} },
          ]}
        />
      </Box>
    </Grid>
  </header>
)
