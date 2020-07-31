import React from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import { List, Text, Divider } from 'react-native-paper'

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
        //desc
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
        title: "How do I search for just one course?",
        item: "update"
    },
    {
        title: "Why don't I see an option to add a course to my wishlist?",
        item: "update"
    },
    {
        title: "What benefits do I get from making an account?",
        item: "update"
    },
    {
        title: "Why do I see a course with a higher rating ranked above a course with a lower rating?",
        item: "update"
    },
    {
        title: "How are ratings calculated?",
        item: "update"
    },
    {
        title: "What is a GEP?",
        item: <Text>GEP stands for {GEPLink}, which is the set of courses all students at NC State must complete prior to graduation.</Text>
    }
]

// Titles and descriptions for the Instructions accordions
const InstructionsInfo = [
    {
        title: "Searching for GEPs",
        item: "update"
    },
    {
        title: "Searching by Department",
        item: "update"
    },
    {
        title: "Using the Wishlist",
        item: "update"
    },
    {
        title: "Viewing your Wishlist",
        item: "update"
    },
    {
        title: "Remove courses from your Wishlist",
        item: "poppopopopo"
    }
]

// .map solution derived from: https://reactnativeforyou.com/how-to-use-map-function-in-react-native/
// Creates an Accordion for each FAQ title and its description 
FAQs = () => {
    return FAQInfo.map(element => {
        return (
            <React.Fragment>
                <List.Accordion
                    title={element.title}
                    titleNumberOfLines={3}
                    theme={{ colors: { primary: '#cc0000' }}} // changes title color to red when expanded
                >
                    <List.Item 
                        //title={""}
                        description={element.item}
                    />
                </List.Accordion>
                <Divider />
            </React.Fragment>
        )
    })
}

// Creates an Accordion for each Instruction title and its description 
Instructions = () => {
    return InstructionsInfo.map(element => {
        return (
            <React.Fragment>
                <List.Accordion
                    title={element.title}
                    titleNumberOfLines={3}
                    theme={{ colors: { primary: '#cc0000' }}}
                >
                    <List.Item title={element.item} />
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