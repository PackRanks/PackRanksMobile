import React from 'react'; 
import {View,StyleSheet,TouchableHighlight} from 'react-native'
import {Button, Card, Title, Text, List} from 'react-native-paper';
import { Divider } from 'react-native-elements';
import openMap from 'react-native-open-maps';
import * as WebBrowser from 'expo-web-browser';
import MapView , { AnimatedRegion, Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const theme = {
  colors: {
    primary: '#cc0000',
    accent: '#cc0000',
  },
}


// Styling for the whole component 
const styles = StyleSheet.create(
  {
    cardStyle: {
      width: wp('83%'),
      justifyContent: "center", 
      alignSelf: "center"
    }, 
    ratingStyle:{
        color:"#cc0000",
        fontSize: hp("4%"), 
        //fontFamily: "Poppins",
        fontWeight:"bold",
        marginRight: 3
    },
    titleStyle:{
      fontSize: hp("2.8%"),
      fontWeight: "bold", 
      color: "black"
    },
    descStyle:{
      fontSize: hp("1.92%"),
    }, 
    cardViewComponent : 
    {
      justifyContent : "center", 
      alignItems: "center"
    }, 
    courseTitleView : {
        flexDirection : "row", 
    }, 
    genericName: {
      color: "#cc0000", 
      fontSize: hp("2%"), 
      fontWeight: "bold"
    }, 
    nameHeader: {
      color: "gray", 
      fontSize: hp("2%"), 
      fontWeight: "normal"
    }, 
    catalogStyle: {
      color: "#cc0000", 
      fontWeight: "bold", 
      textDecorationLine: 'underline',
      fontSize: hp("2%"), 
    },
    rateMyProfessorStyle: {
      color: "#cc0000", 
      fontWeight: "bold", 
      textDecorationLine: 'underline',
      fontSize:  hp("2%")
    }, 
    preReqHeader: {
      color: "#cc0000", 
      fontWeight: "bold", 
      fontSize: hp("2%")
    }, 
    preReqView: {
      flexDirection : "row", 
      width: "70%", 
    }, 
    preReqStyle : {
      color: "gray", 
      fontWeight: "normal",
      fontSize: hp("2%")
    }, 
    locationHeader: {
      color: "#cc0000", 
      fontWeight: "bold", 
      fontSize: hp("2%")
    }, 
    locationDesc: {
      color: "gray", 
      fontWeight: "normal", 
      fontSize: hp("2%")
    }, 
    container: {
      height: hp("30%"),
      width: "100%",
      flexDirection: "column", 
      justifyContent: 'flex-end',
    },
    mapContainer: {
      height: hp("20%"),
      width: "100%",
      flexDirection: "column", 
      justifyContent: 'flex-end',
    },
    map: {
     height: hp("17%"),
     width: '100%'
    }, 
    seatView :{
      flexDirection: 'row',
    },
    seatHeader: {
      color: "#cc0000", 
      fontWeight: "bold", 
      fontSize: hp("2%")
    },
    seatDesc: {
      color: "gray", 
      fontWeight: "normal", 
      fontSize: hp("2%")
    },
    TimeView : {
      flexDirection : 'column', 
      justifyContent : "center", 
      alignItems: 'center', 
      width: "100%"
    }, 
    timeDesc: {
      color: "gray", 
      fontWeight: "normal", 
      fontSize: hp("2%")
    },
  } 
)



  // Course Name in the Card Content 
  function CourseName(courseName){
    return(
      <View style={styles.courseTitleView}>
              <Title style={styles.genericName}>Name:  </Title>
              <Title style={styles.nameHeader}>{courseName}</Title>
      </View>
    )
  }

  // Catalog Link in the Card Content 
  function Catalog(link){
    return(
      <TouchableHighlight activeOpacity={.9}  underlayColor="#d3d3d3" onPress={() => CatalogHandleOpenWithWebBrowser(link)}>
        <Title style={styles.catalogStyle}>Course Catalog</Title>
      </TouchableHighlight>
    )
  }

  // Prerequisite for the course in the Card Content 
  function Prerequisite(preReq){
    return(
      <View style={styles.preReqView}>
              <Title style={styles.preReqHeader}>Prereqs:  </Title>
              <Title style={styles.preReqStyle}>{preReq}</Title>
      </View>
    )
  }

  // Open Browser to RateMyProf Link
  function RateMyProfessorHandleOpenWithWebBrowser(link){
    WebBrowser.openBrowserAsync(link);
  } 


  // Open Browser for the catalog link
  function CatalogHandleOpenWithWebBrowser(link){
    WebBrowser.openBrowserAsync(link);
  } 

  // RateMyProf Link in the Card Content 
  function RateMyProfLink(link){
    return(
      <TouchableHighlight activeOpacity={.9}  underlayColor="#d3d3d3" onPress={() => RateMyProfessorHandleOpenWithWebBrowser(link)}>
        <Title style={styles.rateMyProfessorStyle}>RateMyProfessor</Title>
      </TouchableHighlight>
    )
  }

  // Map View for the Card Content 
  function MapPortion(latitude,longitude,location){
    return(
    <View style={styles.mapContainer}>
              <View style={styles.preReqView}>
                    <Title style={styles.locationHeader}>Location:  </Title>
                    <Title style={styles.locationDesc}>{location}</Title>
            </View>
            <MapView 
                style={styles.map}                            
                region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.001,
                longitudeDelta: .003245,
              }}
              onPress={() => openMap({ 
                query : location,  
                travelType : 'walk',
                latitude: latitude, 
                longitude: longitude, 
                })}
            >
              <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
                title={location}
              />
            </MapView>
    </View>
    )
  }

  // Display the number of seats available and seat status in a particular course
 function  SeatArrangement(seatStatus,seatAval,seatTotal){
    return(
      <View style={styles.seatView}>
              <Title style={styles.seatHeader}>Seat ({seatStatus}):  </Title>
              <Title style={styles.seatDesc}>{seatAval}/{seatTotal}</Title>
      </View>
    )
  }

  // Display the meeting time and days for a course
  function TimePortion(time,days){
    return(
      <View style={styles.TimeView}>
        <Icon name='alarm' type='material' color='gray'/>
        {WeekDays(days)}
        <Title style={styles.timeDesc}>{time}</Title>
      </View>
    )
  }

  // Create outside button when the card is closed 
  function OutSideButton(isWishList){ 
    if(isWishList){
      return(<Button theme={theme} labelStyle={{fontSize: hp("2%")}} onPress={() => alert('Removed from Wishlist')}>Remove from WishList</Button>)
    }

    else{
      return(<Button theme={theme} labelStyle={{fontSize: hp("2%")}} onPress={() => alert('Added to Wishlist')}>Add to WishList</Button>)
    }
  }




  // Highlight the days of meetings in red and gray for days of not meeting for a course 
  function WeekDays(days){

    const daysOfWeek = ['S','M','T','W','Th','F','S']
    const dayComponent = []

    for(let num = 0; num < 7; num++){
      if(days.indexOf(daysOfWeek[num]) !== -1){
          dayComponent.push(<Title key={num} style={{fontSize: hp("2%"), color : "#cc0000",marginRight: 10}}>{daysOfWeek[num]}</Title>)
      }

      else{
        dayComponent.push(<Title key={num} style={{fontSize: hp("2%"), color : "gray",marginRight: 10}}>{daysOfWeek[num]}</Title>)
      }
    }

    return(
      <View style={{flexDirection: 'row'}}>
        {dayComponent}
      </View>
    )
  }



  function Rating(rating){ 
    // Rating for the courses 
   return(<Text style={styles.ratingStyle}>
                {rating}
          </Text>)
  }



