import { Meta } from 'Meta';
import * as React from 'react';

import { Analytics } from './tracking/Analitics';

export const App = () => (
  <>
    <Meta />
    <div className="test">Hello World</div>
    <Analytics />
  </>
);
