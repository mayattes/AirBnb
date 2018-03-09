import React from "react";
import { Button, View, Text, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";

export default class MonAirbnb extends React.Component {
  state = {
    flats: null
  };
  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        console.log(response.data.rooms);
        this.setState({
          flats: response.data.rooms
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <FlatList
        data={this.state.flats}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={styles.container}>
              <View>
                <Text style={{ color: "white" }}>MonAirbnb</Text>
              </View>

              <View>
                <Image
                  style={styles.picture}
                  source={{ uri: item.photos[0] }}
                />
              </View>
              <View>
                <Text>{item.ratingValue}</Text>
              </View>

              <View style={styles.headlineTitle}>
                <Text>{item.title}</Text>
              </View>

              <View>
                <Text>{item.description}</Text>
              </View>

              <View>
                <Text>{item.price} €</Text>
              </View>
              <View>
                <Text>{item.id}</Text>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <Image
                  resizeMode="cover"
                  style={styles.userPicture}
                  source={{ uri: item.user.account.photos[0] }}
                />
              </View>

              <View>
                <Button
                  title="Allez sur mon profile"
                  onPress={() =>
                    this.props.navigation.navigate("Room", { item })
                  }
                />
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  picture: {
    height: 200
  },
  userPicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 5
  },
  headlineTitle: {
    flex: 1
  }
});
