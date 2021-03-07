import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { textInputGlobalStyles } from '../../Assets/CSS/style';

class TextInputGlobal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputBorder: 'rgba(10, 9, 9, 0.6)',
            inputBackground: '#fff',
            showPassword: true,
        };
    }

    render() {
        return (
            <View>
                {
                    (this.props.label !== "") &&
                    <Text style={textInputGlobalStyles.profileLabel}>{this.props.label}</Text>
                }
                <View style={[textInputGlobalStyles.userInputView, { borderColor: this.state.inputBorder, backgroundColor: this.state.inputBackground, height: 50 }]}>
                    <TextInput
                        selectionColor="#ccc"
                        editable={this.props.isEditable}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={'#E5E5E5'}
                        style={textInputGlobalStyles.textInputDesign}
                        autoFocus={this.props.isAutoFocus}
                        onFocus={() => this.setState({ inputBorder: '#EF4C12', inputFocuse: true })}
                        onBlur={() => this.setState({ inputBorder: 'rgba(10, 9, 9, 0.6)', inputBackground: '#fff', inputFocuse: true })}
                        value={this.props.textInputValue}
                        onChangeText={(text) => this.props.ChangeValue(text)}
                        keyboardType={this.props.type}
                        maxLength={this.props.lenght}
                    />
                </View>
            </View>
        )
    }
}

export default TextInputGlobal