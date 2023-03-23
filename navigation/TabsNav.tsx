import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stacks from './StackNav';
import DrawerView from '../components/DrawerView';
import DrawerMenu from '../components/DrawerMenu';

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }: any) => {
  return (
    <DrawerView>
      <View style={styles.row}>
        <DrawerMenu onPress={() => navigation.openDrawer()} />
        <Text style={styles.title}>Start</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Stacks" component={Stacks} />
      </Tab.Navigator>
    </DrawerView>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  title: {
    marginLeft: 16,
    color: 'gray',
    fontSize: 20,
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
  