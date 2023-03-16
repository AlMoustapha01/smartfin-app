import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function DrawerUser(){

    const Drawer = createDrawerNavigator();

    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                    {/* <Drawer.Screen name="Home" component={Home}  />
                    <Drawer.Screen name="Conference" component={Conference} />
                    <Drawer.Screen name="Story" component={Story} /> */}
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}