import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default Ekran5= () => {

   
    setTimeout(() => {
        navigation.navigate('QR', { screen: 'Ekran3' })
   
    }, 2000);  

    const navigation = useNavigation();
    return (
        <View>
            <Text> Ekran5 Screen</Text>
        </View>
    )
}