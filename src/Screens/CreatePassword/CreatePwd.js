import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');
var backImg = require('../Login/back_white.png');

const win = Dimensions.get('window');

const CreatePwd = () => {

    const navigation = useNavigation();
    const [password,confirmPwd, setText] = useState('');


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
                <Text style={styles.titleStyle} >  Join Co-Tasker
                </Text>

                <View>

                    <ImageBackground source={welcomeBack}
                        resizeMode={'contain'}
                        style={{ height: win.height, width: win.width }}>

                        <TextInput
                            style={styles.inputPwdText}
                            placeholder="Password"
                            placeholderTextColor='#000'
                            autoCorrect={false}
                            secureTextEntry={true}
                           // onChangeText={password => setText(password)}
                            defaultValue={password}
                        />

                    <TextInput
                            style={styles.inputConfirmPwdText}
                            placeholder="Confirm Password"
                            placeholderTextColor='#000'
                            autoCorrect={false}
                            secureTextEntry={true}
                            //onChangeText={confirmPwd => setText(confirmPwd)}
                            defaultValue={confirmPwd}
                        />

            <View style={styles.containerDesc}>
            <Text style={styles.textDesc}>{'\u25CF'} At least 8 characters</Text>
            <Text style={styles.textDesc}>{'\u25CF'} A mixture of uppercase & lowercase letters</Text>
            <Text style={styles.textDesc}>{'\u25CF'} A mixture of letters & numbers</Text>
           
            </View>



                        <TouchableOpacity style={styles.button}

                            onPress={() => {
                                console.log(text)
                                // Alert.alert(text)
                                navigation.navigate('VerifyEmail')

                            }}>

                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </ImageBackground>



                </View>







            </ImageBackground>

            <View>


            </View>


        </View>




    );


}

export default CreatePwd;

const styles = StyleSheet.create({
    container: {

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


    inputPwdText:
    {
        marginTop: 200,
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    inputConfirmPwdText:
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
        marginVertical: 200,
        paddingVertical: 16,

        alignContent:'flex-end',
        justifyContent:'flex-end'
       
       

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    containerDesc:{
        marginTop:50,
        marginLeft:30,
        //flexGrow: 1,
       // alignItems: 'flex-start',
        justifyContent: "flex-start",
    },


});