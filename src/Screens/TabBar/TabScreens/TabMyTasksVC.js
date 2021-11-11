import { View, Text, StyleSheet, Alert, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';
import FontTheme from '../../../FontTheme';


const win = Dimensions.get('window');

const TabMyTasksVC = () => {

    const [selected, setSelected] = useState('0')

    const onChangeTab = (index) => {
        setSelected(index)

    };

    return (
        <View style={styles.container}>
            <View style={styles.tabBackView}>
                <Pressable style={{ backgroundColor: selected === '0' ? '#F6BF48' : '#00000000', flex: 1, justifyContent: 'center', borderRadius: 45 / 2 }}

                    onPress={() => onChangeTab('0')}>

                    <Text style={{ fontSize: 16, fontFamily: FontTheme.regularfont, color: selected === '0' ? 'white' : 'grey', textAlign: 'center' }}> As a Co-Tasker </Text>

                </Pressable>

                <Pressable style={{ backgroundColor: selected === '1' ? '#F6BF48' : '#00000000', flex: 1, justifyContent: 'center', borderRadius: 45 / 2, }}

                    onPress={() => onChangeTab('1')}>
                    <Text style={{ fontSize: 16, fontFamily: FontTheme.regularfont, color: selected === '1' ? 'white' : 'grey', textAlign: 'center' }}> As a Client </Text>


                </Pressable>




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