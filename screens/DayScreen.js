import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function DayScreen({ navigation }) {
  const [calories, setCalories] = useState(0); // Total calorie count
  const [input, setInput] = useState(''); // Input field for adding calories

  const handleAddCalories = () => {
    const calorieAmount = parseInt(input, 10);
    if (!isNaN(calorieAmount)) {
      setCalories(calories + calorieAmount);
      setInput(''); // Clear the input field after adding
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Tracker</Text>
      <Text style={styles.totalCalories}>Total Calories: {calories}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter calories"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Calories" onPress={handleAddCalories} />
      
      <View style={styles.goBackButton}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  totalCalories: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  goBackButton: {
    marginTop: 20,
  },
});

