import React,{useState} from 'react'; 
import {View,StyleSheet,TouchableHighlight} from 'react-native'
import { Avatar, Button, Card, Title, Text, Paragraph, List,IconButton} from 'react-native-paper';
import { Divider } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

const styles = StyleSheet.create(
  {
    cardStyle: {
      width: "94%", 
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
      fontWeight: "bold"
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
      preReq: "", 
      location: "", 
      time: "", 
      days: "",  
      seatAval: "",
      seatTotal : "" 
    }

    this.CourseName=this.CourseName.bind(this)
    this.RateMyProfessorHandleOpenWithWebBrowser = this.RateMyProfessorHandleOpenWithWebBrowser.bind(this)
    this.CatalogHandleOpenWithWebBrowser = this.CatalogHandleOpenWithWebBrowser.bind(this)
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
                  <Card elevation={5}>
                    <Card.Content>
                          <List.Accordion
                            title={this.state.courseTitle}
                            titleStyle={styles.titleStyle}
                            description={this.state.profName}
                            descriptionStyle={styles.descStyle}
                            left={Rating}
                          >
                            <Divider style={{ backgroundColor: 'gray', width: "100%" }}/>
                            <List.Item
                              left={() => this.CourseName()}
                            />
                            <Divider style={{ backgroundColor: 'gray', width: "100%", marginBottom: 20 }}/>
                            <List.Item
                              left={() => this.Catalog()}
                              right={() => this.RateMyProfLink()}
                            />
                             <Divider style={{ backgroundColor: 'gray', width: "100%", marginTop: 20 }}/>
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
