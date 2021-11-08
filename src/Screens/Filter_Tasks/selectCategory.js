import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

var searchIcon = require('../TabBar/TabIcons/searchIcon.png');
var backImg = require('../TabBar/TabIcons/back_white.png');

const win = Dimensions.get('window');


const selectCategory = () => {

    const navigation = useNavigation();

    const arr_FilterData = ["Cleaning", "Handy Person", "Assembly", "Transport & Removals", "Repairs", "Painting", "Electrical", "Plumbing", "Shopping", "Delivery", "Packing & Lifting", "Pet care", "Design", "Cooking", "Events", "Alterations"];

    const [data, setData] = React.useState(arr_FilterData);
    const [search, setSearch] = React.useState("");

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Select Category',
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
    

    actionOnRowCategory = (item, index) => {

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
                        filterSearchData(e)
                      }}
                      type="text"
                      value={search}
                    />

                </View>

            </View>

            <View style={styles.tableList}>
                <FlatList

                    data={data}
                    extraData={this.state}
                    keyExtractor={item => item.toString()}
                    ItemSeparatorComponent={(props) => {
                        console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{ height: 1, backgroundColor: 'grey', width: win.width, opacity: 0.5 }} />);
                    }}
                   
                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.actionOnRow(item, index)}>

                            <Text style={{
                                marginVertical: 14,
                                marginHorizontal: win.width * 0.05,
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'normal',
                            }}>{item}</Text>



                        </TouchableOpacity>
                    )}

                ></FlatList>

                
            </View>

            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}

                        onPress={() => {
                            // Alert.alert('text')
                            navigation.goBack()
                        }}>

                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>



        </View>

    );
}


export default selectCategory;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },

    searchContainer: {

        height: 50,
        backgroundColor: '#0E203A'

    },

    tableList: {
       // flexGrow: 1,
       height:win.height - 220

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
        backgroundColor: '#0E203A',
        borderRadius: 12,
        paddingVertical: 13,
        alignSelf: 'center',

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },




})