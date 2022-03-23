import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react'
import { ProfileScreen, HomeScreen } from '../screens'
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../core/theme';

const Main = () => {
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: theme.colors.primary},
            activeColor: theme.colors.secondary, 
            tabBarActiveTintColor: theme.colors.tint, 
            tabBarInactiveTintColor: theme.colors.secondary,
        }}
    >
        <Tab.Screen
            name="HomeTab"
            component={HomeScreen}
            options={{
                tabBarIcon: () => (
                  <Ionicons name="home" size={20} color={theme.colors.tint} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: () => (
                  <Ionicons name="person-circle" size={20} color={theme.colors.tint} />
                ),
            }}
        />
    </Tab.Navigator>
    )
}

export default Main