function CardComponent(props){ 
    return(
          <View style={styles.cardStyle}>
              <List.Section>
                  <Card elevation={11}>
                  <Divider style={{ backgroundColor: 'white', width: "100%" }}/>

                    {/* Card Header*/}
                    <Card.Content>
                          <List.Accordion
                            title={props.courseTitle}
                            titleStyle={styles.titleStyle}
                            description={props.profName}
                            descriptionStyle={styles.descStyle}
                            left={ () => Rating(props.rating)}
                          >
                                {/* Content of the Card */}
                                <Divider style={{ backgroundColor: 'gray', width: "100%", marginBottom: 10 }}/>
                                <List.Item
                                  left={() => CourseName(props.courseName)}
                                />
                                <Divider style={{ backgroundColor: 'gray', width: "100%",marginTop: 10, marginBottom: 20}}/>
                                <List.Item
                                  left={() => Catalog(props.catalog)}
                                  right={() => RateMyProfLink(props.rateMyProfLink)}
                                />
                                <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 20 }}/>
                                <List.Item
                                  left={() => Prerequisite(props.preReq)}
                                />
                                <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 20}}/>
                                <List.Item
                                  left={() => MapPortion(props.latitude,props.longitude,props.location)}
                                />
                                <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 20}}/>
                                <List.Item
                                  left={() => SeatArrangement(props.seatStatus,props.seatAval,props.seatTotal)}
                                />
                                <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 10}}/>
                                <List.Item
                                  left={() => TimePortion(props.time,props.days)}
                                />
                          </List.Accordion>
                    </Card.Content>
                    <Card.Actions>
                          {/* Button for the closed and open card */}
                          {OutSideButton(props.isWishList)}
                    </Card.Actions>
                  </Card>
              </List.Section>
         </View>
    )
}



export default CardComponent;