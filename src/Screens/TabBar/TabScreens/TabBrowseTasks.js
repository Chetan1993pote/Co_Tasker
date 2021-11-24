import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Pressable } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../../AppTheme';


var userImg = require('../TabIcons/userIcon.jpeg');
var user2 = require('../TabIcons/user2.jpeg');
var user3 = require('../TabIcons/user3.jpeg');
var user4 = require('../TabIcons/user4.jpeg');
var filterIcon = require('../TabIcons/filter.png');
var locIcon = require('../TabIcons/Map_pin.png');
var taskIcon = require('../TabIcons/task.png');


const win = Dimensions.get('window');
var menu = require('../TabIcons/menu.png')



const TabBrowseTasks = () => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Pressable onPress={() =>
                navigation.toggleDrawer()}>
                <Image
                    resizeMode='contain'
                    source={menu}
                    style={{ height: 18, width: 18, margin: 15 }} />

            </Pressable>
        });
    }, [navigation]);


    const arrHeader_Data = [
        {
            id: '1',
            title: '',
            icon: ''
        },
        {
            id: '2',
            title: 'Gandhinagar + 100 Km',
            icon: ''

        },
        {
            id: '3',
            title: 'All tasks',
            icon: ''
        },
        {
            id: '4',
            title: 'All categories',
            icon: ''
        },
        {
            id: '5',
            title: 'In-Person & Remote',
            icon: ''
        },
    ];

    const arr_Data = [
        {
            id: '1',
            title: 'Plant Flowers In My Garden',
            location: '1520/1,sector 2C,Sector 2,Gandhinagar...',
            taskTitle: 'Gardening & Plant Care',
            status: 'Assigned',
            questionText: '',
            offerText: '2 Offers',
            userIcon: userImg
        },
        {
            id: '2',
            title: 'Clean My Office',
            location: 'Ratnaraj Residency Rd, Vasana Hadm...',
            taskTitle: 'Cleaning',
            status: 'Assigned',
            questionText: '',
            offerText: '4 Offers',
            userIcon: user2
        },
        {
            id: '3',
            title: 'Paint my office',
            location: 'Unnamed Road,Sargasan,Gandhinagar...',
            taskTitle: 'Painting',
            status: 'Completed',
            questionText: '',
            offerText: '3 Offers',
            userIcon: user3
        },
        {
            id: '4',
            title: 'Wedding Photographer',
            location: 'Sargasan,Gandhinagar,382006',
            taskTitle: 'Translation',
            status: 'Assigned',
            questionText: '2 Questions',
            offerText: '1 Offer',
            userIcon: user4
        },
    ];

    actionOnRowBrowse = (item, index) => {
        console.log('Selected Item :', item.id);
        // setSelectedIndex(index)
        //console.log('Selected Item 1:', selectedIndex);
        navigation.navigate('TaskAd');


    }

    actionOnBrowseTab = (item, index) => {
        console.log('Selected Item :', item.id);
        if (item.id == 1) {
            navigation.navigate('filterTasks');
        }

    }

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 0, marginLeft: 10 }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={arrHeader_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}

                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.actionOnBrowseTab(item, index)
                        } key={item}>

                            {item.id == 1 ? <View style={{ borderRadius: 10, backgroundColor: '#ffbf00', padding: 8 }}>

                                <Image
                                    resizeMode='contain'
                                    source={filterIcon}
                                    style={{ height: 17, width: 17 }}
                                />

                            </View> : <View style={{ borderRadius: 10, backgroundColor: AppTheme.appThemeColor, justifyContent: 'center', marginLeft: 6, padding: 8 }}>
                                <Text style={{ color: 'white', paddingHorizontal: 5 }}>{item.title}</Text>

                            </View>
                            }
                        </TouchableOpacity>
                    )}

                ></FlatList>

            </View>
            <View
                style={{
                    marginTop: 8, borderBottomColor: '#C5C5C5', borderBottomWidth: 1,
                    width: win.width
                }}
            />

            <View style={{ marginTop: 3, flexGrow: 1 }}>
                <FlatList

                    data={arr_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}

                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.actionOnRowBrowse(item, index)}>
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
                                            color: AppTheme.appThemeColor,
                                            fontFamily: AppTheme.boldfont,
                                        }}>{item.status}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: win.height * 0.008 }}>
                                        <Image source={locIcon}
                                            resizeMode='contain'
                                            style={styles.locIcon} />

                                        <Text style={{ fontFamily: AppTheme.regularfont, color: 'gray', fontSize: 12 }}> {item.location}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={taskIcon}
                                            resizeMode='contain'
                                            style={styles.locIcon} />

                                        <Text style={{ fontFamily: AppTheme.regularfont, color: 'gray', fontSize: 12 }}> {item.taskTitle}</Text>
                                    </View>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}

                ></FlatList>
            </View>
        </View>

    );

}

export default TabBrowseTasks;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 10

    },

    screenText: {
        fontSize: 20,
        color: 'black',
        alignContent: 'center',
        alignSelf: 'center',
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
        borderColor: AppTheme.appThemeColor
    },

    locIcon: {
        width: 15,
        height: 15,
    }



});