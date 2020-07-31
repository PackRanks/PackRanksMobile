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
                justifyContent: "center",
            },
            imageStyle:{
                width: 45, 
                height: 45,
                margin: 6
            }, 
            centerStyle:{
                flexDirection: "row",
                justifyContent:"center", 
                paddingLeft: "17%"
            },
            textStyle:{
                color:"white",
                fontSize: 40, 
                //fontFamily: "Poppins",
                fontWeight:"bold",
                marginLeft : 10,
                flex: 1,
            }, 
            navBarStyle:{
                marginTop:15,
                height: 60, 
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
                        <Text style={style.textStyle} allowFontScaling={true} >{props.title}</Text>
                    </View>
                }

                componentRight = {() => 
                    // <Icon
                    //     size={30}
                    //     name='dots-vertical'
                    //     type='material-community'
                    //     color='#fff'
                    //     onPress={() => props.navi.openDrawer()}
                    //     style={style.dotIconStyle}
                    // />
                    <View></View>
                }
                navigationBarStyle= {style.navBarStyle}
                statusBarStyle    = {{ barStyle: 'light-content'}}
            /> 
        </View>
    )
}


export default NavBar; 