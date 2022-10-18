import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/feature/restaurants/screens/restaurants.sceen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastucture/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from '@expo/vector-icons'
import { RestaurantsContextProvider } from "./src/sevices/restaurants/restaurants.contex"
import { LocationContextProvider } from "./src/sevices/location/location.context";

export default function App() {

  const Tab = createBottomTabNavigator();

  const Setting = () => <SafeArea><Text>Setting</Text></SafeArea>
  const Map = () => <SafeArea><Text>Map</Text></SafeArea>

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const TAB_ICON: any = {
    Restaurants: 'md-restaurant',
    Settings: 'md-settings',
    Map: 'md-map'
  }

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Setting} />
              </Tab.Navigator>

            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
