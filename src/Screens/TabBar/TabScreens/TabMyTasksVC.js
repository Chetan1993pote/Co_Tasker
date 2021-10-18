import { View,Text ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


const TabMyTasksVC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
             <View>
                    <Text style={styles.screenText}> My Tasks</Text>
                </View>
        </View>
    );

}

export default TabMyTasksVC;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'orange',
        justifyContent:'center'
    },

    screenText:{
        fontSize:20,
        color:'white',
        alignContent:'center'
        
    }
  

});