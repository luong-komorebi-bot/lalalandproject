import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function TabBarIconCenter (props) {
        return (
            <TouchableOpacity style={{width:60, height: 60, backgroundColor: '#fdce09' ,borderRadius:50,
                                    justifyContent: 'center',borderWidth: 2,
                                    borderColor: 'black',

                                    }}>
                <View  style={{justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons
            name={props.name}
            size={26}
            style={{  }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefaultChat}/>
            </View>
          </TouchableOpacity>
        )
    
}
