import React from 'react';
import { Dimensions, Image, View, Text, FlatList, Linking, ImageBackground, TouchableOpacity, StyleSheet, Settings, Pressable } from 'react-native';


import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import AppTheme from '../../AppTheme';

const win = Dimensions.get('window');

var menu_bg = require('../../Images/menu_bg.png');
var menu_close = require('../../Images/close_white.png');
var user2 = require('../TabBar/TabIcons/user2.jpeg');



function DrawerContents(props) {

    const navigation = useNavigation();

    const arr_Data = ['Co-Wallet', 'Pending Reviews', 'How it Works', 'About Co-Tasker', 'Invite Friends', 'Help Center', 'Settings', 'Logout'];

    const ListHeader = () => {
        //View to set in Header
        return (
            <TouchableWithoutFeedback style={{ marginTop: 10, marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
                    <Image source={user2}
                        style={styles.image} />

                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontFamily: AppTheme.semiboldfont }}> Sudhir D </Text>
                        <Text style={{ fontSize: 15, color: '#ffbf00', marginTop: 3, fontFamily: AppTheme.regularfont }}> View profile </Text>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    actionOnSelectItem = (item, index) => {
        console.log('Selected Item :', item, index);
        navigation.dispatch(DrawerActions.closeDrawer())
        if (index == 5) {
            navigation.navigate('HelpCenter')
        } else if (index == 2) {

            Linking.openURL(AppTheme.howitWork)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })
        } else if (index == 3) {
            navigation.navigate('AboutCotasker')
        }else if (index == 7){
            navigation.navigate('LoginOptions');
        }
    }


    return (

        <View style={{ flexGrow: 1 }}>
            <ImageBackground
                source={menu_bg}
                style={{ height: '100%', width: '100%' }}>
                <Pressable onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                    <Image
                        source={menu_close}
                        style={{ height: 18, width: 18, alignSelf: 'flex-end', marginTop: 50, marginEnd: 20 }}></Image>
                </Pressable>

                <View style={{ flexGrow: 1, marginTop: 15 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={arr_Data}

                        keyExtractor={item => item.toString()}
                        ListHeaderComponent={ListHeader}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity onPress={() => this.actionOnSelectItem(item, index)} key={index}>

                                <View style={{ marginLeft: 20 }}>

                                    <View style={{ paddingVertical: 12 }}>

                                        {index <= 1 ?
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginEnd: 20 }}>
                                                <Text style={styles.textColor}>{item}</Text>

                                                {index === 0 && <Text style={styles.countColor}>{'0 €'}</Text>}
                                                {index === 1 && <Text style={styles.countColor}>{'0'}</Text>}

                                            </View>
                                            :
                                            <Text style={styles.textColor}>{item}</Text>
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    ></FlatList>
                </View>
            </ImageBackground>
        </View>
    )
}

export default DrawerContents;


const styles = StyleSheet.create({

    image: {

        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 1.5,
        borderColor: '#ffbf00',
    },
    countColor: {
        fontSize: 20,
        color: '#ffbf00',
        fontWeight: '600',
        fontFamily: AppTheme.boldfont

    },

    textColor: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        fontFamily: AppTheme.semiboldfont


    }
});