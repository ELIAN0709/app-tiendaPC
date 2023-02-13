import * as React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  {Titulosing}  from '../componentes/Titulosing';
import {Titulo} from '../componentes/Titulo.js';
import {Titulospre} from '../componentes/Titulospre.js';

function componentes() {
    return (
      <ScrollView>
      <View style={styles.container}>


      <Titulo texttitulo="componentes pc Destop"></Titulo>
        <Text style={styles.componentes}>TARJETA MADRE</Text>
        <Image style={styles.imagen} source={require('../imagenes/componente1.jpg')}/>
        <Titulosing/>
        <Text style={styles.pec}> 220.00 $</Text>
        <Text style={styles.des}>{`Código: MBOASUB560MPLUSX`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Marca: ASUS COMPUTER INTERNACIONAL
          2. Línea: TARJETA MADRE
          3. RAM DDR4 (04 SLOK)
          4. DISCO DURO (02) M.2
          5. MEMORIA RAM DDR4 (04 SLOK)
          6. PUERTOS PCIE4.0 (01) | PCIE4.0 ATX
          `}
        </Text>

        <Text style={styles.componentes}>M2</Text>
        <Image style={styles.imagen} source={require('../imagenes/componente2.jpg')}/>
        <Titulosing/>
        <Text style={styles.pec}> 23.00 $</Text>
        <Text style={styles.des}>{`Código: NGFFM2`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Marca: genérico
          2. Línea: DISCO DURO / SSD
          3. Peso: 0.05 kg
          4. NGFF soportado: 2280 2260 2242 2230
          5. Sistemas operativos soportados: Windows 2000  xp  7  8  8.1  10 | Mac Os8.6 en adelante
          `}
        </Text>

        <Text style={styles.componentes}>fuente de poder</Text>
        <Image style={styles.imagen} source={require('../imagenes/componente3.png')}/>
        <Titulosing/>
        <Text style={styles.pec}> 220.00 $</Text>
        <Text style={styles.des}>{`Código: Corsairtx850PlusGold,`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Series	ATX
          2. Marca	Corsair
          3. Dispositivos compatibles	Ordenador personal
          4. Tipo de conector	ATX
          5. Potencia de salida	850
          6. Potencia	850 vatios
          `}
        </Text>

        <Text style={styles.componentes}>RAM's</Text>
        <Image style={styles.imagen} source={require('../imagenes/componente4.jpg')}/>
        <Titulosing/>
        <Text style={styles.pec}> 81.83 $</Text>
        <Text style={styles.des}>{`Código: SerieG.SkillTridentZRGBde16GB`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Marca: G.skill
          2. Peso con empaque: 0.325 kg
          3. Producto de: Amazon
          4. DDR4 3200 CL16-18-18-38
          5. 1,35 V para escritorio de doble canal
          6. modelo F4-3200C16D-16GTZR
          `}
        </Text>

        <Text style={styles.componentes}>procesador</Text>
        <Image style={styles.imagen} source={require('../imagenes/componente5.jpg')}/>
        <Titulosing/>
        <Text style={styles.pec}> 599$</Text>
        <Text style={styles.des}>{`Código: IntelCorei9-13900KProcesador24núcleos`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Marca	Intel
          2. Fabricante de CPU	Intel
          3. Modelo de CPU	Intel Core i9
          4. Velocidad de la CPU	5.8 GHz
          5. Zócalo de CPU	LGA 1700
          `}
        </Text>

        <Text style={styles.componentes}>Case</Text>
        <Image style={styles.imagen} source={require('../imagenes/componente6.jpg')}/>
        <Titulosing/>
        <Text style={styles.pec}> 199.99$</Text>
        <Text style={styles.des}>{`Código: NZXTH7EliteMid-Tower`}</Text>
        <Titulospre/>
        <Text style={styles.des}>
          {`
          1. Mini-ITX, Micro-ATX, ATX & E-ATX
          2. 6 x 2.5" Drive Bays
          3. Steel Frame & Tempered Glass Window
          4. 2 x 3.5" Drive Bays
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
  
  export default componentes;