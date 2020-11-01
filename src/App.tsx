import { Aside } from 'components/Aside';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Main } from 'components/Main';
import { Meta } from 'Meta';
import * as React from 'react';

import { Analytics } from './tracking/Analitics';

export const App = () => (
  <>
    <Meta />
    <Container>
      <Aside>Mi contact data</Aside>
      <Main>
        Some main content
        <Footer>Some Footer</Footer>
      </Main>
    </Container>
    <Analytics />
  </>
);
