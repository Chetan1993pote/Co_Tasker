import React, { useState } from 'react';
import { Dimensions, Image, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../AppTheme';

const win = Dimensions.get('window');

var backImg = require('../TabBar/TabIcons/back_white.png');
var ukImg = require('../../Images/unitedkingdom.png');
var selectedImg = require('../../Images/selected.png');
var unselected = require('../../Images/unselected.png');


var germanyImg = require('../../Images/germany.png');


const ChangeLanguageScn = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('0')

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Change Language',
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

    const onChangeLanguage = (index) => {
        setSelected(index)

    };

    return (

        <View style={{ flexGrow: 1 }}>

            <View style={styles.tabBackView}>
                <Pressable style={{ backgroundColor: selected === '0' ? AppTheme.lightYellow : 'white', justifyContent: 'center', borderRadius: 20, borderColor: selected === '0' ? AppTheme.yellowColor : '#484848', borderWidth: 1, width: win.width * 0.45 }}
                    onPress={() => onChangeLanguage('0')}>

                    <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Image
                            source={ukImg}
                            style={{ height: 55, width: 55 }} />
                        <Text style={{ fontSize: 17, fontFamily: AppTheme.semiboldfont, color: AppTheme.blackColor }}> English </Text>
                        <Image
                            source={selected === '0' ? selectedImg : unselected}
                            style={{ height: 20, width: 20 }} />
                    </View>

                </Pressable>

                <Pressable style={{ backgroundColor: selected === '1' ? AppTheme.lightYellow : 'white', justifyContent: 'center', borderRadius: 20, borderColor: selected === '1' ? AppTheme.yellowColor : '#484848', borderWidth: 1, width: win.width * 0.45 }}
                    onPress={() => onChangeLanguage('1')}>
                    <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Image
                            source={germanyImg}
                            style={{ height: 55, width: 55 }} />
                        <Text style={{ fontSize: 17, fontFamily: AppTheme.semiboldfont, color: AppTheme.blackColor }}> German </Text>
                        <Image
                            source={selected === '1' ? selectedImg : unselected}
                            style={{ height: 20, width: 20 }} />
                    </View>

                </Pressable>

            </View>



            <View style={{ justifyContent: 'flex-end', flexGrow: 1 }}>
                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        navigation.goBack()
                    }}>

                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default ChangeLanguageScn;


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 17,
        marginHorizontal: win.width * 0.05,
        color: AppTheme.appThemeColor,
        fontFamily: AppTheme.regularfont
    },

    button: {

        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 10,
        marginBottom: 50,
        marginHorizontal: win.width * 0.06

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },

    tabBackView: {
        marginTop: 20,
        flexDirection: 'row',
        height: win.height * 0.21,
        justifyContent: 'space-evenly'


    }

});