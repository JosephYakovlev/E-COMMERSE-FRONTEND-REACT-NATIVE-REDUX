import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './src/pages/MainPage';
import ClothesPage from './src/pages/ClothesPage';
import BodiesPage from './src/pages/clothespages/BodiesPage';
import MerchPage from './src/pages/MerchPage';
import KombinezPage from './src/pages/clothespages/KombinezPage';
import MuslinOdeyalPage from './src/pages/clothespages/MuslinOdeyalPage';
import PijamsPage from './src/pages/clothespages/PijamsPage';
import MuslinPelPage from './src/pages/clothespages/MuslinPelPage';
import SlunyavPage from './src/pages/clothespages/SlunyavPage';
import SpalMeshPage from './src/pages/clothespages/SpalMeshPage';
import OrderPrazdnikPage from './src/pages/OrderPrazdnikPage';
import MultikCatalogPage from './src/pages/MultikCatalogPaje';



const Stack = createStackNavigator();


export default function Navigate() {
    return <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
        

                <Stack.Screen 
                    name="Main"
                    component={MainPage}
                />

                <Stack.Screen 
                    name="ClothesPage"
                    component={ClothesPage}
                />

                <Stack.Screen 
                    name="MultikCatalogPage"
                    component={MultikCatalogPage}
                />

                <Stack.Screen 
                    name="OrderPrazdnikPage"
                    component={OrderPrazdnikPage}
                />

                <Stack.Screen 
                    name="BodiesPage"
                    component={BodiesPage}
                />

                <Stack.Screen 
                    name="KombinezPage"
                    component={KombinezPage}
                />

                <Stack.Screen 
                    name="MuslinOdeyalPage"
                    component={MuslinOdeyalPage}
                />

                <Stack.Screen 
                    name="PijamsPage"
                    component={PijamsPage}
                />

                <Stack.Screen 
                    name="MerchPage"
                    component={MerchPage}
                />

                <Stack.Screen 
                    name="MuslinPelPage"
                    component={MuslinPelPage}
                />

                <Stack.Screen 
                    name="SlunyavPage"
                    component={SlunyavPage}
                />

                <Stack.Screen 
                    name="SpalMeshPage"
                    component={SpalMeshPage}
                />

            </Stack.Navigator>
        

    </NavigationContainer>
}


