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
                    <Text style={{ color: Colors.text, fontSize:15, lineHeight:40}}>Name       :   User Name</Text>
                    <Text style={{ color: Colors.text, fontSize:15}}>Table ID   :   01343434343</Text>
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
                <Text style={{fontFamily:'gotham-bold'}}>Log Out</Text>
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
        marginRight:90,
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
        fontFamily:'gotham-light'
    },
    logout:{
        backgroundColor:'#E50914',
        width:250,
        height:45,
        marginTop:200,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:70,
        borderRadius:20
    }
})

export default MenuScreen;