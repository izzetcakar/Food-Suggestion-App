import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { INGREDIENTS, MEALS } from '../data/dummy-data'
import Ingredients from '../components/Ingredients'
import { addIngredient, removeIngredient } from '../store/redux/ingredients'
import { useDispatch, useSelector } from 'react-redux'
import ChosenIngredients from '../components/ChosenIngredients'

const IngredientScreen = ({ navigation }) => {
    const selectedIngredient = useSelector((state) => state.chosenIngredients);

    const dispatch = useDispatch();

    function pressNavigateHandler() {
        navigation.navigate('MealChoose');
    }

    function renderIngredientItem(itemData) {

        function pressHandler() {
            if (selectedIngredient.ids.includes(itemData.item.id)) {
                dispatch(removeIngredient({ id: itemData.item.id, name: itemData.item.name }));
            }
            else {
                dispatch(addIngredient({ id: itemData.item.id, name: itemData.item.name }));
            }
        }
        return <Ingredients
            name={itemData.item.name}
            onPress={pressHandler}
        />
    }
    return (
        <>
            <FlatList data={INGREDIENTS}
                keyExtractor={(item) => item.id}
                renderItem={renderIngredientItem}
                numColumns={2}
                style={styles.ingredients}
            />
            <View style={styles.bottomContainer}>
                <ChosenIngredients data={selectedIngredient.names} />
                <View style={styles.buttonContainer}>
                    <Pressable
                        android_ripple={{ color: "#ccc" }}
                        style={styles.button}
                        onPress={pressNavigateHandler}
                    >
                        <View style={styles.innerContainer}>
                            <Text style={styles.buttonTextContainer}>Show Meals</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default IngredientScreen

const styles = StyleSheet.create({
    ingredients: {
        margin: 7,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#b3ecec",
    },
    bottomContainer: {
        margin: 7,
        maxHeight: 130,
        minHeight: 80,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#b3ecec",
    },
    buttonContainer: {
        margin: 10,
        maxHeight: "70%",
        maxWidth: "25%",
        borderRadius: 20,
        elevation: 5,
        backgroundColor: "#21afc8",
        overflow: 'hidden',
        alignSelf: "center"
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonTextContainer: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 10,
        textAlign: "center",
        minWidth: 90
    }
})