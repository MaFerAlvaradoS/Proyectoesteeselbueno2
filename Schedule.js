import * as React from "react";
import { CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";


const Drawer = createDrawerNavigator()
const Schedule = () => {
    return (
        <Box safeArea p="2" py="8" w="90%" maxW="400">
        <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              Appointment Schedule.       
            </Heading>
        <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose medical center</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="ISSSTE" value="ux" />
          <Select.Item label="Hospital de la mujer" value="web" />
          <Select.Item label="Tercer  milenio" value="cross" />
          <Select.Item label="Clínica biomaterna" value="ui" />
          <Select.Item label="Hospital Hidalgo" value="backend" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>



    <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose Doctor</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="General medicine" value="ux" />
          <Select.Item label="Pediatrics" value="web" />
          <Select.Item label="Gynecologist" value="cross" />
          <Select.Item label="Cardiology" value="ui" />
          <Select.Item label="Dermastologists" value="backend" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>


        <FormControl.Label>Reason for consultation</FormControl.Label>
            <Input />



      </FormControl>


    </Center>
    <Heading   size="sm" fontWeight="600"  _dark={{
            color: "black"
          }}>
            <h6> Select the day and the time required for the appointment: </h6>
            
            </Heading>
    <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Menu')} >
            Fecha
          </Button>
          
          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Menu')} >
            Hora
          </Button>
   







       </Box>
        );}


        export default () => {
            return (
               <NativeBaseProvider>
                 <Center flex={1} px="3">
                     <Schedule/>
                 </Center>
               </NativeBaseProvider>
             );
              
        };