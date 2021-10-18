import { View,Text ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const TabPostVC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
             <View>
                    <Text style={styles.screenText}> Post a Task</Text>
                </View>
        </View>
    );

}

export default TabPostVC;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'pink',
        justifyContent:'center'
    },

    screenText:{
        fontSize:20,
        color:'white',
        alignContent:'center'
        
    }
  

});