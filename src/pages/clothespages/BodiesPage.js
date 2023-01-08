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



export default function BodiesPage() {

    const navigation = useNavigation();
    
    
    const bodies = [
        {
            id: 1,
            price: 1260,
            prevPrice: 2100,
            title: 'Боди с принтом «Черно-белые герои»',
            images: [ 
                require('../../../../frontend/assets/clothes/bodies/bodi4ern.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodi4ern1.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodi4ern2.jpeg')
            ],
            sizes: [
                '56-62 см (0-3 мес)',
                '62-68 см (3-6 мес)',
                '68-74 см (6-9 мес)',
                '74-80 см (9-12 мес)'
            ],
            desc: 'Боди с длинными руками и круглым вырезом. Изделие сшито из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0001',
                'Произведено в России',
            ]
        },{
            id: 2,
            price: 1260,
            prevPrice: 2100,
            title: 'Боди с принтом «Брокколи»',
            images: [ 
                require('../../../../frontend/assets/clothes/bodies/bodibrokkoli.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodibrokkoli1.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodibrokkoli2.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodibrokkoli3.jpeg'),
            ],
            sizes: [
                '56-62 см (0-3 мес)',
                '62-68 см (3-6 мес)',
                '68-74 см (6-9 мес)',
                '74-80 см (9-12 мес)'
            ],
            desc: 'Боди с длинными руками и круглым вырезом. Изделие сшито из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0002',
                'Произведено в России',
            ]
        },{
            id: 3,
            price: 1260,
            prevPrice: 2100,
            title: 'Боди с принтом «Герои»',
            images: [ 
                require('../../../../frontend/assets/clothes/bodies/bodigeroi.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodigeroi1.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodigeroi2.jpeg'),
            ],
            sizes: [
                '56-62 см (0-3 мес)',
                '62-68 см (3-6 мес)',
                '68-74 см (6-9 мес)',
                '74-80 см (9-12 мес)'
            ],
            desc: 'Боди с длинными руками и круглым вырезом. Изделие сшито из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0003',
                'Произведено в России',
            ]
        },{
            id: 4,
            price: 1260,
            prevPrice: 2100,
            title: 'Боди с принтом «Зефирка»',
            images: [ 
                require('../../../../frontend/assets/clothes/bodies/bodizefir.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodizefir1.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodizefir2.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodizefir3.jpeg'),
                require('../../../../frontend/assets/clothes/bodies/bodizefir4.jpeg'),
            ],
            sizes: [
                '56-62 см (0-3 мес)',
                '62-68 см (3-6 мес)',
                '68-74 см (6-9 мес)',
                '74-80 см (9-12 мес)'
            ],
            desc: 'Боди с длинными руками и круглым вырезом. Изделие сшито из мягкого трикотажа на основе хлопка.',
            benefits: [
                'Состав 100% хлопок',
                'Артикул: 0004',
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
                    Боди
                </Text>
            </TouchableOpacity>

        </View> 
      
        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,position:'absolute',left:0, right:0, top: getStatusBarHeight() + 30, bottom:0}} source ={require('../../../../frontend/assets/backgroundImage2.jpg')}>
        
            <ScrollView style={{position: 'absolute',marginBottom: 120, width: '100%', height: windowHeight-innerWindowHeight}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    {bodies.map((body) => 
                        <TouchableOpacity onPress={()=>{navigation.navigate('MerchPage',body)}} key = {body.id} style={{...styles.container, width: '47%',marginLeft: '2%', alignItems:'center', justifyContent: 'center', flexDirection: 'column'}}>

                            <Image  
                                style={{width: '100%', height: imageWidth* 1.525, borderColor: 'black', borderTopLeftRadius: 9, borderTopRightRadius: 9}} 
                                source={body.images[0]}
                            />  

                            <Text style={{fontSize: 18}}>
                                {body.title.substring(0,14)}
                            </Text>

                            <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                                {body.title.substring(15)}
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