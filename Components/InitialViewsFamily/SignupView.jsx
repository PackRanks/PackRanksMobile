import React from 'react'
import { View, TextInput, Image,KeyboardAvoidingView } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
//import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from './styles.js'
import { useNavigation } from '@react-navigation/native';



class SignupViewComponent extends React.Component {
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
            confirmPassword : null, 
            login_email: null,
            eyeIcon: "md-eye", // Eyes from Ionicons icon lib
            hidePassword: true, 
            navigation : this.props.navigation
        }
        this.signUp = this.signUp.bind(this)
    }

    signUp(){
         {/* Check for valid First Name and Last Name*/}
         if (this.state.first_name === null || this.state.last_name === null  ) {
            alert('Please enter a valid first name and last name.')
            return
        }

         {/* Check for valid email */}
         if (this.state.email === null  ) {
            alert('Please enter a valid email address.')
            return
        }


        {/* Check for valid email */}
        if (!(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(this.state.email))) {  
            alert('Please enter a valid email address.')
            return
        }


        {/* Check for password match */}
        if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        { /* Check for valid password length */ }
        if (this.state.password.length < 8) {
            alert('Password must be 8 or more characters!')
            return
        }

        let url = "http://packranks-backend.herokuapp.com/signup";
        fetch(url,
            {
                    method: "POST",
                    body: JSON.stringify({
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        password: this.state.password
                    })
            }).then(
                (response) => (response.json())
            ).then((data) => {
                if (data.success === true) {
                    this.state.navigation.navigate('Login')
                }

                else{
                    alert('This account exists or details are invalid')
                }
            })

    }

    changeEyeIcon() {
        this.setState(prevState => ({
            eyeIcon: prevState.eyeIcon === "md-eye-off" ? "md-eye" : "md-eye-off",
            hidePassword: !prevState.hidePassword
        }))
    }

    callback(){
        console.log()
    }
    
    expiredCallback(){
        console.log()
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={generalStyles.container}>
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
                            <Text style={generalStyles.cardHeading}>Sign Up</Text>
                        </View>
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
                    <Text style={generalStyles.mediumText}>
                        Last name
                    </Text>
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

                    <Text style={generalStyles.mediumText}>
                            Password
                    </Text>
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

                    <Text style={generalStyles.mediumText}>
                            Confirm Password
                    </Text>
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
                            onChangeText={text => this.setState({confirmPassword: text})}
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

                    <View style={loginStyles.buttonShadow} elevation={5}>
                 
                        <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => this.signUp()} > 
                            <View style={loginStyles.loginButton}>
                                <Text style={loginStyles.loginButtonText}>SIGN UP</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    {/*  TODO: implement pword basic req check & client side error handling (red boxes) */}

                    {/* TODO: add check box to accept T&C & PP. also links to T&C & PP */}

                    {/* Things to address:
                    
                    - Add password confirmation? Or too tedious on mobile (on mobile, you want to be quick, forms should be short) 
                    - shouldn't need astericks to mark imp fields if all fields are imp. just make them turn red if they try to submit empty field
                    - add hidden views that display error messages when necessary
                        - make sure there's enough spacing btwn elements to begin with to make this possible
                    - should input checks be done (onBlur) on the frontend or backend?
                        - look at what Tacobell and other apps are doing

                        // () => this.state.navigation.navigate('LoginStack', { screen: 'Login' })
                    */}

                </View>
            </KeyboardAvoidingView>
        )
    }
}


function SignupView(){ 
    const navigation = useNavigation();
    return(
        <SignupViewComponent navigation={navigation}/> 
    )
}

export default SignupView