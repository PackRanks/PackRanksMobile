import React from 'react'
import { View, TextInput, Image } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from '../styles.js'
import * as Google from 'expo-google-app-auth'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';



class LoginViewComponent extends React.Component {
    constructor(props) {
        super(props)

        /** Function bindings */
        this.changeEyeIcon = this.changeEyeIcon.bind(this)
        this.signInWithGoogleAsync = this.signInWithGoogleAsync.bind(this)
        this.regularSignIn = this.regularSignIn.bind(this)
        console.log('hello')
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

        const { navigation } = this.props.navigation;
        console.log(navigation)

    }

    /** Signin/Signup with Google */
    async signInWithGoogleAsync() {

        // back-end url
        let url = "http://packranks-backend.herokuapp.com/googleauth";

        try {
            const result = await Google.logInAsync({
                androidClientId: '810579218227-inktsllg94ro2nq0mov0kunql7s04p70.apps.googleusercontent.com',
                iosClientId: '810579218227-0g71c7ebvlfa8q71m7fpd660nrmlt085.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
        
            if (result.type === 'success') {

                let first_name = result.user.givenName;
                let last_name = result.user.familyName;
                let email = result.user.email;
                let token = result.idToken;

                let user = {
                    firstName : first_name, 
                    lastName : last_name, 
                    email :  email, 
                    token : token, 
                    profilePic : result.user.photoUrl 
                }

       
                await AsyncStorage.setItem('user', JSON.stringify(user))

                
                fetch(url,
                {
                            method: "POST",
                            body: JSON.stringify({
                              first_name: first_name,
                              last_name: last_name,
                              email: email,
                              token: token
                            })
                }).then(
                        (response) => {response.json()}
                )

                this.state.navigation.navigate('Drawer', { screen: 'Home',user: user})

                return { success: true };
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    /** Handles changing of eye icons and hiding/showing of password */
    changeEyeIcon() {
        this.setState(prevState => ({
            eyeIcon: prevState.eyeIcon === "md-eye-off" ? "md-eye" : "md-eye-off",
            hidePassword: !prevState.hidePassword
        }))
    }

    regularSignIn(){
        if(this.state.email === null){
            alert('Please use an email!')
        }

        else if(this.state.password === null){
            alert('Please use an password!')
        }

        else{
            if (!(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(this.state.email))) {  
                alert('Please enter a valid email address!')
            }

            else{
                let url = "http://packranks-backend.herokuapp.com/login";
                fetch(url,
                    {
                            method: "POST",
                            body: JSON.stringify({
                                email: this.state.email.toLowerCase(),
                                password:this.state.password
                            })
                    }).then((response) => (response.json()))
                    .then(data => {
                        console.log(data)
                        if (data.success === true){
                            this.state.navigation.navigate('Drawer',{screen: 'Home'})
                        }

                        else{
                            console.log(data.success)
                            alert('Please enter a valid email address or password!')
                        }
                    })
            }
        }

    }

    render(){
        return (
            <View style={generalStyles.container}>
                {/** PackRanks logo */}
                <Image style={generalStyles.logo} source={require('../../../assets/Picture/PackRanksLogo1.png')}/>
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
                    
                    {/** Signup text and button */}
                    <View style={loginStyles.signUpView}>
                        <Text style={generalStyles.mediumText}>Not a member?</Text>
                        <TouchableOpacity 
                            onPress={() => this.state.navigation.navigate('SignupView' )}
                            style={loginStyles.opacity}
                        >
                            <Text style={generalStyles.mediumTextUnderline}>Sign up now!</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/** Forgot password button */}
                    <View style={loginStyles.forgotView}>
                        <TouchableOpacity
                            onPress={() => this.state.navigation.navigate('ForgotView')}
                            style={loginStyles.opacity}
                        >
                            <Text style={generalStyles.mediumTextUnderline}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/** Login button */}
                    <View style={loginStyles.buttonShadow} elevation={5}>
                        <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => this.regularSignIn()} >
                            <View style={loginStyles.loginButton}>
                                <Text style={loginStyles.loginButtonText}>LOGIN</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    {/** OR text */}
                    <Text style={generalStyles.mediumText}>OR</Text>

                    {/** Sign in with google button */}
                    <View style={loginStyles.buttonShadow} elevation={5}>
                        <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => this.signInWithGoogleAsync()} >   
                            <View style={loginStyles.googleButton}>
                                <Icon
                                    style={generalStyles.icons}
                                    name='logo-google'
                                    //type='material'
                                    size={ICON_SIZE}
                                    color='white'
                                />
                                <Text style={loginStyles.googleButtonText}>Continue with Google</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    {/** Google button description */}
                    <Text style={loginStyles.googleDesc}>You will automatically be signed up for PackRanks!</Text>
                    
                </View>
            </View>
        )
    }
}

function LoginView(){
    const navigation = useNavigation();
    return(
        <LoginViewComponent navigation={navigation}/> 
    )
}


export default LoginView;