import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DayScreen({ route, navigation }) {
  const { date } = route.params; // Get selected date from params
  const [calories, setCalories] = useState(0); // Total calories
  const [input, setInput] = useState(''); // User input for new calories

  // Load calories for selected date when component mounts
  useEffect(() => {
    const loadCalories = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('calorieData');
        const data = jsonValue ? JSON.parse(jsonValue) : {};
        setCalories(data[date] || 0);
      } catch (error) {
        console.error('Error loading data', error);
      }
    };
    loadCalories();
  }, [date]);

  const handleAddCalories = async () => {
    const calorieAmount = parseInt(input, 10);
    if (!isNaN(calorieAmount)) {
      const updatedCalories = calories + calorieAmount;
      setCalories(updatedCalories); // Update state immediately

      try {
        // Retrieve existing data, update, and save to AsyncStorage
        const jsonValue = await AsyncStorage.getItem('calorieData');
        const data = jsonValue ? JSON.parse(jsonValue) : {};
        data[date] = updatedCalories;
        await AsyncStorage.setItem('calorieData', JSON.stringify(data));
      } catch (error) {
        console.error('Error saving data', error);
      }

      setInput(''); // Clear input field after adding
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Tracker for {date}</Text>
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
