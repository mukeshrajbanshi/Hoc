
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './components/ButtonComponent';
import TouchComponent from './components/TouchComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonComponent />
      <TouchComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
