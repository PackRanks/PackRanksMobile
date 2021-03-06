import React from 'react'; 
import {View,StyleSheet} from 'react-native';  
import {Text} from 'react-native-paper'; 
import TeamCard from './TeamCard/TeamCard.jsx'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const style = StyleSheet.create(
    {
        container: {
            justifyContent : 'center', 
            alignItems : 'center' 
        }, 
        header : {
            textAlign : 'center', 
            fontWeight : 'bold',  
            fontSize : hp(5), 
            color : "#cc0000", 
            textDecorationLine : "underline", 
            marginTop : 15, 
            marginBottom : 5
        }, 
        content : {
            textAlign : 'center', 
            fontSize : hp(2.4), 
            color : "gray", 
            marginTop : 10, 
            marginBottom : 10
        }, 
        cardView : {
            flex : 1,
            justifyContent : 'center',
            alignItems: 'center',
        }
    }
)

function AboutView(){
    return(
        <View style={{marginBottom : 20}}>

            <View style={style.container}>
                <Text style={style.header}>How we Help You</Text>
                <Text style={style.content}>
                    Here at NC State, we as students have many resources to help us find the best fit classes to register for. However, these resources are 
                    scattered and there is no efficient way to filter through the data we have available
                </Text>
                <Text style={style.content}>
                    With PackRanks, we solved that issue by compiling a list of the best possible classes that are offered in a certain term and 
                    creating a simple way for you to filter through the options. In addition, we provide all of the information you need in one convenient place, 
                    so you never have to spend hours looking through grade distributions, MyPack, and the GEP List again.
                </Text>
                <Text style={style.content}>
                    Now, you can find the classes that are the most beneficial for you simply by 
                    searching for a specific term and course department. Also, you can save the classes you are most interested in to your 
                    personalized Wishlist so that you don’t forget your course plans!
                </Text>
                <Text style={style.content}>
                    We hope that you will benefit a lot from PackRanks, and if you have any suggestions for new 
                    features you would like to see or improvements with the website, please feel free to reach out!
                </Text>
                <Text style={style.header}>Our Rating System</Text>
                <Text style={style.content}>
                    We take the thinking out of the equation, just do! We use newly updated grade distribution data (we received permission from NC State Registration 
                    & Records to use said data) to compute a rating of each course that measures how easy or difficult the class is. We then sort our course results for GEPs 
                    and specific courses by that rating, providing you with a simple and effective way to find 
                    the easiest GEPs or any courses you are looking for!
                </Text>
                <Text style={style.content}>
                    At this stage, in order to prioritize the safety and integrity of our information, we are in stealth mode and cannot 
                    disclose any specific details about our rating formula. However, we provide links to RateMyProfessor for each professor 
                    so that you can see if it is right for you! The intended use of this application is to consolidate all of the data that 
                    is available on NC State courses and make it easier for you to register for the classes that are best for you! 
                    Our ultimate goal as PackRanks developers and NC State students is to provide a meaningful service for the entire wolf_pack community, 
                    and that’s why we had ease of course selection and fit as our first priority when building pack_ranks. 
                    For further serious inquiries, contact us using the link provided below.
                </Text>
                <Text style={style.header}>The Team</Text>
            </View>
            <View style={style.cardView}>
                <TeamCard name={"Ishaan Radia"} title={"Princpal Software Engineer"} role={"Wrote Implemented production-ready web scraping system and created an ETL pipeline with Python and MongoDB. Developed React components and integrated them with the back-end REST API Flask endpoints."} linkedin={'https://www.linkedin.com/in/ishaan-radia/'} github={'https://github.com/iiradia'} mail={'iiradia@ncsu.edu'}/>
                <TeamCard name={"Harshal Suthar"}  title={"Software Engineer"} role={"Focused on application security and front-end development."} linkedin={'https://www.linkedin.com/in/harshal-suthar/'} github={'https://github.com/h-suthar'} mail={'hksuthar@ncsu.edu'}/>
                <TeamCard name={"Mathew Chanda"}  title={"Software Engineer"} role={"Focused on the front-end React components and the MongoDB non-relational model."} linkedin={'https://www.linkedin.com/in/mathewchandancsu/'} github={'https://github.com/MathewChanda'} mail={'mvchanda@ncsu.edu'}/>
                <TeamCard name={"Anthony Wang"}  title={"Data Scientist"} role={"Wrote Developed the proprietary PackRanks rating formula."} linkedin={'https://www.linkedin.com/in/anthony-wang-3aa134164/'} github={'https://github.com/AndongW'} mail={'awang25@ncsu.edu'}/>
            </View>
        </View>
    )
}



export default AboutView; 