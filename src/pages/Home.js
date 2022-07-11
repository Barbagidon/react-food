import { useEffect, useContext } from "react";
import { getAllCategories } from "../api";
import { FoodContext } from "../context/context";
import Preloader from "../components/preloader";
import CategoryList from "../components/categoryList";
import Search from "../components/search";

const Home = () => {
  const { getCategories, goodies } = useContext(FoodContext);
  useEffect(() => {
    getAllCategories().then((res) => {
      getCategories(res.categories);
    });
  }, []);

  return (
    <>
      <Search />
      {goodies.length < 1 ? <Preloader /> : null}
      <CategoryList />
    </>
  );
};

export default Home;
