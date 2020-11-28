import { Aside } from 'components/Aside';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Icon } from 'components/Icon';
import { IconGroup } from 'components/IconGroup';
import { Main } from 'components/Main';
import { ProfilePic } from 'components/ProfilePic';
import { Body, Bold } from 'components/Typography';
import { Meta } from 'Meta';
import * as React from 'react';

import { Analytics } from './tracking/Analitics';

export const App = () => (
  <>
    <Meta />
    <Container>
      <Aside>
        <ProfilePic
          alt="Professional image"
          className="mt-2"
          src="/profile-image.png"
        />
        <Body>
          Hola, soy <Bold>Elinor Almenara</Bold>, psicóloga en Madrid. Con
          raíces canarias, pero sintiéndome parte de esta tierra. Estoy muy
          agradecida de que hayas llegado hasta mi espacio. Me gustaría contarte
          mi forma de entender y hacer Psicología.
        </Body>
        <Button href="tel:611111111">¿Conversamos?</Button>
        <IconGroup className="mt-2">
          <IconGroup.ListItem>
            <a className="p-1" href="tel">
              <Icon icon="phone" />
            </a>
          </IconGroup.ListItem>
          <IconGroup.ListItem>
            <a className="p-1" href="mail">
              <Icon icon="envelope" />
            </a>
          </IconGroup.ListItem>

          <IconGroup.ListItem>
            <a className="p-1" href="instagram">
              <Icon icon="instagram" />
            </a>
          </IconGroup.ListItem>

          <IconGroup.ListItem>
            <a className="p-1" href="linkedin">
              <Icon icon="linkedin" />
            </a>
          </IconGroup.ListItem>
        </IconGroup>
      </Aside>
      <Main>
        Some main content
        <Footer>Some Footer</Footer>
      </Main>
    </Container>
    <Analytics />
  </>
);
