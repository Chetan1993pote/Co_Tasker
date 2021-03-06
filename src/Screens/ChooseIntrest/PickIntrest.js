import { View, Text, TouchableWithoutFeedback, StyleSheet, Alert, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import AppTheme from '../../AppTheme';


var backImg = require('../DetailsForm/icon_back_black.png');
var unselected_Img = require('../../Images/unselected.png');
var selected_Img = require('../../Images/selected.png');

const win = Dimensions.get('window');

const PickIntrest = () => {

    const navigation = useNavigation();
    const [selectedIndex, setSelectedIndex] = useState(0)

    const arr_Data = [
        {
            id: '1',
            title: 'Getting Help',
            desc: 'I want to post tasks and find help',
        },
        {
            id: '2',
            title: 'Making money',
            desc: 'I want to help people,earn money and do it flexible tasks',
        },
        {
            id: '3',
            title: 'Both',
            desc: 'I want to do everything:find help and earn money on Co-tasker',
        },
    ];

    actionOnRowPick = (item, index) => {
        console.log('Selected Item :', item.id);
        setSelectedIndex(index)
        console.log('Selected Item 1:', selectedIndex);


    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}>
                <Image source={backImg}
                    resizeMode={'contain'}
                    style={{
                        marginTop: 55,
                        marginLeft: 35, height: 25, width: 25
                    }} />

            </TouchableOpacity>

            <Text style={styles.titleStyle} > What are you more
            </Text>

            <Text style={styles.titleStyle2} > intrested in?
            </Text>

            <Text style={styles.titleDesc} > What you choose doesn't limit you on Co-Tasker
            </Text>

            <View style={styles.tableList}>
                <FlatList

                    data={arr_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={(props) => {
                        console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{ height: 1, backgroundColor: 'grey', width: win.width - 40, alignSelf: 'center', marginBottom: 10 }} />);
                    }}

                    renderItem={({ item, index }) => (

                        <TouchableWithoutFeedback onPress={() => this.actionOnRowPick(item, index)}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={(selectedIndex == index) ? selected_Img : unselected_Img}
                                    resizeMode='contain'
                                    style={{ height: 25, width: 25, margin: 20, marginTop: 0 }} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: (selectedIndex == index) ? AppTheme.yellowColor : AppTheme.blackColor,
                                        fontFamily: AppTheme.semiboldfont,
                                    }}>{item.title}</Text>

                                    <Text style={styles.descAtribute}

                                    >{item.desc}</Text>
                                </View>
                            </View>

                        </TouchableWithoutFeedback>
                    )}

                ></FlatList>
            </View>

            <TouchableOpacity style={styles.button}

                onPress={() => {
                    // Alert.alert('text')
                    navigation.navigate('Tabbar');
                }}>

                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>




        </View>
    );

}

export default PickIntrest;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

    tableList: {
        marginTop: 25,
        flexGrow: 1,

    },

    containerRadio: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },

    descAtribute: {
        marginVertical: 15,
        fontSize: 15,
        color: 'grey',
        fontFamily: AppTheme.regularfont,
        paddingRight: 90
    },

    seperator: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey'

    },

    titleStyle: {
        marginTop: 20,
        fontSize: 27,
        color: AppTheme.blackColor,
        fontFamily: AppTheme.boldfont,
        marginVertical: 15,
        marginLeft: 25
    },

    titleStyle2: {
        marginLeft: 25,
        alignItems: 'center',
        fontSize: 27,
        color: AppTheme.blackColor,
        fontFamily: AppTheme.boldfont
    },

    titleDesc: {
        marginTop: 20,
        fontSize: 16,
        color: 'grey',
        fontFamily: AppTheme.regularfont,
        marginLeft: 25
    },

    button: {

        paddingVertical: 14,
        justifyContent: 'flex-end',
        width: win.width - 40,
        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 12,
        alignSelf: 'center',
        marginBottom: 40,

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },
});