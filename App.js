import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndriod, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Change made by Sam</Text>
      <Text>Change made by Aditya</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

  text: {
    color: "#304ffe",
    fontSize: 20,
    padding: 20
  },

  button: {
    borderRadius: 10,
    backgroundColor:"#29b6f6",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
