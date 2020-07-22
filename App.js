import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from "./Components/NavBar/NavBar.jsx"

// Home Screen 
function HomeScreen({ navigation }) {
  return (
    <View>
        <NavBar navi={navigation} title={"Home"}/>
    </View>
  );
}


//  WishList Screen
function WishlistScreen({ navigation }) {
  return (
    <NavBar navi={navigation} title={"Wishlist"}/>
  ); 
}


// About Screen
function AboutScreen({ navigation }) {
  return (
    <NavBar navi={navigation} title={"About"}/>
  );
}

// Help Screen
function HelpScreen({ navigation }) {
  return (
    <NavBar navi={navigation} title={"Help"}/>
  );
} 

// Contact Screen
function ContactScreen({ navigation }) {
  return (
    <NavBar navi={navigation} title={"Contact"}/>
  );
}

// Account Setting Screen
function AccountSettingScreen({ navigation }) {
  return (
    <NavBar navi={navigation} title={"Account Setting"}/>
  );
}

// Created Navigator and screens 
const Drawer = createDrawerNavigator();


// Options is used for putting additionalv info with the screen

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Wishlist" component={WishlistScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Account Setting" component={AccountSettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}