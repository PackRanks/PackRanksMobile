import React from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

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
                    enableLabel
                />
            </View>
        )
    }
}

export default RangeSlider
