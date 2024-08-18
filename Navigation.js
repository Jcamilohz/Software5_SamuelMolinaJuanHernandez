import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";



import Home from "./src/iu/Home";
import CartScreen from "./src/iu/CartScreen";
import FavortiteScreen from "./src/iu/FavoritesScreen";
import ProfileScreen from "./src/iu/ProfileScreen";

const Tab = createBottomTabNavigator();


function MainTab(){
    return(
        <Tab.Navigator initialRouteName="home" >
            <Tab.Screen name="home" component={Home} options={{ tabBarLabel:"", headerShown:false}}/>
            <Tab.Screen name="cart" component={CartScreen} options={{tabBarBadge: 3, tabBarLabel:"Carrito", headerShown:false}}/>
            <Tab.Screen name="favorites" component={FavortiteScreen} options={{tabBarBadge: 20 , tabBarLabel:"Mis Favoritos",headerShown:false}}/>
            <Tab.Screen name="profile" component={ProfileScreen}  options={{tabBarLabel:"Opciones",headerShown:false}}/>
        </Tab.Navigator>
    );
}



const Navigation = () => {
    return(
        <NavigationContainer>
            <MainTab/>
        </NavigationContainer>
    );
}

export default Navigation;