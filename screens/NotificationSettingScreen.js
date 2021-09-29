import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import Colors from '../constants/colors';

function NotificationSettingScreen({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 26.19 }}>Notification Setting</Text>
            </View>
            <View style={styles.notificationContainer}>
                <Text style={styles.newAlbumText}>New Album</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] ,marginRight:11}}
                />
            </View>
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
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginLeft: 11,
    },
    newAlbumText: {
        color: Colors.text,
        fontSize: 12,
        fontFamily: 'gotham-light',
        padding:10
    }
})

export default NotificationSettingScreen;