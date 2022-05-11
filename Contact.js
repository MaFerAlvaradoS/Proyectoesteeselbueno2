import * as React from "react";
import { Checkbox, Radio, Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Drawer = createDrawerNavigator()

const Contact = () => {
  const navigation = useNavigation();
  

    return (

        <Box safeArea p="2" py="8" w="90%" maxW="400">
             <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              About Us           
            </Heading>

            <FormControl.Label>You Care is an application specialized in helping its customers find the medical service they need most, from the most basic medical service such as a simple consultation to an appointment with a medical specialist.</FormControl.Label>

<h1></h1>
            <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              Contact           
            </Heading>

            <FormControl.Label>To contact us send us a mail to: </FormControl.Label>
            <FormControl.Label>you_care_service@gmail.com </FormControl.Label>


            </Box>
    );}

    //inicio
    
    //fin
    
        export default () => {
           return (
              <NativeBaseProvider>
                <Center flex={1} px="3">
                    <Contact/>
                </Center>
              </NativeBaseProvider>
            );
             
       };
    