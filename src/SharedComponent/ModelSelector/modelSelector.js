import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

class DropdownModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInputValue: '',
            value: ''
        }
    }

    setOnchangeValue = (item, index) => {
        this.setState({ name: item.label, value: item.value })
            this.props.setValue(item, index, this.props.dynamicValue)
    }



    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Countries' },
            { key: index++, label: 'India' },
            { key: index++, label: 'Chaina' },
            { key: index++, label: 'England' },
            { key: index++, label: 'Canada' },
            { key: index++, label: 'Australia', accessibilityLabel: 'Tap here for cranberries' },
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
            { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
        ];
        return (
            <View>
                <View >
                    {/* <ModalSelector
                        numberOfLines={1}
                        initValue="Select something yummy!"
                        scrollViewAccessible={true}
                        data={this.props.data}
                        //overlayStyle={modalSelector.overlay}
                       // style={modalSelector.border}
                        optionContainerStyle={modalSelector.optionContainerStyle}
                        optionTextStyle={modalSelector.optionTextStyle}
                        cancelTextStyle={modalSelector.cancelTextStyle}
                        selectTextStyle={modalSelector.selectTextStyle}
                        selectStyle={modalSelector.selectStyle}
                        selectedItemTextStyle={modalSelector.selectedItemTextStyle}
                        initValueTextStyle={(modalSelector.initTextStyle)}
                        keyExtractor={item => item.Id}
                        initValue={this.props.initValue}
                        cancelText={this.props.cancelLableText}
                        touchableActiveOpacity = {0.5}
                        scrollViewAccessibilityLabel={'Scrollable options'}
                        cancelButtonAccessibilityLabel={this.props.cancelLable}
                        animationType={'none'}
                        onChange={(itemValue, itemIndex) => this.setOnchangeValue(itemValue, itemIndex)}
                    /> */}
                    <ModalSelector
                        data={data}
                        initValue="Select something yummy!"
                        supportedOrientations={['landscape']}
                        accessible={true}
                        scrollViewAccessibilityLabel={'Scrollable options'}
                        cancelButtonAccessibilityLabel={'Cancel Button'}
                        onChange={(option) => { this.setState({ textInputValue: option.label }) }}>

                        <Text
                            style={{ borderWidth: 1, borderColor: 'rgba(10, 9, 9, 0.6)', padding: 10, height: 50 }}
                            editable={false}
                            placeholder="Select something yummy!"
                            value={this.state.textInputValue} />

                    </ModalSelector>
                </View>
            </View>
        )
    }
}

export default DropdownModal