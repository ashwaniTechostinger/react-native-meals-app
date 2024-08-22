import React from "react";
import { Image, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../assets/data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text key={ingredients}>{ingredients}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );
}

export default MealDetailsScreen;
