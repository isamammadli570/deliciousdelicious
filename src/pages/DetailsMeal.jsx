/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import ResponsiveSidebar from "../components/ResponsiveSidebar";
import styles from "./DetailsPage.module.css";

function DetailsMeal({ details, openSidebar, isShow }) {
  return (
    <div>
      <div className={styles.details}>
        <div>
          {isShow ? (
            <ResponsiveSidebar openSidebar={openSidebar} />
          ) : (
            <Navbar openSidebar={openSidebar} />
          )}
        </div>
        {details?.map((detail) => {
          return (
            <div className={styles.list} key={detail.idMeal}>
              <div>
                <h2 className={styles.name}>{detail.strMeal}</h2>
                <img src={detail.strMealThumb} alt={detail.idMeal} />
                <div className={styles.p}>
                  <p>{detail.strCategory}</p>/<p>{detail.strArea}</p>
                </div>
              </div>
              <div className={styles.ing}>
                <p>{detail.strInstructions}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailsMeal;
