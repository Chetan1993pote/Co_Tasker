import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

var searchIcon = require('../TabBar/TabIcons/searchIcon.png');


const win = Dimensions.get('window');


const selectLocation = () => {

    const navigation = useNavigation();


    // const [data, setData] = React.useState(arr_FilterData);
    // const [search, setSearch] = React.useState("");
    

    actionOnRow = (item, index) => {

        console.log('Selected Item 1:', item);


    }

    const filterSearchData = (text) => {

        const test = arr_FilterData.filter(data => {
            return data.toLowerCase().includes(text.toLowerCase());
          });
          console.log("test: ", test);

          // uncomment line below and teams is logged as I want
          setData(test);
          setSearch(text);

    }

    return (
        <View style={styles.container}>

            <View style={styles.searchContainer}>

                <View style={{ height: 35, marginHorizontal: win.width * 0.03, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={searchIcon}
                        resizeMode='contain'
                        style={{ height: 20, width: 20, marginLeft: 10 }} />

                    <TextInput
                        style={styles.inputText}
                        placeholder="Select Category"
                        placeholderTextColor='gray'
                        keyboardType='default'
    

                    onChangeText={e => {
                        //filterSearchData(e)
                      }}
                      
                    />

                </View>

            </View>

           

            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}

                        onPress={() => {
                            // Alert.alert('text')
                            navigation.goBack()
                        }}>

                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>



        </View>

    );
}


export default selectLocation;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },

    searchContainer: {

        height: 50,
       // backgroundColor: '#0E203A'

    },

    inputText:
    {
        marginHorizontal: win.width * 0.02,
        height: 30,
    },

    buttonContainer: {

        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40,
        flexGrow: 1

    },

    button: {

        paddingVertical: 14,
        justifyContent: 'flex-end',
        width: win.width - 40,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        paddingVertical: 13,
        alignSelf: 'center',

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },




})