import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('#fff'); // State to control background color

  const popUp = () => {
    Alert.alert("Button clicked");
  };

  const turnRed = () => {
    setBgColor('#ff0000'); // Change background color to red
  };

  const resetColor = () => {
    setBgColor('#fff'); // Change background color back to white
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>Change made by Sam</Text>
      <Text>Change made by Aditya</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      
      <TouchableOpacity style={styles.button} onPress={popUp}>
        <Text style={{ color: "#fff" }}>Press me</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.redButton} onPress={turnRed}>
        <Text style={{ color: "#fff" }}>Turn Red</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetColor}>
        <Text style={{ color: "#fff" }}>Reset Color</Text>
      </TouchableOpacity>
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
    backgroundColor: "#29b6f6",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },

  redButton: {
    borderRadius: 10,
    backgroundColor: "#ff0000",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },

  resetButton: {
    borderRadius: 10,
    backgroundColor: "#4caf50",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  }
});