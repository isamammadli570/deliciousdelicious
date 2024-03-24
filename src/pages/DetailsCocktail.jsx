/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import ResponsiveSidebar from "../components/ResponsiveSidebar";
import styles from "./DetailsPage.module.css";

function DetailsCocktail({ detailsCocktail, openSidebar, isShow }) {
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
        {detailsCocktail?.map((detail) => {
          return (
            <div className={styles.list} key={detail.idDrink}>
              <div>
                <h2 className={styles.name}>{detail.strDrink}</h2>
                <img src={detail.strDrinkThumb} alt={detail.idDrink} />
                <div className={styles.p}>
                  <p>{detail.strCategory}</p>/<p>{detail.strAlcoholic}</p>
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

export default DetailsCocktail;
