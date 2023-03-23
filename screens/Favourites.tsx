import { StyleSheet, View } from 'react-native';

import DrawerView from '../components/DrawerView';
import DrawerToggle from '../components/DrawerMenu';

const Favourites = ({ navigation }: any) => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <DrawerView style={styles.container}>
      <View style={styles.row}>
        <DrawerToggle onPress={openDrawer} />
      </View>
    </DrawerView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
});
