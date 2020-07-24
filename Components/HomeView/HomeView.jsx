import React from 'react'; 
import {View,Text,StyleSheet} from 'react-native'; 

const style = StyleSheet.create({
    container: {
        justifyContent: "center", 
        alignItems: "center"
    }, 
    titleStyle : {
        textAlign: "center",
        fontSize : 30, 
        fontWeight: "bold", 
        color: "#cc0000"
    }, 
    descriptionStyle: {
        textAlign: "center",
        fontSize : 19, 
        fontWeight: "bold", 
        color: "#cc0000"
    }, 
    featuresStyle: {
        marginTop: 10,
        fontSize : 17, 
        color: "#cc0000",
        textAlign: "center"
    }, 
    termViewStyle: {
        margin: 15, 
        flexDirection : "row", 
        justifyContent : "space-evenly"
    },
    termTextStyle: {
        fontSize : 18, 
        fontWeight: "bold",
        color: "#cc0000"
    }
})



function HomeView(){
    return(
        <View style={style.container}> 
            <Text style={style.titleStyle}>Welcome to PackRanks!</Text>
            <Text style={style.descriptionStyle}>Desc</Text>
            <Text style={style.descriptionStyle}>Desc</Text>
            <Text style={style.featuresStyle}>Use the Wishlist and Seat Notification features!</Text>
            <View style={style.termViewStyle}>
                <Text style={style.termTextStyle}>Select a Term</Text>
            </View>
        </View>
    )
}

export default HomeView; 
