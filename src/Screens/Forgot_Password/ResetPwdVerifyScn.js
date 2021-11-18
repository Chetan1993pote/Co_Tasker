
import { View, Text, ScrollView, StyleSheet, Alert,Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AppTheme from '../../AppTheme';


var emailIcon = require('../../Images/icon_password_saved.png');

const win = Dimensions.get('window');

const ResetPwdVerifyScn = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View
                style={{ flexGrow: 1, marginTop: 230, alignItems: 'center' }}>
                <Image source={emailIcon}
                       resizeMode='contain'
                    style={{ height: 100, width: 100 }}></Image>
                <Text style={styles.titleStyle} > Reset password link sent
                </Text>
                <Text style={styles.titleStyle2} numberOfLine={3}> Your reset password link has been sent to your registered email address</Text>
                <Text style={styles.textEmail} > johnDoe123@gmail.com</Text>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.didntReceive} > Didn't receive?</Text>
                <Text style={styles.btnResend} > Resend</Text>
                <Text style={styles.descInfo} > Cant't find it Check your junk/spam folder</Text>
                <Text style={styles.descInfo2} > if you use Gmail, check your Promotions section</Text>

                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        // Alert.alert('Home')
                        navigation.navigate('LoginOptions')
                    }}>

                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>

            </View>

        </View>
    );

}

export default ResetPwdVerifyScn;

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
        marginTop: 20,
        fontSize: 20,
        color: AppTheme.appThemeColor,
        fontFamily: AppTheme.boldfont,
        marginVertical: 15
    },

    titleStyle2: {

        textAlign:'center',
        marginHorizontal:win.width * 0.12,
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont,

    },

    textEmail: {
        marginVertical: 10,
        alignItems: 'center',
        fontSize: 18,
        color: '#ffbf00',
        fontWeight: "bold"
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
        marginTop: 20,
        alignItems: 'center',
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont,
    },

    descInfo2: {
        marginTop: 10,
        alignItems: 'center',
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont,
    },

    button: {
        width: win.width - 35,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginVertical: 10,
        paddingVertical: 12,
        

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },

    ChangeEmailAddress: {
        marginTop:20,
        marginBottom: 20,
        alignItems: 'center',
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },

    bottomView:{
        marginVertical:-70,
        marginBottom: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 1

    }

});