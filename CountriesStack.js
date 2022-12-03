import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Splash from "./pages/Countries/Splash";

const Stack = createNativeStackNavigator();

export const ContriesStack = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name='Splash'
                component={Splash}
                options={{
                    title: "Splash",  
                }}
            />

        </Stack.Navigator>
    )
}