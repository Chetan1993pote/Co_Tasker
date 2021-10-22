import { View, Text, ScrollView, StyleSheet, Image, Alert, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import * as rn from 'react-native'


var backImg = require('../DetailsForm/icon_back_black.png');

const win = Dimensions.get('window');

const defaultValue = '';

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

    const handleSubmit = (inputText) => {
         //inputText.preventDefault();
        setSubmitted(true);
        if (values.firstName && values.lastName && values.city && values.phone){
            setValid(true)
            navigation.navigate('PickIntrest');
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

                <rn.TextInput
                    style={styles.firstNameInputText}
                    placeholder="First Name"
                    autoCorrect={false}
                    autoCompleteType='off'
                    onChangeText={handleFirstNameChange}
                    value={values.firstName}
                    returnKeyType={"next"}

                // onEndEditing={() => this.lastName.focus()}
                />
                {submitted && valid && !values.firstName ? <Text style={styles.errorMsgStyle} > Please enter first name
                </Text> : null}
                <Text style={styles.lastNameTitle} > Last Name*
                </Text>

                <rn.TextInput
                    style={styles.lastNameInputText}
                    placeholder="Last Name"
                    autoCorrect={false}
                    autoCompleteType='off'
                    onChangeText={handleLastNameChange}
                    value={values.lastName}
                    returnKeyType={"next"}
                //ref={(input) => this.lastName = input} 
                //onEndEditing={() => this.city.focus()}

                />
                {submitted && valid && !values.lastName ? <Text style={styles.errorMsgStyle} > Please enter last name
                </Text> : null}


                <Text style={styles.cityNameTitle} > City
                </Text>

                <rn.TextInput
                    style={styles.cityNameInputText}
                    placeholder="City"
                    autoCorrect={false}
                    autoCompleteType='off'
                    onChangeText={handleCityNameChange}
                    value={values.city}
                    returnKeyType={"next"}
                //ref={(input) => this.city = input} 
                //onEndEditing={() => this.phone.focus()}

                />
                {submitted && valid && !values.city ? <Text style={styles.errorMsgStyle} > Please enter city name
                </Text> : null}

                <Text style={styles.phoneTitle} > Phone Number(Optional)
                </Text>

                <rn.TextInput
                    style={styles.phoneNumInputText}
                    placeholder="Phone"
                    autoCorrect={false}
                    autoCompleteType='off'
                    onChangeText={handlePhoneNumChange}
                    value={values.phone}
                    returnKeyType={"done"}
                //ref={(input) => this.phone = input} 
                />
                {submitted && valid && !values.phone ? <Text style={styles.errorMsgStyle} > Please enter phone number
                </Text> : null}

            </ScrollView>

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
        marginBottom: 40,
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
    errorMsgStyle: {

        fontSize: 15,
        color: 'red',
        textAlign: 'right',
        marginEnd: 30,
        paddingTop: 5

    }

});