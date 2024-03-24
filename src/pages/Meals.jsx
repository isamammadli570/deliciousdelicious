/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./Meals.module.css";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import ResponsiveSidebar from "../components/ResponsiveSidebar";
import Options from "../components/OptionsMeals";

function Meals({ openSidebar, isShow }) {
  const [item, setItem] = useState("");
  const [meals, setMeals] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [selectedArea, setSelectedArea] = useState("American");
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  //? meals use effect i
  useEffect(
    function () {
      async function FetchMeals() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`
        );
        const { meals } = await res.json();
        setMeals(meals);
      }
      FetchMeals();
    },
    [item]
  );
  //? category use effect i
  useEffect(
    function () {
      async function FetchDataCategory() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const { meals } = await res.json();
        setMeals(meals);
      }
      FetchDataCategory();
    },
    [selectedCategory]
  );
  //? area use effect i
  useEffect(
    function () {
      async function FetchDataArea() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
        );
        const { meals } = await res.json();
        setMeals(meals);
      }
      FetchDataArea();
    },
    [selectedArea]
  );
  //? MEAL
  useEffect(function () {
    async function FetchDataSelect() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const { categories } = await res.json();
      setCategories(categories);
      console.log(categories);
    }
    FetchDataSelect();
  }, []);

  useEffect(function () {
    async function FetchDataSelectArea() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      const { meals } = await res.json();
      setAreas(meals);
    }
    FetchDataSelectArea();
  }, []);

  return (
    <div className={styles.main}>
      <div>
        {isShow ? (
          <ResponsiveSidebar openSidebar={openSidebar} />
        ) : (
          <Navbar openSidebar={openSidebar} />
        )}
      </div>
      <SearchBar meals={meals} item={item} setItem={setItem} />
      <Options
        selectedCategory={selectedCategory}
        selectedArea={selectedArea}
        setSelectedCategory={setSelectedCategory}
        setSelectedArea={setSelectedArea}
        categories={categories}
        areas={areas}
      />
      <div className={styles.list}>
        {meals?.map((meal) => {
          return (
            <div key={meals.idMeal} className={styles.meals}>
              <Link to={`/${meal.idMeal}?mealId=${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </Link>
              <p>{meal.strMeal}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meals;
