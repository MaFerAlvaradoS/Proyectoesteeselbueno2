import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Menu from "./Menu";

const Drawer =  createDrawerNavigator ()

export function DrawerNavigation() {

    return (
<Drawer.Navigator>
    <Drawer.Screen name="Menu" component={Menu}></Drawer.Screen>
</Drawer.Navigator>
    )


}