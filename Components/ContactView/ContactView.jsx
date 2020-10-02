import React from 'react'
import { View, TextInput, Image,KeyboardAvoidingView } from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { generalStyles, loginStyles, ICON_SIZE } from '../InitialViewsFamily/styles'
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { TextField,FilledTextField, OutlinedTextField} from 'react-native-material-textfield';

class ContactPageComponent extends React.Component {
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
            phoneNumber : null, 
            message : null, 
        }
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
                })
        }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position">
            <View style={generalStyles.container}>
                    {/** Card underlay */}
                    <View style={generalStyles.card} elevation={0}>
                        {/** Card heading and description */}
                        <View style={generalStyles.cardHeadingView}>
                            <View>
                                <Text style={generalStyles.cardHeading}>Contact Us!</Text>
                            </View>
                            <Text style={generalStyles.cardHeadingDesc}>Message us for any problems or future features!</Text>
                        </View>
            
                        <Text style={generalStyles.mediumText}>
                            First Name
                        </Text>
                        <View style={generalStyles.inputView}>
                            <TextInput 
                                style={generalStyles.inputText}
                                placeholder="First Name"
                                placeholderTextColor={generalStyles.placeholderText.color}
                                onChangeText={text => this.setState({first_name: text})}
                            />
                        </View>

                        
                        <Text style={generalStyles.mediumText}>
                            Last Name
                        </Text>
                        <View style={generalStyles.inputView}>
                            <TextInput 
                                style={generalStyles.inputText}
                                placeholder="Last Name"
                                placeholderTextColor={generalStyles.placeholderText.color}
                                onChangeText={text => this.setState({last_name: text})}
                            />
                        </View>

                        <Text style={generalStyles.mediumText}>
                            Email
                        </Text>
                        <View style={generalStyles.inputView}>
                            <TextInput 
                                style={generalStyles.inputText}
                                placeholder="Email"
                                placeholderTextColor={generalStyles.placeholderText.color}
                                onChangeText={text => this.setState({email: text})}
                            />
                        </View>

                        <Text style={generalStyles.mediumText}>
                            Phone Number 
                        </Text>
                        <View style={generalStyles.inputView}>
                            <TextInput 
                                style={generalStyles.inputText}
                                placeholder="Phone Number"
                                placeholderTextColor={generalStyles.placeholderText.color}
                                onChangeText={text => this.setState({phoneNumber: text})}
                            />
                        </View>

                        <Text style={generalStyles.mediumText}>
                            Message 
                        </Text>
                        <View style={generalStyles.inputView}>
                            <TextInput 
                                multiline={true}
                                numberOfLines={3}
                                style={generalStyles.inputText}
                                placeholder="Message"
                                placeholderTextColor={generalStyles.placeholderText.color}
                                onChangeText={text => this.setState({last_name: text})}
                                textAlignVertical = {'top'}
                                scrollEnabled={true}
                                maxHeight={hp(10)}
                            />
                        </View>

                        <View style={loginStyles.buttonShadow} elevation={5}>
                            <TouchableHighlight style={loginStyles.loginTouchableHighlight} onPress={() => this.resetPassword()} > 
                                <View style={loginStyles.loginButton}>
                                    <Text style={loginStyles.loginButtonText}>Send Message</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

function ContactPage(){
    const navigation = useNavigation();
    return(
        <ContactPageComponent/> 
    )
}

export default ContactPage