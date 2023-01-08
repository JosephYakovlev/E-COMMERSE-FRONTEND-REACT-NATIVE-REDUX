import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, Image, TouchableOpacity, StatusBar, Alert } from 'react-native';
import HatBar from '../components/HatBar';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const imageWidth = windowWidth*0.97
const hatBarHeight = (windowWidth*0.9)/5.607
const innerWindowHeight = hatBarHeight+getStatusBarHeight()

console.log('str odejdi')
console.log(windowHeight)


export default function MultikCatalogPage() {

    const navigation = useNavigation();
    
   

    
    
    const multiki = [
        {
            id: 1,
            images: [ 
                require('../../../frontend/assets/multik/1ser.jpg'),
            ],
            desc: '1 серия «Брокколи и Зефирка»',
           
        },{
            id: 2,
            images: [ 
                require('../../../frontend/assets/multik/2ser.jpg'),
            ],
            desc: '2 серия «Предназначение»',
           
        },{
            id: 3,
            images: [ 
                require('../../../frontend/assets/multik/3ser.jpg'),
            ],
            desc: '3 серия «Карта»',
           
        },{
            id: 4,
            images: [ 
                require('../../../frontend/assets/multik/4ser.jpg'),
            ],
            desc: '4 серия «Дорога к Пазлику»',
           
        },{
            id: 5,
            images: [ 
                require('../../../frontend/assets/multik/5ser.jpg'),
            ],
            desc: '5 серия «Пазлик»',
           
        },{
            id: 6,
            images: [ 
                require('../../../frontend/assets/multik/6ser.jpg'),
            ],
            desc: '6 серия «Цепи дружбы»',
           
        },{
            id: 7,
            images: [ 
                require('../../../frontend/assets/multik/7ser.jpg'),
            ],
            desc: '7 серия «У меня есть план»',
        }]


    

    

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


                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize: 16, color: 'blue', marginHorizontal: 10, fontWeight: '400'}}>
                            Мультфильм 
                        </Text>
                    </TouchableOpacity>
                    
                </View>
      
        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,position:'absolute',left:0, right:0, top: getStatusBarHeight() + 30, bottom:0}} source ={require('../../../frontend/assets/backgroundImage2.jpg')}>

            

        
            <ScrollView style={{position: 'absolute', width: '100%', height: windowHeight-innerWindowHeight}}>

                

            <View style={{...styles.container, width: '97%',minHeight: 50, justifyContent: 'center', flexDirection: 'column', alignSelf: 'center', borderRadius: 0}}>
      
                <Text style={{fontSize: 20, marginTop: 15, alignSelf: 'center'}}>
                    Пинеточная страна
                </Text>

                <Text style={{fontSize: 17, fontWeight:'300',marginVertical: 7, marginLeft: 7}}>
                    {'\t'} Брокколи, Осьминожка, Зефирка и Пазлик – главные персонажи волшебного острова. В качестве награды за свои старания, герои получают пинетки заряженные волшебной силой: с их помощью можно попасть в мир людей и помогать детям.
                </Text>

            </View>

                <View>
                    {multiki.map((body) => 
                        <TouchableOpacity 
                            onPress = {()=> 
                                Alert.alert(
                                    "Нам очень жаль!",
                                    "Раздел находится в разработке и пока недоступен.",
                                    [
                                        { text: "Ок"}
                                    ]
                                )
                            }
                            key = {body.id} 
                            style={{
                                ...styles.container, 
                                width: imageWidth, 
                                alignItems:'center', 
                                justifyContent: 'center', 
                                flexDirection: 'column', 
                                alignSelf: 'center'
                            }}
                        >

                            <Image  
                                style={{width: imageWidth-2, height: imageWidth/1.78, borderColor: 'black', borderTopLeftRadius: 9, borderTopRightRadius: 9}} 
                                source={body.images[0]}
                            />  

                            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                                
                                <View style={{alignItems: 'center', justifyContent: 'center', width: '30%'}}>
                             
                                    <Text style={{fontSize: 18, marginVertical: 15}}>
                                        {body.desc.substring(0,7)}
                                    </Text>

                                </View>


                                <View style={{alignItems: 'center', justifyContent: 'center', width: '70%'}}>    

                                    <Text style={{fontSize: 18, marginVertical: 15}}>
                                        {body.desc.substring(7)}
                                    </Text>

                                </View>

                            </View>
                            

                        </TouchableOpacity>
                        
                    )}
                </View>

                <TouchableOpacity style={{...styles.container, width: imageWidth*0.80,minHeight: 50, alignItems:'center', justifyContent: 'center', flexDirection: 'column', alignSelf: 'center', borderRadius: 5}}>
      
                    <Text style={{fontSize: 18, marginVertical: 15}}>
                        Продолжение следует...
                    </Text>

                </TouchableOpacity>

                <View style={{minHeight: 100}}>

                </View>


            </ScrollView>
       
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