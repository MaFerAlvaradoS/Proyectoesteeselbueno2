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

const Settings = () => {
  const navigation = useNavigation();
  

    return (

<Box safeArea p="2" py="8" w="90%" maxW="400">
             <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              Settings           
            </Heading>
<h1></h1>

            <FormControl>
            <FormControl.Label>New password</FormControl.Label>
            <Input type="password" />
          </FormControl>



          <FormControl>
            <FormControl.Label>Confirm new password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          
          <h1></h1>

          <Button mt="2" colorScheme="indigo" title="Menu" >
            Change
          </Button>
            </Box>
        
        );}

        //inicio
        
        //fin
        
            export default () => {
               return (
                  <NativeBaseProvider>
                    <Center flex={1} px="3">
                        <Settings/>
                    </Center>
                  </NativeBaseProvider>
                );
                 
           };
        