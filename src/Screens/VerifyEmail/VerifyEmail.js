
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


var emailIcon = require('../VerifyEmail/icon_email_verify.png');

const win = Dimensions.get('window');

const VerifyEmail = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <ScrollView style={styles.scrollView}> */}
            <View
                style={{ flexGrow: 1, marginTop: 100, alignItems: 'center', marginVertical: 150 }}>
                <Image source={emailIcon}
                    style={{ height: 120, width: 155 }}></Image>
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

            {/* </ScrollView> */}




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
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        marginVertical: 15
    },

    titleStyle2: {

        alignItems: 'center',
        fontSize: 18,
        color: 'grey',
        fontWeight: "normal"
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
        fontSize: 18,
        color: 'grey',
        fontWeight: "normal"
    },

    btnResend: {
        marginTop: 10,
        alignItems: 'center',
        fontSize: 19,
        color: '#000',
        fontWeight: "normal"
    },

    descInfo: {
        marginTop: 20,
        alignItems: 'center',
        fontSize: 16,
        color: 'grey',
        fontWeight: "normal"
    },

    descInfo2: {
        marginTop: 10,
        alignItems: 'center',
        fontSize: 16,
        color: 'grey',
        fontWeight: "normal"
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
        fontSize: 18,
        fontWeight: 'bold',
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