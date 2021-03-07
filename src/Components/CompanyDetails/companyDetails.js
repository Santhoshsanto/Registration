import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Linking, ScrollView } from 'react-native';
import HeaderNavigationBar from '../../SharedComponent/HeaderNavigationBar/headerNavigationBar';
import { personalDetailsScreenStyles, companyDetails } from '../../Assets/CSS/style';
import TextInputGlobal from '../../SharedComponent/TextInputGlobal/textInputGlobal';
import { ToastMessage } from '../../SharedComponent/ToastMessage/toastMessage';
import { ValidateCompanyDetails } from '../../SharedComponent/Validate/validate';
import CheckBox from '@react-native-community/checkbox';

class CompanyDetails extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            company: '',
            email: '',
            isSelected: false,
            changeImage: false,
            jobTitle: '',
            profileImage: '',
            experience: ''
        }
    }

    isValid() {
        const { errors, isValid } = ValidateCompanyDetails(this.state);
        if (!isValid) {
            let profileErrors = {}
            profileErrors = Object.values(errors);
            //this.messageDisplay(Object.values(errors)[0])
            profileErrors.map((error) => ToastMessage(error, 'top'))
        }
        return isValid;
    }

    navigateProfilecreen = () => {
        this.props.navigation.navigate('PersonalDetailsScreen')
    }

    navigatVerificationScreen = () => {
        if (this.isValid()) {
            this.props.navigation.navigate('EmailVerificationScreen')
        }
    }

    render() {
        return (
            <ScrollView>
                <HeaderNavigationBar
                    headerPersonalDetail={false}
                    headerCompanyDetail={true}
                    headerEmailVerificationDetail={false}
                    setDetails={this.navigateCompanyDetails}
                />
                <View>
                    <View style={personalDetailsScreenStyles.backgroundView}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={personalDetailsScreenStyles.headerTitle}>Add your company details</Text>
                            <Text numberOfLines={1} style={personalDetailsScreenStyles.headerSubTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                        <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
                            <View>
                                <TextInputGlobal
                                    label={"Company Name"}
                                    isEditable={true}
                                    placeholder={"Company Name"}
                                    isAutoFocus={false}
                                    textInputValue={this.state.company}
                                    ChangeValue={value => this.setState({ company: value })}
                                    type={'default'}
                                    iconType={'none'}
                                />
                            </View>
                            <View>
                                <TextInputGlobal
                                    label={"Email Id"}
                                    isEditable={true}
                                    placeholder={"Email ID"}
                                    isAutoFocus={false}
                                    textInputValue={this.state.email}
                                    ChangeValue={value => this.setState({ email: value })}
                                    type={'default'}
                                    iconType={'none'}
                                />
                            </View>
                            <View>
                                <TextInputGlobal
                                    label={"Job Title"}
                                    placeholder={"Job Title"}
                                    isEditable={true}
                                    isAutoFocus={false}
                                    textInputValue={this.state.jobTitle}
                                    ChangeValue={value => this.setState({ jobTitle: value })}
                                    type={'default'}
                                    iconType={'none'}
                                />
                            </View>
                            <View>
                                <TextInputGlobal
                                    label={"Years of Experience"}
                                    placeholder={"Exp Years"}
                                    isEditable={true}
                                    isAutoFocus={false}
                                    textInputValue={this.state.experience}
                                    ChangeValue={value => this.setState({ experience: value })}
                                    type={'default'}
                                    iconType={'none'}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    tintColors={{ true: '#ff8000', false: '#ff8000' }}
                                    value={this.state.isSelected}
                                    onValueChange={(value) =>
                                        this.setState({
                                            isSelected: value,
                                        })
                                    }
                                />
                                <View style={{ marginTop: 2, flexDirection: 'row', paddingLeft: 7 }}>
                                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { Linking.openURL('http://www.africau.edu/images/default/sample.pdf') }}>
                                        <Text style={companyDetails.checkBoxlabel}>Terms and Condition</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                                <TouchableOpacity onPress={this.navigateProfilecreen} style={{ flex: 1, backgroundColor: "#f2f2f2", borderRadius: 7, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#000', fontSize: 15, fontWeight: '500' }}>Back</Text>
                                </TouchableOpacity>
                                <View style={{ flex: 2, }}>
                                    {
                                        (this.state.isSelected === false) ?
                                            <View style={{ backgroundColor: "#ffd9b3", borderRadius: 7, marginLeft: 15, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: '#ffff', fontSize: 15, fontWeight: '500' }}>Sent OTP</Text>
                                            </View>
                                            :
                                            <TouchableOpacity onPress={this.navigatVerificationScreen} style={{ flex: 2, backgroundColor: "#ff8000", borderRadius: 7, marginLeft: 15, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: '#ffff', fontSize: 15, fontWeight: '600' }}>Sent OTP</Text>
                                            </TouchableOpacity>
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


export default CompanyDetails