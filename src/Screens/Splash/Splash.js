
import { View,Image ,StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

var logo = require('./logo.png');

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 5000);
      }, []);
    

    return (
        <View style={styles.container}>
             <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={logo}
                        style={{ height: 220, width: 150 }}></Image>
                </View>
        </View>
    );

}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0f203a'
    },
  

});