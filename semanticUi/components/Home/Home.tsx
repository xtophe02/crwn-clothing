import React from 'react';
import { Grid } from 'semantic-ui-react';
import { HomeItem } from './HomeItem';
const data = [
  {
    title: 'mens',
    size: 'big',
    iamgeVisible:
      'https://images.unsplash.com/photo-1520127877998-122c33e8eb38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageHidden:
      'https://images.unsplash.com/photo-1519297350257-638439b380bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'womans',
    size: 'big',
    imageHidden:
      'https://images.pexels.com/photos/1599941/pexels-photo-1599941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    iamgeVisible:
      'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    title: 'hats',

    iamgeVisible:
      'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageHidden:
      'https://images.unsplash.com/photo-1478637665880-719251fb077d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'sneakers',

    iamgeVisible:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageHidden:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'jackets',

    iamgeVisible:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageHidden:
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
];
const image =
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
export const Home = () => {
  return (
    <Grid stackable divided='vertically'>
      <Grid.Row columns={2}>
        {data.slice(0, 2).map((card) => (
          <Grid.Column key={card.title}>
            <HomeItem
              imageVisible={card.iamgeVisible}
              imageHidden={card.imageHidden}
              title={card.title}
              size={card.size}
            />
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row columns={3}>
        {data.slice(2, 5).map((card) => (
          <Grid.Column key={card.title}>
            <HomeItem
              imageVisible={card.iamgeVisible}
              imageHidden={card.imageHidden}
              title={card.title}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};
