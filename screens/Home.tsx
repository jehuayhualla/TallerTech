import { Button, StyleSheet, View } from 'react-native';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});
