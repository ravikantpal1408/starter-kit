import React from 'react';
import { render } from 'react-dom';
import './style.css';

function Hi() {
  return <p>Hi</p>;
}

render(<Hi />, document.getElementById('app'));
