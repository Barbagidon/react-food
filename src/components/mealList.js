/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Meal from "./MealItem";
import Preloader from "./preloader";
import { useNavigate} from "react-router-dom";

const MealList = ({ meals }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="arrows">
        <button
          className="btn-floating btn-large waves-effect waves-light red"
          onClick={() => goBack()}
        >
          <i className="material-icons">arrow_back</i>
        </button>
      </div>

      <div className="meals__list">
        {!meals ? (
          <Preloader />
        ) : (
          meals.map((item) => {
            return <Meal key={item.idMeal} {...item} />;
          })
        )}
      </div>
    </>
  );
};

export default MealList;
