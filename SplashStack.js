import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Splash from "./pages/Countries/Splash";
import Ekran5 from "./pages/Splash/Ekran5";

const Stack = createNativeStackNavigator();

export const SplashStack = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name='Ekran5'
                component={Ekran5}
                options={{
                    title: "Ekran5",  
                }}
            />

        </Stack.Navigator>
    )
}