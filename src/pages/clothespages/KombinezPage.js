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


export default function KombinezPage() {

    const navigation = useNavigation();
    

        const kombinez = [
            {
                id: 5,
                price: 1740,
                prevPrice: 2900,
                title: 'Комбинезон с открытыми ножками «Черно-белые герои»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkr4BGeroi.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkr4BGeroi1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkr4BGeroi2.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkr4BGeroi3.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkr4BGeroi4.jpg'),
                ],
                sizes: [
                    '80-86 см (1-1,5 года)',
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0005',
                    'Произведено в России',
                ]
            },{
                id: 6,
                price: 1740,
                prevPrice: 2900,
                title: 'Комбинезон с открытыми ножками «Брокколи»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrBrokkoli.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrBrokkoli1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrBrokkoli1.jpg'),
                ],
                sizes: [
                    '80-86 см (1-1,5 года)',
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0006',
                    'Произведено в России',
                ]
            },{
                id: 7,
                price: 1740,
                prevPrice: 2900,
                title: 'Комбинезон с открытыми ножками «Герои»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrGeroi.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrGeroi1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrGeroi2.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrGeroi3.jpg'),
                ],
                sizes: [
                    '80-86 см (1-1,5 года)',
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0007',
                    'Произведено в России',
                ]
            },{
                id: 8,
                price: 1740,
                prevPrice: 2900,
                title: 'Комбинезон с открытыми ножками «Зефирка»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrZefirka.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrZefirka1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrZefirka2.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrZefirka3.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombOtkrZefirka4.jpg'),
                ],
                sizes: [
                    '80-86 см (1-1,5 года)',
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0008',
                    'Произведено в России',
                ]
            },{
                id: 9,
                price: 1680,
                prevPrice: 2800,
                title: 'Комбинезон с закрытыми ножками «Черно-белые герои»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombZakr4BGeroi.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakr4BGeroi1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakr4BGeroi2.jpg'),
                ],
                sizes: [
                    '50-56 см (0-1 мес)',
                    '56-62 см (0-3 мес)',
                    '62-68 см (3-6 мес)',
                    '68-74 см (6-9 мес)',
                    '74-80 см (9-12 мес)'
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0009',
                    'Произведено в России',
                ]
            },{
                id: 10,
                price: 1680,
                prevPrice: 2800,
                title: 'Комбинезон с закрытыми ножками «Брокколи»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrBrokkoli.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrBrokkoli1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrBrokkoli1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrBrokkoli2.jpg'),
                ],
                sizes: [
                    '50-56 см (0-1 мес)',
                    '56-62 см (0-3 мес)',
                    '62-68 см (3-6 мес)',
                    '68-74 см (6-9 мес)',
                    '74-80 см (9-12 мес)'
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0010',
                    'Произведено в России',
                ]
            },{
                id: 11,
                price: 1680,
                prevPrice: 2800,
                title: 'Комбинезон с закрытыми ножками «Герои»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrGeroi.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrGeroi1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrGeroi2.jpg'),
                ],
                sizes: [
                    '50-56 см (0-1 мес)',
                    '56-62 см (0-3 мес)',
                    '62-68 см (3-6 мес)',
                    '68-74 см (6-9 мес)',
                    '74-80 см (9-12 мес)'
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0011',
                    'Произведено в России',
                ]
            },{
                id: 12,
                price: 1680,
                prevPrice: 2800,
                title: 'Комбинезон с закрытыми ножками «Зефирка»',
                images: [ 
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrZefirka.jpeg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrZefirka1.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrZefirka2.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrZefirka3.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrZefirka4.jpg'),
                    require('../../../../frontend/assets/clothes/kombinez/KombZakrZefirka5.jpg'),
                ],
                sizes: [
                    '50-56 см (0-1 мес)',
                    '56-62 см (0-3 мес)',
                    '62-68 см (3-6 мес)',
                    '68-74 см (6-9 мес)',
                    '74-80 см (9-12 мес)'
                ],
                desc: 'Комбинезон сшит из мягкого трикотажа на основе хлопка.',
                benefits: [
                    'Состав 100% хлопок',
                    'Артикул: 0012',
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
                    Комбинезоны
                </Text>
            </TouchableOpacity>
            
        </View>

        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,position:'absolute',left:0, right:0, top: getStatusBarHeight() + 30, bottom:0}} source ={require('../../../../frontend/assets/backgroundImage.jpg')}>

            <ScrollView style={{position: 'absolute',marginBottom: 120, width: '100%', height: windowHeight-innerWindowHeight}}>
        
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    {kombinez.map((body) => 
                        <TouchableOpacity onPress={()=>{navigation.navigate('MerchPage',body)}} key = {body.id} style={{...styles.container, width: '47%',marginLeft: '2%', alignItems:'center', justifyContent: 'center', flexDirection: 'column'}}>

                            <Image  
                                style={{width: '100%', height: imageWidth* 1.525, borderColor: 'black', borderTopLeftRadius: 9, borderTopRightRadius: 9}} 
                                source={body.images[0]}
                            />  

                            <Text style={{fontSize: 15}}>
                                {body.title.substring(0,13)}
                            </Text>
                            <Text style={{fontSize: 15}}>
                                {body.title.substring(13,30)}
                            </Text>

                            <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                                {body.title.substring(30)}
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