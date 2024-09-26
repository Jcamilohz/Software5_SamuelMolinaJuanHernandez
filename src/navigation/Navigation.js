import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import Home from "../iu/Home";
import CartScreen from "../iu/CartScreen";
import FavoriteScreen from "../iu/FavoriteScreen";
import OptionScreen from "../iu/OptionScreen";
import SesionScreen from "../iu/SesionScreen";
import RegisterScreen from "../iu/RegisterScreen";
import ProfileScreen from "../iu/ProfileScreen";
import MyBuysScreen from "../iu/MyBuysScreen";
import MyProductScreen from "../iu/MyProductScreen";
import ProductSellScreen from "../iu/ProductSellScreen";
import HelpScreen from "../iu/HelpScreen";
import ProductDetailScreen from "../iu/ProductDetailScreen";
import SearchResults from "../iu/SearchResultScreen";
import DiscountedProductScreen from "../iu/DiscountedProductScreen";
import RecommendedProducts from "../iu/RecommendedProductsScreen";
import FreeShippingProductScreen from "../iu/FreeShippingProductScreen";
import BuyScreen from "../iu/BuyScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTab() {
    return (
        <Tab.Navigator initialRouteName="home" >
            <Tab.Screen name="home" component={Home} options={{ tabBarLabel: "", headerShown: false }} />
            <Tab.Screen name="cart" component={CartScreen} options={{ tabBarBadge: 3, tabBarLabel: "Carrito", headerShown: false }} />
            <Tab.Screen name="favorites" component={FavoriteScreen} options={{ tabBarBadge: 20, tabBarLabel: "Mis Favoritos", headerShown: false }} />
            <Tab.Screen name="options" component={OptionScreen} options={{ tabBarLabel: "Opciones", headerTitle: "Opciones" }} />
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
            <Stack.Screen name="myBuys" component={MyBuysScreen} options={{ headerShown: true , headerTitle:"Mis Compras"}} />
            <Stack.Screen name="myProduct" component={MyProductScreen} options={{ headerShown: true , headerTitle:"Mis Productos"}} />
            <Stack.Screen name="productSell" component={ProductSellScreen} options={{ headerShown: true , headerTitle:"Vender Productos"}} />
            <Stack.Screen name="help" component={HelpScreen} options={{ headerShown: true , headerTitle:"Ayuda"}} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchResults" component={SearchResults} options={{ headerShown: false }} />
            <Stack.Screen name="discounted" component={DiscountedProductScreen} options={{ tabBarLabel: "Descuentos", headerShown: false }} />
            <Stack.Screen name="recommended" component={RecommendedProducts} options={{ tabBarLabel: "Recomendados", headerShown: false }} />
            <Stack.Screen name="freeShipping" component={FreeShippingProductScreen} options={{ tabBarLabel: "Envio Gratis", headerShown: false }} />
            <Stack.Screen name="buy" component={BuyScreen} options={{ headerShown: true , headerTitle:"Comprar productos"}} />
        </Stack.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
    );
}

export default Navigation;
