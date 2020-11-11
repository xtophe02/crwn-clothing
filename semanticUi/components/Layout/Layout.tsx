import React, { ReactChildren, ReactNode } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Navbar } from './Navbar';
import { Heading } from './Heading';

export const Layout = ({ children }) => {
  return (
    <>
      <Divider hidden />
      <Container>
        <Navbar />
        {/* <Heading /> */}
        <Divider hidden />
        {children}
      </Container>
    </>
  );
};
