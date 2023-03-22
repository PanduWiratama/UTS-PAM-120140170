import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';

const Stack = createNativeStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= 'First' component={FirstScreen} options={{headerShown:false}}/>
          <Stack.Screen name= 'SecondScreen' component={SecondScreen} options={{headerShown:false}}/>
          <Stack.Screen name= 'Third' component={ThirdScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    margin:20,
    flex:0,
    width: "155%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
});