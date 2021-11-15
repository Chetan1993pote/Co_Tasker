import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import AppTheme from '../../../AppTheme';
import As_A_Client from './My_Tasks_Contents/As_A_Client';
import As_A_Co_tasker from './My_Tasks_Contents/As_A_Co_tasker';
import { useNavigation } from '@react-navigation/native';


var menu = require('../TabIcons/menu.png')

const win = Dimensions.get('window');

const TabMyTasksVC = () => {

    const navigation = useNavigation();

    navigation.setOptions({
        headerLeft: () => <Pressable onPress={() => 
        navigation.toggleDrawer()}>
            <Image
                resizeMode='contain'
                source={menu}
                style={{ height: 18, width: 18 ,margin:15}} />

        </Pressable>
    });

    const [selected, setSelected] = useState('0')

    const onChangeTab = (index) => {
        setSelected(index)

    };

    return (
        <View style={styles.container}>
            <View style={styles.tabBackView}>
                <Pressable style={{ backgroundColor: selected === '0' ? '#F6BF48' : '#00000000', flex: 1, justifyContent: 'center', borderRadius: 45 / 2 }}
                    onPress={() => onChangeTab('0')}>
                    <Text style={{ fontSize: 16, fontFamily: AppTheme.regularfont, color: selected === '0' ? 'white' : 'grey', textAlign: 'center' }}> As a Co-Tasker </Text>
                </Pressable>

                <Pressable style={{ backgroundColor: selected === '1' ? '#F6BF48' : '#00000000', flex: 1, justifyContent: 'center', borderRadius: 45 / 2, }}
                    onPress={() => onChangeTab('1')}>
                    <Text style={{ fontSize: 16, fontFamily: AppTheme.regularfont, color: selected === '1' ? 'white' : 'grey', textAlign: 'center' }}> As a Client </Text>
                </Pressable>

            </View>

            <View>
                {selected === '0' ? <As_A_Co_tasker /> : <As_A_Client />}
            </View>
        </View>
    );

}

export default TabMyTasksVC;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',

    },

    tabBackView: {
        flexDirection: 'row',
        marginVertical: win.width * 0.03,
        marginHorizontal: win.width * 0.05,
        backgroundColor: '#EBECEE',
        height: 45,
        borderRadius: 50 / 2,


    }


});