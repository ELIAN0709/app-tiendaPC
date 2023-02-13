import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import pc from '../pantallas/pc';
import pc2 from '../pantallas/pc2';
import componentes from '../pantallas/componentes';
import componente2 from '../pantallas/componentes2';
import calculoIva from '../pantallas/calculoIva';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="pc" component={pc} />
      <Drawer.Screen name='pc2' component={pc2}/>
      <Drawer.Screen name="componentes" component={componentes} />
      <Drawer.Screen name='componente2' component={componente2}/>
      <Drawer.Screen name='calculoIva' component={calculoIva}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}