import React, { Component } from "react";
import { View, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "firebase";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama:""
    };
  }

  componentDidMount(){
      
  }
  simpanNama(){
      firebase.database()
      .ref('User/').set({
          name: this.state.nama
      })
      .then(ress => {
        console.log(ress)
      })
      .catch(err => {
          console.log(err)
      })
  }

  simpanTransaksi(){
    firebase.database()
    .ref('produk/buah/' + this.state.nama).set({
        color: "green",
        price:"15000"
    })
    .then(ress => {
      console.log(ress)
    })
    .catch(err => {
        console.log(err)
    })
}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="nama"
          onChangeText={txt => this.setState({ nama: txt })}
        />
        <TouchableOpacity onPress={() => this.simpanTransaksi()}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Input;
