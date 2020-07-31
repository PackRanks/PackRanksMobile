import React from 'react'; 
import RNPickerSelect from 'react-native-picker-select';
import {View,Text,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'; 
import SegmentedControl from '@react-native-community/segmented-control';
import GepDropDown from './GEP/GepDropDown.jsx'
import DepartmentDropDown from './Department/DepartmentDropDown.jsx'


// Styling 
const style = StyleSheet.create({
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
         justifyContent: "center", 
        alignContent: "center", 
        color:"white"
    },
    termTextStyle: {
        marginRight: 15,
        fontSize : 18, 
        fontWeight: "bold",
        color: "#cc0000"
    }, 
    segemntedControlsStyle: {
        width: "90%", 
        flexDirection : "row", 
        justifyContent: "center", 
        textAlign : 'center',
        alignSelf: "center", 
        color:"white"
    }
})

const dropdownStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        color: 'black',
        backgroundColor: "white",
        paddingLeft: 20,
        paddingRight: 20, 
        textAlign: "center",
        justifyContent: "center",
        borderColor : 'white'
      }, 
      inputAndroid: {
        width : 200,
        fontSize: 18,
        borderWidth: 10,
        borderRadius: 50,
        color: 'black',
        backgroundColor: "white", 
        textAlign: "center",
        justifyContent: "center",
      },
  });


class HomeView extends React.Component{
    constructor(){
        super(); 
        this.state = {
            term : null, 
            typeCourse: 'GEP', 
            department : null
        }

        this.CourseSelection = this.CourseSelection.bind(this)
    }


    CourseSelection(typeCourse){
        if(typeCourse === 'GEP'){
            return (
                <GepDropDown/>
            )
        }
    
        else{
            return(
                <DepartmentDropDown/>
            )
        }
    }
    
    render(){
        return(
                <View> 
                    <Text style={style.titleStyle}>Welcome to PackRanks!</Text>
                    <Text style={style.featuresStyle}>Use the Wishlist and Seat Notification features!</Text>
                    <View style={style.termViewStyle}>
                        <Text style={style.termTextStyle}>Select a Term</Text>
                        <RNPickerSelect
                        style={{...dropdownStyles}}
                            onValueChange={(value) => this.setState({term : value})}
                            placeholder={{ label: 'Select a Term', value: null,color:"gray"}}
                            items={[
                                { label: '2020 Fall Term', value: '2020 Fall Term' },
                                { label: '2020 Summer Session 1', value: '2020 Summer Session 1' },
                                { label: '2020 Summer Session 2', value: '2020 Summer Session 2' }
                            ]}
                        />
                    </View>
                        <SegmentedControl
                                values={['GEP', 'Department']}x
                                selectedIndex={0}
                                onValueChange={(value) => this.setState({typeCourse : value})}
                                style={style.segemntedControlsStyle}
                        />
                        {this.CourseSelection(this.state.typeCourse)}     
                </View>
        )
    }
}

export default HomeView; 
