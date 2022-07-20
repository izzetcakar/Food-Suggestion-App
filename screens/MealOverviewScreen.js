import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux'
import React, { useLayoutEffect } from 'react'

const MealOverviewScreen = ({ route, navigation }) => {
    const mealId = route.params.id;
    const meal = MEALS.filter((item) => item.id === mealId);
    const selectedIngredient = useSelector((state) => state.chosenIngredients.names);

    useLayoutEffect(() => {
        const mealTitle = MEALS.find((item) => item.id === mealId).title;
        navigation.setOptions({
            title: mealTitle,
        });
    }, [mealId, navigation])

    const pressHandler = () => {

    }

    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <MealList meal={meal} selectedIngredient={selectedIngredient} pressHandler={pressHandler} />
            </View>
            <Text style={styles.title}>STEPS</Text>
            <View style={styles.textContainer}>
                {meal.map((item) =>
                    item.steps.map((step) => {
                        return (<Text style={styles.text} key={step}>{step}</Text>)
                    })
                )}
            </View>
        </ScrollView>
    )
}

export default MealOverviewScreen

const styles = StyleSheet.create({
    rootContainer: {

    },
    textContainer: {
        flexDirection: "column",
        marginVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        borderTopWidth: 2,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: 10
    },
    text: {
        marginHorizontal: 10,
        padding: 10,
        marginVertical: 5,
        fontSize: 16,
        backgroundColor:"#b3ecec",
        borderRadius: 15
    },
    title: {
        alignSelf: "center",
        textAlign: "center",
        fontSize: 25,
    }
})