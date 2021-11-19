import { View, Text, Dimensions, StyleSheet, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import AppTheme from '../../AppTheme';
import { Formik } from 'formik';
import * as yup from 'yup';

const win = Dimensions.get('window');
var backImg = require('../DetailsForm/icon_back_black.png');
var showIcon = require('../../Images/icon_password_hide.png');
var hideIcon = require('../../Images/icon_password_show.png');

let passwordValidationSchema = yup.object().shape({
    oldPassword: yup.string()
        .required('Please enter old password')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            'Please enter valid password!'
        ),

    newPassword: yup.string()
        .required('Please enter new password')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            'Please enter valid password!'
        ),

    confirmPassword: yup.string()
        .required('Please enter confirm password')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            'Please enter valid password!'
        ),
});


const ChangePwdScn = () => {

    const navigation = useNavigation();
    const [isSecureEntryOld, setIsSecureEntryOld] = useState(true);
    const [isSecureEntryNew, setIsSecureEntryNew] = useState(true);
    const [isSecureEntryConfirm, setIsSecureEntryConfirm] = useState(true);



    const SaveBtnTapped = (inputText) => {
        //inputText.preventDefault();
        navigation.goBack()

    }


    return (

        <Formik
        initialValues={{ oldPassword: '',newPassword:'',confirmPassword:'' }}
        validateOnMount={true}
        onSubmit={values => SaveBtnTapped(values)}
        validationSchema={passwordValidationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (

        <>


            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}>
                <Image source={backImg}
                    resizeMode={'contain'}
                    style={{
                        marginTop: 60,
                        marginLeft: 30, height: 25, width: 23
                    }} />

            </TouchableOpacity>
            <Text style={styles.titleStyle}>Change Password</Text>

            <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.08, marginTop: 40 }}>
                <Text style={styles.emailTitle} >Old Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={isSecureEntryOld}
                        placeholder="Enter old password"
                        autoCorrect={false}
                    onChangeText={handleChange('oldPassword')}
                    onBlur={handleBlur('oldPassword')}
                       value={values.oldPassword}
                    />
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setIsSecureEntryOld(!isSecureEntryOld)
                            }}>
                            <Image source={isSecureEntryOld ? showIcon : hideIcon}
                                resizeMode={'contain'}
                                style={{
                                    height: 25, width: 22,
                                }} />

                        </TouchableOpacity>
                    </View>
                </View>
                {(errors.oldPassword && touched.oldPassword) &&
                                <Text style={styles.errors}>{errors.oldPassword}</Text>
                            }

            </View>

            <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.08, marginTop: 20 }}>
                <Text style={styles.emailTitle} >New Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={isSecureEntryNew}
                        placeholder="Enter new password"
                        autoCorrect={false}
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                       value={values.newPassword}
                    />
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setIsSecureEntryNew(!isSecureEntryNew)
                            }}>
                            <Image source={isSecureEntryNew ? showIcon : hideIcon}
                                resizeMode={'contain'}
                                style={{
                                    height: 25, width: 22,
                                }} />

                        </TouchableOpacity>
                    </View>
                </View>
                {(errors.newPassword && touched.newPassword) &&
                                <Text style={styles.errors}>{errors.newPassword}</Text>
                            }

            </View>

            <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.08, marginTop: 20 }}>
                <Text style={styles.emailTitle} >Confirm Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={isSecureEntryConfirm}
                        placeholder="Confirm new password"
                        autoCorrect={false}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                       value={values.confirmPassword}
                    />
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setIsSecureEntryConfirm(!isSecureEntryConfirm)
                            }}>
                            <Image source={isSecureEntryConfirm ? showIcon : hideIcon}
                                resizeMode={'contain'}
                                style={{
                                    height: 25, width: 22,
                                }} />

                        </TouchableOpacity>
                    </View>
                </View>
                {(errors.confirmPassword && touched.confirmPassword) &&
                                <Text style={styles.errors}>{errors.confirmPassword}</Text>
                            }

            </View>

            <View style={{ flexDirection: 'column', marginTop: 55 , marginHorizontal:win.width * 0.08 }}>

                            <Text style={styles.validationPoints}>{'\u25CF'}  At least 8 characters</Text>
                            <Text style={styles.validationPoints}>{'\u25CF'}  A mixture of uppercase and lowercase letters</Text>
                            <Text style={styles.validationPoints}>{'\u25CF'}  A mixture of letters and numbers</Text>

                        </View>

            <View style={{ justifyContent: 'flex-end', flexGrow: 1 }}>
                <TouchableOpacity style={styles.button}

                    onPress={handleSubmit}>

                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>      
        </>
        )}
        </Formik>


    );
}

export default ChangePwdScn;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,

    },

    errors:{
        color:AppTheme.red_forValidationMsg,
        fontFamily:AppTheme.regularfont,
        fontSize:14,
        textAlign:'right',
        marginTop:2},

    titleStyle: {
        marginTop: 25,
        marginLeft: 30,
        textAlign: 'left',
        fontSize: 23,
        color: AppTheme.blackColor,
        fontFamily: AppTheme.boldfont
    },

    descStyle: {
        marginTop: 25,
        marginLeft: 30,
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont
    },

    inputText:
    {
        flex: 1,
        fontFamily: AppTheme.regularfont,
        fontSize: 16,
        height: 40,
        justifyContent: 'center'
    },

    emailTitle: {
        color: 'grey',
        fontSize: 15,
        color: '#696969',
        fontFamily: AppTheme.regularfont

    },

    validationPoints: { fontSize: 13, color: 'grey', fontFamily: AppTheme.regularfont },

    button: {

        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 10,
        marginBottom: 40,
        //  justifyContent: 'flex-end',
        marginHorizontal: win.width * 0.06

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.6,
        borderColor: 'grey',
        justifyContent: 'center'
    },



});