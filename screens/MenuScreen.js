import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function MenuScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.profileInfoContainer}>
                <View style={styles.profileImage}>
                    <TouchableOpacity onPress={() => { }}>
                        <FontAwesome5 name="user-circle" size={80} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={{ color: Colors.text, fontSize:17, lineHeight:40}}>Name     : User Name</Text>
                    <Text style={{ color: Colors.text, fontSize:17}}>Table ID : 01343434343</Text>
                </View>
            </View>
            <View>
                <View style={styles.myProfileLayer}>
                    <Text style={styles.font}>My Profile</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                        <Ionicons name="chevron-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.paymentLayer}>
                    <Text style={styles.font}>Payment</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Ionicons name="chevron-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.themeLayer}>
                    <Text style={styles.font}>Theme</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Ionicons name="chevron-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.settingLayer}>
                    <Text style={styles.font}>Setting</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Ionicons name="chevron-forward" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.logout} onPress={()=>{}}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    backward: {
        marginTop: 60,
    },
    profileInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
    },
    profileImage:{
        marginLeft:18,
        marginTop: 12,
    },
    infoContainer:{
        marginRight:100,
        marginTop:15,
    },
    myProfileLayer:{
        marginTop:100,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    paymentLayer:{
        marginLeft:15,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    themeLayer:{
        marginLeft:15,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    settingLayer:{
        marginLeft:15,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    font:{
        color:Colors.text,
        fontSize:15,
        //fontFamily:'gotham-medium'
    },
    logout:{
        backgroundColor:'#ffffff',
        width:300,
        height:50,
        marginTop:200,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:'10%'
    }
})

export default MenuScreen;