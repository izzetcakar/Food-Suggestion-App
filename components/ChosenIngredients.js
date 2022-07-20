import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { addIngredient, removeIngredient } from '../store/redux/ingredients'
import { useDispatch, useSelector } from 'react-redux'
import { INGREDIENTS } from '../data/dummy-data'
import React from 'react'

const ChosenIngredients = ({ data }) => {
    const selectedIngredient = useSelector((state) => state.chosenIngredients);

    const dispatch = useDispatch();

    const pressHandler = (name) => {
        const id = INGREDIENTS.find((item) => item.name === name).id;
        dispatch(removeIngredient({ id: id, name: name }));
    }

    return (
        <ScrollView>
            <View style={styles.chosenContainer}>
                {data.map((item) =>
                    <Pressable
                        key={item}
                        style={{ flexGrow: 1 }}
                        onPress={() => pressHandler(item)}
                    >
                        <Text style={styles.textContainer}>{item}</Text>
                    </Pressable>
                )}
            </View>
        </ScrollView>
    )
}

export default ChosenIngredients

const styles = StyleSheet.create({
    chosenContainer: {
        paddingTop: 10,
        paddingHorizontal: 12,
        flexDirection: 'row',
        flexWrap: "wrap-reverse",
        width: 300,
    },
    textContainer: {
        backgroundColor: "#e0dada",
        margin: 6,
        borderRadius: 20,
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
        elevation: 5,
        flexGrow: 1,
        textAlign: "center",
    },
})