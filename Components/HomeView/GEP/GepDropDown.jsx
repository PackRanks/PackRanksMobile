import React from 'react'
import {StyleSheet,View,Text, ViewComponent,Dimensions} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import CourseCard from '../../CourseCard/CourseCard'
import {  RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const style = StyleSheet.create({
    termViewStyle: {
        margin: 15, 
        flexDirection : "row",
        justifyContent: "center", 
        alignContent: "center" 
    },
    termTextStyle: {
        marginRight: 15,
        fontSize : 18, 
        fontWeight: "bold",
        color: "#cc0000", 
        fontSize : hp('2%'),
    }
})

const dropdownStyles = StyleSheet.create({
    inputIOS: {
        width : wp('60%'),
        fontSize : hp('2%'),
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
        width : wp('60%'),
        fontSize : hp('2%'),
        borderWidth: 10,
        borderRadius: 50,
        color: 'black',
        backgroundColor: "white", 
        textAlign: "center",
        justifyContent: "center",
      },
  });


class GepDropDown extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        const gepOptions = ['Health and Exercise Studies', 'Humanities', 'Interdisciplinary Perspectives', 'Mathematical Sciences', 'Natural Sciences', 'Social Sciences', 'US Diversity', 'Additional Breadth', 'Visual and Performing Arts'];
        const gepLabels = gepOptions.map((option) => (
            {label: option}
        ));
        
        const gepOptionValues = ["HES", "HUM", "IDP", "MATH", "SCI", "SS", "USD", "ADDTL", "VPA"];
        const gepValues = gepOptionValues.map((optionValue) => (
            {value: optionValue}
        ));
    
        const gepFinal = [];
        for (var i = 0; i < gepLabels.length; i++) {
            gepFinal[i] = {label: gepLabels[i].label,
            value: gepValues[i].value}
        }
        
        return(
            <View>
                <View style={style.termViewStyle}>
                    <Text style={style.termTextStyle}> Select a GEP</Text>
                    <RNPickerSelect
                    style={{...dropdownStyles}}
                        onValueChange={(value) => this.setState({gepType : value})}
                        placeholder={{ label: 'Select a GEP', value: null,color:"gray"}}
                        items={gepFinal}
                    />
                </View>
                <View style={style.courseStyle}> 
                    <CourseCard 
                         courseTitle={"MA 242 - 50A"}
                         courseName={"Calculus III"}
                         profName = {'Kurtz, Lesile Anne'}
                         isWishList={true}
                         rating = {99}
                         catalog={"http://www.wolfware.ncsu.edu/courses/details/?sis_id=SIS:2020:8:1:MA:242:005"}
                         rateMyProfLink={"https://www.ratemyprofessors.com/ShowRatings.jsp?tid=977497"}
                         preReq = {"MA 241 with grade of C- or better or AP Calculus credit, or Higher Level IB credit."}
                         time = {"11:30 AM - 12:20 PM"}
                         days = {"MWF"}
                         seatStatus = {"Open"}
                         seatAval ={"7"}
                         seatTotal = {"35"}
                         latitude = {35.785110}
                         longitude={-78.665860}
                         location={"2203 SAS Hall"}
                    />
                </View>
            </View>
        )
    }
}


export default GepDropDown; 