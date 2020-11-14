import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/tailwind.bundle.css';
import GifExpertApp from './GifExpertApp';

ReactDOM.render(
  <GifExpertApp/>,
  document.getElementById('root')
);

/*
    "rename:build": "node -e \"require('fs').rename('./build', 'docs', function(err) { if (err) console.log(err); console.log('directory successfully renamed!') })\"",
*/