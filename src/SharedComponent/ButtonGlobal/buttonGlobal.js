import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { buttonStyle } from '../../Assets/CSS/style';

class ButtonGlobal extends Component {
    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity
                        onPress={this.props.buttonClick}
                        disabled={this.props.isDisabled}
                        style={[this.props.btnType === 'blue' ? buttonStyle.genderSelectedButton : buttonStyle.genderUnSelectButton, { height: this.props.setHeight, elevation: this.props.setElivation },{flexDirection:'row',alignItems:'center'}]}>
                        <Text style={this.props.btnType === 'blue' ? { color: '#ED5901' } : { color: '#000' }}>
                            {this.props.label}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ButtonGlobal