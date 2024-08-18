import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/iu/Home";
import CartScreen from "./src/iu/CartScreen";
import FavoritesScreen from "./src/iu/FavoritesScreen";
import ProfileScreen from "./src/iu/ProfileScreen";
import SesionScreen from "./src/iu/SesionScreen";
import RegisterScreen from "./src/iu/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTab() {
    return (
        <Tab.Navigator initialRouteName="home" >
            <Tab.Screen name="home" component={Home} options={{ tabBarLabel: "", headerShown: false }} />
            <Tab.Screen name="cart" component={CartScreen} options={{ tabBarBadge: 3, tabBarLabel: "Carrito", headerShown: false }} />
            <Tab.Screen name="favorites" component={FavoritesScreen} options={{ tabBarBadge: 20, tabBarLabel: "Mis Favoritos", headerShown: false }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{ tabBarLabel: "Opciones", headerShown: false }} />
        </Tab.Navigator>
    );
}

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={MainTab} options={{ headerShown: false }} />
            <Stack.Screen name="sesion" component={SesionScreen} options={{ headerShown: false }} />
            <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

export default Navigation;
