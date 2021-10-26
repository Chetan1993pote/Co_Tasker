import { View,Text ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';



const TabBrowseTasks = () => {

    const navigation = useNavigation();



    return (
        <View style={styles.container}>
             <View>
                    <Text style={styles.screenText}> Browse Tasks</Text>
                </View>
        </View>
    );

}

export default TabBrowseTasks;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'yellow',
        alignContent:'center',
    
        //alignItems:'center',
    },

    screenText:{
        fontSize:20,
        color:'black',
        alignContent:'center',
        alignSelf:'center',
    }
  

});