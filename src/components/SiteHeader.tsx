import { Link, navigate } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import React, { FunctionComponent, useState } from 'react'

import siteConfig from '../../site-config'

type AnchorElement = null | HTMLElement

interface IState {
  menuAnchorElement?: AnchorElement
}

const initialMenuAnchorElement: AnchorElement = null

const SiteHeader: FunctionComponent<IState> = () => {
  const [menuAnchorElement, setMenuAnchorElement] = useState(
    initialMenuAnchorElement
  )

  // If the menuAnchorElement is null, the menu is closed
  const menuIsOpen = Boolean(menuAnchorElement)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    setMenuAnchorElement(event.currentTarget)
  }

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Link to="/">
                <Typography variant="h4" style={{ color: 'white' }}>
                  {siteConfig.title}
                </Typography>
              </Link>
            </Grid>
            <Grid>
              <Button
                variant="outlined"
                color="default"
                onClick={handleMenu}
                style={{ color: 'white' }}
              >
                Menu
                <MenuIcon style={{ marginLeft: 12 }} />
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={menuAnchorElement}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={menuIsOpen}
                onClose={() => setMenuAnchorElement(null)}
              >
                <MenuItem
                  onClick={() => {
                    setMenuAnchorElement(null)
                    navigate('/')
                  }}
                >
                  Blog
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setMenuAnchorElement(null)
                    navigate('/people')
                  }}
                >
                  People
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default SiteHeader
