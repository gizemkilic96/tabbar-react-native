import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Splash from "./pages/Countries/Splash";
import Ekran3 from "./pages/QR/Ekran3";
import QRiceik from "./pages/QR/QRiceik";

const Stack = createNativeStackNavigator();

export const QRStack = () => {
    return (
        <Stack.Navigator

        >
            <Stack.Screen name='QRiceik'
                component={QRiceik}
                options={{
                    title: "QRiceik",


                }}
            />
            <Stack.Screen name='Ekran3'
                component={Ekran3}
                options={{
                    title: "Ekran3",


                }}
            />

        </Stack.Navigator>
    )
}