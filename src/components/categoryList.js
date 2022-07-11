import { useContext } from "react";
import { FoodContext } from "../context/context";
import { useLocation, useNavigate } from "react-router";
import CategoryItem from "./categoryItem";

const CategoryList = () => {
  const { search, pathname } = useLocation();
  const value = useNavigate();

  const { goodies, searchArr, searchValue } = useContext(FoodContext);
  const arrForMap = !searchValue ? goodies : searchArr;
  return (
    <div className="list">
      {arrForMap.length < 1 && goodies.length > 1 ? (
        <div
          style={{
            margin: "5px 0px 5px",
          }}
        >
          Too bad we don't have these treats:(
        </div>
      ) : (
        arrForMap.map((item) => {
          return <CategoryItem key={item.idCategory} {...item} />;
        })
      )}
    </div>
  );
};

export default CategoryList;
