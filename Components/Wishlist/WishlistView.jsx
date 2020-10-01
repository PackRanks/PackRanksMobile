import {View} from 'react-native'
import React from 'react'; 
import AsyncStorage from '@react-native-community/async-storage';
import CourseCard from '../CourseCard/CourseCard'
// import {parseCourseData} from '../parseCourseData';
// import CourseCard from '../../CourseCard/CourseCard'

class WishlistView extends React.Component{
    constructor(){
        super() 
        this.state = {
            coursesData : null 
        }

        this.getCourseData = this.getCourseData.bind(this)
    }

    async getCourseData(){
        const user = await AsyncStorage.getItem('user')
        const userObj = JSON.parse(user)
        let url = "http://packranks-backend.herokuapp.com/viewWishlist";
        fetch( 
            url, {
                method: "GET",
                headers: {"token": userObj['token'] }
            }
        ).then(
        response => {response.json();console.log(response.json())}
        ).then(data => {this.setState({coursesData: data})})
    }

    render(){
        this.getCourseData()
        if(this.state.coursesData === null){
            return(
                <View>
                </View>
            )
        }

        else{
            return(
                <View>
                    {this.state.coursesData.map(data => {
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
                            />)
                        })} 
                </View>
            )
        }

    }
}

export default WishlistView