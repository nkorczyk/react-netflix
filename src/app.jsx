import React from 'react';

import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo.json';

const App = () => (
  <Jumbotron.Container>
    {jumboData.map(({ id, direction, title, subTitle, image, alt }) => (
      <Jumbotron key={id} direction={direction}>
        <p>{title}</p>
        <p>{subTitle}</p>
        <p>{image}</p>
        <p>{alt}</p>
      </Jumbotron>
    ))}
  </Jumbotron.Container>
);

export default App;
