import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';





export default Splash = () => {
/* 
    setTimeout(() => {
        navigation.navigate('QR', { screen: 'Ekran3' })
   
    }, 2000); */

    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity   >
                <Text>tıkla</Text>
            </TouchableOpacity>
            <Text> Splash Screen</Text>
        </View>
    )
}