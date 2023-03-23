import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './TabsNav';
import Cart from '../screens/Cart';
import Orders from '../screens/Orders';
import Favourites from '../screens/Favourites';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const RootNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerStyle: {...styles.drawer, ...styles.transparent},
          drawerType: 'back',
          overlayColor: 'transparent',
          headerShown: false,
          sceneContainerStyle: styles.transparent,
        }}
      >
        <Drawer.Screen name="Start" component={Tabs} />
        <Drawer.Screen name="Your Cart" component={Cart} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Your Orders" component={Orders} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;

const styles = StyleSheet.create({
  drawer: {
    width: 200,
  },
  transparent: {
    backgroundColor: 'transparent',
  }
});
