import React from 'react'
import Button from 'apsl-react-native-button'
import {StyleSheet,View,Text, ViewComponent,Dimensions} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import CourseCard from '../../CourseCard/CourseCard'
import {  RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
            courseData : null
        }

        this.CourseCardSet = this.CourseCardSet.bind(this)
        this.parseData = this.parseData.bind(this)
    }

    CourseCardSet(){
        const GEP = this;
        let url = "http://packranks-backend.herokuapp.com/gep";
        fetch( 
            url, {
                method: "GET",
                headers: {"GEP": "HUM", "num_courses": 5, "term": "Fall"}
           }
        ).then(
           response => response.json()
        ).then(
            json => this.parseData(json)
        )
    }

    parseData(data) {
        
        let all_course_data = [];

        for (var i=0; i<data.length;i++) {
            single_course_info = data[i];
            course_info = {};

            course_info['courseTitle'] = single_course_info['Catalog Link'][0]
            course_info['catalog'] = single_course_info['Catalog Link'][1]

            course_info['courseName'] = single_course_info['Name']
            course_info['profName'] = single_course_info['RateMyProfessor Link'][0]

            course_info['rating'] = single_course_info['Rating']
            
            try {
                course_info['rateMyProfLink'] = single_course_info['RateMyProfessor Link'][1]
            }
            catch {
                // set hyperlink for professor to empty if there is no RMP
                course_info['rateMyProfLink'] = ""
            }

            course_info['preReq'] = single_course_info['Prerequisites']
            course_info['time'] = single_course_info['Times']

            // TODO: implement days when it is eventually passed to the front-end
            course_info['days'] = "MWF"

            // extract seat status and open information
            seats_info = single_course_info['Seats']

            // try to split seats
            try {
        
                seats_split = seats_info.split(": ")

                // splitting by status and seats
                course_info['seatStatus'] = seats_split[0]

                // check if course is open
                if (seats_split[1].includes("/")) {
                    console.log(seats_split[1])
                    course_info['seatAval'] = seats_split[1].split("/")[0]
                    course_info['seatTotal'] = seats_split[1].split("/")[1]
                }
                // if waitlisted, don't display total seats
                else {
                    course_info['seatAval'] = seats_split[1]

                    // TODO: IMPLEMENT WAITLISTED FOR MOBILE CARD
                    course_info['seatTotal'] = 100
                }
            }
            // else it must be full
            catch {
                course_info['seatStatus'] = 'Closed'
                course_info['seatAval'] = 0
                course_info['seatTotal'] = 0
            }
            
            // save location
            course_info['location'] = single_course_info['Location'][0]

            // TODO: IMPLEMENT LATITUDE AND LONGITUDE
            course_info['latitutde'] = 35.785110
            course_info['longitude'] = -78.665860

            // add to data
            all_course_data.push(course_info);

        }

        // save state
        this.setState({courseData: all_course_data})
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
                            <Button textStyle={style.textButtonStyle} style={style.buttonStyle} title="Right button" onPress={() => this.CourseCardSet()}>Get Courses</Button>
                    </View>
                <View style={style.courseStyle}>
                    {this.state.courseData.map(key, value)} 
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