import React from 'react';
import { Dimensions, Image, View, Text, FlatList, Linking, ImageBackground, TouchableOpacity, StyleSheet, Settings, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../AppTheme';

const win = Dimensions.get('window');

var backImg = require('../TabBar/TabIcons/back_white.png');

const AboutCotasker = () => {
    const navigation = useNavigation();

    const arr_Data = [{ title: 'Guidelines', link: AppTheme.guideline },
    { title: 'FAQs', link: AppTheme.faqs },
    { title: 'Terms & Conditions', link: AppTheme.termsofUse },
    { title: 'Privacy Policy', link: AppTheme.privacyPolicy },
    { title: 'Imprint', link: AppTheme.imprint }]

    didSelectRowAtItem = (item, index) => {
        console.log('Selected Item :', item, index);
            navigation.navigate('WebViewScn',{
                headerTitle :item.title,webLink:item.link
            })
      
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'About Co-Tasker',
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
        <FlatList

            data={arr_Data}
            extraData={this.state}
            keyExtractor={item => item.title}

            renderItem={({ item, index }) => (
                <TouchableOpacity style={{ marginTop: 12 }} onPress={() => this.didSelectRowAtItem(item, index)}>
                    <Text style={styles.textStyle}>{item.title}</Text>
                    <View style={{ height: 1, backgroundColor: 'grey', width: win.width, marginTop: 12 }} />
                </TouchableOpacity>

            )}

        ></FlatList>

    )
}

export default AboutCotasker;


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 17,
        marginHorizontal: win.width * 0.05,
        color: AppTheme.appThemeColor,
        fontFamily: AppTheme.regularfont
    },

});