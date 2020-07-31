import React from 'react';
import { View,Image,TextInput,StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Icon } from 'react-native-elements'

class RangeSlider extends React.Component {
    constructor(props){ 
        super()
        this.state = {
            min : props.min, 
            max : props.max
        }
        this.multiSliderValuesChange = this.multiSliderValuesChange.bind(this)
    }

    // Update the values in state when the 
    multiSliderValuesChange = (values) => {
        this.setState({min : values[0]})
        this.setState({max : values[1]})
        console.log(this.state)
    }


    /* 


    componentWillUpdate(prevProps, prevState) {
        if(prevState.max !== this.state.max){
            this.setState({max : this.state.max})
        }


        if(prevState.min !== this.state.min){
            this.multiSliderValuesChange
        }
    }
    */ 

    
    render() {

        const style = StyleSheet.create(
            {
                viewStyle : {
                    flexDirection : 'row'           
                }
            }
        )

        // Temporary fix for getting and upating the value for states
        return (
            <View style={style.viewStyle}>
                <TextInput
                    textAlign='center'
                    keyboardType = 'number-pad'
                    maxLength={3}
                    style={{ height: 40,width :70, borderColor: 'gray', borderWidth: 1,borderRadius : 50, marginRight: 20}}
                    onChangeText={text => this.setState({min : parseInt(text)})}                    
                    value={this.state.min.toString()}
                />
                <MultiSlider
                    values={[this.state.min, this.state.max]}
                    sliderLength={200}
                    onValuesChange={this.multiSliderValuesChange}
                    onValuesChangeFinish={this.multiSliderValuesChange}
                    min={0}
                    max={999}
                    step={1}
                    allowOverlap={true}
                    selectedStyle={{
                        backgroundColor: '#cc0000',
                      }}
                      unselectedStyle={{
                        backgroundColor: 'silver',
                      }}
                />
                <TextInput
                    textAlign='center'
                    keyboardType = 'number-pad'
                    maxLength={3}
                    style={{ height: 40,width :70, borderColor: 'gray', borderWidth: 1,borderRadius : 50, marginLeft: 20}}
                    onChangeText={text => this.setState({max : parseInt(text)})}                    
                    value={this.state.max.toString()}
                />
            </View>
        )
    }
}

export default RangeSlider
