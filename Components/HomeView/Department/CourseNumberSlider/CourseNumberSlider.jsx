import React from 'react'; 
import {View} from 'react-native'; 
import MultiSlider from '@ptomasroos/react-native-multi-slider'

class CourseNumberSlider extends React.Component{
    constructor(){
        super(); 
        this.state = {
            
        }
    }

    render(){
        return(
            <View>
                    <MultiSlider
                        values={[1,2]}
                        sliderLength={250}
                        min={0}
                        max={10}
                        step={1}
                        allowOverlap
                        snapped
                    />
            </View>
        )
    }
}

export default CourseNumberSlider; 