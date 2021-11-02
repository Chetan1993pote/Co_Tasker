import { View, Text, Dimensions, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const win = Dimensions.get('window');

var backImg = require('.././TabBar/TabIcons/back_white.png');
var user2 = require('../TabBar/TabIcons/user2.jpeg');
var user3 = require('../TabBar/TabIcons/user3.jpeg');

const TaskAd = () => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Task Ad',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#0E203A'
            },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    resizeMode='contain'
                    source={backImg}
                    style={{ height: 18, width: 18, marginRight: 15 }} />



            </TouchableOpacity>
        });
    }, [navigation]);

    const arr_Data = [
        {
            id: '1',
            userName: 'Mahir P.',
            desc: 'Task posted by',
            userIcon: user3,

        },
        {
            id: '2',
            userName: 'Nihar B.',
            desc: 'Assigned to',
            userIcon: user2,

        }];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.topView}>
                    <Text style={styles.screenText}> Task Adfwefwefwe</Text>
                </View>
                <Text style={styles.statusText}>  Cancelled </Text>
            </View>
            <View style={{ marginTop: 15, flexGrow: 1 }}>
                <FlatList

                    data={arr_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={(props) => {
                        console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{ height: 10, backgroundColor: 'white', width: win.width }} />);
                    }}

                    renderItem={({ item, index }) => (

                        <View style={styles.cellBorder}>

                            <Text style={{
                                fontSize: 14,
                                margin: 15,
                                color: '#0E203A',
                                fontWeight: '500'
                            }}>{item.desc}</Text>

                            <View style={{ flexDirection: 'row' }}>

                                <Image source={item.userIcon}
                                    resizeMode='contain'

                                    style={styles.image} />

                                <Text style={{
                                    fontSize: 16,
                                    marginHorizontal: win.width * 0.05,
                                    color: '#0E203A',
                                    fontWeight: '500',
                                    alignSelf:'center'
                                }}>{item.userName}</Text>


                            </View>


                        </View>


                    )}

                ></FlatList>
            </View>
        </View>
    );

}

export default TaskAd;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',

    },
    topView: {
        marginTop: 5,
        height: 35,
        flexGrow: 1,
        backgroundColor: '#0E203A',
        borderRadius: 10,
        width: 250,//win.width-140,
        marginLeft: -10,
        justifyContent: 'center'

    },


    screenText: {
        marginHorizontal: win.width * 0.06,
        fontSize: 15,
        color: 'white',
        alignContent: 'center'

    },

    statusText: {
        marginTop: 5,
        marginEnd: 20,
        alignSelf: 'center',
        fontSize: 15,
        color: '#ffbf00',
        fontWeight: '600',

    },

    cellBorder: {
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8,
        borderTopWidth: 0.8,


    },

    image: {

        marginLeft: 15,
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        overflow: 'hidden',
        borderWidth: 0.2,
        borderColor: '#0E203A',
        marginVertical: win.width * 0.03,
    },


});