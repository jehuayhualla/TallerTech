import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerMenu = ({ onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../assets/menu.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
