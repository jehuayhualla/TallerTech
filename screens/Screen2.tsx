import { Button, StyleSheet, View } from 'react-native';

const Screen2 = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});
