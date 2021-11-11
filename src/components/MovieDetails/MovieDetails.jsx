import { Suspense, lazy } from 'react';
import {
  useLocation,
  useRouteMatch,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import MovieDetailsInfo from '../MovieDetailsInfo/MovieDetailsInfo';
import Loader from '../../helpers/Loader/Loader';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

import s from './MovieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetails({ movieInfo }) {
  const location = useLocation();
  const { path, url } = useRouteMatch();
  console.log(movieInfo);

  return (
    <div className={s.conteiner}>
      <Button />
      <MovieDetailsInfo movieInfo={movieInfo} />

      <div className={s.additionalInformation}>
        <h3 className={s.titleInformation}>Additional information</h3>

        <nav>
          <ul className={s.informationList}>
            <li className={s.informationItem}>
              <NavLink
                className={s.informationLink}
                activeClassName={s.activeLink}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from || '/' },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.informationItem}>
              <NavLink
                className={s.informationLink}
                activeClassName={s.activeLink}
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={`${path}/cast`} component={Cast} />
            <Route exact path={`${path}/reviews`} component={Reviews} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

MovieDetails.protoTypes = {
  movieInfo: PropTypes.array.isRequired};
