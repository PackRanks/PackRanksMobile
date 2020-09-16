import React from 'react'
import Button from 'apsl-react-native-button'
import {StyleSheet,View,Text, ViewComponent,Dimensions} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import CourseCard from '../../CourseCard/CourseCard'
import {  RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {parseCourseData} from '../parseCourseData';

const gep_url =  "http://packranks-backend.herokuapp.com/gep"

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
    }, 
    textButtonStyle : {
        color : "white", 
        textAlign: "center", 
        fontWeight : "bold"
    }, 
    buttonStyle : {
        width : wp(40),
        height : hp(7),
        borderRadius : 200, 
        justifyContent : 'center', 
        alignItems : 'center', 
    }, 
    textButtonStyle : {
        color : "white", 
        textAlign: "center", 
        fontWeight : "bold"
    }, 
    container : { 
        justifyContent : 'center', 
        alignItems : 'center', 
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
    constructor(props){
        super()
        this.state = {
            gepType : null, 
            term : props.term, 
            courseData : []
        }

        this.CourseCardSet = this.CourseCardSet.bind(this)
        this.parseData = this.parseData.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ term: nextProps.term });  
      }

    CourseCardSet(){
        const GEP = this;
        let url = "http://packranks-backend.herokuapp.com/gep";

        if(this.state.gepType === null){
            alert('Please select a GEP!')
        }

        else if(this.state.term === null ){
            alert('Please choose a term!')
        }   

        else{
            fetch( 
                url, {
                    method: "GET",
                    headers: {"GEP": this.state.gepType, "num_courses": 10, "term": this.state.term}
               }
            ).then(
               response => response.json()
            ).then(
                (json) => {this.setState({courseData:this.parseData(json)})}
            )
        }

    }

    parseData(data) {
        console.log(data)
        return parseCourseData(data);
    }

    colorButtonStyle(){
        if(this.state.gepType === null || this.state.term === null){
            return '#A9A9A9'
        }

        else{
            return '#cc0000'
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

        let course_data = this.state.courseData;
        
        return(
            <View style={style.container}>
                <View style={style.termViewStyle}>
                    <Text style={style.termTextStyle}> Select a GEP</Text>
                    <RNPickerSelect
                    style={{...dropdownStyles}}
                        onValueChange={(value) => this.setState({gepType : value})}
                        placeholder={{ label: 'Select a GEP', value: null,color:"gray"}}
                        items={gepFinal}
                    />
                </View>
                    <View>
                            <Button textStyle={style.textButtonStyle} style={{...style.buttonStyle, backgroundColor: this.colorButtonStyle(),  borderColor : this.colorButtonStyle(), }} title="Right button" onPress={() => this.CourseCardSet()}>Get Courses</Button>
                    </View>
                <View style={style.courseStyle}>
                    {course_data.map(data => {
                        return (<CourseCard
                            courseTitle={data.courseTitle}
                            courseName={data.courseName}
                            profName = {data.profName}
                            isWishList={false}
                            rating = {data.rating}
                            catalog={data.catalog}
                            rateMyProfLink={data.rateMyProfLink}
                            preReq = {data.preReq}
                            time = {data.time}
                            days = {data.days}
                            seatStatus = {data.seatStatus}
                            seatAval ={data.seatAval}
                            seatTotal = {data.seatTotal}
                            latitude = {data.latitude}
                            longitude={data.longitude}
                            location={data.location}
                        />
                        )
                    })} 
                </View>
            </View>
        )
    }
}


export default GepDropDown; 