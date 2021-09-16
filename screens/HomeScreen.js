import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import Colors from "../constants/colors";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

function HomeScreen  ({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.navigation}>
                    <Text style={styles.title}>Home</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Ionicons name="notifications" size={24} color="white" style={{ marginLeft: 180 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <Feather name="menu" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Lastest Album</Text>
                </View>
                <View style={styles.musicAlbumContainer}>
                    <Image style={styles.musicAlbumImage} source={require('../assets/eyeswideopen.jpg')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/breakthrough.png')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/fancyyou.jpg')}></Image>
                </View>
                <View>
                    <Text style={styles.albumInfo}>Album Title</Text>
                    <Text style={styles.albumInfo}>Singer</Text>
                    <Text style={styles.albumInfo} style={{ color: Colors.alert, marginBottom: 20 }}>Purchase</Text>
                </View>
                <View style={styles.musicAlbumContainer}>
                    <Image style={styles.musicAlbumImage} source={require('../assets/KnockKnock.png')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/merryandhappy.jpg')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/moreandmore.jpg')}></Image>
                </View>
                <View>
                    <Text style={styles.albumInfo}>Album Title</Text>
                    <Text style={styles.albumInfo}>Singer</Text>
                    <Text style={styles.albumInfo} style={{ color: Colors.alert, marginBottom: 20 }}>Purchase</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Top Charts</Text>
                </View>
                <View style={styles.musicAlbumContainer}>
                    <Image style={styles.musicAlbumImage} source={require('../assets/whatislove.jpg')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/feelspecial.jpg')}></Image>
                    <Image style={styles.musicAlbumImage} source={require('../assets/Ouah-ouah.jpg')}></Image>
                </View>
                {/* <View style={styles.backgroundMusicLayer}>
                    <Image style={styles.backgroundMusic} source={require('../assets/breakthrough.png')}></Image>
                </View> */}
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
            </ScrollView>
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
        marginBottom: 50,
    },
    titleContainer: {
        marginBottom: 10
    },
    title: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold'
    },
    musicAlbumContainer: {
        width: 450,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    musicAlbumImage: {
        width: 140,
        height: 160,
    },
    albumInfo: {
        color: Colors.text
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
    // backgroundMusicLayer:{
    //     width:500,
    //     height:100,
    //     marginTop:20,
    //     padding:10,
    // },
    // backgroundMusic:{
    //     width:50,
    //     height:50,
    //     borderRadius:10
    // }

})

export default HomeScreen;