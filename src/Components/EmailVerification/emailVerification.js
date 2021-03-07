import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Modal, StyleSheet, Image } from 'react-native';
import HeaderNavigationBar from '../../SharedComponent/HeaderNavigationBar/headerNavigationBar';
import { personalDetailsScreenStyles, textInputGlobalStyles } from '../../Assets/CSS/style';

import { ToastMessage } from '../../SharedComponent/ToastMessage/toastMessage';
import { ValidateCompanyDetails } from '../../SharedComponent/Validate/validate';
import InputCode from 'react-native-input-code';
const ImagePath = '../../../public/images/';


class EmailVerification extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            passs: false,
            jobTitle: '',
            experience: '',
            verificationCode: ''
        }
    }

    isValid() {
        const { errors, isValid } = ValidateCompanyDetails(this.state);
        if (!isValid) {
            let profileErrors = {}
            profileErrors = Object.values(errors);
            profileErrors.map((error) => ToastMessage(error, 'top'))
        }
        return isValid;
    }

    onChangeCode = code => {

        if (code.length === 5) {
            this.setState({ verificationCode: code, isSelected: true })
        }
    };

    verification = code => {
        if (this.state.verificationCode.length === 5 && this.state.verificationCode === "11122") {
            this.setState({ passs: true })
            //this.props.navigation.navigate('PersonalDetailsScreen')
        } else if (this.state.verificationCode.length === 5 && this.state.verificationCode !== "11122") {
            ToastMessage("OTP is Wrong", 'top')
        }
    }

    onFullFill = code => {
        setTimeout(() => {
            //this.inputCode.reset();
            this.inputCode.focus();
        }, 100);
    };


    navigateProfilecreen = () => {
        this.setState({ passs: false })
        this.inputCode.reset();
        this.props.navigation.navigate('PersonalDetailsScreen')
    }

    navigatVerificationScreen = () => {
        if (this.isValid()) {
            this.props.navigation.navigate('EmailVerificationScreen')
        }
    }

    render() {
        return (

            <View>
                <HeaderNavigationBar
                    headerPersonalDetail={false}
                    headerCompanyDetail={false}
                    headerEmailVerificationDetail={true}
                    setDetails={this.navigateCompanyDetails}
                />
                <View>
                    <View style={personalDetailsScreenStyles.backgroundView}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={personalDetailsScreenStyles.headerTitle}>Enter Your OTP</Text>
                            </View>
                            <View>
                                <View>
                                    <Text style={personalDetailsScreenStyles.headerSubTitleVerify2}>For security we need for your identity. we send 5-digt</Text>
                                    <Text style={personalDetailsScreenStyles.headerSubTitleVerify}>code to name@domeain.com please ennter in below</Text>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={textInputGlobalStyles.profileLabelVwerify}>Enter Your Code</Text>
                                    <InputCode
                                        ref={ref => (this.inputCode = ref)}
                                        length={5}
                                        onChangeCode={this.onChangeCode}
                                        onFullFill={this.onFullFill}
                                        passcode
                                        passcodeChar="*"
                                        codeContainerStyle={{
                                            borderWidth: 0,
                                            borderWidth: 1,
                                        }}
                                        codeContainerCaretStyle={{
                                            borderWidth: 0,
                                            borderWidth: 1,
                                            borderColor: 'red',
                                        }}
                                        autoFocus
                                    />
                                </View>
                                <View style={emailScreenView.otpView}>
                                    <TouchableOpacity onPress={this.navigateProfilecreen} style={{ flex: 1, backgroundColor: "#f2f2f2", borderRadius: 7, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={emailScreenView.backText}>Back</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 2, }}>
                                        {
                                            (this.state.isSelected === false) ?
                                                <View style={emailScreenView.VerifyDisable}>
                                                    <Text style={emailScreenView.verifiEnable}>Verify</Text>
                                                </View>
                                                :
                                                <TouchableOpacity onPress={this.verification} style={{ flex: 2, backgroundColor: "#ff8000", borderRadius: 7, marginLeft: 15, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={emailScreenView.verifiEnable}>Verify</Text>
                                                </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                                <View style={{ marginTop: 20, borderTopWidth: 1, borderColor: "#f2f2f2", paddingLeft: 10, paddingRight: 10 }}>
                                    <Text numberOfLines={1} style={{ fontSize: 15, marginTop: 20 }}>Didn't receive the email? check your spam filter for and </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 15 }}>
                                            email from
                                        </Text>
                                        <Text style={{ color: '#ff8000', marginLeft: 4, fontSize: 15 }}>
                                            name@domain.com
                                        </Text>
                                    </View>
                                </View>
                                <Modal style={emailScreenView.header} transparent={true} animationType={'none'} visible={this.state.passs} onRequestClose={() => null}>
                                    <View style={emailScreenView.modalBackground}>
                                        <View style={[emailScreenView.modalWrapper_new]}>
                                            <View style={{ margin: 15, alignItems: 'center', justifyContent: 'center', bottom: 15 }}>
                                                <Image
                                                    style={{ width: 94, height: 94 }}
                                                    source={require(ImagePath + 'Thump.png')}
                                                />
                                                <Text style={{ color: '#50DF7B', fontSize: 24, fontWeight: '700' }}>Registration Successful</Text>
                                                <TouchableOpacity onPress={this.navigateProfilecreen} style={{ marginTop: 20, borderRadius: 5, height: 40, width: 150, backgroundColor: '#50DF7B', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ color: '#ffff', fontSize: 15, fontWeight: '600' }}>ADD NEW</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

export const emailScreenView = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#000000b8'
    },
    header: {
        width: 150,
        height: 150,
        borderRadius: 50 / 2

    },
    modalWrapper_new: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        width: "90%",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
    },
    otpView: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    backText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '500'
    },
    VerifyDisable: {
        backgroundColor: "#ffd9b3", 
        borderRadius: 7, 
        marginLeft: 15, 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center'   
    },
    verifiEnable:{
        color: '#ffff', 
        fontSize: 15, 
        fontWeight: '600'
    }
})
export default EmailVerification