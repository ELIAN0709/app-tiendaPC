import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, navigation} from 'react-native';




function calculoIva(){
    const [cantidad, setcantidad] = useState()
    const [precio, setprecio] = useState()
    const [mult, setmult] = useState()
    const [iva, setiva] = useState()
    const [total, settotal] = useState()

    const Calcular = () => {
        setmult("")
        setmult((parseFloat(cantidad) * parseFloat(precio)).toFixed(2))
        setiva(((parseFloat(cantidad) * parseFloat(precio)*0.12)).toFixed(2))
        settotal((((parseFloat(cantidad) * parseFloat(precio))+(parseFloat(cantidad) * parseFloat(precio)*0.12))).toFixed(2))
      }




    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Calculo del iva</Text>
          <TextInput style={styles.ingreso}
          placeholder='Cantidad'
          keyboardType='number-pad'
          onChangeText={setcantidad}
          value={cantidad}
          />
          <TextInput style={styles.ingreso}
          placeholder="Precio"
          keyboardType='number-pad'
          onChangeText={setprecio}
          value={precio}
          />
          <Button title='CALCULAR' onPress={Calcular}/>
          <Text style={styles.res}>{`sub-total: ${mult}$`}</Text>
          <Text style={styles.res}>{`IVA a pagar: ${iva}$`}</Text>
          <Text style={styles.res}>{`total a pagar: ${total}$`}</Text>
    
          <StatusBar style="auto" />
          
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize:40,
      color: "black",
      padding: 25,
    },
    ingreso: {
      fontSize: 40,
      borderWidth: 1,
      width: "70%",
      height: 50,
      textAlign: "center", 
    },
    res: {
      padding: 15,
      fontSize: 25,
      color: 'black'
    }

  });

export default calculoIva;