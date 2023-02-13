import * as React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  {Titulosing}  from '../componentes/Titulosing';
import {Titulo} from '../componentes/Titulo.js';
import {Titulospre} from '../componentes/Titulospre.js';

function pc2() {
  return (
    <ScrollView>
    <View style={styles.container}>


    <Titulo texttitulo="Alienware Area 51"></Titulo>
      
      <Image style={styles.imagen} source={require('../imagenes/pc2.jpg')}/>
      
      <Titulosing/>
      <Text style={styles.pec}>2.549$</Text>
      <Text style={styles.des}>{`condigo: AlienwareCore 19-9900K`}</Text>
      <Titulospre/>
      <Text style={styles.des}>
        {`
        1. procesador: Intel Core 19-9900K con ocho núcleos
        2.grafica: Nvidia GeForce RTX 2080
        3.almacenamiento: 	256 GB, 512 GB o 1 TB
        4.memoria: Desde 8 GB hasta 64 GB
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
  }

});


export default pc2;



