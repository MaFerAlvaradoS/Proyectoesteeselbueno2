import * as React from "react";
import {
    Box, Heading, View, VStack, FormControl, Input, Link,
    Button, HStack, Center, NativeBaseProvider, Image
} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, Label } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerNavigation } from "./Stack";
import Constants from 'expo-constants';

const Drawer = createDrawerNavigator()
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FFFFFF',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 14,
        textAlign: 'center',
    },
});

const MedAp = () => {
    const navigation = useNavigation();
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
    return (
        <View style={styles.container}>
            <VStack alignItems={"center"}>
                <Button marginTop="2" colorScheme="indigo" title='Menu' onPress={() => navigation.navigate('Menu')} style={{ width: "40%" }}> Back</Button>

            </VStack>
            <Box safeArea p="2" py="8" w="90%" maxW="400">

                <div aling='center'>
                    <Heading size="lg" fontWeight="600" _dark={{
                        color: "black",
                    }}>
                        Medical appointment.
                    </Heading>
                </div>

                <View style={styles.paragraph}>
                    <Box>
                        <Text>
                            APPLICANT: Maria Luisa Ruiz
                            TELEPHONE: 449 198 2734
                        </Text>
                    </Box>

                    <div style={{ display: 'flex', justifyContent: 'Middle', marginTop: '50px', marginRight: '300px' }}>
                        <table style={{ border: "1px" }} width="100%" className="Tablita"  >
                            <thead>
                                <tr>
                                    <th > Image </th>
                                    <th > Doctor </th>
                                    <th > Hospital </th>
                                    <th > Date </th>
                                    <th > Time </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th style={{ border: "1px" }}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/DocJ.jpeg")} /> </th>
                                    <th style={{ border: "1px" }}> Jonathan Josué Villanueva Guerrero </th>
                                    <th style={{ border: "1px" }}> Hopital Ojocaliente </th>
                                    <th style={{ border: "1px" }}> 23/09/2022 </th>
                                    <th style={{ border: "1px" }}> 13:45 </th>
                                </tr>
                                <tr>
                                    <th style={{ border: "1px" }}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/Dogtor.jpg")} /> </th>
                                    <th style={{ border: "1px" }}> Dogtor </th>
                                    <th style={{ border: "1px" }}> Hopital de la Mujer </th>
                                    <th style={{ border: "1px" }}> 26/12/2022 </th>
                                    <th style={{ border: "1px" }}> 10:35 </th>
                                </tr>
                                <tr>
                                    <th style={{ border: "1px" }}>  <Image style={{ width: 50, height: 50, marginBottom: 15, alignContent: 'center' }} source={require("./Imagenes/FF7D.jpg")} /> </th>
                                    <th style={{ border: "1px" }}> Fulgencio López</th>
                                    <th style={{ border: "1px" }}> ISSSTE </th>
                                    <th style={{ border: "1px" }}> 12/04/2022 </th>
                                    <th style={{ border: "1px" }}> 17:45 </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </View>

                {tab}
                {tab}
                {tab}
                <Button mt="2" colorScheme="indigo" title="Actualizar">
                    Actualizar
                </Button>

            </Box>
        </View>
    );
}


export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <MedAp />
            </Center>
        </NativeBaseProvider>
    );

};