import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../feature/restaurants/screens/restaurants.sceen';
import { RestaurantsDetailScreen } from '../../feature/restaurants/screens/restaurants-detail.sceen';

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalPresentationIOS,
            }} >
            <RestaurantsStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            />
            <RestaurantsStack.Screen
                name="RestaurantsDetail"
                component={RestaurantsDetailScreen}
            />
        </RestaurantsStack.Navigator >
    )
}