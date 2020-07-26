import React from 'react'; 
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
        fontWeight: "bold"
      },
      descStyle:{
        fontSize: 16
      }
    }
  )


function CardComponent(){
    const Rating = props => <Text style={styles.ratingStyle}>69</Text>

    return(
        <View>
            <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={Rating} />
                    {/*<Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>*/}
                    <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                    </Card.Actions>
            </Card>
        </View>
    )
}

export default CardComponent; 