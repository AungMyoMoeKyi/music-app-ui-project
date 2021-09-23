import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native';
import Colors from "../constants/colors";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DummyData from '../Mock/Dummy';

const { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }) {

    const _renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={{
                    marginLeft : index === 0? 8:0,
                    marginRight: index === DummyData.RecentAlbums.length - 1?0:10
                }}>
                    <Image style={styles.musicAlbumImage} key={index} source={item.thumbnail} />
                    <Text style={styles.albumInfo}>{item.title}</Text>
                    <Text style={styles.gothamLightFont}>{item.artist}</Text>
                    <Text style={styles.gothamLightFont} style={{ color: Colors.alert, marginBottom: 20 }}>Purchase</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                <View style={styles.navigation}>
                    <Text style={styles.title}>Home</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Ionicons name="notifications" size={24} color="white" style={{ marginLeft: 180 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <Feather name="menu" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Recent Played</Text>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('AlbumSongs')}}>
                    {/* <Image style={styles.musicAlbumImage} source={require('../assets/eyeswideopen.jpg')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/breakthrough.png')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/fancyyou.jpg')}></Image> */}
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
                {/* <View>
                    <Text style={styles.albumInfo}>Album Title</Text>
                    <Text style={styles.gothamLightFont}>Singer</Text>
                    <Text style={styles.gothamLightFont} style={{ color: Colors.alert, marginBottom: 20 }}>Purchase</Text>
                </View> */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Latest Album</Text>
                </View>
                <View>
                    {/* <Image style={styles.musicAlbumImage} source={require('../assets/KnockKnock.png')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/merryandhappy.jpg')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/moreandmore.jpg')}></Image> */}
                    <FlatList
                        keyExractor={(item) => 'recent' + item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                        data={DummyData.LatestAlbum}
                        renderItem={_renderItem}
                    />
                </View>
                {/* <View>
                    <Text style={styles.albumInfo}>Album Title</Text>
                    <Text style={styles.gothamLightFont}>Singer</Text>
                    <Text style={styles.gothamLightFont} style={{ color: Colors.alert, marginBottom: 20 }}>Purchase</Text>
                </View> */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Top Charts</Text>
                </View>
                <View>
                    {/* <Image style={styles.topChartsImage} source={require('../assets/whatislove.jpg')}></Image>
                    <Image style={styles.topChartsImage} source={require('../assets/feelspecial.jpg')}></Image>
                    <Image style={styles.topChartsImage} source={require('../assets/Ouah-ouah.jpg')}></Image> */}
                     <FlatList
                        keyExractor={(item) => 'recent' + item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                        data={DummyData.TopCharts}
                        renderItem={_renderItem}
                    />
                </View>
                </ScrollView>
                <View style={styles.backgroundMusicLayer}>
                    <Image style={styles.backgroundMusic} source={require('../assets/breakthrough.png')}></Image>
                    <View>
                        <Text style={{ fontSize: 15, color: Colors.text, lineHeight: 30, marginRight: 120 }}>Breakthrough</Text>
                        <Text style={{ fontSize: 11, color: Colors.text }}>Twice</Text>
                    </View>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="md-pause-outline" size={30} color="white" style={{ marginTop: 9 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <MaterialIcons name="skip-next" size={31} color="white" style={{ marginTop: 9 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomButtonNavigation}>
                    <TouchableOpacity onPress={() => { }}>
                        <AntDesign name="home" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="library-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.labelNavigation}>
                    <Text style={{ color: Colors.text }}>Home</Text>
                    <Text style={{ color: Colors.text }}>Search</Text>
                    <Text style={{ color: Colors.text }}>Library</Text>
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 20,
    },
    titleContainer: {
        marginBottom: 10
    },
    title: {
        color: Colors.text,
        fontSize: 20,
        //fontWeight: 'bold',
        fontFamily: 'gotham-bold'
    },
    musicAlbumContainer: {
        width: 540,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    musicAlbumImage: {
        width: 170,
        height: 170,
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
        //fontFamily: 'gotham-medium'
    },
    gothamLightFont: {
        color: Colors.text,
        fontFamily: 'gotham-light'
    },
    bottomButtonNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    labelNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    },
    backgroundMusicLayer: {
        padding: 10,
        backgroundColor: 'rgba(255, 250, 255, 0.1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backgroundMusic: {
        width: 50,
        height: 50,
        borderRadius: 10
    }

})

export default HomeScreen;