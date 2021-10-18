import { View, Text, ScrollView, StyleSheet, Image, Alert, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';


var backImg = require('../DetailsForm/icon_back_black.png');

const win = Dimensions.get('window');

const defaultValue = '';

const DetailsForm = () => {

    const navigation = useNavigation();
    const [firstName, lastName, city, phone, setText] = useState('');


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}>
                <Image source={backImg}
                    resizeMode={'contain'}
                    style={{
                        marginTop: 55,
                        marginLeft: 35, height: 25, width: 25
                    }} />

            </TouchableOpacity>


            <ScrollView style={styles.scrollView}>
                <Text style={styles.titleStyle} > Tell us about
                </Text>

                <Text style={styles.titleStyle2} > yourself
                </Text>

                <Text style={styles.firstNameTitle} > First Name*
                </Text>

                <TextInput
                    style={styles.firstNameInputText}
                    placeholder="First Name"
                    autoCorrect={false}
                    //onChangeText={text1 => setText(text1)}
                    defaultValue={firstName}
                />

                <Text style={styles.lastNameTitle} > Last Name*
                </Text>

                <TextInput
                    style={styles.lastNameInputText}
                    placeholder="Last Name"
                    autoCorrect={false}
                    //onChangeText={text2 => setText(text2)}
                    defaultValue={lastName}
                />


                <Text style={styles.cityNameTitle} > City
                </Text>

                <TextInput
                    style={styles.cityNameInputText}
                    placeholder="City"
                    autoCorrect={false}
                    //onChangeText={text3 => setText(text3)}
                    defaultValue={city}
                />

                <Text style={styles.phoneTitle} > Phone Number(Optional)
                </Text>

                <TextInput
                    style={styles.phoneNumInputText}
                    placeholder="Phone"
                    autoCorrect={false}
                    //onChangeText={text3 => setText(text3)}
                    value={phone}
                />

            </ScrollView>

            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}

                        onPress={() => {

                            // Alert.alert('text')
                            navigation.navigate('ChooseIntrest');


                        }}>

                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>




        </View>
    );

}

export default DetailsForm;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,

    },

    scrollView: {
        marginHorizontal: 10,

    },


    titleStyle: {
        marginTop: 20,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft: 25
    },

    titleStyle2: {
        marginLeft: 25,
        alignItems: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },

    firstNameTitle: {
        marginTop: 50,
        marginLeft: 29,
        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal'

    },

    firstNameInputText:
    {
        // marginTop: 5,
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    lastNameTitle: {
        marginTop: 30,
        marginLeft: 29,
        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal'

    },

    lastNameInputText:
    {
        //marginTop: 0,
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    cityNameTitle: {
        marginTop: 30,
        marginLeft: 29,
        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal'
    },

    cityNameInputText: {
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    phoneTitle: {
        marginTop: 30,
        marginLeft: 29,
        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal'
    },

    phoneNumInputText: {
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    buttonContainer: {

        justifyContent: 'flex-end',
        marginBottom: 50,
        flexGrow: 1

    },


    button: {

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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

});