import Website from './components/website';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

console.log(ReactDOMServer.renderToStaticMarkup(<Website />));
