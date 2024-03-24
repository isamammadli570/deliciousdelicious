/* eslint-disable react/prop-types */
import { /* useParams */ useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailsMeal from "./DetailsMeal";
import DetailsCocktail from "./DetailsCocktail";

function DetailsPage({ openSidebar, isShow }) {
  const [searchParam] = useSearchParams();
  const idMeal = searchParam.get("mealId");
  const idDrink = searchParam.get("drinkId");
  console.log(idDrink);

  /* const id = useParams();
  const currentId = id.id; */
  /* console.log(currentId); */

  const [details, setDetails] = useState();

  useEffect(
    function () {
      async function FetchMeals() {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const { meals } = await res.json();
        console.log(meals);
        setDetails(meals);
      }
      FetchMeals();
    },
    [idMeal]
  );

  const [detailsCocktail, setDetailsCocktail] = useState();
  console.log(detailsCocktail);

  useEffect(
    function () {
      async function FetchDrinks() {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        const { drinks } = await res.json();
        /* console.log(drinks); */
        setDetailsCocktail(drinks);
      }
      FetchDrinks();
    },
    [idDrink]
  );

  if (details) {
    return (
      <DetailsMeal
        details={details}
        openSidebar={openSidebar}
        isShow={isShow}
      />
    );
  }
  if (detailsCocktail) {
    return (
      <DetailsCocktail
        detailsCocktail={detailsCocktail}
        openSidebar={openSidebar}
        isShow={isShow}
      />
    );
  }
}

export default DetailsPage;
