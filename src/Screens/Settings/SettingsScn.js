import React from 'react';
import { Dimensions, Image, View, Text, FlatList, Linking, ImageBackground, TouchableOpacity, StyleSheet, Settings, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../AppTheme';

const win = Dimensions.get('window');

var backImg = require('../TabBar/TabIcons/back_white.png');
var rightArrow = require('../../Images/right_arrow.png');

const SettingsScn = () => {
    const navigation = useNavigation();

    const arr_Data = ['Account Information', 'Change password', 'Change Language', 'Notifications', 'Become a Co-Tasker']

    didSelectSettingItem = (item, index) => {
        console.log('Selected Item :', item, index);
        if (index == 0) {
            navigation.navigate('AccountInfo')
        }else if (index == 1) {
            navigation.navigate('ChangePwdScn')
        }else if (index == 2) {
            navigation.navigate('ChangeLanguageScn')

        }

    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Settings',
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

    return (
        <FlatList

            data={arr_Data}
            extraData={this.state}
            keyExtractor={item => item.toString()}
            ListFooterComponent={() => <TouchableOpacity style={{ marginTop: 12 }} onPress={() => Alert.alert('Are you sure to delete Account')}>
                <Text style={{
                    fontSize: 16,
                    marginHorizontal: win.width * 0.05,
                    color: 'red',
                    fontFamily: AppTheme.regularfont
                }}>Delete account</Text>
                <View style={{ height: 1, backgroundColor: 'grey', width: win.width, marginTop: 12 }} />
            </TouchableOpacity>}


            renderItem={({ item, index }) => (
                <TouchableOpacity style={{ marginTop: 12 }} onPress={() => this.didSelectSettingItem(item, index)} key={index}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Text style={styles.textStyle}>{item}</Text>
                        <Image
                            resizeMode='contain'
                            source={rightArrow}
                            style={{ height: 15, width: 18, marginEnd: 15 }} />

                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey', width: win.width, marginTop: 12 }} />
                </TouchableOpacity>

            )}

        ></FlatList>

    )
}

export default SettingsScn;


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 16,
        marginHorizontal: win.width * 0.05,
        color: AppTheme.appThemeColor,
        fontFamily: AppTheme.regularfont
    },

});