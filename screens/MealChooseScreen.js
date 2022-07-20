import React, { useLayoutEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const MealChooseScreen = ({ navigation }) => {
  const selectedIngredient = useSelector((state) => state.chosenIngredients.names);
  const [mealIds, setMealIds] = useState([]);
  const meal = MEALS.filter((meal) => { return mealIds.includes(meal.id) });

  useLayoutEffect(() => {
    MEALS.map((meal) =>
      meal.ingredients.map((item) => {
        if (selectedIngredient.includes(item)) {
          if (!(mealIds.includes(meal.id))) {
            setMealIds((current) => [...current, meal.id]);
          }
        }
      }
      ))
  }, [])

  const pressHandler = (id) => {
    navigation.navigate("MealDetail", {
      id: id,
    });
  }

  return (
    <>
      <ScrollView>
        <MealList meal={meal} selectedIngredient={selectedIngredient} pressHandler={pressHandler} />
      </ScrollView>
    </>
  )
}

export default MealChooseScreen

const styles = StyleSheet.create({})