import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function LoaderSpinner() {
  return (
    <div className={s.Loader}>
      <Loader
        type="Circles"
        color="#9aa0a1"
        height={150}
        width={150}
        timeout={3000}
      />
    </div>
  );
}




// export default function Loader () {
//     return <h1 style={{color: "#fff"}}>Waiting...</h1>
// }