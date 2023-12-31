import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    setLoading(true);

    const fetchDrink = async () => {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ].filter((ingredient) => ingredient); // This will remove any null or undefined values

          const newCocktail = {
            name,
            img,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDrink();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>Cocktail to display</h2>;
  }

  const { name, img, category, info, instructions, ingredients, glass } =
    cocktail;

  return (
    <section className='section cocktail-section'>
      <Link className='btn btn-primary' to='/'>
        Back Home
      </Link>
      <h2 className='section-title'>{name} </h2>
      <div className='drink'>
        <img src={img} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>Info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>Glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {cocktail?.ingredients?.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
