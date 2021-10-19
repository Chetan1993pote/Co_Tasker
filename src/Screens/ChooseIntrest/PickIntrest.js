import { View, Text, TouchableWithoutFeedback, StyleSheet, Alert, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import RadioButtonRN from 'radio-buttons-react-native';


var backImg = require('../DetailsForm/icon_back_black.png');
var unselected_Img = require('../../Screens/ChooseIntrest/unselected.png');
var selected_Img = require('../../Screens/ChooseIntrest/selected.png');


const win = Dimensions.get('window');

const defaultValue = '';

const PickIntrest = () => {

    const navigation = useNavigation();
    const [isSelected, setSelected] = useState(false)


    const arr_Data = [
        {
            id: '1',
            title: 'Getting Help',
            desc: 'I want to post tasks and find help',
            selected: false
        },
        {
            id: '2',
            title: 'Making money',
            desc: 'I want to help people,earn money and do it flexible tasks',
            selected: false
        },
        {
            id: '3',
            title: 'Both',
            desc: 'I want to do everything:find help and earn money on Co-tasker',
            selected: false
        },
    ];

    actionOnRow = (item, index) => {
        console.log('Selected Item :', item.id);
        Alert.alert("Selected Item :", item.title);
        let data = arr_Data[index]

        if (item.isSelected){
            data.isSelected = false 
        }else{
            data.isSelected = true 

        }

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
                        return (<View style={{ height: 1, backgroundColor: 'grey', width: win.width - 40, alignSelf: 'center' }} />);
                    }}

                    renderItem={({ item, index }) => (

                        <TouchableWithoutFeedback onPress={() => this.actionOnRow(item, index)}>
                            <View style={styles.containerRadio}>

                                <Image source={item.isSelected ? selected_Img : unselected_Img}
                                    resizeMode='contain'
                                    style={{ marginLeft: 20, height: 25, width: 25 }} />

                                <Text style={styles.titleAtribute}>{item.title}</Text>
                               {/* <View style={styles.containerSecondRow}>                        
                                <Text style={styles.descAtribute}>{item.desc}</Text> 
                                </View>     */}
                            </View>

                        </TouchableWithoutFeedback>
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
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerSecondRow: {
        flexGrow: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },

    titleAtribute: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'normal',
        marginLeft: 20,
        marginVertical: 10
    },

    descAtribute: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'normal',
        marginLeft: 20,
        paddingBottom: 10
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