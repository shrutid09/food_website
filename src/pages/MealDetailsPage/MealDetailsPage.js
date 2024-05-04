import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./MealDetailsPage.scss";
import CategoryList from '../../components/Category/CategoryList';
import MealSingle from "../../components/Meal/MealSingle";
import { useMealContext } from '../../context/mealContext';
import { startFetchSingleMeal } from '../../actions/mealsaction';
import Loader from '../../components/Loader/Loader';

const MealDetailsPage = () => {
  const {id} = useParams();
  const { categories, dispatch, meal, categoryLoading, mealLoading} = useMealContext();

  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [id]);
  let  singleMeal = {};
  if(meal && meal?.length > 0){
    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
    }
  }

  return (
    <main className='main-content bg-whitesmoke'>
      { (mealLoading) ? <Loader /> : <MealSingle meal = {singleMeal} /> }
      { (categoryLoading) ? <Loader /> : <CategoryList categories={categories} /> }
    </main>
  )
}

export default MealDetailsPage