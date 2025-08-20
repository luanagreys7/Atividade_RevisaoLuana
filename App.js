import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import maisOpcoes from './src/screens/maisOpcoes';
import telaAcesso from './src/screens/telaAcesso';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Acesso"}>
        <Stack.Screen name="Opções" component={maisOpcoes} options ={{ headerShow: false}}/>
        <Stack.Screen name="Acesso" component={telaAcesso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
