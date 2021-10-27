import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const TabMyTasksVC = () => {


    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        getLocalData()

    }, []);

    const getLocalData = async () => {
        AsyncStorage.getItem('userInfo').then(savedData => {
            if (savedData) {
                try {
                    const savedUserDetails = JSON.parse(savedData);
                    if (savedUserDetails) {

                        //Alert.alert(savedUserDetails.lName)
                        setUserDetails(savedUserDetails);
                    }
                } catch (error) { 
                    Alert.alert('No Local data found')
                }
            }
        });
    }

    const { fName,
        lName,
        cityName,
        phoneNum } = userDetails;


    // AsyncStorage.getAllKeys((err, keys) => {
    //     AsyncStorage.multiGet(keys, (error, stores) => {
    //       stores.map((result, i, store) => {
    //         console.log({ [store[i][0]]: store[i][1] });
    //         return true;
    //       });
    //     });
    //   });

    // }

    return (
        <View style={styles.container}>
            <View style={styles.localContainer}>

                <Text style={styles.textStyle}>Name: {fName} {lName}</Text>
                <Text style={styles.textStyle}>City: {cityName}</Text>
                <Text style={styles.textStyle}>Phone: {phoneNum}</Text>

            </View>
        </View>
    );

}

export default TabMyTasksVC;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'orange',
       
    },

    localContainer: {
        alignItems:'flex-start',
        marginHorizontal:20,
        marginTop:50

    },

    textStyle: {

        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
       

    }


});