import { useParams, Link } from "react-router";
import { useEffect, useContext } from "react";
import { getMealById } from "../api";
import { FoodContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/preloader";

const Recipe = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { getReciepe, reciepe } = useContext(FoodContext);

  useEffect(() => {
    getMealById(id).then((res) => {
      getReciepe(res.meals[0]);
    });
  }, [id]);
  return (
    <>
      {id ? (
        <>
          <div className="recipie">
            <img src={reciepe.strMealThumb} alt={reciepe.strMeal} />
            <h1>{reciepe.strMeal}</h1>
            <h6>Category: {reciepe.strCategory}</h6>
            {reciepe.strArea ? <h6>Area: {reciepe.strArea}</h6> : null}
            <p>Instructions: {reciepe.strInstructions}</p>

            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(reciepe).map((key) => {
                  if (key.includes("Ingredient") && reciepe[key]) {
                    return (
                      <tr key={key}>
                        <td>{reciepe[key]}</td>
                        <td>{reciepe["strMeasure" + key.slice(13)]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
            {reciepe.strYoutube ? (
              <div className="row">
                <h5 className="video-rec">Video reciepe</h5>
                <iframe
                  title={id}
                  key={reciepe.strMeal}
                  src={`https://www.youtube.com/embed/${reciepe.strYoutube.slice(
                    -11
                  )}`}
                  allowFullScreen
                />
              </div>
            ) : null}
            <a
              className="btn-floating btn-large waves-effect waves-light red"
              onClick={() => goBack()}
            >
              <i className="material-icons">arrow_back</i>
            </a>
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Recipe;
