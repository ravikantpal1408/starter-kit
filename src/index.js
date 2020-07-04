import React from 'react';
import { render } from 'react-dom';
import App from './container/main/App';

import './index.css';

function Root() {
  return <App />;
}

render(<Root />, document.getElementById('app'));
