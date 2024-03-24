/* eslint-disable react/prop-types */
import styles from "./Options.module.css";

function Options({
  selectedCategory,
  setSelectedCategory,
  selectedArea,
  setSelectedArea,
  categories,
  areas,
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
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          );
        })}
      </select>

      <select
        className="selection"
        onChange={(e) => setSelectedArea(e.target.value)}
        value={selectedArea}
      >
        {areas?.map((area) => {
          return (
            <option key={area.idArea} value={area.strArea}>
              {area.strArea}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Options;
