import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Colors from "../constants/colors";
import DummyData from '../Mock/Dummy';

const { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }) {

    const _renderItem = ({ item, index }) => {
        return (
            <View> 
                
                <View style={{
                    marginLeft: index === 0 ? 8 : 0,
                    marginRight: index === DummyData.RecentAlbums.length - 1 ? 0 : 10
                }}>
                    <Image style={styles.musicAlbumImage} key={index} source={item.thumbnail} />
                    <Text style={styles.albumInfo}>{item.title}</Text>
                    <Text style={styles.artist}>{item.artist}</Text>
                    <Text style={styles.artist} style={{ color: Colors.alert, marginBottom: 20 }}>0.00MMK</Text>
                </View>
            </View>
        )
    }

    const _renderItemTopChart = ({ item, index }) => {
        return (
            <View>
                <View style={{
                    marginLeft: index === 0 ? 8 : 0,
                    marginRight: index === DummyData.TopCharts.length - 1 ? 0 : 10
                }}>
                    <Image style={styles.TopChartAlbumImage} key={index} source={item.thumbnail} />
                    <Text style={styles.albumInfo}>{item.title}</Text>
                    <Text style={styles.artist}>{item.artist}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerNavigation}>
                <Text style={styles.title}>Home</Text>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Image source={require('../assets/notification.png')} style={{width:17,height:19,marginLeft:237}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={require('../assets/menu.png')} style={{width:19,height:15.4,marginRight:11,marginLeft:15,marginTop:4}}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Recent Played</Text>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('AlbumSongs') }}>
                        <FlatList
                            keyExractor={(item) => 'recent' + item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{}}
                            data={DummyData.RecentAlbums}
                            renderItem={_renderItem}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Latest Album</Text>
                </View>
                <View>
                    <FlatList
                        keyExractor={(item) => 'recent' + item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                        data={DummyData.LatestAlbum}
                        renderItem={_renderItem}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Top Charts</Text>
                </View>
                <View>
                    <FlatList
                        keyExractor={(item) => 'recent' + item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                        data={DummyData.TopCharts}
                        renderItem={_renderItemTopChart}
                    />
                </View>
            </ScrollView>
            <View style={styles.footerNavigation}>
                <TouchableOpacity onPress={() => { }}>
                    <Image style={{ width: 25, height: 40 }} source={require('../assets/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Image style={{ width: 35, height: 40 }} source={require('../assets/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Image style={{ width: 35, height: 39 }} source={require('../assets/library.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
    },
    headerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 27,
        marginBottom: 20,
    },
    titleContainer: {
        marginBottom: 11
    },
    title: {
        color: Colors.text,
        fontSize: 21,
        fontFamily: 'gotham-bold',
        marginLeft: 11
    },
    musicAlbumContainer: {
        width: 540,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    musicAlbumImage: {
        width: 153,
        height: 153,
    },
    TopChartAlbumImage: {
        width: 113,
        height: 113,
    },
    topChartsImageContainer: {
        width: 360,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topChartsImage: {
        width: 110,
        height: 110,
    },
    albumInfo: {
        color: Colors.text,
        fontSize: 8,
        fontFamily: 'gotham-medium'
    },
    artist: {
        color: Colors.text,
        fontFamily: 'gotham-light',
        fontSize: 8
    },
    footerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        marginTop:14.15
        //backgroundColor:'red',
    },
    backgroundMusic: {
        width: 50,
        height: 50,
        borderRadius: 10
    }

})

export default HomeScreen;