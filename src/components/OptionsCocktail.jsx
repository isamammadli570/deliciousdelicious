/* eslint-disable react/prop-types */
import styles from "./Options.module.css";

function OptionsCocktail({
  selectedCategory,
  setSelectedCategory,
  selectedAlcoholic,
  setSelectedAlcoholic,
  categories,
  alcoholic,
}) {
  return (
    <div className={styles.options}>
      <select
        className="selection"
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        {categories?.map((category) => {
          return (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          );
        })}
      </select>

      <select
        className="selection"
        onChange={(e) => setSelectedAlcoholic(e.target.value)}
        value={selectedAlcoholic}
      >
        {alcoholic?.map((alc) => {
          return (
            <option key={alc.strAlcoholic} value={alc.strArea}>
              {alc.strAlcoholic}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default OptionsCocktail;
