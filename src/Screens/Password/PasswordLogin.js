import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');
var backImg = require('../Login/back_white.png');

const win = Dimensions.get('window');

const PasswordLogin = () => {

    const navigation = useNavigation();
    const [text, setText] = useState('');


    return (
        <View style={styles.container}>
            <ImageBackground
                source={app_Design}
                style={{ height: '100%', width: '100%' }}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <Image source={backImg}
                        resizeMode={'contain'}
                        style={{
                            marginTop: 65,
                            marginLeft: 35, height: 25, width: 25
                        }} />

                </TouchableOpacity>
                <Text style={styles.titleStyle} > Welcome Back
                </Text>

                <View style={styles.containerEmail}>

                    <ImageBackground source={welcomeBack}
                        resizeMode={'contain'}
                        style={{ height: win.height, width: win.width }}>

                        <Text style={styles.passwordTitle} > Enter Password
                        </Text>

                        <TextInput
                            style={styles.inputText}
                            placeholder="Password"
                            autoCorrect={false}
                            onChangeText={text => setText(text)}
                            defaultValue={text}
                        />

                        <TouchableOpacity style={styles.button}

                            onPress={() => {
                                console.log(text)
                                // Alert.alert(text)
                                navigation.navigate('VerifyEmail')

                            }}>

                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>
                    </ImageBackground>



                </View>







            </ImageBackground>

            <View>


            </View>


        </View>




    );


}

export default PasswordLogin;

const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        //padding:100,
        flexGrow: 1,
        //flexDirection: 'row',
        // marginTop:150


    },

    containerEmail: {
        //position: 'relative',
        flexGrow: 1,

    },

    titleStyle: {
        marginTop: 30,
        marginLeft: 35,
        textAlign: 'left',
        fontSize: 25,
        color: 'white',
        fontWeight: "bold"
    },

    passwordTitle: {

        marginTop: 200,
        marginLeft: 29,
        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal'

    },

    inputText:
    {
        marginTop: 5,
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    button: {

        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginVertical: 300,
        paddingVertical: 16,

       // alignContent:'flex-start',
        justifyContent:'flex-end'
       
       

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },


});