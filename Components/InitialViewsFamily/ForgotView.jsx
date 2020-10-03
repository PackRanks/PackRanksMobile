import React from 'react'
import { View, TextInput, Image,TouchableHighlight } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
//import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from './styles.js'
import { useNavigation } from '@react-navigation/native';


class ForgotViewComponent extends React.Component {
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
            hidePassword: true, 
            navigation : this.props.navigation
        }
    }

    changeEyeIcon() {
        this.setState(prevState => ({
            eyeIcon: prevState.eyeIcon === "md-eye-off" ? "md-eye" : "md-eye-off",
            hidePassword: !prevState.hidePassword
        }))
    }

     resetPassword(){


        if (!(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(this.state.email))) {  
        
            //throw error with toast-notes
            alert('Please enter a valid email address')
        }
 
        else{
            let url = "http://packranks-backend.herokuapp.com/resetLink";
            fetch(url,
                {
                        method: "POST",
                        body: JSON.stringify({
                            email: this.state.email.toLowerCase()
                        })
                }).then(
                    (response) => {response.json();console.log(response.json())}
                ).then((data) => {
                    {/*Successfully sent reset link */}
                    console.log(data)
                    this.state.navigation.navigate('ForgotConfirmView', {email: this.state.email})
                })
        }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position'>

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
                                <Icon  style={generalStyles.icons,{marginRight : 5}} name='md-arrow-round-back' size={30} color='gray' onPress={() => this.state.navigation.goBack()}/>
                                <Text style={generalStyles.cardHeading}>Forgot Password</Text>
                            </View>
                            <Text style={generalStyles.cardHeadingDesc}>Enter your email and we'll send you a link to reset your password.</Text>
                        </View>
            

                        {/** Email input box */}
                        <Text style={generalStyles.mediumText}>
                            Email
                        </Text>
                        <View style={generalStyles.inputView}>
                            {/* Add textinput title */}
                            <TextInput 
                                style={generalStyles.inputText}
                                placeholder="Email"
                                placeholderTextColor={generalStyles.placeholderText.color}
                                onChangeText={text => this.setState({email: text})}
                            />
                        </View>
                        <View style={loginStyles.buttonShadow} elevation={5}>
                            <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => this.resetPassword()} > 
                                <View style={loginStyles.loginButton}>
                                    <Text style={loginStyles.loginButtonText}>SIGN UP</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

function ForgotView(){
    const navigation = useNavigation();
    return(
        <ForgotViewComponent navigation={navigation}/> 
    )
}

export default ForgotView