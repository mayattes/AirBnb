import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";
import axios from "axios";

export default class Welcome extends React.Component {
  state = {
    text: "arno@airbnb-api.com",
    etoile: "***********",
    inputs: []
  };

  render() {
    const { inputs } = this.state;
    return (
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "red",
          alignItems: "center",
          flex: 1,
          paddingBottom: 20
        }}
      >
        <View style={{ padding: 60 }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://www.southjerseygas.com/SJG/media/img/icon-house.png"
            }}
          />
        </View>
        <View
          style={{
            padding: 30,
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 50 }}>Welcome</Text>
        </View>
        <View>
          <TextInput
            style={{
              marginTop: Platform === "android" ? 50 : 40,
              height: 44,
              marginHorizontal: 0,
              borderBottomColor: "#fff",
              borderBottomWidth: StyleSheet.hairlineWidth,
              color: "#fff",
              paddingHorizontal: 0,
              fontSize: 25
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            underlineColorAndroid={"transparent"}
          />
          <TextInput
            style={{
              height: 44,
              marginHorizontal: 0,
              borderBottomColor: "#fff",
              borderBottomWidth: StyleSheet.hairlineWidth,
              color: "#fff",
              paddingHorizontal: 0,
              fontSize: 25
            }}
            onChangeText={text => this.setState({ etoile })}
            value={this.state.etoile}
          />
          <View
            style={{
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                axios
                  .post("https://airbnb-api.now.sh/api/user/log_in", {
                    email: "arno@airbnb-api.com",
                    password: "password01"
                  })
                  .then(response => {
                    console.log(response);
                    if (response.data.token) {
                      this.props.navigation.navigate("MonAirbnb");
                    }
                  })
                  .catch(function(error) {
                    console.log(error);
                  });
              }}
            >
              <View
                style={{
                  backgroundColor: "#ffffff",
                  height: 60,
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                  marginTop: 40
                }}
              >
                <Text style={{ color: "red" }}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
