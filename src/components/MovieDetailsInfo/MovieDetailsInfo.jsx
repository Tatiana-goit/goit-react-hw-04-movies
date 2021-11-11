import noPoster from '../../images/noposter.png';
import s from './MovieDetailsInfo.module.css';
import PropTypes from 'prop-types';

export default function MovieDetailsInfo({ movieInfo }) {
  const imgBasePath = 'http://image.tmdb.org/t/p/w185';
  return (
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
  );
}

MovieDetailsInfo.protoTypes = {
    movieInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired
    }),
  ),
};
