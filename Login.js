import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { View, Image, StyleSheet } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function Login  () {
  const navigation = useNavigation();
  return ( 
  <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="400">
        
        
    <div align= "center">  <Image style={{ width: 300, height: 300, marginBottom: 15 }} source={require("./Imagenes/Logo.jpeg")}/>
        </div>
        
        <div align= "center">
        <Heading   size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          ¡Welcome!
        </Heading>
        </div>
        <div align= "center">
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Log in
        </Heading>
        </div>
        <VStack space={3} mt="6">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Recover password
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" title="Menu" onPress={() => navigation.navigate('Menu')} >
            Submit
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              Don´t have an account.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Login/>
            </Center>
          </NativeBaseProvider>
        );
        
         
   };
