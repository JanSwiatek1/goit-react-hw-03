
import css from './SearchBox.module.css';

export const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.input}
      />
    </div>
  );
}