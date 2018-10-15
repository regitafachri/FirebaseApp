import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import firebase from "firebase";

class AddProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      gender: "",
      phone: "",
      address: ""
    };
  }

  AddProfile() {
    const { nama, gender, phone, address } = this.state;
    if (nama !== "" && gender !== "" && phone !== "" && address !== "") {
      const data = {
        nama,
        gender,
        phone,
        address
      };
      firebase.database().ref("/Profiles").push(data);
    }
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="nama"
          onChangeText={txt => this.setState({ nama: txt })}
        />
        <TextInput
          placeholder="gender"
          onChangeText={txt => this.setState({ gender: txt })}
        />
        <TextInput
          placeholder="phone"
          onChangeText={txt => this.setState({ phone: txt })}
        />
        <TextInput
          placeholder="address"
          onChangeText={txt => this.setState({ address: txt })}
        />
        <TouchableOpacity onPress={() => this.AddProfile()}>
          <Text>Save Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddProfile;
