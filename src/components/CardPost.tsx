import React from 'react'
import { Link } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { css } from '@emotion/core'

interface CardPostProps {
  link: string
  cover?: string
  title: string
  excerpt?: string
  date?: string
}

const CardPost = (props: CardPostProps) => {
  const styles = getStyles(props)

  return (
    <article>
      <Paper css={styles.paper}>
        <Link to={props.link} css={styles.link}>
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
        </Link>
      </Paper>
    </article>
  )
}

// @ts-ignore
const getStyles = (props: CardPostProps) => ({
  link: css`
    text-decoration: none;
  `,
  paper: css`
    :hover {
      background-color: yellow;
    }
    padding: 24px;
  `,
})

export default CardPost
