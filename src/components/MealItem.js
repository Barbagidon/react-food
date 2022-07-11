import { Link } from "react-router-dom";


const Meal = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt="food" />
      </div>

      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch reciepe
        </Link>
      </div>
    </div>
  );
};

export default Meal;
