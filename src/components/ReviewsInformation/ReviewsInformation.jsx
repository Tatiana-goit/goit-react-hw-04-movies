import s from './ReviewsInformation.module.css'

export default function ReviewsInformation({ review }) {
    <h1>review</h1>
  return (
    <div className={s.review}>
      {review && review.length > 0 ? (
        <ul className={s.list}>
          {review.map(({ id, author, content }) => (
            <li key={id} className={s.item}>
              <p className={s.author}>{author}</p>
              <p className={s.text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.error}>Not information </p>
      )}
    </div>
  );
}
