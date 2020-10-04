import {View,Button,StyleSheet} from 'react-native'
import React from 'react'; 
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from '../InitialViewsFamily/styles'
import { Text } from 'react-native-paper'


const style = StyleSheet.create(
    {
        viewStyle : {
            justifyContent: 'center', 
            alignItems : 'center'
        }
    }
)

async function signOut(navigation){
    await AsyncStorage.clear()
    navigation.navigate('Login')
    
}

function WishlistView(props){
    
    return(
        <View style={style.viewStyle}>
             <View style={loginStyles.buttonShadow} elevation={5}>
                <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => signOut(props.navigation)} > 
                    <View style={loginStyles.loginButton}>
                        <Text style={loginStyles.loginButtonText}>Sign Out</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default WishlistView