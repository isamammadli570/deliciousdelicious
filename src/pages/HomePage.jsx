/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./HomePage.module.css";
import ResponsiveSidebar from "../components/ResponsiveSidebar";

function HomePage({ openSidebar, isShow }) {
  /* const [item, setItem] = useState(""); */
  const [meals, setMeals] = useState([]);
  const [vegan, setVegan] = useState([]);
  const [cock, setCock] = useState([]);
  const id = useState("");

  useEffect(function () {
    async function FetchMeals() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`
      );
      const { meals } = await res.json();
      setMeals(meals);
      console.log(meals);
    }
    FetchMeals();
  }, []);
  useEffect(function () {
    async function FetchMeals() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan`
      );
      const { meals } = await res.json();
      setVegan(meals);
      /* console.log(meals); */
    }
    FetchMeals();
  }, []);
  useEffect(function () {
    async function FetchMeals() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Balloon Glass`
      );
      const { drinks } = await res.json();
      setCock(drinks);
      console.log(drinks);
    }
    FetchMeals();
  }, []);
  return (
    <div className={styles.homepage}>
      <div>
        {isShow ? (
          <ResponsiveSidebar openSidebar={openSidebar} />
        ) : (
          <Navbar openSidebar={openSidebar} />
        )}
      </div>
      <h2>Popular Meals :</h2>

      <div className={styles.list}>
        {meals.map((meal) => {
          return (
            <div className={styles.popular} key={id}>
              <img
                /* style={{width:"300px"}} */ src={meal.strMealThumb}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <h2>Popular drinks :</h2>

      <div className={styles.list}>
        {cock.map((cock) => {
          return (
            <div className={styles.popular} key={id}>
              <img
                /* style={{width:"300px"}} */ src={cock.strDrinkThumb}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <h2>Vegan Meals :</h2>

      <div className={styles.list}>
        {vegan.map((vegan) => {
          return (
            <div className={styles.popular} key={id}>
              <img
                /* style={{width:"300px"}} */ src={vegan.strMealThumb}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
//!overflow y hidden
export default HomePage;
