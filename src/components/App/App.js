import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense} from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../../helpers/Loader/Loader';
import './App.css';

function App() {
  const HomePage = lazy(() => import('../../views/HomePage/HomePage'));
  const MoviesPage = lazy(() => import('../../views/MoviesPage/MoviesPage'));

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={Loader}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route>
            <MoviesPage path="/MoviesPage" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
