import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
export const Heading = () => {
  return (
    <Header as='h2'>
      <Icon name='settings' />
      <Header.Content>
        Account Settings
        <Header.Subheader>Manage your preferences</Header.Subheader>
      </Header.Content>
    </Header>
  );
};
