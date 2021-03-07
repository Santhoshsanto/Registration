import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderNavigationBarStyles } from '../../Assets/CSS/style';

class HeaderNavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    track = ()=>{
        this.props.setDetails()
    }
    render() {
        return (
            <View>
                <View style={HeaderNavigationBarStyles.headerBar}>
                    <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
                        <TouchableOpacity style={HeaderNavigationBarStyles.headerParent} >
                            <View style={this.props.headerPersonalDetail == true ? HeaderNavigationBarStyles.trackNumberLabelParentEnable : HeaderNavigationBarStyles.trackNumberLabelParent}>
                                <Text style={this.props.headerPersonalDetail == true ? HeaderNavigationBarStyles.trackNumberLabel : HeaderNavigationBarStyles.trackNumberLabelFocus}>1</Text>
                            </View>
                            <View style={HeaderNavigationBarStyles.tracLabelParent}>
                                <Text style={this.props.headerPersonalDetail == false ? HeaderNavigationBarStyles.headerBarText : HeaderNavigationBarStyles.headerBarTextFocus}>Personal Detail</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={HeaderNavigationBarStyles.headerParent} onPress={this.track}>
                        <View style={this.props.headerCompanyDetail == true ? HeaderNavigationBarStyles.trackNumberLabelParentEnable : HeaderNavigationBarStyles.trackNumberLabelParent}>
                            <Text style={this.props.headerCompanyDetail == true ? HeaderNavigationBarStyles.trackNumberLabel : HeaderNavigationBarStyles.trackNumberLabelFocus}>2</Text>
                            </View>
                            <View style={HeaderNavigationBarStyles.tracLabelParent}>
                                <Text style={this.props.headerCompanyDetail == false ? HeaderNavigationBarStyles.headerBarText : HeaderNavigationBarStyles.headerBarTextFocus}>Company Detail</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={HeaderNavigationBarStyles.headerParent}>
                        <View style={this.props.headerEmailVerificationDetail == true ? HeaderNavigationBarStyles.trackNumberLabelParentEnable : HeaderNavigationBarStyles.trackNumberLabelParent}>
                            <Text style={this.props.headerEmailVerificationDetail == true ? HeaderNavigationBarStyles.trackNumberLabel : HeaderNavigationBarStyles.trackNumberLabelFocus}>3</Text>
                            </View>
                            <View style={HeaderNavigationBarStyles.tracLabelParent}>
                                <Text style={this.props.headerEmailVerificationDetail == false ? HeaderNavigationBarStyles.headerBarText : HeaderNavigationBarStyles.headerBarTextFocus}>Email Verification</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


export default HeaderNavigationBar