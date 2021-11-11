import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import s from './Form.module.css'

export default function Form({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    const value = e.target.elements.filmName.value;
    if (value.trim() === "") {
      toast.error('Input movie`s name');
      return;
  }
    onSearch(value);
  };

  return (
    <>
      <form onSubmit={handleSearch} className={s.form}>
        <input className={s.input}
          type="text"
          name="filmName"
          autoComplete="on"
          autoFocus
          placeholder="Search film"
        ></input>

        <button type="submit" className={s.button}>Search</button>
        <Toaster/>

      </form>
    </>
  );
}

Form.propTypes ={
  onSearch: PropTypes.func.isRequired,
}

