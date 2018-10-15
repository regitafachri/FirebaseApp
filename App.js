import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//import Login from "./src/Login";
//import Signup from "./src/Signup";
import firebase from "firebase";
import Input from "./src/Input";
import AddProducts from "./src/AddProducts";
import AddProfile from "./src/AddProfile";
import { StackNavigator } from "react-navigation";
import Home from "./src/Home";

const RootStack = StackNavigator(
  {
    Beranda: Home,
    Product: AddProducts,
    Profile: AddProfile
  },
  {
    initialRouteName: "Beranda"
  }
);

export default RootStack;
