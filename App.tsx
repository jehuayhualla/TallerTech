import 'react-native-gesture-handler';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import RootNav from './navigation/RootNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RootNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
