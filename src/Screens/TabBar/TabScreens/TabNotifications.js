import { View,Text ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const TabNotifications = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
             <View>
                    <Text style={styles.screenText}> Notificationss</Text>
                </View>
        </View>
    );

}

export default TabNotifications;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'blue',
        justifyContent:'center'
    },

    screenText:{
        fontSize:20,
        color:'white',
        alignContent:'center'
        
    }
  

});