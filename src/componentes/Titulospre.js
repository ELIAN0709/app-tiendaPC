import * as React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function Titulospre(){
    return (
        <Text style={styles.texto}>
            descripcion
        </Text>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize:30,
        color:"black",
        paddingTop: 20
    },
});