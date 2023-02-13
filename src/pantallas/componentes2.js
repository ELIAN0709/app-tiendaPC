import * as React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  {Titulosing}  from '../componentes/Titulosing';
import {Titulo} from '../componentes/Titulo.js';
import {Titulospre} from '../componentes/Titulospre.js';


function componente2() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Titulo texttitulo="Perifericos"></Titulo>
        <Text style={styles.componentes}>mouse</Text>
        <Image style={styles.imagen} source={require('../imagenes/peri1.png')}/>
        <Titulosing/>
        <Text style={styles.pec}> 149.99 $</Text>
        <Text style={styles.des}>{`Código: LogitechG502HEROLightspeedWireless`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Marca: Logitech
          2. Modelo: G502
          3. RGB Lightsync
          4. Conexión USB
          5. 11 Botones programables
          6. Peso ajustable
          `}
        </Text>

        <Text style={styles.componentes}>teclado</Text>
        <Image style={styles.imagen} source={require('../imagenes/peri2.jpg')}/>
        <Titulosing/>
        <Text style={styles.pec}> 59.99 $</Text>
        <Text style={styles.des}>{`Código: LogitechjuegosG213ProdigyLIGHTSYNRGB`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Marca: Logitech
          2. Dispositivos compatibles	Gaming Console
          3. Tecnología de conectividad	USB
          4. Descripción del teclado	Multimedia
          5. Dimensiones del artículo LxWxH	18 x 8 x 2 pulgadas
          `}
        </Text>

        <Text style={styles.componentes}>auriculares</Text>
        <Image style={styles.imagen} source={require('../imagenes/peri3.jpg')}/>
        <Titulosing/>
        <Text style={styles.pec}> 299.99$</Text>
        <Text style={styles.des}>{`Código: ASTROGamingA50Wireless`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. For Xbox One & Windows and Mac Computers
          2. 40mm Drivers
          3. 30' Wireless Range
          4. Also Works with the Xbox One X/S
          5. Base Station with Optical Input & Output
          `}
        </Text>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagen:{
      width: 350,
      height: 200,
      resizeMode:"contain",
    },
    pec: {
      fontSize: 50,
      color: 'red',
      padding: 20,
    },
    des: {
      fontSize: 15,
      color: '#333399'
    },
    componentes: {
      paddingTop:25,
      fontSize:30,
      color:"grey",
  },
});
  
  export default componente2;