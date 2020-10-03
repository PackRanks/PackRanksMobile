import React from 'react'
import { View, TextInput, Image,TouchableHighlight } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
//import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from './styles.js'
import { useNavigation } from '@react-navigation/native';


class ForgotConfirmViewComponent extends React.Component {
    constructor(props) {
        super(props)

        /** Function bindings */
        //this.changeEyeIcon = this.changeEyeIcon.bind(this)

        /** States */
        this.state = {
            first_name: null,
            last_name: null,
            email: this.props.email,
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
            console.log(this.state.email)
            fetch(url,
                {
                        method: "POST",
                        body: JSON.stringify({
                            email: this.state.email.toLowerCase()
                        })
                }).then(
                    (response) => {response.json()}
                )
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
                            <Icon  style={generalStyles.icons,{marginRight : 5}} name='md-arrow-round-back' size={30} color='gray' onPress={() => this.state.navigation.goBack()}/>
                            <Text style={generalStyles.cardHeading}>Forgot Password</Text>
                        </View>
                        <Text style={generalStyles.cardHeadingDesc}>If we have your email address in the system, you'll receive a message with a link to reset your password.</Text>
                     
                    </View>
          

                    <Text style={generalStyles.cardHeadingDesc}>
                        If you don't see an email, check your spam or junk mail. 
                    </Text>
    

                    <View style={loginStyles.buttonShadow} elevation={5}>
                        <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => this.state.navigation.navigate('Login')} > 
                            <View style={loginStyles.loginButton}>
                                <Text style={loginStyles.loginButtonText}>Go Back</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={loginStyles.buttonShadow} elevation={5}>
                        <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => this.resetPassword()} > 
                            <View style={loginStyles.loginButton}>
                                <Text style={loginStyles.loginButtonText}>Retry</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

function ForgotConfirmView({route}){
    const navigation = useNavigation();
    const { email } = route.params;
    return(
        <ForgotConfirmViewComponent navigation={navigation} email={email}/> 
    )
}

export default ForgotConfirmView