import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
//import RadioButtonRN from 'radio-buttons-react-native';

var backImg = require('../DetailsForm/icon_back_black.png');

const win = Dimensions.get('window');

const defaultValue = '';

const DetailsForm = () => {

    const navigation = useNavigation();
    const [firstName, lastName, city, phone, setText] = useState('');


    const arr_Data = [
        {
            id: '1',
            title: 'Getting Help',
            desc: 'I want to post tasks and find help'
        },
        {
            id: '2',
            title: 'Making money',
            desc: 'I want to help people,earn money and do it flexible tasks'
        },
        {
            id: '3',
            title: 'Both',
            desc: 'I want to do everything:find help and earn money on Co-tasker'
        },
    ];

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
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={(props) => {
                        console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{height: 1, backgroundColor:'grey',width:win.width - 40,alignSelf:'center'}} />);
                      }}
                    renderItem={({ item }) => (
                        <View >
                            <Text style={styles.titleAtribute}>{item.title}</Text>
                            <Text style={styles.descAtribute}>{item.desc}</Text>
                        </View>
                    )}

                ></FlatList>



            </View>

            {/* <RadioButtonRN
                    data={data}
                    box={false}
                    activeColor='#ffbf00'
                    deactiveColor='grey'
                    selectedBtn={(e) => console.log(e)}
            
                /> */}



            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}

                    onPress={() => {

                        // Alert.alert('text')
                        navigation.navigate('Tabber');
                        

                    }}>

                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>




        </View>
    );

}

export default DetailsForm;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

    tableList: {
        //backgroundColor: 'green',
        marginTop: 25,
        flexGrow: 1,
        
    },

    titleAtribute:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'normal',
        marginLeft:40,
        paddingTop:10,
        marginVertical:10
    },

    descAtribute:{
        fontSize: 16,
        color: 'grey',
        fontWeight: 'normal',
        marginLeft:40,
        paddingBottom:10
    },

    seperator: {
        flex: 1, 
        borderWidth: 1, 
        borderColor: 'grey'

       },

    titleStyle: {
        marginTop: 20,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft: 25
    },

    titleDesc: {
        marginTop: 20,
        fontSize: 16,
        color: 'grey',
        fontWeight: 'normal',
        marginLeft: 25
    },

    titleStyle2: {
        marginLeft: 25,
        alignItems: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },

    buttonContainer: {

        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
        flexGrow: 1

    },

    button: {

        paddingVertical: 14,
        justifyContent: 'flex-end',
        width: win.width - 40,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        paddingVertical: 12,
        alignSelf: 'center',

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },



});