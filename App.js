import * as React from 'react';
import {Text,View,StyleSheet,Image,ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import NavBar from "./Components/NavBar/NavBar.jsx"
import HomeView from "./Components/HomeView/HomeView.jsx";


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


// Home Screen 
function HomeScreen({ navigation }) {
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
        <HomeView/>
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
      </ScrollView>
    </View>
  );
} 

// Contact Screen
function ContactScreen({ navigation }) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavBar navi={navigation} title={"Contact"}/>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
}

// Creates the Content with the customized profile section in the vertical drawer 
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.profileViewStyle}>
        <Image source={require("./assets/Picture/GOD_OF_FANG_SWE.jpeg")} style={style.picStyle}/>
        <Text style={style.textProfileStyle}>Hello, Andong Wang</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}





// Created Navigator and screens 
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Home" drawerContentOptions={{activeTintColor: "#cc0000"} }>
        {/* Options for the drawer */}
        <Drawer.Screen name="Home" component={HomeScreen}
           options={{
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

        <Drawer.Screen name="Wishlist" component={WishlistScreen} 
             options={{
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
      </Drawer.Navigator>
    </NavigationContainer>
  ); 
}