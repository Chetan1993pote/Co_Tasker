import { View, Image, StyleSheet, Text, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AppTheme from '../../AppTheme';
import Video from 'react-native-video';

import videoUrl from '../../Video/Appvideo.mp4';


var backImg = require('../Login/back_white.png');


const win = Dimensions.get('window');


const LoginOptions = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Video source={videoUrl}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}
                resizeMode='cover'
                controls={false}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo} />

            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}>
                <Image source={backImg}
                    resizeMode={'contain'}
                    style={{
                        marginTop: 60,
                        marginLeft: 35, height: 25, width: 25
                    }} />

            </TouchableOpacity>

            <Text style={styles.appTitle} > Co-Tasker
            </Text>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginBtn}

                    onPress={() => {
                        // Alert.alert('text')
                        navigation.navigate('Login')//

                    }}>

                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerBtn}

                    onPress={() => {
                        //Alert.alert('text')
                        navigation.navigate('SignUp')

                    }}>

                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </View>


        </View>
    );

}

export default LoginOptions;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0f203a'
    },

    backgroundVideo: {
        flexGrow:1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    buttonContainer: {

        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
        flexGrow: 1

    },

    appTitle: {
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 38,
        color: 'white',
        fontFamily: AppTheme.extraboldfont
    },
    loginBtn: {

        width: win.width - 30,
        borderRadius: 12,
        paddingVertical: 10,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'flex-end',

    },

    registerBtn: {

        width: win.width - 30,
        borderRadius: 12,
        marginVertical: 20,
        paddingVertical: 10,
        backgroundColor: AppTheme.yellowColor,
        justifyContent: 'flex-end',
    },

    btnText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },


});