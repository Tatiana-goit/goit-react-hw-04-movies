import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/movies-api';
import CastList from '../../components/CastList/CastList'

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.featchMovieCast(movieId).then(data => setCasts(data));
  }, [movieId]);

  return (
    <>
      <CastList casts={casts}/>
    </>
  );
}
