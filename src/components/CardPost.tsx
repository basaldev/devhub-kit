import { Link } from 'gatsby';
import { Box, Heading, Image, Text } from 'grommet';
import * as React from 'react';
import styled from 'styled-components';

const CardLink = styled(Link)`
  :hover {
    opacity: 0.8;
  }
  text-decoration: none;
`;

interface CardPostProps {
  link: string;
  cover?: string;
  title: string;
  excerpt?: string;
  date?: string;
}

const CardPost = (props: CardPostProps) => (
  <article>
    <Box
      margin={{
        top: 'small',
        bottom: 'small',
        right: 'small',
        left: 'small'
      }}
    >
      <CardLink to={props.link}>
        {props.cover ? (
          <div>
            <Box overflow="hidden">
              <Box height="small" >
                <Image src={props.cover} fit="cover" />
              </Box>
            </Box>
          </div>
        ) : (
          <div />
        )}

        <Box pad="medium">
          <Heading margin={{ vertical: 'small' }} level="2" size="medium">
            {props.title}
          </Heading>
          <Text color="text" tag="p">{props.excerpt}</Text>
          <Text color="text" margin={{ top: 'small' }} size="small">
            {props.date}
          </Text>
        </Box>
      </CardLink>
    </Box>
  </article>
);

export default CardPost;
