
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AppTheme from '../../AppTheme';


var emailIcon = require('../VerifyEmail/icon_email_verify.png');

const win = Dimensions.get('window');

const VerifyEmail = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View
                style={{ flexGrow: 1, marginTop: 200, alignItems: 'center', marginVertical: 150 }}>
                <Image source={emailIcon}
                    resizeMode='contain'
                    style={{ height: 100, width: 100 }}></Image>
                <Text style={styles.titleStyle} > Verify Your Email
                </Text>
                <Text style={styles.titleStyle2} > An email verification link has been sent to:</Text>
                <Text style={styles.textEmail} > johnDoe123@gmail.com</Text>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.didntReceive} > Didn't receive?</Text>
                <Text style={styles.btnResend} > Resend</Text>
                <Text style={styles.descInfo} > Cant't find it Check your junk/spam folder</Text>
                <Text style={styles.descInfo2} > if you use Gmail, check your Promotions section</Text>

                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        // Alert.alert(text)
                        navigation.navigate('DetailsForm')
                    }}>

                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

                <Text style={styles.ChangeEmailAddress} > Change email address</Text>


            </View>

        </View>
    );

}

export default VerifyEmail;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        bottom: 0
    },

    scrollView: {
        // marginHorizontal: 10,
        maxHeight: win.height,
        position: 'absolute',

    },

    titleStyle: {
        marginTop: 25,
        fontSize: 19,
        color: AppTheme.appThemeColor,
        fontFamily: AppTheme.boldfont,
        marginVertical: 15
    },

    titleStyle2: {

        alignItems: 'center',
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont,
    },

    textEmail: {
        marginVertical: 10,
        alignItems: 'center',
        fontSize: 16,
        color: AppTheme.yellowColor,
        fontFamily: AppTheme.semiboldfont,
    },

    didntReceive: {

        alignItems: 'center',
        fontSize: 15,
        fontFamily: AppTheme.regularfont,
        color: 'grey',
    },

    btnResend: {
        marginTop: 10,
        alignItems: 'center',
        fontSize: 16,
        color: '#000',
        fontFamily: AppTheme.semiboldfont,

    },

    descInfo: {
        marginTop: 25,
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont,
    },

    descInfo2: {
        marginTop: 10,
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont,
    },

    button: {
        marginTop: 10,
        width: win.width - 40,
        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 10,


    },

    buttonText: {
        color: 'white',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },

    ChangeEmailAddress: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 16,
        color: '#000',
        fontFamily: AppTheme.semiboldfont,
    },

    bottomView: {
        marginBottom: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',

    }

});