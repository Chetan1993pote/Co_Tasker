
import { View, Text, StyleSheet, Image, Icon, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SliderText from 'react-native-slider-text';
import { Switch } from 'react-native-paper';


var downArw = require('../TabBar/TabIcons/down_arrow.png');
var locationPin = require('../TabBar/TabIcons/pinLocation.png');
var unselected_Img = require('../ChooseIntrest/unselected.png');
var selected_Img = require('../ChooseIntrest/selected.png');
var backImg = require('../Screens/TabBar/TabIcons/back_white.png');


const win = Dimensions.get('window');



const filterTasks = () => {
    const navigation = useNavigation();
    const [sliderValue, setSliderValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const arr_Data = [
        {
            id: '1',
            title: 'In-person',
        },
        {
            id: '2',
            title: 'Remote',
        },
        {
            id: '3',
            title: 'Both',
        },
    ];

    actionOnRow = (item, index) => {
        console.log('Selected Item :', item.id);
        setSelectedIndex(index)
        console.log('Selected Item :', selectedIndex);


    }


    return (
        <View style={styles.container}>

            <Text style={{ color: 'gray', margin: 15, fontWeight: '500' }}>Category</Text>
            <TouchableOpacity style={{
                flexDirection: 'row', justifyContent: 'space-between'}}

                onPress={() => { navigation.navigate('selectCategory') }}>

                <Text style={{ color: 'gray', marginTop: 1, marginLeft: 15 }}>Select Category</Text>

                <Image
                    resizeMode='contain'
                    source={downArw}
                    style={{ height: 20, width: 18, marginEnd: 20 }}
                />

            </TouchableOpacity>


            <View
                style={{
                    marginTop: 8, borderBottomColor: '#C5C5C5', borderBottomWidth: 1,
                    width: win.width - 30, alignSelf: 'center'
                }}
            />

            <View
                style={{
                    marginTop: 10, backgroundColor: '#F5F5F5',
                    width: win.width, height: 8, opacity: 0.5
                }}
            />

            <Text style={{ color: 'gray', margin: 15, fontWeight: '500' }}>Where would you like to find tasks?</Text>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            
            onPress={() => { navigation.navigate('selectLocation') }}>
            

                <Text style={{ color: '#000', fontWeight: '500', marginLeft: 15 }}>Gandhinagar,Gujrat,Maharashtra</Text>

                <Image
                    resizeMode='contain'
                    source={locationPin}
                    style={{ height: 20, width: 18, marginEnd: 20 }}
                />
            </TouchableOpacity>

            <View
                style={{
                    marginTop: 8, borderBottomColor: '#C5C5C5', borderBottomWidth: 1,
                    width: win.width - 30, alignSelf: 'center'
                }}
            />

            <View
                style={{
                    marginTop: 10, backgroundColor: '#F5F5F5',
                    width: win.width, height: 8, opacity: 0.5
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                <Text style={{ color: 'grey', fontWeight: '500', marginLeft: 15 }}>Radius</Text>
                <Text style={{ color: '#000', fontWeight: 'bold', marginEnd: 15 }}>KM</Text>
            </View>

            <View style={{ marginTop: -20 }}>


                <SliderText
                    minimumValue={1}

                    sliderValue={50}
                    sliderValueStyle={{ color: 'green' }}
                    minimumTrackTintColor="#ffbf00"
                    multiplier={1.14}
                    thumbTintColor="#ffbf00"
                    maximumTrackTintColor='grey'
                    customCountStyle={{ fontSize: 16, fontWeight: '600' }}
                    minimumValueLabel=' '
                    maximumValueLabel=' '
                    maximumValue={100} stepValue={1} onValueChange={(id) => setSliderValue(id)} sliderValue={sliderValue} />
            </View>

            <View
                style={{
                    marginTop: -50, backgroundColor: '#F5F5F5',
                    width: win.width, height: 8, opacity: 0.5
                }}
            />

            <Text style={{ color: 'gray', margin: 15, fontWeight: '500' }}>Type of tasks</Text>
            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={arr_Data}

                    keyExtractor={item => item.id}

                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={() => this.actionOnTab(item, index)}>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                                <Image source={(selectedIndex == index) ? selected_Img : unselected_Img}

                                    style={{ height: 20, width: 20 }} />
                                <View style={{ alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: 'black',
                                        fontWeight: '600',

                                    }}>{item.title}</Text>


                                </View>
                            </View>

                        </TouchableOpacity>
                    )}

                ></FlatList>
            </View>


            <View
                style={{
                    marginTop: 15, backgroundColor: '#F5F5F5',
                    width: win.width, height: 8, opacity: 0.5
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10 }}>

                <Text style={{ color: 'gray', margin: 15, fontWeight: '500' }}>Show available tasks only</Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }} thumbColor='#ffbf00' />


            </View>

            <View
                style={{
                    backgroundColor: '#F5F5F5',
                    width: win.width, height: 8, opacity: 0.5
                }}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        navigation.goBack()
                    }}>

                    <Text style={styles.buttonText}>Apply Filter</Text>
                </TouchableOpacity>
            </View>



        </View>


    );


}

export default filterTasks;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
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
        fontWeight: '500',
        textAlign: 'center'
    },



});