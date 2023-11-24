import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FILM_INFO : {
  name: string;
  genre: string;
  releaseDate: string;
} = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App name={FILM_INFO.name} genre={FILM_INFO.genre} releaseDate={FILM_INFO.releaseDate}/>
  </React.StrictMode>,
);
