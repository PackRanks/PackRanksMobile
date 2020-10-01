import {View,Button,StyleSheet} from 'react-native'
import React from 'react'; 
import AsyncStorage from '@react-native-community/async-storage';
import CourseCard from '../CourseCard/CourseCard'
import { useNavigation } from '@react-navigation/native';
// import {parseCourseData} from '../parseCourseData';
// import CourseCard from '../../CourseCard/CourseCard'

const style = StyleSheet.create(
    {
        viewStyle : {
            justifyContent: 'center', 
            alignItems : 'center'
        }
    }
)

async function signOut(navigation){
    await AsyncStorage.clear()
    navigation.navigate('Login')
    
}

function WishlistView(props){
    
    return(
        <View style={style.viewStyle}>
            <Button title="Sign Out" onPress={() => {
                signOut(props.navigation)}}
            />
        </View>
    )
}

export default WishlistView