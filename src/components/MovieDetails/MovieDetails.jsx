import s from './MovieDetails.module.css';
// import noPoster from '../../images/no_poster.jpg';

const imgBasePath = 'http://image.tmdb.org/t/p/w185';

export default function MovieDetails({movieInfo}) {

    return (
        <div className={s.general}>
                <img
                    className={s.image}
                    src={imgBasePath + movieInfo.poster_path}
                             // ? `${profileBaseUrl}${movieInfo.poster_path}`
                            // : noPoster
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
                {/* <p className={s.text}>({movieInfo.release_date})</p>
                <h3 className={s.title_info}>Status</h3>
                <p className={s.text}>{movieInfo.status}</p>
               
                }
                {/* <p className={s.text}>
                    {movieInfo.genres.map(genre => genre.name).join(', ')}
                </p> */}
               
                
            </div>
        </div>
    )
    
};

