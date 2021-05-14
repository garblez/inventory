import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class KitchenScreen extends React.Component {
    render() {
      return (
        <View>
          <Text>{this.props.data.name}</Text>
        </View>
      );
    }
  }