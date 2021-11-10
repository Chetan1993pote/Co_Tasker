import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const win = Dimensions.get('window');

var backImg = require('.././TabBar/TabIcons/back_white.png');
var user2 = require('../TabBar/TabIcons/user2.jpeg');

const HelpCenter = () => {

    const navigation = useNavigation();
    const [values, setText] = useState({ inputBox: '' });
    const [value, setTextView] = useState({ textBox: '' });


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Help Center',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#0E203A'
            },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    resizeMode='contain'
                    source={backImg}
                    style={{ height: 18, width: 18, marginRight: 15 }} />

            </TouchableOpacity>
        });
    }, [navigation]);

    const handleTextChange = (inputText) => {

        console.log(inputText)
        setText({
            ...values,
            inputBox: inputText,
        });
    }

    const handleTextViewChange = (text) => {

        console.log(text)
        setTextView({
            ...values,
            textBox: text,
        });
    }



    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={{ marginTop: 15, marginHorizontal: win.width * 0.04, fontSize: 13, fontWeight: '600' }}>Need support from the Co-Tasker Support Team with this task? Send us your inquiry below. </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ marginHorizontal: win.width * 0.04 }}>

                            <Image source={user2}
                                style={styles.image} />

                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: -10 }}>
                            <Text style={{ fontSize: 15, fontWeight: '600' }}> Sudhir D </Text>
                            <Text style={{ fontSize: 14, fontWeight: 'normal', color: 'grey', marginTop: 3 }}> sudhird@zignuts.com </Text>

                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 15, height: 15, backgroundColor: '#f8fcfc' }}></View>
                <><Text style={{ fontSize: 14, fontWeight: '500', color: 'grey', marginTop: 15, marginHorizontal: win.width * 0.04 }}> Task Details </Text></>

                <View style={styles.taskDetails}>
                    <View style={{ flexDirection: 'column', marginVertical: win.width * 0.03 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', marginHorizontal: win.width * 0.04 }}> Nox N. </Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginHorizontal: win.width * 0.04, marginTop: 5 }}> Task Details hello</Text>
                    </View>

                </View>

                <View style={{ marginTop: 15, height: 15, backgroundColor: '#f8fcfc' }}></View>

                <Text style={{ fontSize: 14, fontWeight: '500', color: 'grey', marginTop: 15, marginHorizontal: win.width * 0.04 }}> Subject </Text>

                <TextInput
                    style={styles.inputText}
                    placeholder="Please write a subject about your inquiry"
                    autoCorrect={false}
                    onChangeText={handleTextChange}
                    value={values.inputBox} />

                <Text style={{ fontSize: 14, fontWeight: '500', color: 'grey', marginTop: 20, marginHorizontal: win.width * 0.04 }}> How can we help you? </Text>

                <TextInput
                    style={styles.textView}
                    multiline={true}
                    placeholder="Please give details about your inquiry"
                    autoCorrect={false}
                    onChangeText={handleTextViewChange}
                    value={value.textBox} />



            </ScrollView>

            <TouchableOpacity style={styles.button}

                onPress={() => {
                    Alert.alert('Send')
                    // handleSubmit()

                }}>

                <Text style={styles.buttonText}>Send inquiry</Text>
            </TouchableOpacity>

        </View>
    );

}

export default HelpCenter;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',

    },

    image: {

        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderWidth: 0.2,
        borderColor: 'gray'
    },

    taskDetails: {
        marginTop: 15,
        marginHorizontal: win.width * 0.04,
        backgroundColor: '#fffcf2',
        borderColor: '#fadfa2',
        borderWidth: 1,
        borderRadius: 10
    },

    inputText:
    {
        marginHorizontal: win.width * 0.04,
        marginRight: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8,
        height: 40,
        paddingLeft: 3
    },


    textView: {
        height: 120,
        marginTop: 10,
        marginHorizontal: win.width * 0.04,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 0.8,
        borderRadius: 5,
    },

    button: {
        marginBottom: 40,
        paddingVertical: 14,
        justifyContent: 'flex-end',
        width: win.width - 40,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        paddingVertical: 12,
        alignSelf: 'center',

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },

});