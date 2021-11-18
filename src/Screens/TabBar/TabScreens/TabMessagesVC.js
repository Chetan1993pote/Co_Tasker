import { View, Text, Dimensions, StyleSheet, Pressable, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import AppTheme from '../../../AppTheme';

var menu = require('../TabIcons/menu.png')
var searchIcon = require('../TabIcons/search.png');
var userImg = require('../TabIcons/userIcon.jpeg');
var user2 = require('../TabIcons/user2.jpeg');
var user3 = require('../TabIcons/user3.jpeg');
var user4 = require('../TabIcons/user4.jpeg');


const win = Dimensions.get('window');


const TabMessagesVC = () => {

    const navigation = useNavigation();

    navigation.setOptions({
        headerLeft: () => <Pressable onPress={() =>
            navigation.toggleDrawer()}>
            <Image
                resizeMode='contain'
                source={menu}
                style={{ height: 18, width: 18, margin: 15 }} />

        </Pressable>,
        headerRight: () => <Image
            resizeMode='contain'
            source={searchIcon}
            style={{ height: 18, width: 18, marginRight: 15 }}
        />

    });

    const arr_Data = [
        {
            id: '1',
            name: 'Rucha J.',
            desc: 'wef e fefeef',
            date: 'Nov 01',
            imgIcon: user4
        },
        {
            id: '2',
            name: 'Sudhir M.',
            desc: 'wef efewfef',
            date: 'Sep 27',
            imgIcon: userImg
        },
        {
            id: '3',
            name: 'Apple U.',
            desc: 'hello',
            date: 'Sep 24',
            imgIcon: user3
        },
        {
            id: '4',
            name: 'Parth P.',
            desc: '1520/1,sector 2C',
            date: 'Nov 05',
            imgIcon: user2
        },
        {
            id: '5',
            name: 'Deepak J.',
            desc: 'Are u there?',
            date: 'Oct 26',
            imgIcon: userImg
        },
        {
            id: '6',
            name: 'Sid Y.',
            desc: 'Do you Know?',
            date: 'Sep 08',
            imgIcon: user4
        },
        {
            id: '7',
            name: 'Karan S.',
            desc: 'vdfvdf ggrg',
            date: 'Nov 20',
            imgIcon: user3
        },
        {
            id: '8',
            name: 'Sonali K.',
            desc: 'ter ega vgeragg',
            date: 'Sep 30',
            imgIcon: user2
        }]

    didSelectRow = (item, index) => {
        console.log('Selected Item :', item.id);
        // console.log('Selected Item 1:', selectedIndex);

    }


    return (
        <View style={styles.container}>
            <View style={{ marginTop: 22 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={arr_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}

                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.didSelectRow(item, index)}>
                            <View style={styles.cellContainer}>
                                <Image source={item.imgIcon}
                                    style={styles.image} />
                                <View style={{ marginVertical: win.height * 0.02, justifyContent: 'space-between', flexGrow: 1, marginHorizontal: win.width * 0.03  }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1,marginVertical:win.height * 0.006}}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: AppTheme.blackColor,
                                        fontFamily: AppTheme.semiboldfont,
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        alignContent: 'flex-end',
                                        textAlign: 'right',
                                        fontSize: 14,
                                        color: 'grey',
                                        fontFamily: AppTheme.regularfont,
                                    }}>{item.date}</Text>

                                    
                                </View>
                                <Text style={{
                                        fontSize: 14,
                                        color: 'grey',
                                        fontFamily: AppTheme.regularfont,
                                    }}>{item.desc}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}

                ></FlatList>
            </View>
        </View>
    );

}

export default TabMessagesVC;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    cellContainer: {
        marginVertical: win.height * 0.004,
        backgroundColor: 'white',
        marginHorizontal: win.width * 0.04,
        borderRadius: 15,
        shadowColor: '#000',
        borderWidth: 1,
        borderColor: '#C5C5C5',
        shadowOpacity: 0,
        shadowRadius: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
       

    },

    image: {

        marginLeft: 15,
        width:60,
        height: 60,
        borderRadius: 60 / 2,
        borderWidth: 0.8,
        borderColor: AppTheme.appThemeColor
    },




});