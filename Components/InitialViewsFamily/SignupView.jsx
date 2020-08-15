import React from 'react'
import { View, TextInput, Image } from 'react-native'
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
            <View style={generalStyles.container}>
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

                    {/** First name input box */}
                    <Text style={generalStyles.mediumText}>
                        First name
                    </Text>
                    <View style={generalStyles.inputView}>
                        <TextInput 
                            style={generalStyles.inputText}
                            placeholder="First name"
                            placeholderTextColor={generalStyles.placeholderText.color}
                            onChangeText={text => this.setState({first_name: text})}
                        />
                    </View>

                    {/** Last name input box */}
                    <View style={generalStyles.inputView}>
                        {/* Add textinput title - flex column */}
                        <TextInput 
                            style={generalStyles.inputText}
                            placeholder="Last name"
                            placeholderTextColor={generalStyles.placeholderText.color}
                            onChangeText={text => this.setState({last_name: text})}
                        />
                    </View>

                    {/** Email input box */}
                    <View style={generalStyles.inputView}>
                        {/* Add textinput title */}
                        <TextInput 
                            style={generalStyles.inputText}
                            placeholder="Email"
                            placeholderTextColor={generalStyles.placeholderText.color}
                            onChangeText={text => this.setState({last_name: text})}
                        />
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

                    {/* TODO: implement pword basic req check & client side error handling (red boxes) */}

                    {/* TODO: add check box to accept T&C & PP. also links to T&C & PP */}

                    {/* Things to address:
                    - Add password confirmation? Or too tedious on mobile (on mobile, you want to be quick, forms should be short) 
                    - shouldn't need astericks to mark imp fields if all fields are imp. just make them turn red if they try to submit empty field
                    - add hidden views that display error messages when necessary
                        - make sure there's enough spacing btwn elements to begin with to make this possible
                    - should input checks be done (onBlur) on the frontend or backend?
                        - look at what Tacobell and other apps are doing
                    */}

                </View>
            </View>
        )
    }
}

export default SignupView