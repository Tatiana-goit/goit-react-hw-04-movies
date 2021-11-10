import s from './MovieDetails.module.css';
import { Suspense, lazy } from 'react';
import {
  useLocation,
  useRouteMatch,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Loader from '../../helpers/Loader/Loader';
import Button from '../Button/Button';
import noPoster from '../../images/noposter.png';

const Cast = lazy(() =>
  import('../../views/Cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../../views/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetails({ movieInfo }) {
  const imgBasePath = 'http://image.tmdb.org/t/p/w185';
  const location = useLocation();
  const { path, url } = useRouteMatch();

  return (
    <div className={s.conteiner}>
      <Button />
      <div className={s.general}>
        <img
          className={s.image}
          src={
            movieInfo.poster_path
              ? `${imgBasePath}${movieInfo.poster_path}`
              : noPoster
          }
          alt={movieInfo.title}
        />

        <div className={s.boxInfo}>
          <h2 className={s.title}>
            {movieInfo.original_title || movieInfo.name}
          </h2>
          <p className={s.text}>User Score: {movieInfo.vote_average * 10}%</p>
          <h3 className={s.titleInfo}>Overview</h3>
          <p className={s.text}>{movieInfo.overview}</p>
          <h3 className={s.titleInfo}>Genres</h3>
          {movieInfo.genres && (
            <span className={s.text}>
              {movieInfo.genres.map(genre => genre.name).join(', ')}
            </span>
          )}
        </div>
      </div>
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
                  state: { from: location?.state?.from },
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
                  pathname: `${url}/review`,
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
            <Route exact path={`${path}/review`} component={Reviews} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
