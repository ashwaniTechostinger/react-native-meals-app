import {  StyleSheet  } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // don't use below code, better to do it form the components itself

            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title:catId,
            //   };
            // }}

          />
          <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
