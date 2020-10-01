import React from 'react';
import { View,Alert,TextInput,StyleSheet,Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import NumericInput from 'react-native-numeric-input'
import {  RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { min } from 'react-native-reanimated';

class RangeSlider extends React.Component {
    constructor(props){ 
        super()
        this.state = {
            min : props.min, 
            max : props.max, 
            setMin : props.set_min, 
            setMax : props.set_max 
        }
        this.multiSliderValuesChange = this.multiSliderValuesChange.bind(this)
        this.reachMinLimit = this.reachMinLimit.bind(this)
        this.reachMaxLimit = this.reachMaxLimit.bind(this)
        this.textBoxMin = this.textBoxMin.bind(this)
        this.textBoxMax = this.textBoxMax.bind(this)
    }

    reachMinLimit(value){ 
        if(value > 999){
            Alert.alert('Max Limit', 'Reset to 999')
            this.setState({min : 999});
            this.props.set_min(999);
        }

        else if(value < 0){
            Alert.alert('Min Limit', 'Reset to 0')
            this.setState({min : 0})
            this.props.set_min(0);
        }

    }

    reachMaxLimit(value){ 

        if(value > 999){
            Alert.alert('Max Limit', 'Reset to 999')
            this.setState({max : 999})
            this.props.set_max(999);
        }

        else if(value < 0){
            Alert.alert('Min Limit', 'Reset to 0')
            this.setState({max : 0})
            this.props.set_max(0);
        }
        
    }

    // Update the values in state when the 
    multiSliderValuesChange = (values) => {
        this.setState({min : values[0]})
        this.setState({max : values[1]})
        this.props.set_min(values[0]);
        this.props.set_max(values[1]);
    }


    textBoxMin(min){
        this.setState({min : min})
        this.props.set_min(min);
    }
    textBoxMax(max){
        this.setState({max: max})
        this.props.set_max(max);
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
                <NumericInput 
                    minValue={0} 
                    maxValue={999} 
                    initValue={this.state.min} 
                    value={this.state.min} 
                    rounded={true} 
                    type={'up-down'} 
                    totalWidth={wp(20)} 
                    totalHeight={50} 
                    onChange={value => {
                       this.textBoxMin(value)
                }} 
                />
                <View style={style.sliderView}>
                    <MultiSlider
                        values={[this.state.min, this.state.max]}
                        sliderLength={wp(30)}
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
                <NumericInput 
                    maxValue={999} 
                    initValue={this.state.max} 
                    value={this.state.max} 
                    rounded={true} 
                    type={'up-down'} 
                    totalWidth={wp(20)} 
                    totalHeight={50} 
                    onChange={value => {
                        this.textBoxMax(value)
                 }} 
                />
            </View>
        )
    }
}

export default RangeSlider