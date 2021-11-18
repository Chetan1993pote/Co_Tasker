import { View, Text, ScrollView, StyleSheet, Image, Alert, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import * as rn from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTheme from '../../AppTheme';

var backImg = require('../DetailsForm/icon_back_black.png');

const win = Dimensions.get('window');

const DetailsForm = () => {

    const navigation = useNavigation();
    const [values, setValue] = useState({
        firstName: '',
        lastName: '',
        city: '',
        phone: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameChange = (inputText) => {

        console.log(inputText)
        setValue({
            ...values,
            firstName: inputText,
        });
    }



    const handleLastNameChange = (inputText) => {

        console.log(inputText)
        setValue({
            ...values,
            lastName: inputText,
        });
    }

    const handleCityNameChange = (inputText) => {

        console.log(inputText)
        setValue({
            ...values,
            city: inputText,
        });
    }

    const handlePhoneNumChange = (inputText) => {

        console.log(inputText)
        setValue({
            ...values,
            phone: inputText,
        });
    }

    const handleSubmit = async () => {
        //inputText.preventDefault();
        setSubmitted(true);

        if (!values.firstName.trim()) {
            Alert.alert('First Name', 'Please enter first name')
        } else if (!values.lastName.trim()) {
            Alert.alert('Last Name', 'Please enter last name')
        } else if (!values.city.trim()) {
            Alert.alert('City', 'Please enter where you live')
        } else {
            setValid(true)
            try {

                let obj = {
                    fName: values.firstName,
                    lName: values.lastName,
                    cityName: values.city,
                    phoneNum: values.phone
                }
                await AsyncStorage.setItem('userInfo', JSON.stringify(obj));

                navigation.navigate('PickIntrest');
            } catch (e) {
                // saving error
                console.log(e)
            }

        }


    }


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
                        marginLeft: 30, height: 25, width: 25
                    }} />

            </TouchableOpacity>


            {/* <ScrollView style={styles.scrollView}> */}
                <Text style={styles.titleStyle} > Tell us about
                </Text>

                <Text style={styles.titleStyle2} > yourself
                </Text>

                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={styles.nameTitle} > First Name
                    </Text>

                    <rn.TextInput
                        style={styles.inputText}
                        placeholder="First Name"
                        autoCorrect={false}
                        autoCompleteType='off'
                        onChangeText={handleFirstNameChange}
                        value={values.firstName}
                        returnKeyType={"next"} />
                </View>

                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                <Text style={styles.nameTitle} > Last Name
                 </Text>

                       <rn.TextInput
                    style={styles.inputText}
                    placeholder="Last Name"
                    autoCorrect={false}
                    autoCompleteType='off'
                    onChangeText={handleLastNameChange}
                    value={values.lastName}
                    returnKeyType={"next"} /> 
                </View>

                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                 <Text style={styles.nameTitle} > Where Are You Located?
                 </Text>

                 <rn.TextInput
                    style={styles.inputText}
                    placeholder="What city do you live in"
                    autoCorrect={false}
                    autoCompleteType='off'
                    onChangeText={handleCityNameChange}
                    value={values.city}
                    returnKeyType={"next"} /> 
                </View>

                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                <Text style={styles.nameTitle} > Phone Number
                 </Text>

                 <rn.TextInput
                    style={styles.inputText}
                    placeholder="Enter your phone number"
                    autoCorrect={false}
                    autoCompleteType='off'
                    onChangeText={handlePhoneNumChange}
                    value={values.phone}
                    returnKeyType={"done"} /> 
                </View>

            {/* </ScrollView> */}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        // Alert.alert('text')
                        handleSubmit()

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
        fontSize: 27,
        color: AppTheme.blackColor,
        fontFamily: AppTheme.boldfont,
        marginVertical: 15,
        marginLeft: 25
    },

    titleStyle2: {
        marginLeft: 25,
        alignItems: 'center',
        fontSize: 27,
        color: AppTheme.blackColor,
        fontFamily: AppTheme.boldfont
    },

    nameTitle: {
        marginTop: 20,
        marginLeft: 29,
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.semiboldfont

    },

   
    inputText:
    {
       
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    


   
    buttonContainer: {

        justifyContent: 'flex-end',
        marginBottom: 40,
        flexGrow: 1

    },


    button: {

        paddingVertical: 14,
        justifyContent: 'flex-end',
        width: win.width - 40,
        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 12,
        alignSelf: 'center',

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },
    errorMsgStyle: {

        fontSize: 12,
        color: 'red',
        textAlign: 'right',
        marginEnd: 30,
        paddingTop: 5

    }

});