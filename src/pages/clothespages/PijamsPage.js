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


export default function PijamsPage() {

    const navigation = useNavigation();
    
   

    
    
    const pijamas = [
        {
            id: 13,
            price: 1920,
            prevPrice: 3200,
            title: 'Футболка и шорты «Черно-белые герои»',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/FSH4BGeroi.jpg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0013',
                'Произведено в России',
            ]
        },{
            id: 14,
            price: 1920,
            prevPrice: 3200,
            title: 'Футболка и шорты «Брокколи»',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/FSHBrokkoli.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/FSHBrokkoli1.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/FSHBrokkoli2.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/FSHBrokkoli3.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/FSHBrokkoli4.jpeg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0014',
                'Произведено в России',
            ]
        },{
            id: 15,
            price: 1920,
            prevPrice: 3200,
            title: 'Футболка и шорты «Герои»',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/FSHGeroi.jpeg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0015',
                'Произведено в России',
            ]
        },{
            id: 16,
            price: 1920,
            prevPrice: 3200,
            title: 'Футболка и шорты «Зефирка»',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/FSHZefirka.jpeg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0016',
                'Произведено в России',
            ]
        },{
            id: 17,
            price: 2100,
            prevPrice: 3500,
            title: ' Штаны и кофта  «Черно-белые герои»',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/ShtK4BGeroi.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/ShtK4BGeroi1.jpeg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0017',
                'Произведено в России',
            ]
        },{
            id: 18,
            price: 2100,
            prevPrice: 3500,
            title: ' Штаны и кофта  «Брокколи»',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/ShtKBrokkoli.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/ShtKBrokkoli1.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/ShtKBrokkoli2.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/ShtKBrokkoli3.jpeg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0018',
                'Произведено в России',
            ]
        },{
            id: 19,
            price: 2100,
            prevPrice: 3500,
            title: ' Штаны и кофта  «Герои» ',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/ShtKGeroi.jpeg'),
                require('../../../../frontend/assets/clothes/pijams/ShtKGeroi1.jpeg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0019',
                'Произведено в России',
            ]
        },{
            id: 20,
            price: 2100,
            prevPrice: 3500,
            title: ' Штаны и кофта  «Зефирка»',
            images: [ 
                require('../../../../frontend/assets/clothes/pijams/ShtKZefirka.jpg'),
            ],
            sizes: [
                '80-86 см (1-1,5 года)',
                '86-92 см (1,5-2 года)',
                '92-98 см (2-3 года)',
            ],
            desc: 'Раздельная пижама из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0020',
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
                    Пижамы
                </Text>
            </TouchableOpacity>
            
        </View>

        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,position:'absolute',left:0, right:0, top: getStatusBarHeight() + 30, bottom:0}} source ={require('../../../../frontend/assets/backgroundImage2.jpg')}>

            <ScrollView style={{position: 'absolute',marginBottom: 120, width: '100%', height: windowHeight-innerWindowHeight}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pijamas.map((body) => 
                        <TouchableOpacity onPress={()=>{navigation.navigate('MerchPage',body)}} key = {body.id} style={{...styles.container, width: '47%',marginLeft: '2%', alignItems:'center', justifyContent: 'center', flexDirection: 'column'}}>

                            <Image  
                                style={{width: '100%', height: imageWidth* 1.525, borderColor: 'black', borderTopLeftRadius: 9, borderTopRightRadius: 9}} 
                                source={body.images[0]}
                            />  

                            <Text style={{fontSize: 16}}>
                                {body.title.substring(0,16)}
                            </Text>

                            <Text style={{fontSize: 17, fontStyle: 'italic'}}>
                                {body.title.substring(16)}
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