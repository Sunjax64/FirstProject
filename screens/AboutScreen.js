import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
