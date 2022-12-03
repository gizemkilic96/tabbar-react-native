import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default AllRoutes1 = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text> Splash Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('QR',{ screen: 'Ekran3'})}>
                <Text style={{ top: 55, alignSelf: 'center' }}>Git</Text>
            </TouchableOpacity>
        </View>
    )
}