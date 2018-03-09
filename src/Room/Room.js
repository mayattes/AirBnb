import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";

export default class Room extends React.Component {
  render() {
    console.log(this.props);
    const { goBack } = this.props.navigation;
    return (
      <View>
        <View>
          <Image
            style={styles.picture}
            source={this.props.navigation.state.params.item.photos}
          />
        </View>
        <View style={styles.container}>
          <View>
            <Text>{this.props.navigation.state.params.item.title}</Text>
          </View>
          <View>
            <Text>{this.props.navigation.state.params.item.description}</Text>
          </View>
          <View>
            <Text>{this.props.navigation.state.params.item.price} €</Text>
          </View>
          <View>
            <Button title="Go back" onPress={() => goBack()} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  picture: {
    height: 300
  }
});
