import React from 'react';
import { View, Text, Button } from 'react-native';

export default class FoodItem extends React.Component {
    render() {
        constructor(props) {
            this.state = {
                data: this.props.route.params
            };
        }
        return (
            <View>
                <Text>
                    {this.props.data.name}
                </Text>
                <Button 
                    title="Edit"
                    onPress={() => this.props.navigation.navigate("FoodEdit", {data: this.props.data})}
                />
            </View>
        );
    }
}