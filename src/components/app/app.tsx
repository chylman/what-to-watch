import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRotes, AuthorizationStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Page404 from '../../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
    name: string;
    genre: string;
    releaseDate: string;
}
function App(filmInfo: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRotes.Main} element={<Main name={filmInfo.name} genre={filmInfo.genre} releaseDate={filmInfo.releaseDate}/>}></Route>
        <Route path={AppRotes.Login} element={<SignIn/>}></Route>

        <Route path={AppRotes.MyList} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><MyList/></PrivateRoute>}></Route>
        <Route path={`${AppRotes.Films}/:id`} element={<MoviePage/>}></Route>
        <Route path={`${AppRotes.Films}/:id${AppRotes.Review}`} element={<AddReview/>}></Route>
        <Route path={`${AppRotes.Player}/:id`} element={<Player/>}></Route>
        <Route path={'*'} element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
