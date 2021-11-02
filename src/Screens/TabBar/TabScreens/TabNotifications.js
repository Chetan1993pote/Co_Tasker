import { View,Text, Dimensions,StyleSheet,Image, FlatList, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { placeholder } from '@babel/types';


var userImg = require('../TabIcons/userIcon.jpeg');
var user2 = require('../TabIcons/user2.jpeg');
var user3 = require('../TabIcons/user3.jpeg');
var user4 = require('../TabIcons/user4.jpeg');



const win = Dimensions.get('window');

const TabNotifications = () => {

    const navigation = useNavigation();

    const [selectedIndex, setSelectedIndex] = useState(0)

    const arr_Data = [
        {
            id: '1',
            userName: 'Deepak Jain',
            desc: 'Drop the AirMaps and AirGoogleMaps directories from... I want to post tasks and find help',
            userIcon:userImg,
            time:'1 w'
        },
        {
            id: '2',
            userName: 'Deepak Jain',
            desc: 'I want to help people,earn money and do it flexible tasks',
            userIcon:user2,
            time:'1 mon'
        },
        {
            id: '3',
            userName: 'Deepak Saini',
            desc: 'I want to do everything:find help and earn money on Co-tasker',
            userIcon:user3,
            time:'3 mon'
        },

        {
            id: '4',
            userName: 'Sachin kher',
            desc: 'I want to do everything:find help and earn money on Co-tasker',
            userIcon:user4,
            time:'2 w'
        },
    ];

    actionOnRow = (item, index) => {
        console.log('Selected Item :', item.id);
        console.log('Selected Item 1:', selectedIndex);

        navigation.navigate('TaskAd')


    }

    return (
        <View style={styles.container}>
                <View style={styles.tableList}>
                <FlatList

                    data={arr_Data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={(props) => {
                        console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{ height: 1, backgroundColor: 'grey', width: win.width , alignSelf: 'center', marginBottom: 10 }} />);
                    }}

                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.actionOnRow(item, index)}>
                               <><Text style={{
                                        fontSize: 11,
                                        marginEnd:15,
                                        alignSelf:'flex-end',
                                        color:'gray',
                                        fontWeight: '500'}}>{item.time}</Text></> 
                            <View style={styles.cellContainer}>
                                <Image source={item.userIcon}
                                    resizeMode='contain'
                                    
                                    style={styles.image} />
                                <View style={{flexDirection:'column',marginHorizontal:win.width * 0.02}}>
                                    <Text style={{
                                        fontSize: 16,
                                        color:'black',
                                        fontWeight: 'bold',
                                    }}>{item.userName}</Text>

                                    <Text style={styles.descAtribute}
                                   
                                    >{item.desc}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}

                ></FlatList>
            </View>
        </View>
    );

}

export default TabNotifications;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        justifyContent:'center'
    },

    tableList: {
        marginTop: 25,
        flexGrow: 1,

    },

    cellContainer: {
        marginLeft: 10,
        marginVertical: 5,
        //margin: win.width * 0.03,
       flexDirection:'row'

    },

    image: {

        marginLeft: 15,
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        overflow: 'hidden',
        borderWidth: 0.2,
        borderColor: '#0E203A'
    },

    descAtribute: {
        marginVertical:win.height * 0.003,
        fontSize: 14,
        color: 'grey',
        fontWeight: 'normal',
        marginRight:70
        
    },

  

});