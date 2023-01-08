import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const logoWidth = windowWidth*0.90
const hatBarHeight = logoWidth/5.607
const innerWindowHeight = hatBarHeight+getStatusBarHeight()

console.log('str odejdi')
console.log(windowWidth / 3)


export default function CategoriesArea() {

    const navigation = useNavigation();
    
    const routeBodiesPage = () =>{
        navigation.navigate('BodiesPage')
    }

    const routeKombinezPage = () =>{
        navigation.navigate('KombinezPage')
    }

    const routeMuslinOdeyalPage = () =>{
        navigation.navigate('MuslinOdeyalPage')
    }

    const routePijamsPage = () =>{
        navigation.navigate('PijamsPage')
    }

    const routeMuslinPelPage = () =>{
        navigation.navigate('MuslinPelPage')
    }

    const routeSpalMeshPage = () =>{
        navigation.navigate('SpalMeshPage')
    }

    const routeSlunyavPage = () =>{
        navigation.navigate('SlunyavPage')
    }


  return (
        <ScrollView style={{height: windowHeight-innerWindowHeight}}>

            <TouchableOpacity onPress={routeBodiesPage} style={styles.container}>
                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Боди
                    </Text>

                </View>

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 3.5, width: windowWidth / 3.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/clothes/bodi.jpeg')}/>

                </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={routeKombinezPage} style={styles.container}>

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 3.5, width: windowWidth / 3.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/clothes/kombinez.jpeg')}/>

                </View>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Комбинизоны
                    </Text>

                </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={routeMuslinOdeyalPage} style={styles.container}>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Муслиновые
                    </Text>
                    <Text style={{fontSize: 25}}>
                        одеяла
                    </Text>

                </View>

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 3.5, width: windowWidth / 3.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/clothes/muslinodeyal.jpeg')}/>

                </View>

            </TouchableOpacity>


            <TouchableOpacity onPress={routePijamsPage} style={styles.container}>

            

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 3.5, width: windowWidth / 3.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/clothes/pijams.jpeg')}/>

                </View>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Пижамы
                    </Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={routeMuslinPelPage} style={styles.container}>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Муслиновые
                    </Text>
                    <Text style={{fontSize: 25}}>
                        пеленки
                    </Text>

                </View>

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 3.5, width: windowWidth / 3.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/clothes/muslinpel.jpeg')}/>

                </View>

            </TouchableOpacity>


            <TouchableOpacity onPress={routeSlunyavPage} style={styles.container}>

            

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 3.5, width: windowWidth / 3.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/clothes/slunyav.jpeg')}/>

                </View>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Слюнявчики
                    </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={routeSpalMeshPage} style={{...styles.container, marginBottom: 80}}>

                <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{fontSize: 25}}>
                        Спальные
                    </Text>
                    <Text style={{fontSize: 25}}>
                        мешки
                    </Text>

                </View>

                <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}> 

                    <Image  style={{height: windowWidth / 3.5, width: windowWidth / 3.5, borderRadius: 10, borderColor: 'black'}} source ={require('../../../frontend/assets/clothes/spalmesh.jpeg')}/>

                </View>

            </TouchableOpacity>

            
           

            </ScrollView>
            
           
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        width: '90%',
        height: windowWidth / 3,
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