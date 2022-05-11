import * as React from "react";
import { Stack, AspectRatio, Icon, CheckIcon, WarningOutlineIcon, Select, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Drawer = createDrawerNavigator()

const Catalogue = () => {
  const navigation = useNavigation();

    return (
      
<Box safeArea p="2" py="8" w="90%" maxW="400">

<h1></h1>
<h1></h1>
<h1></h1>
<h1></h1>
<h1></h1>
<h1></h1>

        <Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>

              Catalogue    
<h1></h1>
            <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search by name or places" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
      </VStack>  

            </Heading>

            <h1></h1>
         

        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.tocdoc.com/sites/default/files/consultorios/aguas.jpg"
          }} alt="image" />
          </AspectRatio>
         
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Star médica
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Avenida Universidad 101, Villas de la Universidad, 20020 Aguascalientes, Ags.
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
            </HStack>
          </HStack>
        </Stack>


        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://lh3.googleusercontent.com/-Py9-8Oiprrc/WWOz6kLzDdI/AAAAAAAAAEc/48rs3pooFwoInRhj-WCjDAkIduNIWpjEgCLIBGAYYCw/photo.jpg"
          }} alt="image" />
          </AspectRatio>
         
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            San Juan Medical Hospital
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Prol Paseo de la Asunción 101, Insurgentes, 20287 Aguascalientes, Ags. 
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
            </HStack>
          </HStack>
        </Stack>



      
            
            </Box>

    );}

//inicio

//fin

    export default () => {
       return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Catalogue/>
            </Center>
          </NativeBaseProvider>
        );
         
   };

