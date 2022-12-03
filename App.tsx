import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AllRoutesStack } from "./AllRoutesStack";
import { ContriesStack } from "./CountriesStack";
import { QRStack } from "./QRStack";
import { SplashStack } from "./SplashStack";

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Ekran5'
                screenOptions={{
                    tabBarHideOnKeyboard: true
                }}
            >
                <Tab.Screen name="Splash" component={SplashStack} options={{ headerShown: false,
                tabBarStyle: {
                        display: 'none'
                    } }} />

                <Tab.Screen name="ContriesStack" component={ContriesStack} options={{
                    headerShown: false,
                    
                }} />
                <Tab.Screen name="AllRoutesStack" component={AllRoutesStack} options={{ headerShown: false }} />
                <Tab.Screen name="QR" component={QRStack} options={{ headerShown: false }} />

            </Tab.Navigator>
        </NavigationContainer>

    )
}
