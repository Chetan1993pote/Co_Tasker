import React, { useState } from 'react';

import { View, Text, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AppTheme from '../../../AppTheme';

var menu = require('../TabIcons/menu.png')


const win = Dimensions.get('window');
const numColumns = 3;

const TabPostVC = () => {

    const navigation = useNavigation();
    const [arr_News, setNews] = useState([]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                    resizeMode='contain'
                    source={menu}
                    style={{ height: 18, width: 18, margin: 15 }} />

            </TouchableOpacity>
        });
    }, [navigation]);


    const data = [

        { title: 'Translation', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Translation' },
        { title: 'Packing & Lifting', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Packing%20%26%20Lifting' },
        { title: 'Cleaning', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Cleaning' },
        { title: 'Online', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Online' },
        { title: 'Errands', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Errands' },
        { title: 'Custom', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Custom' },
        { title: 'Photography', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Photography' },
        { title: 'Electrical', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Electrical' },
        { title: 'Delivery', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Delivery' },
        { title: 'Transport & Removals', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Transport%20%26%20Removals' },
        { title: 'Handy Person', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Handy%20Person' },
        { title: 'Painting', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Painting' },
        { title: 'Repairs', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Repairs' },
        { title: 'Assembly', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/4609.7567456980505_Assembly' },
        { title: 'Shopping', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Shopping' },
        { title: 'Events', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Events' },
        { title: 'Alterations', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Alterations' },
        { title: 'Design', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Design' },
        { title: 'Gardening & Plant Care', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Gardening%20%26%20Plant%20Care' },
        { title: 'Plumbing', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Plumbing' },
        { title: 'Ironing', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Ironing' },
        { title: 'Cooking', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Cooking' },
        { title: 'Tutoring', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Tutoring' },
        { title: 'Pet Care', imgIcon: 'https://co-tasker.s3.eu-central-1.amazonaws.com/category_image/Pet%20Care' }];


    function getNewsfromApi() {

        //Calling Api at page load
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=ea2cca43331042ceb31d248e84258910')
            .then(function (response) {
                //  alert(JSON.stringify(response.data));
                if (response != null) {
                    setNews(response.data)
                }

            })
            .catch(function (error) {
                alert(error);
            })

    }

    const ListHeader = () => {
        //View to set in Header
        return (
            <View style={{ margin: 20, flexDirection: 'column', marginVertical: 10 }}>
                <Text style={{ fontSize: 19, fontFamily: AppTheme.boldfont }}> Good Afternoon Sudhir, </Text>
                <Text style={{ fontSize: 18, fontFamily: AppTheme.semiboldfont, marginTop: 5 }}> What do you need help with? </Text>
            </View>
        );
    };

    actionOnRowTap = (item, index) => {

        navigation.navigate('PostATask')

    }

    return (
        <View style={styles.container}>

            <FlatList style={{ height: win.height - 300 }}
                data={data}
                keyExtractor={item => item.title.toString()}
                numColumns={numColumns}

                ListHeaderComponent={ListHeader}

                renderItem={({ item, index }) => (

                    <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }}
                        onPress={() => this.actionOnRowTap(item, index)}>
                        <View style={styles.viewContainer}>
                            <View style={{ flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center' }}>
                                <View style={{ backgroundColor: AppTheme.appThemeColor, height: 88, width: 88, borderRadius: 44, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={styles.image} source={{ uri: item.imgIcon }} />
                                </View>
                                <Text style={styles.titleStyle}
                                    numberOfLines={2}
                                >{item.title}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                )} />
        </View>

    );

}

export default TabPostVC;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },

    viewContainer: {
        height: win.width / 2.8,
        width: win.width / numColumns,
        justifyContent: 'center',
        alignItems:'center'
    },

    image: {
        height: 45,
        width: 45,
    },

    titleStyle: {

        marginTop: 5,
        fontSize: 14,
        color: '#696969',
        fontFamily: AppTheme.regularfont,
        alignSelf: 'center',
        textAlign: 'center'


    },


});