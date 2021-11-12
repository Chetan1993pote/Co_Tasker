import { View, Text, StyleSheet, Alert, Dimensions, TouchableOpacity, Pressable, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import AppTheme from '../../../../AppTheme';


var arrowImg = require('../../../../Images/icon_next_arrow.png')
var userImg = require('../../TabIcons/userIcon.jpeg');
var user2 = require('../..//TabIcons/user2.jpeg');
var user3 = require('../../TabIcons/user3.jpeg');
var locIcon = require('../../TabIcons/Map_pin.png');
var taskIcon = require('../../TabIcons/task.png');

const win = Dimensions.get('window');


const As_A_Co_tasker = () => {

    const arr_Data = [
        {
            id: '1',
            title: 'Plant Flowers In My Garden',
            location: '1520/1,sector 2C',
            taskTitle: 'Gardening & Plant Care',
            status: 'Expired',
            questionText: '',
            offerText: '2 Offers',
            userIcon: userImg
        },
        {
            id: '2',
            title: 'Clean My Office',
            location: 'Ratnaraj Residency Rd',
            taskTitle: 'Cleaning',
            status: 'Assigned',
            questionText: '',
            offerText: '4 Offers',
            userIcon: user2
        },
        {
            id: '3',
            title: 'Paint my office',
            location: 'ASAP',
            taskTitle: 'Painting',
            status: 'Completed',
            questionText: '',
            offerText: '3 Offers',
            userIcon: user3
        }]

    actionOnRowTask = (item, index) => {
        console.log('Selected Item :', item.id);
        // setSelectedIndex(index)
        //console.log('Selected Item 1:', selectedIndex);
        //navigation.navigate('TaskAd');


    }

    return (
        <View style={styles.container}>

            <Pressable style={styles.tabStyle}>

                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Offers</Text>
                    <Image
                        source={arrowImg}
                        style={{ height: 18, width: 14.5 }}></Image>
                </View>

            </Pressable>

            <View style={{ marginTop: 2, height: win.height / 2 }}>
                <FlatList

                    data={arr_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}

                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.actionOnRowTask(item, index)}>
                            <View style={styles.cellContainer}>
                                <Image source={item.userIcon}
                                    style={styles.image} />

                                <View style={{ marginVertical: win.height * 0.01, justifyContent: 'space-between', flexGrow: 1, marginLeft: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, marginEnd: 10 }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: AppTheme.appThemeColor,
                                            fontFamily: AppTheme.semiboldfont,
                                        }}>{item.title}</Text>
                                        <Text style={{
                                            alignContent: 'flex-end',
                                            textAlign: 'right',

                                            fontSize: 14,
                                            color: AppTheme.yellowColor,
                                            fontFamily: AppTheme.regularfont,
                                        }}>{item.status}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: win.height * 0.008 }}>
                                        <Image source={locIcon}
                                            resizeMode='contain'
                                            style={styles.locIcon} />

                                        <Text style={{
                                            color: 'gray', fontSize: 12, fontFamily: AppTheme.regularfont,
                                        }}> {item.location}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={taskIcon}
                                            resizeMode='contain'
                                            style={styles.locIcon} />

                                        <Text style={{
                                            color: 'gray', fontSize: 12, fontFamily: AppTheme.regularfont,
                                        }}> {item.taskTitle}</Text>
                                    </View>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}

                ></FlatList>
            </View>

            <Pressable style={styles.tabStyle}>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Active Tasks</Text>
                    <Image
                        source={arrowImg}
                        style={{ height: 18, width: 14.5 }}></Image>
                </View>
            </Pressable>
            <Pressable style={styles.tabStyle}>

                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Completed</Text>
                    <Image
                        source={arrowImg}
                        style={{ height: 18, width: 14.5 }}></Image>
                </View>

            </Pressable>


        </View>
    );

}

export default As_A_Co_tasker;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

    tabStyle: {
        backgroundColor: AppTheme.appThemeColor,
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: win.width * 0.05,
        marginVertical: win.width * 0.01,
        height: 40
    },
    textStyle: {
        fontSize: 15,
        fontFamily: AppTheme.semiboldfont,
        color: 'white'
    },

    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: win.width * 0.04,
    },
    cellContainer: {

        marginLeft: 40,
        marginVertical: 5,
        backgroundColor: 'white',
        margin: win.width * 0.03,
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

        marginLeft: -25,
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        borderWidth: 1,
        borderColor: '#C5C5C5',
    },

    locIcon: {
        width: 13,
        height: 13,
    }

});