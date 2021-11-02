import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { useState, useEffect, useRef } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

var searchIcon = require('../TabBar/TabIcons/searchIcon.png');
var backImg = require('../TabBar/TabIcons/back_white.png');

const win = Dimensions.get('window');


const selectLocation = () => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Select Location',
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

    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      });

    return (
        <View style={styles.container}>

            {/* <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} /> */}

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
               // style={{ flexGrow: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
            >
            </MapView>


            <View style={styles.searchContainer}>

                <View style={{ height: 35, marginHorizontal: win.width * 0.03, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={searchIcon}
                        resizeMode='contain'
                        style={{ height: 20, width: 20, marginLeft: 10 }} />

                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: 'AIzaSyDdH0riKzhxpsF6XhteiAZd1joMmDT3194',
                            language: 'en',
                        }}
                    />
                    {/* <TextInput
                        style={styles.inputText}
                        placeholder="Select Category"
                        placeholderTextColor='gray'
                        keyboardType='default'
    

                    onChangeText={e => {
                        //filterSearchData(e)
                      }}
                      
                    /> */}

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
        marginTop:10
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

    map: {
        ...StyleSheet.absoluteFillObject,
      },



})