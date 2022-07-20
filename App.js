import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import IngredientScreen from './screens/IngredientScreen';
import MealChooseScreen from './screens/MealChooseScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={
            {
              title: "All Categories",
              headerStyle: { backgroundColor: "#13131c" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "white" }
            }
          }>
            <Stack.Screen
              name="IngredientChoose"
              component={IngredientScreen}
              options={{
                title: "Ingredient Choosing"
              }}
            />
            <Stack.Screen
              name="MealChoose"
              component={MealChooseScreen}
              options={{
                title: "Meal Choosing"
              }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
