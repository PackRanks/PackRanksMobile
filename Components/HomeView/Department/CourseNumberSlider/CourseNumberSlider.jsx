import React from 'react';
import { View,Alert,TextInput,StyleSheet,Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import NumericInput from 'react-native-numeric-input'
import {  RFValue } from "react-native-responsive-fontsize";

class RangeSlider extends React.Component {
    constructor(props){ 
        super()
        this.state = {
            min : props.min, 
            max : props.max
        }
        this.multiSliderValuesChange = this.multiSliderValuesChange.bind(this)
        this.reachMinLimit = this.reachMinLimit.bind(this)
        this.reachMaxLimit = this.reachMaxLimit.bind(this)
    }

    reachMinLimit(value){ 
        if(value > 999){
            Alert.alert('Max Limit', 'Reset to 999')
            this.setState({min : 999})
        }

        else if(value < 0){
            Alert.alert('Min Limit', 'Reset to 0')
            this.setState({min : 0})
        }

        console.log(this.state)
    }


    reachMaxLimit(value){ 

        if(value > 999){
            Alert.alert('Max Limit', 'Reset to 999')
            this.setState({max : 999})
        }

        else if(value < 0){
            Alert.alert('Min Limit', 'Reset to 0')
            this.setState({max : 0})
        }
        console.log(this.state)
    }



    // Update the values in state when the 
    multiSliderValuesChange = (values) => {
        this.setState({min : values[0]})
        this.setState({max : values[1]})
        console.log(this.state)
    }


    
    render() {

        const style = StyleSheet.create(
            {
                viewStyle : {
                    flexDirection : 'row', 
                    justifyContent : 'space-evenly'         
                }, 
                sliderView : {
                    marginLeft : 30,
                    marginRight : 30
                }
            }
        )

        // Temporary fix for getting and upating the value for states
        return (
            <View style={style.viewStyle}>
                <NumericInput minValue={0} maxValue={999} initValue={this.state.min} value={this.state.min} onLimitReached={ value => {console.log(value);this.reachMinLimit(value);this.reachMinLimit(this.state.min)}} rounded={true} type={'up-down'} totalWidth={90} totalHeight={50} onChange={value => this.setState({min : value})} />
                <View style={style.sliderView}>
                    <MultiSlider
                        values={[this.state.min, this.state.max]}
                        sliderLength={150}
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
                </View>
                <NumericInput maxValue={999} initValue={this.state.max} value={this.state.max} onLimitReached={this.reachMaxLimit} rounded={true} type={'up-down'} totalWidth={90} totalHeight={50} onChange={value => this.setState({max : value})} />
                {this.reachMinLimit(this.state.min)}
                {this.reachMaxLimit(this.state.max)}
            </View>
        )
    }
}

export default RangeSlider