/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import styles from "./Cocktails.module.css";
import { Link } from "react-router-dom";
import ResponsiveSidebar from "../components/ResponsiveSidebar";
import OptionsCocktail from "../components/OptionsCocktail";

function Cocktails({ openSidebar, isShow }) {
  const [item, setItem] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Cocktail");
  const [selectedAlcoholic, setSelectedAlcoholic] = useState("Alcoholic");
  const [categories, setCategories] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);

  //? drinks use effect i
  useEffect(
    function () {
      async function FetchDrinks() {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item}`
        );
        const { drinks } = await res.json();
        setDrinks(drinks);
        console.log(drinks);
      }
      FetchDrinks();
    },
    [item]
  );
  //? category use effect i
  useEffect(
    function () {
      async function FetchDataCategory() {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const { drinks } = await res.json();
        setDrinks(drinks);
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
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${selectedAlcoholic}`
        );
        const { drinks } = await res.json();
        setDrinks(drinks);
      }
      FetchDataArea();
    },
    [selectedAlcoholic]
  );
  //? DRINK
  useEffect(function () {
    async function FetchDataSelect() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      const { drinks } = await res.json();
      setCategories(drinks);
      console.log(drinks);
    }
    FetchDataSelect();
  }, []);

  useEffect(function () {
    async function FetchDataSelectArea() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`
      );
      const { drinks } = await res.json();
      setAlcoholic(drinks);
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
      <SearchBar drinks={drinks} item={item} setItem={setItem} />
      <OptionsCocktail
        selectedCategory={selectedCategory}
        selectedAlcoholic={selectedAlcoholic}
        setSelectedCategory={setSelectedCategory}
        setSelectedAlcoholic={setSelectedAlcoholic}
        categories={categories}
        alcoholic={alcoholic}
      />
      <div className={styles.list}>
        {drinks?.map((drink) => {
          return (
            <div key={drink.idDrink} className={styles.drinks}>
              <Link to={`/${drink.idDrink}?drinkId=${drink.idDrink}`}>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </Link>
              <p>{drink.strDrink}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cocktails;
