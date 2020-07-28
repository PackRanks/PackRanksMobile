import React,{useState} from 'react'; 
import {View,StyleSheet,TouchableHighlight} from 'react-native'
import { Avatar, Button, Card, Title, Text, Paragraph, List,IconButton} from 'react-native-paper';
import { Divider } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import MapView , { AnimatedRegion, Marker } from 'react-native-maps';

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
    }
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
  }

  CourseName(){
    return(
      <View style={styles.courseTitleView}>
              <Title style={styles.genericName}>Name:  </Title>
              <Title style={styles.nameHeader}>{this.state.courseTitleFull}</Title>
      </View>
    )
  }


  Catalog(){
    return(
      <TouchableHighlight activeOpacity={.9}  underlayColor="#d3d3d3" onPress={() => this.CatalogHandleOpenWithWebBrowser()}>
        <Title style={styles.catalogStyle}>Course Catalog</Title>
      </TouchableHighlight>
    )
  }

  Prerequisite(){
    return(
      <View style={styles.preReqView}>
              <Title style={styles.preReqHeader}>Prereqs:  </Title>
              <Title style={styles.preReqStyle}>{this.state.preReq}</Title>
      </View>
    )
  }

  RateMyProfessorHandleOpenWithWebBrowser(){
    WebBrowser.openBrowserAsync(this.state.RateMyProf);
  } 


  CatalogHandleOpenWithWebBrowser(){
    WebBrowser.openBrowserAsync(this.state.catalog);
  } 


  RateMyProfLink(){
    return(
      <TouchableHighlight activeOpacity={.9}  underlayColor="#d3d3d3" onPress={() => this.RateMyProfessorHandleOpenWithWebBrowser()}>
        <Title style={styles.rateMyProfessorStyle}>RateMyProfessor</Title>
      </TouchableHighlight>
    )
  }

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



  render(){
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
                        <Card.Content>
                              <List.Accordion
                                title={this.state.courseTitle}
                                titleStyle={styles.titleStyle}
                                description={this.state.profName}
                                descriptionStyle={styles.descStyle}
                                left={Rating}
                              >

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
                                    

                              </List.Accordion>
                        </Card.Content>
                        <Card.Actions>
                              <Button theme={theme} onPress={() => alert("Hello")}>Added to WishList</Button>
                          </Card.Actions>
                      </Card>
                  </List.Section>
          </View>
      )
  }
}

export default CardComponent; 
