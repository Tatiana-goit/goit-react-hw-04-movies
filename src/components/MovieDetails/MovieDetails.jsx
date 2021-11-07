import s from './MovieDetails.module.css';
import { useHistory, useLocation } from 'react-router-dom';
// import noPoster from '../../images/no_poster.jpg';

export default function MovieDetails({ movieInfo }) {
  const imgBasePath = 'http://image.tmdb.org/t/p/w185';
  const history = useHistory();
  const location = useLocation();
  //   console.log(location);
  console.log(movieInfo.genres);
  //   console.log(movieInfo.poster_path);

  const handleClick = () => {
    history.push(location.state?.from?.location ?? '/');
  };
  return (
    <>
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
            // ДОБЫВИТЬ ФОТО
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
    </>
  );
}
