import * as React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function Titulosing(props){
    return (
        <Text style={styles.texto}     
        >
            Precio
        </Text>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize:30,
        color:"grey",
    },
});