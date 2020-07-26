import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';


const style = StyleSheet.create({
    termViewStyle: {
        margin: 15, 
        flexDirection : "row",
        justifyContent: "center", 
        alignContent: "center" 
    },
    termTextStyle: {
        marginRight: 15,
        fontSize : 18, 
        fontWeight: "bold",
        color: "#cc0000"
    }
})

const dropdownStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 10,
      color: 'black',
      backgroundColor: "white",
      paddingLeft: 20,
      paddingBottom : 8,
      paddingRight: 20, 
      textAlign: "center",
      justifyContent: "center",
      fontWeight : "bold"
    }
  });

class GepDropDown extends React.Component{


    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        const gepOptions = ['Health and Exercise Studies', 'Humanities', 'Interdisciplinary Perspectives', 'Mathematical Sciences', 'Natural Sciences', 'Social Sciences', 'US Diversity', 'Additional Breadth', 'Visual and Performing Arts'];
        const gepLabels = gepOptions.map((option) => (
            {label: option}
        ));
        
        const gepOptionValues = ["HES", "HUM", "IDP", "MATH", "SCI", "SS", "USD", "ADDTL", "VPA"];
        const gepValues = gepOptionValues.map((optionValue) => (
            {value: optionValue}
        ));
    
        const gepFinal = [];
        for (var i = 0; i < gepLabels.length; i++) {
            gepFinal[i] = {label: gepLabels[i].label,
            value: gepValues[i].value}
        }
        
        return(
            <View style={style.termViewStyle}>
                <Text style={style.termTextStyle}> Select a GEP</Text>
                <RNPickerSelect
                style={{...dropdownStyles}}
                    onValueChange={(value) => this.setState({gepType : value})}
                    placeholder={{ label: 'Select a GEP', value: null,color:"gray"}}
                    Icon={() => {return <Icon name='arrow-drop-down' type='material'color='black'/>}}
                    items={gepFinal}
                />
            </View>
        )
    }
}





export default GepDropDown; 