import React from 'react'; 
import {View,Text,StyleSheet,Image ,Dimensions} from 'react-native'; 
import {Button} from 'react-native-paper';
import {Card,Icon} from 'react-native-elements'; 
import { Linking } from 'react-native'
import {  RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const style = StyleSheet.create({
    content : {
        flexDirection : 'column', 
        justifyContent: 'center',
        flex : 1,
        alignContent : 'center'
    }, 
    buttonView : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1

    }, 
    pictureView : {
        width : 50, 
        height : 60
    }, 
    picStyle: {
        justifyContent: 'center', 
        alignContent : 'center', 
        width: hp(20), 
        height: hp(20), 
        borderRadius: 1000/ 2, 
      }, 
    profileView : {
        alignItems : 'center', 
        justifyContent : 'center'
    }, 
    titleStyle : {
        fontWeight: "bold",
        fontSize : hp(3.2), 
        color : "#cc0000",  
        marginTop : 10,
        marginBottom : 10, 
        textAlign: 'center', 
        justifyContent : 'center'
    }, 
    roleStyle : {
        color : "gray", 
        justifyContent : 'center', 
        textAlign : "center",
        fontSize :  hp(2), 
        marginBottom : 10
    }, 
    buttonStyle : {
        marginLeft : 60,  
        justifyContent : 'center', 
        alignContent : 'center'
    }
})


function getPic(name){ 

    if(name === 'Mathew Chanda'){
        return require('../../../assets/Picture/MathewPic.jpeg')
    }


    else if(name === 'Ishaan Radia'){
        return require('../../../assets/Picture/IshaanPic.jpeg')
    }


    else if(name === 'Harshal Suthar'){
        return require('../../../assets/Picture/HarshalPic.jpeg')
    }


    else{
        return require('../../../assets/Picture/AnthonyPic.jpeg')
    }

}



function TeamCard(props){
    return(
        <View>
            <Card title = {props.name} containerStyle={{width : wp(70), borderRadius : 30}} titleStyle={{fontSize : hp(4) ,color : "#cc0000"}}>
                <View style={style.content}>
                    <View style={style.profileView}>
                        <Image source={getPic(props.name)} style={style.picStyle}/>
                        <Text style={style.titleStyle}>{props.title}</Text>
                        <Text style={style.roleStyle}>{props.role}</Text>
                    </View>
                    <View style={style.buttonView}>
                        <Icon size={hp(4)} name='logo-linkedin' type="ionicon" color='black' onPress={() => Linking.openURL(props.linkedin)} />
                        <Icon size={hp(4)} name='logo-github'type="ionicon" color='black' containerStyle={style.buttonStyle} onPress={() => Linking.openURL(props.github)} />
                        <Icon size={hp(4)} name='mail' type="material" color='black' containerStyle={style.buttonStyle} onPress={() => Linking.openURL('mailto:'+ props.mail)} />
                    </View>
                </View>
            </Card>
        </View>
    )
}



export default TeamCard; 