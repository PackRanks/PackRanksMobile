import React from 'react'
import {Image,StyleSheet,SafeAreaView,Text,Button,Touchable,View,Dimensions} from 'react-native'
import { NavigationBar } from 'navigationbar-react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import {  RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function NavBar(props){

    // Styling for NavBar
    const style = StyleSheet.create(
        {
            container:{
                backgroundColor:"#cc0000",
                justifyContent: "center"
            },
            imageStyle:{
                width: hp(6), 
                height: hp(6),
                margin: 6
            }, 
            centerStyle:{
                flex: 1,
                flexDirection: "row",
                justifyContent:"center", 
                alignItems: "center"
            },
            textStyle:{
                color:"white",
                fontSize: hp(4), 
                //fontFamily: "Poppins",
                fontWeight:"bold",
                marginLeft : 5
            }, 
            navBarStyle:{
                marginTop:15,
                height: hp(6.3), 
                backgroundColor: '#cc0000', 
            }, 
            navIconStyle: {
                marginLeft: 30
            }, 
            dotIconStyle: {
                marginRight: 20
            }, 
        }
    )

    return(
        <View style={style.container}>
            
            {/* NavBar */}
            <NavigationBar
                componentLeft = {() => 
                    <Icon
                        size={hp(4)}
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
                        <Text style={style.textStyle}>{props.title}</Text>
                    </View>
                }

                componentRight = {() => 
                    <Icon
                        size={hp(4)}
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
        </View>
    )
}


export default NavBar; 