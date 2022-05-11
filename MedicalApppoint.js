import * as React from "react";
import { Box, Heading, View, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";

const Drawer = createDrawerNavigator()
const MedAp = () => {
    return (


        
<Box safeArea p="2" py="8" w="90%" maxW="400">


<Heading   size="lg" fontWeight="600"  _dark={{
            color: "black"
          }}>
              Medical appointment.       
            </Heading>




            <div style={{ display: 'flex', justifyContent: 'Middle', marginTop: '50px', marginRight: '300px'}}>
                <table style={{border: "3px solid rgb(0, 0, 0)"}} width="100%" className="Tablita"  >
                    <thead>
                    <tr>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Image </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Doctor </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Hospital </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Date </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Time </th>


                    </tr>
                    </thead>
                        <tbody>
                    <tr>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/DocJ.jpeg")}/> </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Jonathan Josué Villanueva Guerrero </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Hopital Ojocaliente </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> 23/09/2022 </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> 13:45 </th>


                    </tr>
                    <tr>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/Dogtor.jpg")}/> </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Dogtor </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Hopital de la Mujer </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> 26/12/2022 </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> 10:35 </th>


                    </tr>
                    <tr>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/FF7D.jpg")}/> </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> Fulgencio López</th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> ISSSTE </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> 12/04/2022 </th>
                        <th style={{border: "3px solid rgb(0, 0, 0)"}}> 17:45 </th>


                    </tr>
                    </tbody>
                </table>
            </div>


            <Button mt="2" colorScheme="indigo" title="Menu"  >
            Actualizar
          </Button>


</Box>


        );}


        export default () => {
            return (
               <NativeBaseProvider>
                 <Center flex={1} px="3">
                     <MedAp/>
                 </Center>
               </NativeBaseProvider>
             );
              
        };