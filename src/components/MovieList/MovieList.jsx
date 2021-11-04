import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className={s.container}>
      <ul className={s.list}>
      {movies.map(({ id, title, poster_path }) => {
          return (
              <li key={id} className={s.item}>
            <img
              src={imgBasePath + poster_path}
              alt={title}
              className={s.image}
              />
            <p className={s.title}>{title}</p>
          </li>
        );
    })}
    </ul>
   </div>
  );
}
