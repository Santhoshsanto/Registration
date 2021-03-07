import React, { Component } from 'react';
import { Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import HeaderNavigationBar from '../../SharedComponent/HeaderNavigationBar/headerNavigationBar';
import { personalDetailsScreenStyles, textInputGlobalStyles, } from '../../Assets/CSS/style';
import TextInputGlobal from '../../SharedComponent/TextInputGlobal/textInputGlobal';
import ButtonGlobal from '../../SharedComponent/ButtonGlobal/buttonGlobal';
import { ToastMessage } from '../../SharedComponent/ToastMessage/toastMessage';
import { ValidateProfile } from '../../SharedComponent/Validate/validate';
import ModalSelector from 'react-native-modal-selector'

class PersonalDetails extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            textInputValue: '',
            states: '',
            country: '',
            changeValue: ' ',
            gender: '',
        }
    }

    isValid() {
        const { errors, isValid } = ValidateProfile(this.state);
        if (!isValid) {
            let profileErrors = {}
            profileErrors = Object.values(errors);
            //this.messageDisplay(Object.values(errors)[0])
            profileErrors.map((error) => ToastMessage(error, 'top'))
        }
        return isValid;
    }

    navigateCompanyDetails = () => {
        if (this.isValid()) {
            this.props.navigation.navigate('CompanyDetailsScreen')
        }
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
        const States = [
            { key: index++, section: true, label: 'States' },
            { key: index++, label: 'Tamil Nadu' },
            { key: index++, label: 'Karnataka' },
            { key: index++, label: 'Kerala' },
            { key: index++, label: 'Mumbai' },
            { key: index++, label: 'Delhi', accessibilityLabel: 'Tap here for cranberries' },
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
            { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
        ];
        debugger;
        return (

            <ScrollView>
                <HeaderNavigationBar
                    headerPersonalDetail={true}
                    headerCompanyDetail={false}

                    headerEmailVerificationDetail={false}
                    setDetails={this.navigateCompanyDetails}
                />
                <View>
                    <View style={personalDetailsScreenStyles.backgroundView}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={personalDetailsScreenStyles.headerTitle}>Add your personal details</Text>
                            <Text numberOfLines={1} style={personalDetailsScreenStyles.headerSubTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                        <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
                            <View>
                                <TextInputGlobal
                                    label={"Name"}
                                    placeholder={"Name"}
                                    isEditable={true}
                                    isAutoFocus={false}
                                    textInputValue={this.state.name}
                                    ChangeValue={value => this.setState({ name: value })}
                                    type={'default'}
                                    lenght={10}
                                    iconType={'none'}
                                />
                            </View>
                            <View>
                                <Text style={textInputGlobalStyles.profileLabel}>Gender</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <ButtonGlobal
                                            label={'Male'}
                                            buttonClick={() => this.setState({ gender: 'M' })}
                                            isDisabled={false}
                                            btnType={this.state.gender === 'M' ? 'blue' : 'white'}
                                            setHeight={50}
                                            setElivation={0}
                                        />
                                    </View>
                                    <View style={{ margin: 5 }} />
                                    <View style={{ flex: 1 }}>
                                        <ButtonGlobal
                                            label={'Female'}
                                            buttonClick={() => this.setState({ gender: 'F' })}
                                            isDisabled={false}
                                            btnType={this.state.gender === 'F' ? 'blue' : 'white'}
                                            setHeight={50}
                                            setElivation={0}
                                        />
                                    </View>
                                    <View style={{ margin: 5 }} />
                                    <View style={{ flex: 1 }}>
                                        <ButtonGlobal
                                            label={'Others'}
                                            buttonClick={() => this.setState({ gender: 'O' })}
                                            isDisabled={false}
                                            btnType={this.state.gender === 'O' ? 'blue' : 'white'}
                                            setHeight={50}
                                            setElivation={0}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <ModalSelector
                                        data={data}
                                        initValue="Select Country!"
                                        supportedOrientations={['landscape']}
                                        accessible={true}
                                        scrollViewAccessibilityLabel={'Scrollable options'}
                                        cancelButtonAccessibilityLabel={'Cancel Button'}
                                        onChange={(option) => { this.setState({ country: option.label }) }}>
                                        <TextInputGlobal
                                            label={"Country"}
                                            placeholder={"Select country"}
                                            isEditable={false}
                                            isAutoFocus={false}
                                            textInputValue={this.state.country}
                                            ChangeValue={value => this.setState({ country: value })}
                                            type={'default'}
                                            lenght={10}
                                            iconType={'none'}
                                        />
                                    </ModalSelector>
                                </View>
                                <View>
                                    <ModalSelector
                                        data={States}
                                        initValue="Select States!"
                                        supportedOrientations={['landscape']}
                                        accessible={true}
                                        scrollViewAccessibilityLabel={'Scrollable options'}
                                        cancelButtonAccessibilityLabel={'Cancel Button'}
                                        onChange={(option) => { this.setState({ states: option.label }) }}>
                                        <TextInputGlobal
                                            label={"State"}
                                            isEditable={false}
                                            placeholder={"Select States"}
                                            isAutoFocus={false}
                                            textInputValue={this.state.states}
                                            ChangeValue={value => this.setState({ states: value })}
                                            type={'default'}
                                            lenght={10}
                                            iconType={'none'}
                                        />
                                    </ModalSelector>
                                </View>
                                <View>
                                    <TextInputGlobal
                                        label={"Phone"}
                                        placeholder={"Phone Number"}
                                        isEditable={true}
                                        isAutoFocus={false}
                                        textInputValue={this.state.phoneNumber}
                                        ChangeValue={value => this.setState({ phoneNumber: value })}
                                        type={'number-pad'}
                                        lenght={10}
                                        iconType={'none'}
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity onPress={this.navigateCompanyDetails} style={{ height: 50, backgroundColor: '#EF4C12', alignItems: 'center', borderRadius: 8, justifyContent: 'center', marginBottom: 20, marginTop: 16 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '400', color: '#FFFF' }}>Next</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


export default PersonalDetails