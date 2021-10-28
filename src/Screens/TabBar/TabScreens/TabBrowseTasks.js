import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


var userImg = require('../TabIcons/userIcon.jpeg');
var user2 = require('../TabIcons/user2.jpeg');
var user3 = require('../TabIcons/user3.jpeg');
var user4 = require('../TabIcons/user4.jpeg');
var filterIcon = require('../TabIcons/filter.png');
var locIcon = require('../TabIcons/Map_pin.png');
var taskIcon = require('../TabIcons/task.png');


const win = Dimensions.get('window');



const TabBrowseTasks = () => {

    const navigation = useNavigation();

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

    actionOnRow = (item, index) => {
        console.log('Selected Item :', item.id);
        // setSelectedIndex(index)
        //console.log('Selected Item 1:', selectedIndex);


    }

    actionOnTab = (item, index) => {
        console.log('Selected Item :', item.id);
       if (item.id == 1){
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

                        <TouchableOpacity onPress={() => this.actionOnTab(item, index)

                        } key={item}>

                            {item.id == 1 ? <View style={{ borderRadius: 10, backgroundColor: '#ffbf00', padding: 8 }}>

                                <Image
                                    resizeMode='contain'
                                    source={filterIcon}
                                    style={{ height: 20, width: 20 }}
                                />

                            </View> : <View style={{ borderRadius: 10, backgroundColor: '#0E203A', justifyContent: 'center', marginLeft: 8, padding: 9 }}>

                                <Text style={{ color: 'white', paddingHorizontal: 10 }}>{item.title}</Text>


                            </View>
                            }




                        </TouchableOpacity>
                    )}

                ></FlatList>

            </View>
            <View
                style={{marginTop: 8,borderBottomColor: '#C5C5C5',borderBottomWidth: 1,
                    width: win.width
                }}
            />

            <View style={{ marginTop: 3 ,flexGrow: 1}}>
                <FlatList

                    data={arr_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}

                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.actionOnRow(item, index)}>
                            <View style={styles.cellContainer}>
                                <Image source={item.userIcon}
                                    resizeMode='contain'
                                    style={styles.image} />

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column', margin: win.width * 0.03, marginLeft: win.width * 0.02, justifyContent: 'space-between', marginVertical: 15 }}>

                                        <Text style={{
                                            fontSize: 15,
                                            color: '#0E203A',
                                            fontWeight: '600',
                                            marginVertical: 3,
                                        }}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={locIcon}
                                                resizeMode='contain'
                                                style={styles.locIcon} />

                                            <Text style={{ color: 'gray', fontSize: 12, marginVertical: 3 }}> {item.location}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={taskIcon}
                                                resizeMode='contain'
                                                style={styles.locIcon} />

                                            <Text style={{ color: 'gray', fontSize: 12 }}> {item.taskTitle}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'column', marginTop: 16, marginLeft: -30 }}>

                                        <Text style={{
                                            fontSize: 13,
                                            color: '#000',
                                            fontWeight: '600',


                                        }}>{item.status}</Text>
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
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#0E203A'
    },

    locIcon: {
        width: 15,
        height: 15,
    }



});