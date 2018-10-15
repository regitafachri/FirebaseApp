import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import firebase from "firebase";

class AddProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama_produk: "",
      harga: "",
      kategori: ""
    };
  }
  saveProduct() {
    const { nama_produk, harga, kategori } = this.state;
    if (nama_produk !== "" && harga !== "" && kategori !== "") {
      const data = {
        product_name: nama_produk,
        price: harga,
        category: kategori
      };
      firebase
        .database()
        .ref("/products")
        .push(data);
    }
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="kategori"
          onChangeText={txt => this.setState({ kategori: txt })}
        />
        <TextInput
          placeholder="product name"
          onChangeText={txt => this.setState({ nama_produk: txt })}
        />
        <TextInput
          placeholder="price"
          onChangeText={txt => this.setState({ harga: txt })}
        />
        <TouchableOpacity onPress={() => this.saveProduct()}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddProducts;
