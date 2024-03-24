/* eslint-disable react/prop-types */
import styles from "./Searchbar.module.css";

function SearchBar({ item, setItem }) {
  const handleChange = (e) => {
    setItem(e.target.value);
    /* if (e === "") {
      return "not found";
    } */
  };
  return (
    <div className={styles.searchbar}>
      <input
        value={item}
        onChange={handleChange}
        type="text"
        placeholder="search.."
      />
    </div>
  );
}

export default SearchBar;
