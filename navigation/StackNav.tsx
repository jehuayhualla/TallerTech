import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Screen2 from '../screens/Screen2';
const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default Stacks;