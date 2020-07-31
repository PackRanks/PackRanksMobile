import React from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import { List, Text, Divider } from 'react-native-paper'

// Global constants
const titleNumLines = 3
const descNumLines = 10

// Styles applied to the wrapping View and each heading
const styles = StyleSheet.create(
    {
        containerStyle: {
            alignItems: "stretch",
        },
        headingStyle: {
            fontSize: 30,
            fontWeight: "bold",
            color: "#cc0000",
            marginTop: 15,
            alignSelf: "center"
        },
        linkStyle: {
            color: "#007bff"
        },
        descStyle: {
            marginTop: -25 // maybe make this a percentage???
        }
    }
)

// Text and hyperlink for GEP FAQ
const GEPLink = (
    <Text style={styles.linkStyle} 
      onPress={() => Linking.openURL("https://oucc.dasa.ncsu.edu/general-education-program-gep/gep-category-requirements/")}>
      General Education Program
    </Text>
)

// Titles and descriptions for the FAQ accordions
const FAQInfo = [
    {
        title: <Text>How do I search for just one course?</Text>,
        item: <Text>
                    1. Select the "Department" tab on the Home screen {"\n"}
                    2. Choose a department from the dropdown {"\n"}
                    3. Then, either: {"\n"} 
                    {'\u0009'} - Drag both endpoints of the slider to the same number {"\n"}
                    {'\u0009'}{'\u0009'} OR {"\n"}
                    {'\u0009'} - Enter the same number into both text boxes on either side of the slider
              </Text>
    },
    // Omitting this FAQ 
    // {
    //     title: <Text>Why don't I see an option to add a course to my wishlist?</Text>,
    //     item: <Text>update</Text>
    // },
    {
        title: <Text>What benefits do I get from making an account?</Text>,
        item: <Text>Great question! When you make an account, you are able to create your own wishlist of courses 
                    that you would like to take! In addition, we will send you an email whenever a seat opens up 
                    in a course that was closed or waitlisted on your wishlist!
              </Text>
    },
    {
        title: <Text>Why do I see a course with a higher rating ranked above a course with a lower rating?</Text>,
        item: <Text>A course with a higher rating that is ranked above a course with a lower rating either has a 
                    duplicate professor as a course that is ranked near the top of the list or is a Problem Session
                    or Recitation section.
              </Text>
    },
    {
        title: <Text>How are ratings calculated?</Text>,
        item: <Text>Check out our About Us for more information!</Text>
    },
    {
        title: <Text>What is a GEP?</Text>,
        item: <Text>GEP stands for {GEPLink}, which is the set of courses all students at NC State must complete prior to graduation.</Text>
    }
]

// Titles and descriptions for the Instructions accordions
const InstructionsInfo = [
    {
        title: <Text>Searching for GEPs</Text>,
        item: <Text>update</Text>
    },
    {
        title: <Text>Searching by Department</Text>,
        item: <Text>update</Text>
    },
    {
        title: <Text>Adding to your Wishlist</Text>,
        item: <Text>update</Text>
    },
    {
        title: <Text>Viewing your Wishlist</Text>,
        item: <Text>update</Text>
    },
    {
        title: <Text>Remove courses from your Wishlist</Text>,
        item: <Text>update</Text>
    }
]

// .map solution derived from: https://reactnativeforyou.com/how-to-use-map-function-in-react-native/
// Creates an Accordion for each FAQ title and its description 
FAQs = () => {
    return FAQInfo.map((element, i) => {
        return (
            <React.Fragment>
                <List.Accordion
                    key={i}
                    title={element.title}
                    titleNumberOfLines={titleNumLines}
                    theme={{ colors: { primary: '#cc0000' }}} // changes title color to red when expanded
                >
                    <List.Item 
                        description={element.item}
                        descriptionStyle={styles.descStyle}
                        descriptionNumberOfLines={descNumLines}
                    />
                </List.Accordion>
                <Divider />
            </React.Fragment>
        )
    })
}

// Creates an Accordion for each Instruction title and its description 
Instructions = () => {
    return InstructionsInfo.map((element, i) => {
        return (
            <React.Fragment>
                <List.Accordion
                    key={i}
                    title={element.title}
                    titleNumberOfLines={titleNumLines}
                    theme={{ colors: { primary: '#cc0000' }}}
                >
                    <List.Item 
                        description={element.item}
                        descriptionStyle={styles.descStyle}
                        descriptionNumberOfLines={descNumLines}
                    />
                </List.Accordion>
                <Divider />
            </React.Fragment>
        )
    })
}

// Returns all elements on the Help view
function HelpView() {
    return (
        <View style={styles.containerStyle}>

            <Text style={styles.headingStyle}>FAQ</Text>
            <List.Section>
                <Divider />
                {FAQs()}
            </List.Section>

            <Text style={styles.headingStyle}>Instructions</Text>
            <List.Section>
                <Divider />
                {Instructions()}
            </List.Section>

        </View>
    )
}

export default HelpView 