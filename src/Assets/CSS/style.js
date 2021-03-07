import React from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

export const HeaderNavigationBarStyles = StyleSheet.create({
    headerBar: {
        height: 50,
        backgroundColor: '#2E4B64',
        justifyContent: 'center'
    },
    headerBarText: {
        height: 50,
        fontWeight: '400',
        fontSize: 12,
        marginRight: 10,
        marginBottom:2,
        color: '#cccccc',
    },
    headerBarTextFocus: {
        height: 50,
        fontWeight: '400',
        fontSize: 12,
        marginRight: 10,
        marginBottom:2,
        color: '#FFFFFF',
    },
    headerParent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    trackNumberLabelParent: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#28435A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    trackNumberLabelParentEnable: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    trackNumberLabelFocus: {
        color: '#FFFFFF',
        fontSize: 10
    },
    trackNumberLabel: {
        color: '#FFFFFF',
        fontWeight:'600',
        fontSize: 10
    },
    tracLabelParent: {
        alignItems: 'center',
        marginLeft: 7,
        marginTop: 34
    }
});

export const personalDetailsScreenStyles = StyleSheet.create({
    headerTitle: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '700',
        paddingTop: 20
    },
    backgroundView:{
        backgroundColor: '#FFFF',
        height: '100%'
    },
    headerSubTitle: {
        fontSize: 12,
        fontWeight: '400',
        paddingTop: 20
    },
    headerSubTitleVerify: {
        fontSize: 12,
        fontWeight: '400',
        flexShrink: 1,
        alignSelf:'center'
    },
    headerSubTitleVerify2: {
        fontSize: 14,
        fontWeight: '400',
        flexShrink: 1,
        alignSelf:'center'
    },
});

export const textInputGlobalStyles = StyleSheet.create({
    textInputDesign: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        // backgroundColor: '#f7f2f7',
        paddingRight: 10,
        margin: 0,
        fontSize: 14,
    },
    profileLabel: {
        color: 'rgba(10, 9, 9, 0.6)',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 16,
    },
    profileLabelVwerify: {
        color: 'rgba(10, 9, 9, 0.6)',
        fontSize: 16,
        fontWeight: '600',
        marginLeft:10,
        marginBottom: 16,
    },
    userInputView: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});

export const buttonStyle = StyleSheet.create({
    genderUnSelectButton: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    genderSelectedButton: {
        borderRadius: 4,
        backgroundColor: 'rgba(237, 89, 1, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },

});

export const companyDetails = StyleSheet.create({
    checkBoxlabel: {
        height: 17,
        color: '#ff8000',
        fontSize: 13,
        alignItems: 'center',
        fontWeight: '600',
        textDecorationLine: 'underline',
        marginBottom: 4,
    },
});