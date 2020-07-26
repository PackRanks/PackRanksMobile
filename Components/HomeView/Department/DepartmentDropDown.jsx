import React from 'react'
import Button from 'apsl-react-native-button'
import {StyleSheet,View,Text} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import CourseNumberSlider from './CourseNumberSlider/CourseNumberSlider.jsx'
import CourseCard from '../../CourseCard/CourseCard'

// Styling for the components
const style = StyleSheet.create({
    termViewStyle: {
        margin: 15, 
        flexDirection : "row",
    },
    courseNumberTextStyle: {
        marginRight: 15,
        fontSize : 18, 
        fontWeight: "bold",
        color: "#cc0000", 
        textAlign : "center"
    }, 
    container: {
        justifyContent: "center", 
        alignItems: "center", 
        color:"white"
    }, 
    sliderStyle : {
        marginTop: 50
    }, 
    buttonStyle : {
        width : 150,
        height : 55,
        backgroundColor: "#cc0000", 
        borderColor : "#cc0000", 
        borderRadius : 200
    }, 
    textButtonStyle : {
        color : "white", 
        textAlign: "center", 
        fontWeight : "bold"
    }, 
    buttonView : {
        justifyContent: "center", 
        alignItems: "center" 
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
      paddingBottom : 8,
      paddingRight: 20, 
      textAlign: "center",
      justifyContent: "center",
      fontWeight : "bold"
    }
  });

class DepartmentDropDown extends React.Component{
    constructor(){
        super() 
        this.state = {
            dept : null, 
            deptCode: null, 
            component : null, 
            minCourseNumber: 0, 
            maxCourseNumber: 999
        }
        
        this.getDepts=this.getDepts.bind(this)
        this.getDepts(); 
        this.showDepartmentCode=this.showDepartmentCode.bind(this)
    }

     // Getting the codes for the dept 
     getDepts(){
        let url = "http://packranks-backend.herokuapp.com/getdepts";
        const res =   fetch( 
            url, {
                method: "GET"
        }
        ).then(
            response => response.json()
        ).then(data => {this.setState({deptCode : data.dept_code},() => {this.showDepartmentCode()})})
    }


    // Shows the dept code in the dropdown and create the dropdown 
    showDepartmentCode(){
        
        // Create labels and values for the dropdown
        const deptValues = this.state.deptCode.map((value_i) => (
            {value: value_i}
        ));
        const deptFinal = [];
        for (var i = 0; i < deptValues.length; i++) {
            deptFinal[i] = {label: deptValues[i].value,
                            value: deptValues[i].value}
        }

        this.setState(
            { component : <View style={style.termViewStyle}>
                                <Text style={style.courseNumberTextStyle}> Select a Dept</Text>
                                <RNPickerSelect
                                    style={{...dropdownStyles}}
                                    onValueChange={(value) => this.setState({gepType : value})}
                                    placeholder={{ label: 'Select a Dept', value: null,color:"gray"}}
                                    Icon={() => {return <Icon name='arrow-drop-down' type='material'color='black'/>}}
                                    items = {deptFinal}
                                />
                        </View>
           }) 
        }

    
    render(){
        return(
            <View>
                <View style={style.container}>
                    {this.state.component}
                    <Text style={style.courseNumberTextStyle}>Please use the slider for the desired course number! </Text>
                    <View style={style.sliderStyle}>
                        <CourseNumberSlider/>
                    </View>
                    <View style={style.buttonStyle}>
                        <Button textStyle={style.textButtonStyle} style={style.buttonStyle} title="Right button" onPress={() => alert('Right button pressed')}>Get Courses</Button>
                    </View>
                </View>
                <CourseCard/>

            </View>
        )
    } 
}





export default DepartmentDropDown; 