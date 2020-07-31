import React from 'react'; 
import {View,Text,StyleSheet,Image} from 'react-native'; 
import {Button} from 'react-native-paper';
import {Card,Icon} from 'react-native-elements'; 
import { Linking } from 'react-native'

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
        width: 100, 
        height: 100, 
        borderRadius: 100/ 2, 
      }, 
    profileView : {
        alignItems : 'center', 
        justifyContent : 'center'
    }, 
    titleStyle : {
        fontWeight: "bold",
        fontSize : 15, 
        color : "#cc0000",  
        marginTop : 10,
        marginBottom : 10
    }, 
    roleStyle : {
        color : "gray", 
        textAlign : "center",
        fontSize : 14, 
        marginBottom : 10
    }, 
    buttonStyle : {
        marginLeft : 50,  
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
            <Card title = {props.name} containerStyle={{width : 250, borderRadius : 30}} titleStyle={{size : 90,color : "#cc0000"}}>
                <View style={style.content}>
                    <View style={style.profileView}>
                        <Image source={getPic(props.name)} style={style.picStyle}/>
                        <Text style={style.titleStyle}>{props.title}</Text>
                        <Text style={style.roleStyle}>{props.role}</Text>
                    </View>
                    <View style={style.buttonView}>
                        <Icon name='logo-linkedin' type="ionicon" color='black' onPress={() => Linking.openURL(props.linkedin)} />
                        <Icon name='logo-github'type="ionicon" color='black' containerStyle={style.buttonStyle} onPress={() => Linking.openURL(props.github)} />
                        <Icon name='mail' type="material" color='black' containerStyle={style.buttonStyle} onPress={() => Linking.openURL('mailto:'+ props.mail)} />
                    </View>
                </View>
            </Card>
        </View>
    )
}



export default TeamCard; 