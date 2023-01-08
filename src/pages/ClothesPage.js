import React from 'react';
import { StyleSheet, View, SafeAreaView, ImageBackground, Dimensions, StatusBar, TouchableOpacity, Text } from 'react-native';
import HatBar from '../components/HatBar';
import { useNavigation } from '@react-navigation/native';
import CategoriesArea from '../components/CategoriesArea';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const logoWidth = windowWidth*0.90

console.log('str odejdi')


export default function ClothesPage() {

    const navigation = useNavigation();
    
    

  return (
      <>
        <View style={{width: '100%',minHeight: 30, backgroundColor: 'white', flexDirection:'row',borderTopWidth: 0.7, borderBottomWidth: 0.7, marginTop: getStatusBarHeight()}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Main')} style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10, fontWeight: '300'}}>
                            Главная  
                        </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, color: 'grey'}}>
                            -
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('ClothesPage')} style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize: 16, color: 'blue', marginHorizontal: 10, fontWeight: '400'}}>
                            Одежда
                        </Text>
                    </TouchableOpacity>
                
        </View> 
      
        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,position:'absolute',left:0, right:0, top: getStatusBarHeight() + 30,}} source ={require('../../../frontend/assets/backgroundImage2.jpg')}>
        
            <View style={{position: 'absolute',marginBottom: 120, width: '100%'}}>
                <CategoriesArea />
            </View>
       
        </ImageBackground>
       

        <View style={{position: 'absolute', bottom: 0, borderTopWidth: 2}}>
            <HatBar />
        </View>

        </>
            
           
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        width: '90%',
        minHeight: 140,
        borderRadius: 2,
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