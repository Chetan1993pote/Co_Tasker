import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const win = Dimensions.get('window');

var backImg = require('.././TabBar/TabIcons/back_white.png');

const PostATask = () => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Post a Task',
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


    return (

        <View style={styles.container}>


        </View>


    );
}

export default PostATask;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'yellow',

    },

});