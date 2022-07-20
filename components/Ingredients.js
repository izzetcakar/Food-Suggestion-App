import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ingredients = ({ name, onPress }) => {
    return (
        <View style={styles.rootContainer}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={styles.button}
                onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.textContainer}>{name}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Ingredients

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginHorizontal:15,
        marginVertical:14,
        height: 60,
        borderRadius: 20,
        elevation: 4,
        backgroundColor: "white",
        overflow: 'hidden',
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})