import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function AlbumSongsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.musicAlbumImageContainer}>
                <Image style={styles.musicAlbumImage} source={require('../assets/breakthrough.png')} />
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                    <Text style={styles.albumTitle}>Breakthrough</Text>
                    <Text style={styles.font}>Twice</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.font}>10000 MMK</Text>
                        <TouchableOpacity style={styles.buyNowButton} onPress={() => { }}>
                            <Text style={styles.buyNowText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <ScrollView>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>One more time</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>Go Go</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>Cry for me</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>Once again</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>Breakthrough</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>Dance the night away</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>Love me</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>Yes or Yes</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
                <View style={styles.songsContainer}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 15, color: Colors.text }}>What is love</Text>
                    <Text style={styles.font}>Twice</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    backward: {
        marginTop: 60,
        flexDirection: 'row',
    },
    musicAlbumImageContainer: {
        marginTop: 40,
        marginLeft: 10,
        flexDirection: 'row',
    },
    musicAlbumImage: {
        width: 120,
        height: 120
    },
    albumTitle: {
        color: Colors.text,
        fontSize: 25,
        fontFamily: 'gotham-bold',
        lineHeight: 30
    },
    font: {
        color: Colors.text,
        fontSize: 15,
        fontFamily: 'gotham-light',
        lineHeight: 30
    },
    buyNowButton: {
        marginLeft: 10, 
        backgroundColor: '#E50914', 
        borderRadius: 10, 
        width: 90, 
        height: 30, 
        justifyContent: 'center'
    },
    buyNowText:{
        color: Colors.text, 
        fontFamily: 'gotham-bold', 
        fontSize: 10, 
        textAlign: 'center'
    },
    songsContainer: {
        marginLeft: 10,
        marginTop: 25,
    }
})

export default AlbumSongsScreen;