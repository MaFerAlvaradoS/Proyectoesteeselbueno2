import * as React from "react";
import { Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from 'expo-constants';

const Drawer = createDrawerNavigator()

const DocSerInf = () => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#FFFFFF',
      padding: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Box safeArea p="2" py="8" w="90%" maxW="400">

        <Heading size="lg" fontWeight="600" _dark={{
          color: "black"
        }}>

          Medical and service information
          <h1></h1>
          <VStack w="100%" space={5} alignSelf="center">
            <Input placeholder="Search by name or speciality" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
          </VStack>

        </Heading>

        <div style={{ display: 'flex', justifyContent: 'Middle', marginTop: '50px', marginRight: '300px' }}>
          <table style={{ border: "3px solid rgb(0, 0, 0)" }} width="100%" className="Tablita"  >

            <tbody>
              <tr>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/DocJ.jpeg")} /> </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> DR. Jorge Cedeño Velasco </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> Surgeon </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> 4491234567 </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> Jorge127@outlook.com </th>
              </tr>
              <tr>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/DocJ.jpeg")} /> </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> DRA. Itzel Reyes García  </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> General practitioner </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> 4491234567</th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> Itzel127@outlook.com </th>


              </tr>
              <tr>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/DocJ.jpeg")} /> </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> DR. Fernando Robles Casillas  </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> Orthopedic doctor </th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> 4491234567</th>
                <th style={{ border: "3px solid rgb(0, 0, 0)" }}> Fernando127@outlook.com </th>

              </tr>
            </tbody>
          </table>
        </div>




      </Box>
    </View>

  );
}

//inicio

//fin

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <DocSerInf />
      </Center>
    </NativeBaseProvider>
  );

};

