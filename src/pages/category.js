import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { FoodContext } from "../context/context";
import { getFilteredCategory } from "../api";
import Preloader from "../components/preloader";
import MealList from "../components/mealList";

const Category = () => {
  const { name } = useParams();
  const { filterCategory, filteredCategory } = useContext(FoodContext);
  useEffect(() => {
    getFilteredCategory(name).then((res) => {
      filterCategory(res.meals);
    });
  }, [name]);

  return (
    <>
      {filteredCategory.length < 1 ? (
        <Preloader />
      ) : (
        <MealList meals={filteredCategory} />
      )}
    </>
  );
};

export default Category;
