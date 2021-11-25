import React from 'react';
import { Dimensions, Image, View, Text, FlatList, Linking, ImageBackground, TouchableOpacity, StyleSheet, Settings, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../AppTheme';

const win = Dimensions.get('window');
var switch_On = require('../TabBar/TabIcons/switch_On.png');
var switch_Off = require('../TabBar/TabIcons/switch_Off.png');

var backImg = require('../TabBar/TabIcons/back_white.png');
var rightArrow = require('../../Images/right_arrow.png');

const NotifListing = () => {
    const navigation = useNavigation();

    const arr_Data = ['', '', '']

    const [chatSwitchOn, setChatSwitchOn] = useToggle();
    const [paymentSwitchOn, setPaymentSwitchOn] = useToggle();

    const image1 = chatSwitchOn
        ? switch_On
        : switch_Off

    const image2 = paymentSwitchOn
        ? switch_On
        : switch_Off

    didSelectNotifItem = (item, index) => {
        console.log('Selected Item :', item, index);
        // if (index == 0) {
        //     navigation.navigate('AccountInfo')
        // }else if (index == 1) {
        //     navigation.navigate('ChangePwdScn')
        // }else if (index == 2) {
        //     navigation.navigate('ChangeLanguageScn')

        // }

    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Notifications',
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

    function useToggle(initialValue = true) {
        const [value, setValue] = React.useState(initialValue);
        const toggle = React.useCallback(() => {
            setValue(v => !v);
        }, []);
        return [value, toggle];
    }

    return (
        <>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>

                <Text style={styles.textStyle}>New task posted alerts</Text>

                <Image
                    resizeMode='contain'
                    source={rightArrow}
                    style={{ height: 15, width: 18, marginEnd: 15 }} />
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: 'grey', width: win.width }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>

                <Text style={styles.textStyle}>Chat notifications</Text>

                <TouchableOpacity onPress={setChatSwitchOn}>
                    <Image
                         resizeMode='contain'
                         source={image1}
                         style={{ height: 20, width: 38, marginEnd: 20 }}
                     />
                 </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: 'grey', width: win.width }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>

                <Text style={styles.textStyle}>Payment Received</Text>

                <TouchableOpacity onPress={setPaymentSwitchOn}>
                    <Image
                         resizeMode='contain'
                         source={image2}
                         style={{ height: 20, width: 38, marginEnd: 20 }}
                     />
                 </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: 'grey', width: win.width }} />
        </>

    )
}

export default NotifListing;


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 16,
        marginHorizontal: win.width * 0.05,
        color: AppTheme.blackColor,
        fontFamily: AppTheme.regularfont
    },

});