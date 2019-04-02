import { Link } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import React from 'react'
import styled from 'styled-components'

const CardLink = styled(Link)`
  :hover {
    opacity: 0.8;
  }
  text-decoration: none;
`

interface CardPostProps {
  link: string
  cover?: string
  title: string
  excerpt?: string
  date?: string
}

const CardPost = (props: CardPostProps) => (
  <article>
    <Paper style={{ padding: 24 }}>
      <CardLink to={props.link}>
        <Grid container direction="column" spacing={24}>
          <Grid item>
            <Typography variant="h4">{props.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{props.excerpt}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{props.date}</Typography>
          </Grid>
        </Grid>
      </CardLink>
    </Paper>
  </article>
)

export default CardPost
