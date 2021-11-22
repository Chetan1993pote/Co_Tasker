import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../AppTheme';
import arr_CountryData from '../countryData';

var searchIcon = require('../TabBar/TabIcons/searchIcon.png');
var backImg = require('../TabBar/TabIcons/back_white.png');

const win = Dimensions.get('window');


const selectCountry = () => {

    const navigation = useNavigation();

    const [data, setData] = useState(arr_CountryData);
    const [search, setSearch] = useState("");

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Select Your Country',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: AppTheme.appThemeColor
            },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    resizeMode='contain'
                    source={backImg}
                    style={{ height: 18, width: 18, marginRight: 15 }} />

            </TouchableOpacity>
        });

    }, [navigation]);


    actionOnRowCountry = (item, index) => {

        console.log('Selected Item 1:', item.code);
        // console.log('../../Images/Flags/%s.png',item.code)


    }

    const countrySearchData = (text) => {

        const countryValue = arr_CountryData.filter(myData => {
            return myData.name.toLowerCase().includes(text.toLowerCase());
        });
        console.log("test: ", countryValue);

        // uncomment line below and teams is logged as I want
        setData(countryValue);
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
                        placeholder="Search for your country"
                        placeholderTextColor='gray'
                        keyboardType='default'


                        onChangeText={e => {
                            countrySearchData(e)
                        }}
                        type="text"
                        value={search}
                    />

                </View>

            </View>

            <View style={styles.tableList}>
                <FlatList

                    data={data}
                   // keyExtractor={item => item}
                    ItemSeparatorComponent={(props) => {
                        console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{ height: 1, backgroundColor: 'grey', width: win.width, opacity: 0.5 }} />);
                    }}

                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.actionOnRowCountry(item, index)}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >

                            <Image source={item.img}
                                resizeMode='contain'
                                style={{ height: 20, width: 20, marginLeft: 10 }} />


                            <Text style={{
                                marginVertical: 14,
                                marginLeft: 10,
                                fontSize: 15,
                                color: 'black',
                                fontFamily: AppTheme.regularfont,
                            }}>{item.name} ({item.code})</Text>


                        </TouchableOpacity>
                    )}

                ></FlatList>


            </View>
        </View>

    );
}


export default selectCountry;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },

    searchContainer: {
        height: 50,
        backgroundColor: AppTheme.appThemeColor
    },

    tableList: {
        height: win.height

    },

    inputText:
    {
        marginHorizontal: win.width * 0.02,
        height: 30,
        fontFamily: AppTheme.regularfont,
        fontSize: 16,

    },



})