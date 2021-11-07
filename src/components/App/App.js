import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense} from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../../helpers/Loader/Loader';
import './App.css';

function App() {
  const HomePage = lazy(() => import('../../views/HomePage/HomePage' /* webpackChunkName: "home-view" */));
  const MoviesPage = lazy(() => import('../../views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-view" */));
  const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-page" */));

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage  />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
