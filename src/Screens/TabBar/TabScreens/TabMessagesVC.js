import { View,Text ,StyleSheet,Pressable,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

var menu = require('../TabIcons/menu.png')

const TabMessagesVC = () => {

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


    return (
        <View style={styles.container}>
             <View>
                    <Text style={styles.screenText}> Messages</Text>
                </View>
        </View>
    );

}

export default TabMessagesVC;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'green',
        justifyContent:'center'
    },

    screenText:{
        fontSize:20,
        color:'white',
        alignContent:'center'
        
    }
  

});