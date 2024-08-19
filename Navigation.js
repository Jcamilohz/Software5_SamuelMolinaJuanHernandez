import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/iu/Home";
import CartScreen from "./src/iu/CartScreen";
import FavoriteScreen from "./src/iu/FavoriteScreen";
import OptionScreen from "./src/iu/OptionScreen";
import SesionScreen from "./src/iu/SesionScreen";
import RegisterScreen from "./src/iu/RegisterScreen";
import ProfileScreen from "./src/iu/ProfileScreen";
import BuyScreen from "./src/iu/BuyScreen";
import MyProductScreen from "./src/iu/MyProductScreen";
import ProductSellScreen from "./src/iu/ProductSellScreen";
import HelpScreen from "./src/iu/HelpScreen";
import ProductDetailScreen from "./src/iu/ProductDetailScreen";
import SearchResults from "./src/iu/SearchResultScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();





function MainTab() {
    return (
        <Tab.Navigator initialRouteName="home" >
            <Tab.Screen name="home" component={Home} options={{ tabBarLabel: "", headerShown: false }} />
            <Tab.Screen name="cart" component={CartScreen} options={{ tabBarBadge: 3, tabBarLabel: "Carrito", headerShown: false }} />
            <Tab.Screen name="favorites" component={FavoriteScreen} options={{ tabBarBadge: 20, tabBarLabel: "Mis Favoritos", headerShown: false }} />
            <Tab.Screen name="options" component={OptionScreen} options={{ tabBarLabel: "Opciones", headerShown: false }} />
        </Tab.Navigator>
    );
}

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={MainTab} options={{ headerShown: false }} />

            <Stack.Screen name="sesion" component={SesionScreen} options={{ headerShown: false }} />
            <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: true , headerTitle:"Mi Perfil"}} />
            <Stack.Screen name="buy" component={BuyScreen} options={{ headerShown: true , headerTitle:"Mis Compras"}} />
            <Stack.Screen name="myProduct" component={MyProductScreen} options={{ headerShown: true , headerTitle:"Mis Productos"}} />
            <Stack.Screen name="productSell" component={ProductSellScreen} options={{ headerShown: true , headerTitle:"Vender Productos"}} />
            <Stack.Screen name="help" component={HelpScreen} options={{ headerShown: true , headerTitle:"Ayuda"}} />

            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchResults" component={SearchResults} options={{ headerShown: false }} />
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
