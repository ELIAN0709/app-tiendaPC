import * as React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  {Titulosing}  from '../componentes/Titulosing';
import {Titulo} from '../componentes/Titulo.js';
import {Titulospre} from '../componentes/Titulospre.js';


function pc() {
  return (
    <ScrollView>
      <View style={styles.container}>


      <Titulo texttitulo="lenovo Legion 7"></Titulo>
        
        <Image style={styles.imagen} source={require('../imagenes/pc1.jpg')}/>
        
        <Titulosing/>
        <Text style={styles.pec}> 1.990 $</Text>
        <Text style={styles.des}>{`condigo: Legion.7ryzen™9.6900HX`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. procesador: AMD ryzen™ 9 6900HX
          2.grafica: AMD Radeon™ RX 6850XT GDDR6
          3.almacenamiento: SSD PCIe® (GEN 4) de 512 GB | 1 TB | 2 TB
          4.memoria: 16 GB DDR5 de doble canal a 4800 MHz: 16 GB (dos de 8 GB)/32 GB (dos de 16 GB)
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

export default pc;