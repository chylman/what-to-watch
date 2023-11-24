import Main from '../../pages/main/main';

type AppProps = {
    name: string;
    genre: string;
    releaseDate: string;
}
function App(filmInfo: AppProps): JSX.Element {
  return (
    <Main name={filmInfo.name} genre={filmInfo.genre} releaseDate={filmInfo.releaseDate}/>
  );
}
export default App;
