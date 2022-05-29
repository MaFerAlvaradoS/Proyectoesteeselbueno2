import * as React from "react";
import { Checkbox, Radio, Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Drawer = createDrawerNavigator()

const MedRec = () => {
  const navigation = useNavigation();
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

  return (
    <Box safeArea p="2" py="8" w="90%" maxW="400">
      {tab}
      {tab}
      {tab}
      <Heading size="lg" fontWeight="600" _dark={{
        color: "black"
      }}>
        Medical Record
      </Heading>
      <h1></h1>
      <div align="center">
        <Image style={{ width: 150, height: 150, marginBottom: 15 }} source={require("./Imagenes/Perfil.jpeg")} />
      </div>

      <Text>
        <h3>Patient Data</h3>
      </Text> 

      <FormControl.Label>Name(s): Jonathan Josué</FormControl.Label>

      <FormControl.Label>Last name: Villanueva</FormControl.Label>

      <FormControl.Label>Mother's last name: Guerrero</FormControl.Label>

      <FormControl.Label>Date of birth: 23/09/2000</FormControl.Label>

      <FormControl.Label>Gender: Male</FormControl.Label>

      <FormControl.Label>Address: Minato City, Tokyo 105-0013, Japón</FormControl.Label>
      {tab}
      {tab}
      {tab}

      <Heading size="md" fontWeight="600" _dark={{
        color: "black" 
      }}>
        Record
      </Heading>
      <FormControl.Label>Mellitus diabetes</FormControl.Label>
      <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
        <Stack direction={{
          base: "column",
          md: "row"
        }} alignItems={{
          base: "flex-start",
          md: "center"
        }} space={4} w="75%" maxW="300px">

          <Radio value="1" colorScheme="green" size="sm" my={1}>
            Mother
          </Radio>
          <Radio value="2" colorScheme="green" size="sm" my={1}>
            Father
          </Radio>
          <Radio value="3" colorScheme="green" size="sm" my={1}>
            Nothing
          </Radio>
        </Stack>
      </Radio.Group>

      <FormControl.Label>Asthma</FormControl.Label>
      <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
        <Stack direction={{
          base: "column",
          md: "row"
        }} alignItems={{
          base: "flex-start",
          md: "center"
        }} space={4} w="75%" maxW="300px">

          <Radio value="1" colorScheme="green" size="sm" my={1}>
            Mother
          </Radio>
          <Radio value="2" colorScheme="green" size="sm" my={1}>
            Father
          </Radio>
          <Radio value="3" colorScheme="green" size="sm" my={1}>
            Nothing
          </Radio>
        </Stack>
      </Radio.Group>

      <FormControl.Label>Alcoholism</FormControl.Label>
      <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
        <Stack direction={{
          base: "column",
          md: "row"
        }} alignItems={{
          base: "flex-start",
          md: "center"
        }} space={4} w="75%" maxW="300px">

          <Radio value="1" colorScheme="green" size="sm" my={1}>
            Mother
          </Radio>
          <Radio value="2" colorScheme="green" size="sm" my={1}>
            Father
          </Radio>
          <Radio value="3" colorScheme="green" size="sm" my={1}>
            Nothing
          </Radio>
        </Stack>
      </Radio.Group>

      <FormControl.Label>Obesity</FormControl.Label>
      <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
        <Stack direction={{
          base: "column",
          md: "row"
        }} alignItems={{
          base: "flex-start",
          md: "center"
        }} space={4} w="75%" maxW="300px">

          <Radio value="1" colorScheme="green" size="sm" my={1}>
            Mother
          </Radio>
          <Radio value="2" colorScheme="green" size="sm" my={1}>
            Father
          </Radio>
          <Radio value="3" colorScheme="green" size="sm" my={1}>
            Nothing
          </Radio>
        </Stack>
      </Radio.Group>

      <FormControl.Label>Cancer</FormControl.Label>
      <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
        <Stack direction={{
          base: "column",
          md: "row"
        }} alignItems={{
          base: "flex-start",
          md: "center"
        }} space={4} w="75%" maxW="300px">

          <Radio value="1" colorScheme="green" size="sm" my={1}>
            Mother
          </Radio>
          <Radio value="2" colorScheme="green" size="sm" my={1}>
            Father
          </Radio>
          <Radio value="3" colorScheme="green" size="sm" my={1}>
            Nothing
          </Radio>
        </Stack>
      </Radio.Group>

      <FormControl.Label>Asma</FormControl.Label>
      <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
        <Stack direction={{
          base: "column",
          md: "row"
        }} alignItems={{
          base: "flex-start",
          md: "center"
        }} space={4} w="75%" maxW="300px">

          <Radio value="1" colorScheme="green" size="sm" my={1}>
            Madre
          </Radio>
          <Radio value="2" colorScheme="green" size="sm" my={1}>
            Padre
          </Radio>
          <Radio value="3" colorScheme="green" size="sm" my={1}>
            Nothing
          </Radio>
        </Stack>
      </Radio.Group>
      {tab}
      {tab}
      {tab}
      <Center>
        <FormControl w="3/4" maxW="300" isRequired isInvalid>
          <FormControl.Label>Condition:</FormControl.Label>
          <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }} mt="1">

            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />

          </Select>
        </FormControl>
      </Center>

    </Box>
  );
}

//inicio

//fin

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <MedRec />
      </Center>
    </NativeBaseProvider>
  );

};
