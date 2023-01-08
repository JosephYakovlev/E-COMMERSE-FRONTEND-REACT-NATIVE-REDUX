import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import HatBar from '../../components/HatBar';
import { useNavigation } from '@react-navigation/native';
import CategoriesArea from '../../components/CategoriesArea';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const imageWidth = windowWidth/100*46
const hatBarHeight = (windowWidth*0.9)/5.607
const innerWindowHeight = hatBarHeight+getStatusBarHeight()

console.log('str odejdi')
console.log(windowHeight)


export default function SlunyavPage() {

    const navigation = useNavigation();
    
   

    
    
    const slunyavs = [
        {
            id: 27,
            price: 660,
            prevPrice: 1100,
            title: 'Слюнявчик из муслина «Черно-белые герои»',
            images: [ 
                require('../../../../frontend/assets/clothes/slunyav/Slun4BGeroi.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/Slun4BGeroi1.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/Slun4BGeroi2.jpeg'),
            ],
            sizes: [
                'M',
            ],
            desc: 'Слюнявчик сшит из нежного муслина, застёгивается на кнопку.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0027',
                'Произведено в России',
            ]
        },{
            id: 28,
            price: 660,
            prevPrice: 1100,
            title: 'Слюнявчик из муслина «Брокколи»',
            images: [ 
                require('../../../../frontend/assets/clothes/slunyav/SlunBrokkoli.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunBrokkoli1.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunBrokkoli2.jpeg'),
            ],
            sizes: [
                'M',
            ],
            desc: 'Слюнявчик сшит из нежного муслина, застёгивается на кнопку.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0028',
                'Произведено в России',
            ]
        },{
            id: 29,
            price: 660,
            prevPrice: 1100,
            title: 'Слюнявчик из муслина «Герои»',
            images: [ 
                require('../../../../frontend/assets/clothes/slunyav/SlunGeroi.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunGeroi1.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunGeroi2.jpg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunGeroi3.jpg'),
            ],
            sizes: [
                'M',
            ],
            desc: 'Слюнявчик сшит из нежного муслина, застёгивается на кнопку.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0029',
                'Произведено в России',
            ]
        },{
            id: 30,
            price: 660,
            prevPrice: 1100,
            title: 'Слюнявчик из муслина «Зефирка»',
            images: [ 
                require('../../../../frontend/assets/clothes/slunyav/SlunZefirka.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunZefirka1.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunZefirka2.jpeg'),
            ],
            sizes: [
                'M',
            ],
            desc: 'Слюнявчик сшит из нежного муслина, застёгивается на кнопку.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0030',
                'Произведено в России',
            ]
        },{
            id: 31,
            price: 660,
            prevPrice: 1100,
            title: 'Слюнявчик из муслина «Брокколи на полосах»',
            images: [ 
                require('../../../../frontend/assets/clothes/slunyav/SlunBrokkoliPolosi.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunBrokkoliPolosi1.jpeg'),
                require('../../../../frontend/assets/clothes/slunyav/SlunBrokkoliPolosi2.jpeg'),
            ],
            sizes: [
                'M',
            ],
            desc: 'Слюнявчик сшит из нежного муслина, застёгивается на кнопку.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0031',
                'Произведено в России',
            ]
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

            <TouchableOpacity onPress={()=> navigation.navigate('ClothesPage')} style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 16, color: 'black', marginHorizontal: 10, fontWeight: '300'}}>
                    Одежда
                </Text>
            </TouchableOpacity>

            <Text style={{fontSize: 20, color: 'grey'}}>
                -
            </Text>


            <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 16, color: 'blue', marginHorizontal: 10, fontWeight: '400'}}>
                    Слюнявчики
                </Text>
            </TouchableOpacity>
            
        </View>

        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,position:'absolute',left:0, right:0, top: getStatusBarHeight() + 30, bottom:0}} source ={require('../../../../frontend/assets/backgroundImage.jpg')}>

            <ScrollView style={{position: 'absolute',marginBottom: 120, width: '100%', height: windowHeight-innerWindowHeight}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    {slunyavs.map((body) => 
                        <TouchableOpacity onPress={()=>{navigation.navigate('MerchPage',body)}} key = {body.id} style={{...styles.container, width: '47%',marginLeft: '2%', alignItems:'center', justifyContent: 'center', flexDirection: 'column'}}>

                            <Image  
                                style={{width: '100%', height: imageWidth* 1.525, borderColor: 'black', borderTopLeftRadius: 9, borderTopRightRadius: 9}} 
                                source={body.images[0]}
                            />  

                            <Text style={{fontSize: 15}}>
                                {body.title.substring(0,20)}
                            </Text>

                            <Text style={{fontSize: 17, fontStyle: 'italic'}}>
                                {body.title.substring(20)}
                            </Text>

                            <View style={{flexDirection: 'row', width: '100%', alignItems:'center', justifyContent: 'space-around'}}>
                                <Text style={{fontSize: 22, color: 'green', fontStyle: 'italic'}}>
                                    {body.price} руб.
                                </Text>
                                <Text style={{fontSize: 16, textDecorationLine: 'line-through', textDecorationColor: 'red', color: 'grey', fontStyle: 'italic'}}>
                                    {body.prevPrice} руб.
                                </Text>
                            </View>

                            <View style={{width: '33%', alignSelf:'center', minHeight: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue', borderRadius: 5, marginVertical: 10}}>
                                <Text style={{fontSize: 22, fontWeight: '700'}}>
                                    -40%
                                </Text>
                            </View>

                        </TouchableOpacity>
                        
                    )}
                </View>

                <View style={{minHeight: 80}}>

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
        marginTop: 20,
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