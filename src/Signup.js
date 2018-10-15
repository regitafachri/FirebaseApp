import React, { Component } from "react";
import { View, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "firebase";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  handleSignup() {
    const { email, password, confirmpassword } = this.state;
    if (email === "" || password === "" || confirmpassword === "") {
      Alert.alert("Warning!", "field can not be empty");
    } else {
      if (password === confirmpassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(ress => {
            console.log(ress);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="email"
          onChangeText={txt => this.setState({ email: txt })}
        />
        <TextInput
          placeholder="password"
          onChangeText={txt => this.setState({ password: txt })}
        />
        <TextInput
          placeholder="confirm password"
          onChangeText={txt => this.setState({ confirmpassword: txt })}
        />
        <TouchableOpacity onPress={() => this.handleSignup()}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Signup;
