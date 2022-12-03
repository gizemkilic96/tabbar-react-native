import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import AllRoutes1 from "./pages/AllRoutes/AllRoutes1";

const Stack = createNativeStackNavigator();

export const AllRoutesStack = () => {
    return (
        <Stack.Navigator
          
        >
            <Stack.Screen name='AllRoutes1'
                component={AllRoutes1}
                options={{
                    title: "AllRoutes1",
                
                        
                }}
            />

        </Stack.Navigator>
    )
}