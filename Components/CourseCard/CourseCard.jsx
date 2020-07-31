import React,{useState} from 'react'; 
import {View,StyleSheet,TouchableHighlight} from 'react-native'
import { Avatar, Button, Card, Title, Text, Paragraph, List,IconButton} from 'react-native-paper';
import { Divider } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import MapView , { AnimatedRegion, Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements'; 

// Styling for the whole component 
const styles = StyleSheet.create(
  {
    cardStyle: {
      width: "90%", 
      justifyContent: "center", 
      alignSelf: "center"
    }, 
    ratingStyle:{
        color:"#cc0000",
        fontSize: 30, 
        //fontFamily: "Poppins",
        fontWeight:"bold",
        marginLeft: "-3%",
        marginRight: 3
    },
    titleStyle:{
      fontSize: 20,
      fontWeight: "bold", 
      color: "black"
    },
    descStyle:{
      fontSize: 16
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
      fontWeight: "bold"
    }, 
    nameHeader: {
      color: "gray", 
      fontWeight: "normal"
    }, 
    catalogStyle: {
      color: "#cc0000", 
      fontWeight: "bold", 
      textDecorationLine: 'underline'
    },
    rateMyProfessorStyle: {
      color: "#cc0000", 
      fontWeight: "bold", 
      textDecorationLine: 'underline'
    }, 
    preReqHeader: {
      color: "#cc0000", 
      fontWeight: "bold"
    }, 
    preReqView: {
      flexDirection : "row", 
      width: "70%", 
    }, 
    preReqStyle : {
      color: "gray", 
      fontWeight: "normal",
      fontSize: 15
    }, 
    locationHeader: {
      color: "#cc0000", 
      fontWeight: "bold"
    }, 
    locationDesc: {
      color: "gray", 
      fontWeight: "normal"
    }, 
    container: {
      height: 400,
      width: "100%",
      flexDirection: "column", 
      justifyContent: 'flex-end',
    },
    map: {
     height: 400,
     width: "100%",
    }, 
    seatView :{
      flexDirection: 'row',
    },
    seatHeader: {
      color: "#cc0000", 
      fontWeight: "bold"
    },
    seatDesc: {
      color: "gray", 
      fontWeight: "normal"
    },
    TimeView : {
      flexDirection : 'column', 
      justifyContent : "center", 
      alignItems: 'center', 
      width: "100%"
    }, 
    timeDesc: {
      color: "gray", 
      fontWeight: "normal"
    },
  } 
)


class CardComponent extends React.Component{

  constructor(){
    super()
    this.state = {
      rating : 99, 
      profName : "Kurtz, Lesile Anne", 
      courseTitle: "MA 242 - 50A", 
      courseTitleFull: "Calculus III", 
      catalog: "http://www.wolfware.ncsu.edu/courses/details/?sis_id=SIS:2020:8:1:MA:242:005", 
      RateMyProf: "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=977497", 
      preReq: " MA 241 with grade of C- or better or AP Calculus credit, or Higher Level IB credit.", 
      location: "2203 SAS Hall", 
      time: "11:30 AM - 12:20 PM", 
      days: "MWF", 
      seatStatus: 'Open',  
      seatAval: "7",
      seatTotal : "35", 
      latitude: 35.785110, 
      longitude: -78.665860,
    }

    this.CourseName=this.CourseName.bind(this)
    this.RateMyProfessorHandleOpenWithWebBrowser = this.RateMyProfessorHandleOpenWithWebBrowser.bind(this)
    this.CatalogHandleOpenWithWebBrowser = this.CatalogHandleOpenWithWebBrowser.bind(this)
    this.Prerequisite = this.Prerequisite.bind(this)
    this.MapPortion=this.MapPortion.bind(this)
    this.SeatArrangement = this.SeatArrangement.bind(this)
    this.TimePortion = this.TimePortion.bind(this)
    this.WeekDays = this.WeekDays.bind(this)
  }

  // Course Name in the Card Content 
  CourseName(){
    return(
      <View style={styles.courseTitleView}>
              <Title style={styles.genericName}>Name:  </Title>
              <Title style={styles.nameHeader}>{this.state.courseTitleFull}</Title>
      </View>
    )
  }

  // Catalog Link in the Card Content 
  Catalog(){
    return(
      <TouchableHighlight activeOpacity={.9}  underlayColor="#d3d3d3" onPress={() => this.CatalogHandleOpenWithWebBrowser()}>
        <Title style={styles.catalogStyle}>Course Catalog</Title>
      </TouchableHighlight>
    )
  }

  // Prerequisite for the course in the Card Content 
  Prerequisite(){
    return(
      <View style={styles.preReqView}>
              <Title style={styles.preReqHeader}>Prereqs:  </Title>
              <Title style={styles.preReqStyle}>{this.state.preReq}</Title>
      </View>
    )
  }

  // Open Browser to RateMyProf Link
  RateMyProfessorHandleOpenWithWebBrowser(){
    WebBrowser.openBrowserAsync(this.state.RateMyProf);
  } 


  // Open Browser for the catalog link
  CatalogHandleOpenWithWebBrowser(){
    WebBrowser.openBrowserAsync(this.state.catalog);
  } 

  // RateMyProf Link in the Card Content 
  RateMyProfLink(){
    return(
      <TouchableHighlight activeOpacity={.9}  underlayColor="#d3d3d3" onPress={() => this.RateMyProfessorHandleOpenWithWebBrowser()}>
        <Title style={styles.rateMyProfessorStyle}>RateMyProfessor</Title>
      </TouchableHighlight>
    )
  }

  // Map View for the Card Content 
  MapPortion(){
    return(
      <View style={styles.container}>
          <View style={styles.preReqView}>
                <Title style={styles.locationHeader}>Location:  </Title>
                <Title style={styles.locationDesc}>2203 SAS Hall</Title>
        </View>
        <MapView 
            style={styles.map}                            
            region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: .003245,
          }}
        >
          <Marker
            coordinate={{ latitude: this.state.latitude, longitude:this.state.longitude }}
            title={this.state.location}
          />
        </MapView>
    </View>
    )
  }

  // Display the number of seats available and seat status in a particular course
  SeatArrangement(){
    return(
      <View style={styles.seatView}>
              <Title style={styles.seatHeader}>Seat ({this.state.seatStatus}):  </Title>
              <Title style={styles.seatDesc}>{this.state.seatAval}/{this.state.seatTotal}</Title>
      </View>
    )
  }

  // Display the meeting time and days for a course
  TimePortion(){
    return(
      <View style={styles.TimeView}>
        <Icon name='alarm' type='material' color='gray'/>
        {this.WeekDays()}
        <Title style={styles.timeDesc}>{this.state.time}</Title>
      </View>
    )
  }

  // Highlight the days of meetings in red and gray for days of not meeting for a course 
  WeekDays(){

    const daysOfWeek = ['S','M','T','W','Th','F','S']
    const dayComponent = []

    for(let num = 0; num < 7; num++){
      if(this.state.days.indexOf(daysOfWeek[num]) !== -1){
          dayComponent.push(<Title key={num} style={{color : "#cc0000",marginRight: 10}}>{daysOfWeek[num]}</Title>)
      }

      else{
        dayComponent.push(<Title key={num} style={{color : "gray",marginRight: 10}}>{daysOfWeek[num]}</Title>)
      }
    }

    return(
      <View style={{flexDirection: 'row'}}>
        {dayComponent}
      </View>
    )
  }


  render(){
    // Rating for the courses 
    const Rating = props => <Text style={styles.ratingStyle}>{this.state.rating}</Text>
      const theme = {
        colors: {
          primary: '#cc0000',
          accent: '#cc0000',
        },
      }

      
      return(
          <View style={styles.cardStyle}>
                  <List.Section>
                      <Card elevation={11}>
                      <Divider style={{ backgroundColor: 'white', width: "100%" }}/>

                        {/* Card Header*/}
                        <Card.Content>
                              <List.Accordion
                                title={this.state.courseTitle}
                                titleStyle={styles.titleStyle}
                                description={this.state.profName}
                                descriptionStyle={styles.descStyle}
                                left={Rating}
                              >
                                    {/* Content of the Card */}
                                    <Divider style={{ backgroundColor: 'gray', width: "100%", marginBottom: 10 }}/>
                                    <List.Item
                                      left={() => this.CourseName()}
                                    />
                                    <Divider style={{ backgroundColor: 'gray', width: "100%",marginTop: 10, marginBottom: 20 }}/>
                                    <List.Item
                                      left={() => this.Catalog()}
                                      right={() => this.RateMyProfLink()}
                                    />
                                    <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 20 }}/>
                                    <List.Item
                                      left={() => this.Prerequisite()}
                                    />
                                    <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 20,marginBottom: 30}}/>
                                    <List.Item
                                      left={() => this.MapPortion()}
                                    />
                                    <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 20}}/>
                                    <List.Item
                                      left={() => this.SeatArrangement()}
                                    />
                                    <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 10}}/>
                                    <List.Item
                                      left={() => this.TimePortion()}
                                    />
                              </List.Accordion>
                        </Card.Content>
                        <Card.Actions>
                              {/* Button for the closed and open card */}
                              <Button theme={theme} onPress={() => alert('Added to Wishlist')}>Added to WishList</Button>
                        </Card.Actions>
                      </Card>
                  </List.Section>
          </View>
      )
  }
}

export default CardComponent; 
