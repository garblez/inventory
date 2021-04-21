import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class KitchenScreen extends React.Component {
    render() {
      return (
        <View>
          <Text>On the Kitchen screen</Text>
          <Button onPress={() => this.props.navigation.navigate("FoodEdit")}
            title="Add Food Item"/>
        </View>
      );
    }
  }