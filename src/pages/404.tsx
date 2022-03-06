import React from 'react';

import { BoxIcon, Container } from '../styles/pages/404';

const pages: React.FC = () => {
  return (
      <Container>
          <BoxIcon>
            <span>=(</span>
          </BoxIcon>
          <h1>Está página ainda <br /> não está disponível <br /> volte em breve.</h1>
      </Container>
  )
}

export default pages;