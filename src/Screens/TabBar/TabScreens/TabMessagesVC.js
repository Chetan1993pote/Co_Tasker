import { View,Text ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const TabMessagesVC = () => {

    const navigation = useNavigation();

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