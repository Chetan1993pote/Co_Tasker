import { View,Text ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import axios from 'axios';



const TabPostVC = () => {

    const navigation = useNavigation();

    useEffect(() => {
           //Calling Api at page load
           axios.get('https://reqres.in/api/users?page=2')
           .then(function (response){
               alert(JSON.stringify(response));
           })
           .catch(function (error) {
               alert(error);
           })

        
      }, []);

    return (
        <View style={styles.container}>
           
                    <Text style={styles.screenText}> Post a Task</Text>


        </View>
    );

}

export default TabPostVC;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'pink',
        
    },

    screenText:{
        alignItems:'center',
        fontSize:25,
        color:'black',
       
        
    }
  

});