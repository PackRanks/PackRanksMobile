import * as React from 'react';
import { useState } from 'react';
import {Text,View,StyleSheet,Image,ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import NavBar from "./Components/NavBar/NavBar.jsx"
import HomeView from "./Components/HomeView/HomeView.jsx";
import AboutView from './Components/AboutView/AboutView.jsx'
import HelpView from "./Components/HelpView/HelpView.jsx";
import { createStackNavigator } from '@react-navigation/stack'; 
import ForgotConfirmView from './Components/InitialViewsFamily/ForgotConfirmView'; 
import ForgotView from './Components/InitialViewsFamily/ForgotView'; 
import SignupView from './Components/InitialViewsFamily/SignupView'; 
import LoginView from './Components/InitialViewsFamily/LoginView/LoginView'; 
import WishListView from './Components/Wishlist/WishlistView'
import SettingsView from './Components/SettingsView/SettingsView'
import ContactView from './Components/ContactView/ContactView'

const style = StyleSheet.create(
  {
    profileViewStyle: {
      marginTop:-100,
      height:300,
      backgroundColor:"#cc0000",
      marginBottom: 10
    }, 
    textProfileStyle: {
      marginTop: 30,
      fontSize: 20, 
      marginLeft: 20,
      fontWeight: "bold",
      textAlign : "left", 
      color:"white"
    }, 
    picStyle: {
      marginTop: 120,
      marginLeft: 20,
      width: 100, 
      height: 100, 
      borderRadius: 100/ 2
    }
  })

const Stack = createStackNavigator()

// Initial View family 
export default function StackScreens(){ 
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Drawer'} screenOptions={{ headerShown: false }} >
          <Stack.Screen name={'Login'} component={LoginView}/>
          <Stack.Screen name={'ForgotConfirmView'} component={ForgotConfirmView}/>
          <Stack.Screen name={'ForgotView'} component={ForgotView}/>
          <Stack.Screen name={'SignupView'} component={SignupView}/>
          <Stack.Screen name={'Drawer'} component={DrawerScreens}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

// Home Screen 
function HomeScreen({ navigation, route}) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavBar navi={navigation} title={"Home"}/>
      <ScrollView>
        <HomeView/>    
      </ScrollView>
    </View>
  );
}


//  WishList Screen
function WishlistScreen({ navigation }) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavBar navi={navigation} title={"Wishlist"}/>
      <ScrollView>
        <WishListView/>     
      </ScrollView>
    </View>
  ); 
}


// About Screen
function AboutScreen({ navigation }) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavBar navi={navigation} title={"About"}/>
      <ScrollView>
        <AboutView/>
      </ScrollView>
    </View>
  );
}

// Help Screen
function HelpScreen({ navigation }) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavBar navi={navigation} title={"Help"}/>
      <ScrollView>
        <HelpView />
      </ScrollView>
    </View>
  );
} 

// Contact Screen
function ContactScreen({ navigation }) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavBar navi={navigation} title={"Contact"}/>
      <ScrollView style={{backgroundColor : "#cc0000"}}>
        <ContactView/>
      </ScrollView>
    </View>
  );
}

// Account Setting Screen
function AccountSettingScreen({ navigation }) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavBar navi={navigation} title={"Settings"}/>
      <ScrollView>
        <SettingsView navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

// Creates the Content with the customized profile section in the vertical drawer 
 function CustomDrawerContent(props) {

  
  //const fullName = props.user['firstName'] + " " + props.user['lastName']
  //const imageUrl = props.user['profilePic']

  return (
    <DrawerContentScrollView {...props}>
      {/*
      <View style={style.profileViewStyle}>
        <Image source={{uri: imageUrl}} style={style.picStyle}/>
        <Text style={style.textProfileStyle}>{fullName}</Text>
      </View>
      */}
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}

// Created Navigator and screens 
const Drawer = createDrawerNavigator();

function DrawerScreens({route}) {
  //const user = route.params.user

  // add user = user props
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} 
        initialRouteName="Home" 
        drawerContentOptions={{activeTintColor: "#cc0000"}}
      >
        {/* Options for the drawer */}
        <Drawer.Screen name="Home" component={HomeScreen}
           options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <Icon
                name='home'
                type='material-community'
                color='#fff'
                size={30}
                color={focused ? '#cc0000' : '#ccc'}
              />
            ),
          }}
        />

        {/*
        <Drawer.Screen name="Wishlist" component={WishlistScreen}
             options={{
              drawerLabel: 'Wishlist',
              title: 'Wishlist',
              drawerIcon: ({focused, size}) => (
                <Icon
                  name='cart'
                  type='material-community'
                  color='#fff'
                  size={30}
                  color={focused ? '#cc0000' : '#ccc'}
                />
              ),
            }}
        />
          */}

        <Drawer.Screen name="About" component={AboutScreen} 
             options={{
              title: 'About',
              drawerIcon: ({focused, size}) => (
                <Icon
                  name='information'
                  type='material-community'
                  color='#fff'
                  size={30}
                  color={focused ? '#cc0000' : '#ccc'}
                />
              ),
            }}
        />

        <Drawer.Screen name="Help" component={HelpScreen} 
             options={{
              title: 'Help',
              drawerIcon: ({focused, size}) => (
                <Icon
                  name='help-circle'
                  type='material-community'
                  color='#fff'
                  size={30}
                  color={focused ? '#cc0000' : '#ccc'}
                />
              ),
            }}
        />

        {/*
        <Drawer.Screen name="Contact" component={ContactScreen} 
           options={{
            title:'Contact',
            drawerIcon: ({focused, size}) => (
              <Icon
                name='email'
                type='material-community'
                color='#fff'
                size={30}
                color={focused ? '#cc0000' : '#ccc'}
              />
            ),
          }}
        />
        
        <Drawer.Screen 
            name="Settings" 
            component={AccountSettingScreen}
            options={{
              title: 'Settings',
              drawerIcon: ({focused, size}) => (
                <Icon
                  name='cogs'
                  type='material-community'
                  color='#fff'
                  size={30}
                  color={focused ? '#cc0000' : '#ccc'}
                />
              ),
            }}/>
          */}
      </Drawer.Navigator>
  ); 
}