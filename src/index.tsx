import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FILM_INFO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmInfo={FILM_INFO}/>
  </React.StrictMode>,
);
