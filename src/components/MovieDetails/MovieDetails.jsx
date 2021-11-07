import s from './MovieDetails.module.css';
import { Suspense, lazy } from 'react';
import {
  useHistory,
  useLocation,
  useRouteMatch,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Loader from '../../helpers/Loader/Loader';
// import noPoster from '../../images/no_poster.jpg';

export default function MovieDetails({ movieInfo }) {
  const Cast = lazy(() =>
    import('../../views/Cast/Cast' /* webpackChunkName: "cast" */),
  );
  const Reviews = lazy(() =>
    import('../../views/Reviews/Reviews' /* webpackChunkName: "reviews" */),
  );

  const imgBasePath = 'http://image.tmdb.org/t/p/w185';
  const history = useHistory();
  const location = useLocation();
  const { path, url } = useRouteMatch();
  console.log(movieInfo);
  console.log(movieInfo.genres);

  const handleClick = () => {
    history.push(location.state?.from?.location ?? '/');
  };
  return (
    <div className={s.conteiner}>
      <button type="button" onClick={handleClick} className={s.button}>
        Back
      </button>
      <div className={s.general}>
        <img
          className={s.image}
          //   src={imgBasePath + movieInfo.poster_path}
          src={
            movieInfo.poster_path
              ? `${imgBasePath}${movieInfo.poster_path}`
              : console.log('Нет фото')
            // ДОБAВИТЬ ФОТО
          }
          alt={movieInfo.title}
        />

        <div className={s.box_info}>
          <h2 className={s.title}>
            {movieInfo.original_title || movieInfo.name}
          </h2>
          <p className={s.text}>User Score: {movieInfo.vote_average * 10}%</p>
          <h3 className={s.title_info}>Overview</h3>
          <p className={s.text}>{movieInfo.overview}</p>
          <h3 className={s.title_info}>Genres</h3>

          {/* <ul className={s.text}>
                    {movieInfo.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>))}
                    </ul>  */}

          {/* <span className={s.text}>
              {movieInfo.genres.map(genre => genre.name).join(', ')}
            </span> */}
        </div>
      </div>
      <div className={s.additionalInformation}>
        <h3 className={s.title_info}>Additional information</h3>

        <nav>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from },
                }}
              >
                {' '}
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from },
                }}
              >
                {' '}
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
