import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../../helpers/Loader/Loader';
import './App.css';

function App() {
  const HomePage = lazy(() =>
    import('../../views/HomePage/HomePage' /* webpackChunkName: "home-view" */),
  );
  const MoviesPage = lazy(() =>
    import(
      '../../views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-view" */
    ),
  );
  const MovieDetailsPage = lazy(() =>
    import(
      '../../views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-page" */
    ),
  );

  const NotFound = lazy(() =>
    import('../../views/NotFound/NotFound' /* webpackChunkName: "NotFound" */),
  );

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
