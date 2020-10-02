import React from 'react'
import { View, TextInput, Image,KeyboardAvoidingView} from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
//import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from './styles.js'

class SignupView extends React.Component {
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
            <KeyboardAvoidingView style={generalStyles.container}>
                {/** PackRanks logo */}
                <Image style={generalStyles.logo} source={require('../../assets/Picture/PackRanksLogo1.png')}/>
                {/** PackRanks app heading */}
                <Text style={generalStyles.appNameHeading}>PackRanks</Text>

                {/** Card underlay */}
                <View style={generalStyles.card} elevation={0}>
                    {/** Card heading and description */}
                    <View style={generalStyles.cardHeadingView}>
                        <Text style={generalStyles.cardHeading}>Sign Up</Text>
                        <Text style={generalStyles.cardHeadingDesc}>Join PackRanks to make the course search process a breeze at NC State!</Text>
                    </View>

                    {/** Create Password input box */}
                    <View style={generalStyles.inputView}>
                        {/* Add textinput title */}
                        <TextInput 
                            style={generalStyles.inputText}
                            placeholder="At least 8 characters"
                            placeholderTextColor={generalStyles.placeholderText.color}
                            onChangeText={text => this.setState({last_name: text})}
                        />
                        {/* Add eye toggle */}
                    </View>

                    {/** Create Password confirmation input box */}
                    <View style={generalStyles.inputView}>
                        {/* Add textinput title */}
                        <TextInput 
                            style={generalStyles.inputText}
                            placeholder="Must match"
                            placeholderTextColor={generalStyles.placeholderText.color}
                            onChangeText={text => this.setState({last_name: text})}
                        />
                        {/* Add eye toggle */}
                    </View>

                    {/* TODO: implement pword basic req check & client side error handling (red boxes) */}
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default SignupView