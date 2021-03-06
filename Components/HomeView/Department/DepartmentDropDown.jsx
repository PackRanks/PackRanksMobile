import React from 'react'
import Button from 'apsl-react-native-button'
import {StyleSheet,View,Text} from 'react-native'; 

import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import CourseNumberSlider from './CourseNumberSlider/CourseNumberSlider.jsx'
import CourseCard from '../../CourseCard/CourseCard'
import {  RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {parseCourseData} from '../parseCourseData';


// Styling for the components
const style = StyleSheet.create({
    deptViewStyle: {
        margin: 15, 
        flexDirection : "row",
    },
    courseNumberTextStyle: {
        marginRight: 15,
        fontSize : hp('2%'), 
        fontWeight: "bold",
        color: "#cc0000", 
        textAlign : "center", 
        justifyContent : 'center',
        alignContent : 'center'
    }, 
    sliderInstructionStyle : {
        fontSize : hp('2%'), 
        fontWeight: "bold",
        color: "#cc0000", 
        textAlign : "center", 
        justifyContent : 'center',
        alignContent : 'center'
    },
    container: {
        justifyContent: "center", 
        alignItems: "center", 
        color:"white"
    }, 
    sliderStyle : {
        marginTop: 50
    }, 
    textButtonStyle : {
        color : "white", 
        textAlign: "center", 
        fontWeight : "bold"
    }, 
    buttonStyle : {
        width : wp(40),
        height : hp(7),
        backgroundColor: "#cc0000", 
        borderColor : "#cc0000", 
        borderRadius : 200, 
        justifyContent : 'center', 
        alignItems : 'center', 
    }, 
    textButtonStyle : {
        color : "white", 
        textAlign: "center", 
        fontWeight : "bold"
    }, 
    buttonView : { 
        justifyContent : 'center', 
        alignContent : 'center', 
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


class DepartmentDropDown extends React.Component{
    constructor(props){
        super(props) 
        this.state = {
            dept : null, 
            deptCode: null, 
            component : null, 
            minCourseNumber: 100, 
            maxCourseNumber: 899,
            term: props.term,
            courseData: []
        }
        
        this.getDepts=this.getDepts.bind(this)
        this.getDepts(); 
        this.showDepartmentCode=this.showDepartmentCode.bind(this)
        this.CourseCardSet = this.CourseCardSet.bind(this)
        this.parseData = this.parseData.bind(this)
        this.setMin = this.setMin.bind(this)
        this.setMax = this.setMax.bind(this)
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ term: nextProps.term });  
    }

    setMin(value){
        this.setState({minCourseNumber: value})
    }

    setMax(value) {
        this.setState({maxCourseNumber: value})
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
    
    CourseCardSet() {
        console.log(this.state.minCourseNumber)
        console.log(this.state.maxCourseNumber)

        const Dept = this;
        let url = "http://packranks-backend.herokuapp.com/dept";

        let min_num = this.state.minCourseNumber;
        let max_num = this.state.maxCourseNumber;



        if(this.state.term === null ){
            alert('Please choose a term!')
        }

        else if(this.state.dept === null ){
            alert('Please choose a department!')
        }   

        else if(this.state.minCourseNumber > this.state.maxCourseNumber ){
            alert('Your minimum course number is more than maximum course number. Please change your course numbers!')
        }

        else if(this.state.maxCourseNumber < 0 ){
            alert('Your maximum course number is less than zero. Please change your maximum course number!')
        }

        else if(this.state.maxCourseNumber > 899 ){ 
            alert('Your maximum course number is more than 899. Please change your maximum course number!')
        }

        else if(this.state.minCourseNumber > 899 ){ 
            alert('Your minimum course number is more than 899. Please change your minimum course number!')
        }

        else if(this.state.minCourseNumber < 0){ 
            alert('Your minimum course number is less than 0. Please change your minimum course number!')
        }

        else{
            console.log(this.state.min)
            console.log(this.state.max)
            fetch( 
                url, {
                    method: "GET",
                    headers: {"Dept": this.state.dept, "num_courses": 10, "term": this.state.term, "level_min": this.state.minCourseNumber, "level_max": this.state.maxCourseNumber}
               }
            ).then(
               response => response.json()
            ).then(
                (json) => {
                    this.setState({courseData:this.parseData(json)
                    })}
            )
        }
    }

    colorButtonStyle(){
        if(this.state.dept === null || this.state.term === null || this.state.minCourseNumber === null || this.state.maxCourseNumber === null){
            return '#A9A9A9'
        }
    
        else{
            return '#cc0000'
        }
    }

    parseData(data) {
        return parseCourseData(data);
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
            { component : <View style={style.deptViewStyle}>
                                <Text style={style.courseNumberTextStyle}> Select a Dept</Text>
                                <RNPickerSelect
                                    style={{...dropdownStyles}}
                                    onValueChange={(value) => this.setState({dept: value})}
                                    placeholder={{ label: 'Select a Dept', value: null,color:"gray"}}
                                    items = {deptFinal}
                                />
                        </View>
           }) 
        }
        
    render(){

        let course_data = this.state.courseData;

        return(
            <View>
                <View style={style.container}>
                    {this.state.component}
                    <Text style={style.sliderInstructionStyle}>Please use the slider for the desired course number! </Text>
                    <View style={style.sliderStyle}>
                        <CourseNumberSlider set_min={this.setMin} set_max={this.setMax} min={this.state.minCourseNumber} max={this.state.maxCourseNumber}/>
                    </View>
                    <View style={style.buttonView}>
                    <Button textStyle={style.textButtonStyle} style={{...style.buttonStyle, backgroundColor: this.colorButtonStyle(),  borderColor : this.colorButtonStyle(), }} title="Right button" onPress={() => this.CourseCardSet()}>Get Courses</Button>
                    </View>
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





export default DepartmentDropDown; 