import React from 'react'; 
import {View,Text,StyleSheet,Image} from 'react-native'; 
import {Button} from 'react-native-paper';
import {Card,Icon} from 'react-native-elements'; 

const style = StyleSheet.create({
    content : {
        flexDirection : 'column', 
        justifyContent: 'center',
        flex : 1,
        alignContent : 'center'
    }, 
    buttonView : {
        flexDirection : 'row', 
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
        textDecorationLine : "underline", 
        marginBottom : 10
    }, 
    roleStyle : {
        color : "#cc0000", 
        fontSize : 14
    }
})


function TeamCard(){
    return(
        <View>
            <Card title = "Andong Wang" titleStyle={{size : 50}}>
                <View style={style.content}>
                    <View style={style.profileView}>
                        <Image source={require('../../../assets/Picture/GOD_OF_FANG_SWE.jpeg')} style={style.picStyle}/>
                        <Text style={style.titleStyle}>Data Scientist</Text>
                        <Text style={style.roleStyle}>He wrote no code</Text>
                    </View>
                    <View style={style.buttonView}>
                        <Icon name='logo-linkedin' type="ionicon" color='#cc0000' />
                        <Icon name='logo-github'type="ionicon" color='#cc0000' style={{marginLeft : 10}}/>
                        <Icon name='mail' type="material" color='#cc0000' style={{marginLeft : 10}}/>
                    </View>
                </View>
            </Card>
        </View>
    )
}



export default TeamCard; 