import { Link, navigate } from 'gatsby'
import { Box, Heading, Menu, Grid } from 'grommet'
import * as React from 'react'

import siteConfig from '../../site-config'

export default () => (
  <header>
    <Grid columns={['flex', 'small']} gap="small">
      <Box margin="small">
        <Link
          style={{
            boxShadow: 'none',
          }}
          to="/"
        >
          <Heading textAlign="start" color="brand" margin="small">
            {siteConfig.title}
          </Heading>
        </Link>
      </Box>
      <Box align="center" margin={{ top: 'medium' }}>
        <Menu
          label="Menu"
          items={[
            {
              label: 'Blog',
              onClick: () => {
                navigate('/')
              },
            },
            {
              label: 'People',
              onClick: () => {
                navigate('/people')
              },
            },
          ]}
        />
      </Box>
    </Grid>
  </header>
)
