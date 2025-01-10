import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DayScreen({ route, navigation }) {
  const { date } = route.params; // Get the selected date from navigation params
  const [calories, setCalories] = useState(0); // Total calorie count
  const [input, setInput] = useState(''); // Input field for adding calories
  const [storedData, setStoredData] = useState({}); // Data storage for all dates

  // Load data for the selected date
  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('calorieData');
        const data = jsonValue ? JSON.parse(jsonValue) : {};
        setStoredData(data);
        setCalories(data[date] || 0); // Load calories for the selected date
      } catch (error) {
        console.error('Error loading data', error);
      }
    };
    loadData();
  }, [date]);

  // Save data when calories change
  useEffect(() => {
    const saveData = async () => {
      try {
        const updatedData = { ...storedData, [date]: calories };
        setStoredData(updatedData);
        await AsyncStorage.setItem('calorieData', JSON.stringify(updatedData));
      } catch (error) {
        console.error('Error saving data', error);
      }
    };
    saveData();
  }, [calories]);

  const handleAddCalories = async () => {
    const calorieAmount = parseInt(input, 10);
    if (!isNaN(calorieAmount)) {
      const updatedCalories = calories + calorieAmount;
      setCalories(updatedCalories); // Update the state
  
      // Save the updated calorie data to AsyncStorage
      const updatedData = { ...storedData, [date]: updatedCalories };
      setStoredData(updatedData); // Update the in-memory data
      try {
        await AsyncStorage.setItem('calorieData', JSON.stringify(updatedData));
      } catch (error) {
        console.error('Error saving data', error);
      }
  
      setInput(''); // Clear the input field after adding
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

