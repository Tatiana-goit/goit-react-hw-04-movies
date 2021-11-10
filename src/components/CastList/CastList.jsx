import defaultImg from '../../images/default-img.jpg'
import s from './CastList.module.css';

export default function CastList({casts}) {
  const castBaseUrl = 'https://image.tmdb.org/t/p/w92';
  return (
    <div className={s.boxCastList}>
      {casts && casts.length > 0 ? (
        <ul className={s.list}>
          {casts.map(({ id, original_name, name, profile_path }) => (
            <li key={id} className={s.item}>
              <img
                className={s.image}
                src={
                  profile_path
                    ? `${castBaseUrl}${profile_path}`
                    : defaultImg
                }
                alt={original_name}
              />
              <p className={s.text}>{original_name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.notFound}>No information</p>
      )}
    </div>
  );
}
