import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import noPoster from '../../images/noposter.png';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

export default function MovieList({ movies }) {
  const location = useLocation();
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className={s.container}>
        <ul className={s.list}>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <li key={id} className={s.item}>
                <Link
                  to={{
                    pathname: `movies/${id}`,
                    state: {
                      from: {
                        location,
                        
                      },
                      label: 'Go back to all movies',
                    },
                  }}
                >
                  <img
                    src={poster_path ? imgBasePath + poster_path : noPoster}
                    alt={title}
                    className={s.image}
                  />
                  <p className={s.title}>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

MovieList.protoTypes = {
  movieInfo: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),
),
};

