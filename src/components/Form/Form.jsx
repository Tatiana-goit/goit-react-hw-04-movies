import s from './Form.module.css'

export default function Form({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.filmName.value);
    e.target.elements.filmName.value = '';
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
      </form>
    </>
  );
}
