import Main from '../../pages/main/main';

type AppProps = {
    name: string
    genre: string
    releaseDate: string
}

const FILM_INFO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014'
}
function App(filmInfo: AppProps): JSX.Element {
  return (
    <Main filmInfo={filmInfo}/>
  );
}
export default App;
