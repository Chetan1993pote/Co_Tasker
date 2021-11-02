import { View, Text, Dimensions, FlatList, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const win = Dimensions.get('window');
const numColumns = 3;

const TabPostVC = () => {

    const [arr_News, setNews] = useState([]);

    useEffect(() => {
        //  getNewsfromApi()

    }, []);

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
                <Text style={{ fontSize: 18, fontWeight: '600' }}> Good Afternoon Sudhir, </Text>
                <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 5 }}> What do you need help with? </Text>
            </View>
        );
    };

    return (


        <View style={styles.container}>


            {console.log(data.length)}
            <FlatList style={{ height: win.height - 300 }}
                data={data}
                keyExtractor={item => item.title.toString()}
                numColumns={numColumns}

                ListHeaderComponent={ListHeader}

                renderItem={({ item }) => (

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={styles.viewContainer}>
                            <View style={{ flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#0E203A', height: 88, width: 88, borderRadius: 44, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={styles.image} source={{ uri: item.imgIcon }} />
                                </View>
                                <Text style={styles.titleStyle}
                                    numberOfLines={2}
                                >{item.title}</Text>
                            </View>

                        </View>
                    </View>

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

        height: win.width / numColumns,
        width: win.width / numColumns,
        alignItems: 'center'
    },

    image: {
        height: 45,
        width: 45,
    },

    titleStyle: {

        marginTop: 5,
        fontSize: 13,
        color: '#696969',
        fontWeight: 'normal',
        alignSelf: 'center',
        textAlign: 'center'


    },


});