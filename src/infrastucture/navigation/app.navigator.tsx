
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsScreen } from "../../feature/restaurants/screens/restaurants.sceen";
import { RestaurantsNavigator } from './restaurant.navigator';


const Tab = createBottomTabNavigator();
const TAB_ICON: any = {
    Restaurants: 'md-restaurant',
    Settings: 'md-settings',
    Map: 'md-map'
}

const Setting = () => <SafeArea><Text>Setting</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>

const createScreenOptions = ({ route }: any) => {
    const iconName = TAB_ICON[route.name];
    return {
        headerShown: false,
        tabBarIcon: ({ size, color }: any) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};
export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
