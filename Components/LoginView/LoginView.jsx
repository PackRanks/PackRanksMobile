import React from 'react'
import { View, TextInput, Image } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from './styles.js'

class LoginView extends React.Component {
    constructor(props) {
        super(props)

        /** Function bindings */
        this.changeEyeIcon = this.changeEyeIcon.bind(this)

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
    
    /** Handles changing of eye icons and hiding/showing of password */
    changeEyeIcon() {
        this.setState(prevState => ({
            eyeIcon: prevState.eyeIcon === "md-eye-off" ? "md-eye" : "md-eye-off",
            hidePassword: !prevState.hidePassword
        }))
    }

    render(){
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
                        <Text style={generalStyles.cardHeading}>Login</Text>
                        <Text style={generalStyles.cardHeadingDesc}>Login with your email and password</Text>
                    </View>

                    {/** Email input box */}
                    <View style={generalStyles.inputView}>
                        {/** Mail icon */}
                        {/* Putting icon inside TextInput: https://stackoverflow.com/questions/40935381/how-can-i-put-an-icon-inside-a-textinput-in-react-native */}
                        <Icon 
                            style={generalStyles.icons}
                            name='md-mail' 
                            //type='material'
                            size={ICON_SIZE}
                            color='gray' 
                        />
                        {/* TODO: scale icon size and textinput width by screen size */}
                        <TextInput 
                            style={generalStyles.inputText}
                            placeholder="Email"
                            placeholderTextColor={generalStyles.placeholderText.color}
                            onChangeText={text => this.setState({email: text})}
                        />
                    </View>

                    {/** Password input box */}
                    <View style={generalStyles.inputView}>
                        {/** Lock icon */}
                        <Icon
                            style={generalStyles.icons}
                            name='md-lock'
                            //type='material'
                            size={ICON_SIZE}
                            color='gray'
                        />
                        {/* onChangeText={(e) => onChange(e)} */}
                        <TextInput 
                            style={generalStyles.inputText}
                            placeholder="Password"
                            placeholderTextColor={generalStyles.placeholderText.color}
                            onChangeText={text => this.setState({password: text})}
                            secureTextEntry={this.state.hidePassword}
                        />
                        {/** Eye icon & hide password toggle */}
                        {/* Password shower/hider code taken from: https://medium.com/@Mdmoin07/react-native-hide-show-password-input-d4be4d0f70aa */}
                        <Icon 
                            style={generalStyles.icons}
                            name={this.state.eyeIcon}
                            //type='ionicons'
                            size={ICON_SIZE}
                            color='gray' 
                            onPress={() => this.changeEyeIcon()}
                        />
                    </View>
                    
                    {/** Login button */}
                    <View style={loginStyles.buttonShadow} elevation={5}>
                        <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => alert('Sign in pressed')} >
                            <View style={loginStyles.loginButton}>
                                <Text style={loginStyles.loginButtonText}>LOGIN</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    {/** OR text */}
                    <Text style={generalStyles.mediumText}>OR</Text>

                    {/** Sign in with google button */}
                    <View style={loginStyles.buttonShadow} elevation={5}>
                        <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => alert('Sign in pressed')} >   
                            <View style={loginStyles.googleButton}>
                                <Icon
                                    style={generalStyles.icons}
                                    name='logo-google'
                                    //type='material'
                                    size={ICON_SIZE}
                                    color='white'
                                />
                                <Text style={loginStyles.googleButtonText}>Sign in with Google</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    {/** Google button description */}
                    <Text style={loginStyles.googleDesc}>You will automatically be signed up for PackRanks!</Text>
                    
                    {/** Sign up text and button */}
                    <View style={loginStyles.signUpView}>
                        <Text style={generalStyles.mediumText}>Not a member?</Text>
                        <TouchableOpacity 
                            onPress={() => alert("Coming soon!")}
                            style={loginStyles.opacity}
                        >
                            <Text style={generalStyles.mediumTextUnderline}>Sign up now!</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/** Forgot password button */}
                    <View style={loginStyles.forgotView}>
                        <TouchableOpacity
                            onPress={() => alert("Coming soon!")}
                            style={loginStyles.opacity}
                        >
                            <Text style={generalStyles.mediumTextUnderline}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginView;