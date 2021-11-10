import { useHistory, useLocation } from 'react-router-dom';
import s from './Button.module.css';

export default function Button() {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    history.push(location.state?.from?.location ?? '/');
  };

  return (
    <button type="button" onClick={handleClick} className={s.button}>
      Back
    </button>
  );
}
