import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Colors from '../constants/colors';

function AboutTableScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    {/* <Ionicons name="chevron-back" size={24} color="white" /> */}
                    <Image source={require('../assets/backward.png')} style={{marginLeft:12.18,width:9.63,height:15.42}}/>
                </TouchableOpacity>
                <Text style={{ color: Colors.text,fontFamily:'gotham-bold',fontSize:13,marginLeft:26.19}}>About Table</Text>
            </View>
            <View style={styles.aboutContainer}>
                <Text style={styles.font}>Version</Text>
                <Text style={[styles.font,{marginRight:11}]}>V 1.0.1</Text>
            </View>
            <Text style={[styles.font,{marginLeft:11}]}>Rate Table</Text>
            <Text style={[styles.font,{marginLeft:11}]}>Terms of Service</Text>
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
    aboutContainer: {
        marginTop: 53,
        marginLeft:11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    font: {
        color: Colors.text,
        fontSize: 12,
        marginBottom: 28,
        fontFamily:'gotham-light'
    },
})

export default AboutTableScreen;