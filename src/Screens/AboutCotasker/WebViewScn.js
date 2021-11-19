import React, { useState } from 'react';
import { Dimensions, View, ActivityIndicator, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppTheme from '../../AppTheme';
import { WebView } from 'react-native-webview';

const win = Dimensions.get('window');

var backImg = require('../TabBar/TabIcons/back_white.png');


function WebViewScn({ route, navigation }) {

    const [isLoader, setloader] = useState(true)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.headerTitle,
            headerTitleStyle:{
                fontFamily:AppTheme.semiboldfont,
                fontSize:18
                
            },
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: AppTheme.appThemeColor
            },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    resizeMode='contain'
                    source={backImg}
                    style={{ height: 18, width: 18 }} />

            </TouchableOpacity>
        });
    }, [navigation]);

    return (

        <View style={{ height: win.height, width: win.width }}>
            <WebView source={{ uri: route.params.webLink }}
                onLoadStart={() => setloader(true)}
                onLoad={() => setloader(false)} />
            {isLoader && (
                <ActivityIndicator
                    style={styles.indicatorStyle}
                    color={AppTheme.appThemeColor}
                />
            )}
        </View>


    )
}

export default WebViewScn;


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 17,
        marginHorizontal: win.width * 0.05,
        color: AppTheme.appThemeColor,
        fontFamily: AppTheme.regularfont
    },

    indicatorStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

});