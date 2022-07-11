import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const result = await fetch(API_URL + "lookup.php?i=" + mealId);
  if (!result.ok) {
    throw new Error(`Could not fetch ${API_URL}. Error: ${result.status}`);
  }
  return await result.json();
};

const getAllCategories = async () => {
  const result = await fetch(API_URL + "categories.php");

  if (!result.ok) {
    throw new Error(`Could not fetch ${API_URL}. Error: ${result.status}`);
  }

  const data = await result.json();
  return data;
};

const getFilteredCategory = async (category) => {
  const result = await fetch(API_URL + `filter.php?c=${category}`);
  if (!result.ok) {
    throw new Error(`Could not fetch ${API_URL}. Error: ${result.status}`);
  }
  return await result.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
