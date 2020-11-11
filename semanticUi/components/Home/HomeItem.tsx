import React from 'react';
import { Image, Reveal, Icon, Card, Header, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export const HomeItem = ({
  imageVisible,
  imageHidden,
  title,
  size = 'large',
}) => {
  const router = useRouter();
  return (
    <Card fluid color='teal'>
      <Reveal animated='fade'>
        <Reveal.Content visible>
          <Image src={imageVisible} size={size} />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src={imageHidden} size={size} />
        </Reveal.Content>
      </Reveal>

      <Card.Content>
        <Card.Header>
          <Button
            animated='vertical'
            fluid
            basic
            color='teal'
            onClick={() => router.push(`/collection/${title}`)}
          >
            <Button.Content hidden>
              Shop
              <Icon name='shop' />
            </Button.Content>
            <Button.Content visible>
              <Header as='h3' color='teal'>
                {title.toUpperCase()}
              </Header>
            </Button.Content>
          </Button>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};
