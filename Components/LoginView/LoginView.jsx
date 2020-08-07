import React from 'react'
import { View, StyleSheet, TextInput, Image, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { Text } from 'react-native-paper'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'


const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "#cc0000",
            paddingTop: "10%",
            alignItems: "center",
            height: "100%"
        },
        inputView: {
            // flex: 1,
            flexDirection: 'row',
            //justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#fff',
            // borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#999999',
            borderRadius: 10,
            width: "80%",
            marginBottom: 10
        },
        inputText: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            // backgroundColor: '#fff',
            // color: '#424242',
        },
        icons: {
            padding: 5,
        },
        placeholderText: {
            color: "#999999" // 60% black, according to material UI design styles on XD
        },
        appNameHeading: {
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            alignSelf: "center",
            paddingTop: 10,
            paddingBottom: 20
        },
        loginHeading: {
            fontSize: 30,
            fontWeight: "bold",
            color: "black"
        },
        logo: {
            width: 100,
            height: 100,
            alignSelf: "center",
            marginLeft: 10
        },
        buttonText: {
            color: "white", 
            textAlign: "center", 
            fontWeight: "bold"
        },
        button: {
            //width: "50%", // TODO: make all hardcoded dimensions scalable with screen size
            // height: 55,
            backgroundColor: "#cc0000", 
            borderColor: "#cc0000", 
            borderRadius: 20
        },
        mediumText: {
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
            //alignSelf: "center"
        },
        mediumTextUnderline: {
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
            textDecorationLine: "underline",
            //alignSelf: "center"
        },
        googleDesc: {
            fontSize: 14,
            fontWeight: "normal",
            color: "#999999"
        },
        loginDesc: {
            fontSize: 14,
            fontWeight: "normal",
            color: "#999999"
        },
        signUpView: {
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 10
        },
        opacity: {
            //padding: 10 //turn into % if necessary
            //alignItems: "center"
            marginLeft: 10
        },
        card: {
            width: "90%",
            borderRadius: 10,
            backgroundColor: "white",
            alignItems: "center"
        },
        loginTextView: {
            alignItems: "center",
            padding: 10
        },
        loginButton: {
            backgroundColor: "#cc0000",
            width: "100%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center"
        },
        loginButtonText: {
            color: "white",
            fontSize: 14, // scale to screen size
            fontWeight: "bold",
        },
        loginTouchableHighlight: {
            width: "100%",
            borderRadius: 25,
        },
        buttonShadow: {
            width: "50%",
            marginVertical: 10,
            // shadows do not currently work for this wrapping view. Used to work inside the loginButton itself but the touch was restricting the shadow.
            // shadowColor: "#000000",
            // shadowOpacity: 0.35,
            // shadowRadius: 25,
            // shadowOffset: {
            //     height: 5,
            //     width: 5
            // }
        },
        forgotView: {
            // marginTop: 10,
            // marginBottom: 20,
            paddingTop: 10,
            paddingBottom: 10
        }
    }
)

const ICON_SIZE = 20

class LoginView extends React.Component {
    constructor(props) {
        super(props)

        // add function bindings here

        this.state = {
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            login_email: null
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/Picture/PackRanksLogo1.png')}/>
                <Text style={styles.appNameHeading}>PackRanks</Text>
                <View style={styles.card} elevation={0}>
                    
                    <View style={styles.loginTextView}>
                        <Text style={styles.loginHeading}>Login</Text>
                        <Text style={styles.loginDesc}>Login with your email and password</Text>
                    </View>
                    
                    <View style={styles.inputView}>
                        {/* icon inside TextInput: https://stackoverflow.com/questions/40935381/how-can-i-put-an-icon-inside-a-textinput-in-react-native */}
                        <Icon style={styles.icons} name='mail-outline' type='material' size={ICON_SIZE} color='gray' />
                        {/* TODO: scale icon size and textinput width by screen size */}
                        <TextInput 
                            style={styles.inputText}
                            placeholder="Email"
                            placeholderTextColor={styles.placeholderText.color}
                            onChangeText={text => this.setState({email: text})}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Icon style={styles.icons} name='lock-outline' type='material' size={ICON_SIZE} color='gray' />
                        <TextInput 
                            style={styles.inputText}
                            placeholder="Password"
                            placeholderTextColor={styles.placeholderText.color}
                            onChangeText={text => this.setState({password: text})}
                            secureTextEntry={true}
                        />
                        {/* TODO: Add a toggle switch to for a user to view their password */}
                    </View>
                    
                    
                    <View style={styles.buttonShadow} elevation={5}>
                        <TouchableHighlight style={styles.loginTouchableHighlight} onPress={() => alert('Sign in pressed')} >
                            <View style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>LOGIN</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <Text style={styles.mediumText}>OR</Text>

                    {/* Sign in with google button */}
                    

                    <Text textStyle={styles.googleDesc}>You will automatically be signed up for PackRanks!</Text>
                    
                    <View style={styles.signUpView}>
                        <Text style={styles.mediumText}>Not a member?</Text>
                        <TouchableOpacity 
                            onPress={() => alert("Coming soon!")}
                            style={styles.opacity}
                        >
                            <Text style={styles.mediumTextUnderline}>Sign up now!</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.forgotView}>
                        <TouchableOpacity
                            onPress={() => alert("Coming soon!")}
                            style={styles.opacity}
                        >
                            <Text style={styles.mediumTextUnderline}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginView;