import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Button } from 'react-native';

const CalendarScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#dd99ee',
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);
          navigation.navigate('Day', { date: day.dateString }); // Pass date as param
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
        }}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Home Screen" onPress={() => navigation.navigate('Home')} />
      </View>
    </>
  );
};

export default CalendarScreen;
