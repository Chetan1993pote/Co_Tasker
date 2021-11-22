import React, { useState } from 'react';
import { Dimensions, Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../AppTheme';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';


const win = Dimensions.get('window');

var downArw = require('../TabBar/TabIcons/down_arrow.png');

var backImg = require('../TabBar/TabIcons/back_white.png');
var calender = require('../../Images/calendar.png');
var rightArrow = require('../../Images/right_arrow.png');
var locPin = require('../../Images/locationPinGrey.png');

const AccountInfo = () => {
    const navigation = useNavigation();
    const [value, setTextView] = useState({ textBox: '' });
    const [values, setText] = useState({ dob: ''});
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const arr_Gender = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'TransFemale', value: 'TransFemale' },
        { label: 'TransMale', value: 'TransMale' },
        { label: 'Genderqueer', value: 'Genderqueer' },
        { label: 'Something Else', value: 'Something Else' },
        { label: 'Decline to Answer', value: 'Decline to Answer' }
    ]

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Account Information',
            headerTitleStyle: {
                fontFamily: AppTheme.semiboldfont,
                fontSize: 18

            },
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: AppTheme.appThemeColor
            },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    resizeMode='contain'
                    source={backImg}
                    style={{ height: 18, width: 18 }} />

            </TouchableOpacity>
        });
    }, [navigation]);

    const handleTextViewChange = (text) => {

        console.log(text)
        setTextView({
            ...value,
            textBox: text,
        });
    }

    const handleChange = (inputText) => {

        console.log(inputText)
        setText({
            ...values,
            dob: inputText,
        });
    }


    return (

        <View style={{ flexGrow: 1 }}>

            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    console.log(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />

            <ScrollView style={{ flexGrow: 1 }}>
                <Pressable style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}
                    onPress={() => Alert.alert('Enter Email')}>
                    <Text style={styles.textStyle} >Email </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: AppTheme.semiboldfont, color: AppTheme.blackColor, fontSize: 15, marginTop: 10 }} >sudhird@zignuts.com </Text>
                        <Text style={{ fontFamily: AppTheme.semiboldfont, color: AppTheme.greenColor, fontSize: 15 }} > Verified </Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </Pressable>

                <Pressable style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}
                    onPress={() => Alert.alert('Enter Phone')}>
                    <Text style={styles.textStyle} >Phone Number </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: AppTheme.semiboldfont, color: '#C0C0C0', fontSize: 15, marginTop: 10 }} >Enter your phone number</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </Pressable>

                <Pressable style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}
                    onPress={() => setOpen(true)}>
                    <Text style={styles.textStyle} >Date of Birth </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <Text style={} >01/11/1993 </Text> */}
                        <TextInput
                                style={styles.inputText}
                                placeholder="01/11/1991"
                                autoCapitalize='none'
                                autoCorrect={false}
                                onChangeText={handleChange}
                                value={values.dob}

                            />
                        <Image
                            resizeMode='contain'
                            source={calender}
                            style={{ height: 15, width: 15 }} />
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </Pressable>

                <Pressable style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}
                    onPress={() => navigation.navigate('SelectCountry')}>
                    <Text style={styles.textStyle} >Nationality </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: AppTheme.semiboldfont, color: '#C0C0C0', fontSize: 15, marginTop: 10 }} >Select your nationality </Text>
                        <Image
                            resizeMode='contain'
                            source={rightArrow}
                            style={{ height: 15, width: 15 }} />
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </Pressable>

                <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}>
                    <Text style={styles.textStyle} >Gender </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View
                            style={{
                                width: win.width - 80,
                                marginTop: 10,
                                justifyContent: 'center',
                            }}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Select your gender',
                                }}
                                onValueChange={(value) => console.log(value)}
                                items={arr_Gender}
                            />
                        </View>
                        <Image
                            resizeMode='contain'
                            source={downArw}
                            style={{ height: 15, width: 15 }} />
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </View>

                <Pressable style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}
                    onPress={() => navigation.navigate('SelectCountry')}>
                    <Text style={styles.textStyle} >Country of residence </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: AppTheme.semiboldfont, color: '#C0C0C0', fontSize: 15, marginTop: 10 }} >Select your country of residence </Text>
                        <Image
                            resizeMode='contain'
                            source={rightArrow}
                            style={{ height: 15, width: 15 }} />
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </Pressable>

                <Pressable style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}
                    onPress={() => Alert.alert('Select ADDRESS')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Text style={styles.textStyle} >Address </Text>
                        <Image
                            resizeMode='contain'
                            source={locPin}
                            style={{ height: 15, width: 15 }} />

                    </View>
                    <Text style={{ fontFamily: AppTheme.semiboldfont, color: '#C0C0C0', fontSize: 15, marginTop: 10 }} >Enter your address </Text>

                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </Pressable>

                <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.05, marginTop: 20, justifyContent: 'space-evenly' }}>
                    <Text style={styles.textStyle} >Tax I.D. </Text>

                    <TextInput
                        style={styles.textView}
                        multiline={true}
                        placeholder="Your Tax I.D. will be included on your automatic invoices"
                        autoCorrect={false}
                        onChangeText={handleTextViewChange}
                        value={value.textBox} />
                    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10 }} />

                </View>
            </ScrollView>

            <View style={{ justifyContent: 'flex-end', flexGrow: 1 }}>
                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        navigation.goBack()
                    }}>

                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default AccountInfo;


const styles = StyleSheet.create({

    textStyle: {

        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.semiboldfont
    },

    button: {
        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 12,
        marginBottom: 30,
        marginHorizontal: win.width * 0.05

    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },

    inputText:
    { fontFamily: AppTheme.semiboldfont, 
      color: AppTheme.blackColor, 
    fontSize: 15, 
    marginTop: 10 }

});