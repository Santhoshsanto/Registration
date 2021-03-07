import * as React from 'react';
import { View, TouchableOpacity,Image,Dimensions,Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator, withNavigationFocus } from 'react-navigation';
import PersonalDetails from '../Components/PersonalDetails/personalDetails';
import CompanyDetails from '../Components/CompanyDetails/companyDetails';
import EmailVerification from '../Components/EmailVerification/emailVerification';

//Component

//Home Screen
const PersonalDetailsScreenStackScreen = createStackNavigator({
    PersonalDetailsScreen: {
        screen: withNavigationFocus(PersonalDetails)
    },
    CompanyDetailsScreen: {
        screen: withNavigationFocus(CompanyDetails)
    },
    EmailVerificationScreen: {
        screen: withNavigationFocus(EmailVerification)
    },
}, {
    initialRouteName: 'PersonalDetailsScreen',
    backBehavior: 'initialRoute',
});

const Navigator = createSwitchNavigator({

    App: withNavigationFocus(PersonalDetailsScreenStackScreen)
});


export default createAppContainer(Navigator)
