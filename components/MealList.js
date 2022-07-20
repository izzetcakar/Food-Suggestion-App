import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealList = ({ meal, selectedIngredient, pressHandler }) => {
    return (
        <View>
            {meal.map((meal) => {
                return (
                    <Pressable key={meal.id} onPress={() => pressHandler(meal.id)}>
                        <View style={styles.rootContainer}>
                            <View style={styles.textImage}>
                                <Text style={styles.title}>{meal.title}</Text>
                                <Image style={styles.image} source={meal.imageUrl } />
                            </View>
                            <View style={styles.ingredient}>
                                {
                                    meal.ingredients.map((item, index) => {
                                        return (
                                            <Text key={index}
                                                style={[styles.text, {
                                                    backgroundColor: selectedIngredient.includes(item) ? "#70c767" : "#c75454",
                                                }]}>{item}</Text>
                                        )
                                    }
                                    )
                                }
                            </View>
                        </View>
                    </Pressable>
                )
            }
            )}
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "#b3ecec",
        display: "flex",
        padding: 10,
        margin: 10,
        borderRadius: 20,
    },
    image: {
        width: "90%",
        height: 200,
        borderRadius: 15,
        alignSelf: "center"
    },
    title: {
        fontSize: 26,
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center"
    },
    textImage: {
        padding: 10,
    },
    ingredient: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "white",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        color: "white",
        fontWeight: "600",
        borderRadius: 18,
        margin: 5,
        padding: 7,
    }
})