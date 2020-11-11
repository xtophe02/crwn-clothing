import React from 'react';
import { Button, Container, Input, Menu, Label, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState('home');
  const router = useRouter();
  const handleItemClick = (e, data) => setActiveItem(data.name);

  return (
    <Menu secondary size='massive'>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={(e, data) => {
          handleItemClick(e, data);
          router.push('/');
        }}
      />

      <Menu.Menu position='right'>
        <Menu.Item
          name='shop'
          active={activeItem === 'shop'}
          onClick={(e, data) => {
            handleItemClick(e, data);
            router.push('/shop');
          }}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={(e, data) => {
            handleItemClick(e, data);
            router.push('/contact');
          }}
        />
        <Menu.Item
          name='sign in'
          active={activeItem === 'sign in'}
          onClick={(e, data) => {
            handleItemClick(e, data);
            router.push('/signin');
          }}
        />
        <Menu.Item link>
          <Icon name='cart' />0
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
