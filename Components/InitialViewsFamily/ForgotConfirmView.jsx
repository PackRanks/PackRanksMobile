import React from 'react'
import { View, TextInput, Image } from 'react-native'
import { Text } from 'react-native-paper'
//import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from './styles.js'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

class ForgotConfirmView extends React.Component {
    constructor(props) {
        super(props)

        /** Function bindings */
        //this.changeEyeIcon = this.changeEyeIcon.bind(this)

        /** States */
        this.state = {
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            login_email: null,
            eyeIcon: "md-eye", // Eyes from Ionicons icon lib
            hidePassword: true
        }
    }

    render() {
        return (
            <View style={generalStyles.container}>
                {/** PackRanks logo */}
                <Image style={generalStyles.logo} source={require('../../assets/Picture/PackRanksLogo1.png')}/>
                {/** PackRanks app heading */}
                <Text style={generalStyles.appNameHeading}>PackRanks</Text>

                {/** Card underlay */}
                <View style={generalStyles.card} elevation={0}>
                    {/** Card heading and description */}
                    <View style={generalStyles.cardHeadingView}>
                        <View style={{flexDirection : 'row', justifyContent:'space-between'}}>
                            <Text style={generalStyles.cardHeading}>Sign Ups</Text>
                            <Icon  style={generalStyles.icons,{marginRight : 10}} name='md-arrow-round-back' size={30} color='gray'/>
                        </View>
                       
                        <Text style={generalStyles.cardHeadingDesc}>Join PackRanks to make the course search process a breeze at NC State!</Text>
                    </View>

                    <Text></Text>

                   {/* add back to login button */}
                   {/* add retry button */}
                </View>
            </View>
        )
    }
}

export default ForgotConfirmView