import React from 'react';

import { Container, Inner } from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => (
  <Inner direction={direction}>{children}</Inner>
);

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

export default Jumbotron;
