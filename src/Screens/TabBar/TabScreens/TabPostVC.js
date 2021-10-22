import { View, Text, Dimensions, FlatList, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const win = Dimensions.get('window');


const TabPostVC = () => {

    const [arr_News, setNews] = useState([]);

    useEffect(() => {
        getNewsfromApi()

    }, []);

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

    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                data={arr_News.articles}
                keyExtractor={(item, index) => 'key' + index}

                renderItem={({ item, index }) => (
                    <View style={styles.cellContainer}>
                        <Text style={styles.title}> {item.title} </Text>
                        <Text style={styles.author}> {item.author}</Text>
                        <Image style={styles.image} source = {{uri: item.urlToImage}}/>
                        <Text style={styles.description}> {item.description}</Text>

                    </View>

                )}

            ></FlatList>
        </View>
    );

}

export default TabPostVC;

const styles = StyleSheet.create({
    cellContainer: {
        marginVertical: 6,
        backgroundColor: 'white',
        margin: win.width * 0.03,
        borderRadius: win.width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3
    },

    title: {
        margin: win.width * 0.03,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    description: {
        marginVertical: win.width * 0.03,
        marginHorizontal: win.width * 0.03,
        color: 'gray',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'justify'

    },
    image: {
        height: win.height / 6,
        marginLeft: win.width * 0.03,
        marginRight: win.width * 0.03,
        marginVertical: win.height * 0.02,
       
    },

    author: {
        marginVertical: win.height * 0.01,
        marginHorizontal: win.width * 0.03,
        color: 'red',
        fontSize: 15,
        textAlign: 'right',
        fontWeight: '500',
    },

});