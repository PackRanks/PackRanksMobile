import React from 'react'
import {Image,StyleSheet,SafeAreaView,Text,Button,Touchable,View} from 'react-native'
import { NavigationBar } from 'navigationbar-react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'


function NavBar(props){

    // Styling for NavBar
    const style = StyleSheet.create(
        {
            container:{
                backgroundColor:"#cc0000",
                justifyContent: "center"
            },
            imageStyle:{
                width: 45, 
                height: 45,
                marginRight: 8
            }, 
            centerStyle:{
                flex: 1,
                flexDirection: "row",
                justifyContent:"center"
            },
            textStyle:{
                color:"white",
                fontSize: 40, 
                fontFamily: "Poppins",
                fontWeight:"bold",
                marginLeft : 15
            }, 
            navBarStyle:{
                backgroundColor: '#cc0000'
            }, 
            navIconStyle: {
                marginLeft: 20
            }, 
            dotIconStyle: {
                marginRight: 10
            }, 
        }
    )

    return(
        <SafeAreaView style={style.container}>
            
            {/* NavBar */}
            <NavigationBar
                componentLeft = {() => 
                    <Icon
                        size={30}
                        name='text'
                        type='material-community'
                        color='#fff'
                        onPress={() => props.navi.openDrawer()}
                        style={style.navIconStyle}
                    />
                }

                componentCenter = {() => 
                    <View style={style.centerStyle}>
                            <Image style={style.imageStyle} source={require('../../assets/Picture/PackRanksLogo1.png')}/>
                        <Text style={style.textStyle}>{props.title} </Text>
                    </View>
                }

                componentRight = {() => 
                    <Icon
                        size={30}
                        name='dots-vertical'
                        type='material-community'
                        color='#fff'
                        onPress={() => props.navi.openDrawer()}
                        style={style.dotIconStyle}
                    />
                }


                navigationBarStyle= {style.navBarStyle}
                statusBarStyle    = {{ barStyle: 'light-content'}}
            /> 
        </SafeAreaView>
    )
}


export default NavBar; 