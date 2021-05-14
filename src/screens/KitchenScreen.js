import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';

import FoodItem from '../components/FoodItem';

export default class KitchenScreen extends React.Component {
    render() {
      let data = [
          {key: 0, name: "Zesty White"},
          {key: 1, name: "Nordic Spirit 12mg"},
      ];
      return (
        <View>
          <FlatList
            data={data} 
            renderItem={
                ({item}) => <FoodItem data={item} navigation={this.props.navigation}/>
            }/>
        </View>
      );
    }
  }