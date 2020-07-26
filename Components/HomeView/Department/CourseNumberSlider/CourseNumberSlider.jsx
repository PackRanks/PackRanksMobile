import React from 'react';
import { View,Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Icon } from 'react-native-elements'

class RangeSlider extends React.Component {
    state = {
        values: [0, 999],
    };


    multiSliderValuesChange = (values) => {
        this.setState({
            values
        });
        
    }

    render() {
        return (
            <View>
                <MultiSlider
                    values={[this.state.values[0], this.state.values[1]]}
                    sliderLength={280}
                    onValuesChange={this.multiSliderValuesChange}
                    min={0}
                    max={999}
                    step={1}
                    allowOverlap={true}
                    enableLabel
                    selectedStyle={{
                        backgroundColor: '#cc0000',
                      }}
                      unselectedStyle={{
                        backgroundColor: 'silver',
                      }}
                />
            </View>
        )
    }
}

export default RangeSlider
