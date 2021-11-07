import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';
  // console.log(movies[1]);
  return (
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
                      label: 'Go back to all movies',
                    },
                  },
                }}
              >
                <img
                  src={imgBasePath + poster_path}
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
  );
}
