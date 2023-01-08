import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import HatBar from '../components/HatBar';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const windowWidth = Dimensions.get('window').width;



export default function MainPage() {

    const navigation = useNavigation();
    
    const routeClothesPage = () =>{
        navigation.navigate('ClothesPage')
    }

    const routeMultikCatalogPage = () =>{
        navigation.navigate('MultikCatalogPage')
    }

    const routeOrderPrazdnikPage = () =>{
        navigation.navigate('OrderPrazdnikPage')
    }

    

  return (
      <>
        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,marginTop: getStatusBarHeight()}} source ={require('../../../frontend/assets/backgroundImage2.jpg')}>
            
            
            
            <TouchableOpacity onPress={routeClothesPage} style={{...styles.container, marginTop: 30}}>
                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Одежда
                    </Text>

                </View>

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 4.5, width: windowWidth / 4.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/cloth1.jpg')}/>

                </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={routeMultikCatalogPage} style={styles.container}>

            

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 4.5, width: windowWidth / 3, borderRadius: 10, borderWidth: 0.8, borderColor: 'grey',}} source ={require('../../../frontend/assets/mult1.jpg')}/>

                </View>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Мультфильм
                    </Text>

                </View>

                

            </TouchableOpacity>

            <TouchableOpacity onPress={routeOrderPrazdnikPage} style={styles.container}>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Детские
                    </Text>
                    <Text style={{fontSize: 25}}>
                        Праздники
                    </Text>

                </View>

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 4.5, width: windowWidth / 4.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/party1.jpg')}/>

                </View>

            </TouchableOpacity>
            

        </ImageBackground>

        <View style={{position: 'absolute', bottom: 0, borderTopWidth: 2,}}>
            <HatBar />
        </View>

        </>
            
           
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: 'white',
        width: '90%',
        minHeight: 130,
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row'
    },
});