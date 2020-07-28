import React,{useState} from 'react'; 
import {View,StyleSheet} from 'react-native'
import { Avatar, Button, Card, Title, Text, Paragraph, List,IconButton} from 'react-native-paper';


const styles = StyleSheet.create(
    {
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
      }
    }
  )

// Write a function that parse through the whole json file 


function CardComponent(){
    const Rating = props => <Text style={styles.ratingStyle}>99</Text>
    const theme = {
      colors: {
        primary: '#cc0000',
        accent: '#cc0000',
      },
    }

    
    return(
        <View>
                <List.Section>
                <Card elevation={5}>
                  <Card.Content>
                        <List.Accordion
                          title={"MA 242 - 50A"}
                          titleStyle={styles.titleStyle}
                          description="Kurtz, Lesile Anne"
                          descriptionStyle={styles.descStyle}
                          left={Rating}
                        >
                          <List.Item title="First item" />
                          <List.Item title="Second item" />
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

export default CardComponent; 