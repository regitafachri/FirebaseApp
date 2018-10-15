import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//import Login from "./src/Login";
//import Signup from "./src/Signup";
import firebase from "firebase";
import {StackNavigator} from 'react-navigation'

export default class Home extends Component {
    // componentDidMount() {
    //   //ini buat kalo user nya mau remember email sama password jd gausah login lgsg otomatis login
    //   firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       console.log("current user:", user);
    //     } else {
    //       // No user sign in
    //       console.log("error");
    //     }
    //   });
    // }
    render() {
      return (
        <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Product")}>
          <Text>Add products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
          <Text>Add profile</Text>
        </TouchableOpacity>
         
        </View>
      );
    }
  }