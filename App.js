import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaisOpcoes from './src/screens/maisOpcoes';
import TelaAcesso from './src/screens/telaAcesso';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Acesso"}>
        <Stack.Screen name="Opcoes" component={MaisOpcoes} />
        <Stack.Screen name="Acesso" component={TelaAcesso} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
