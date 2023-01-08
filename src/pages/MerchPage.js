import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import HatBar from '../components/HatBar';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setBasketCloth } from '../redux/actions';
import ImageView from "react-native-image-viewing";
import { getStatusBarHeight } from 'react-native-status-bar-height'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const singleImageWidth =windowWidth/100*95
const imageWidth = windowWidth/100*60
const hatBarHeight = (windowWidth*0.9)/5.607
const innerWindowHeight = hatBarHeight+getStatusBarHeight()

const priceHeight = windowWidth/100*2



export default function MerchPage(merch) {

    const currentMerch = merch.route.params
    
    const {cloth,prazdniki} = useSelector(state=>state.BasketReducer)
    const dispatch = useDispatch()

    console.log('str odejdi')
    console.log(currentMerch.id)
    console.log(typeof currentMerch.id)
    

    const [order,setOrder] = useState({
        id: cloth.length + 1,
        size: '',
        quantity: 1,
        price: currentMerch.price,
        avatar: currentMerch.images[0],
        merchData: currentMerch
    })

    const [imageViewerProps, setImageViewerProps] = useState({
        visible: false,
        index: 0
    })


   


    

    const navigation = useNavigation();
    
    const routeClothesPage = () =>{
        navigation.navigate('ClothesPage')
    }
    
    
    
    
    

  return (
      <>

        <ImageView
            images={currentMerch.images}
            imageIndex={imageViewerProps.index}
            visible={imageViewerProps.visible}
            onRequestClose={() => setImageViewerProps({...imageViewerProps, visible: false})}
        />

            <View style={{width: '100%',minHeight: 30, backgroundColor: 'white', flexDirection:'row',borderWidth: 0.7, borderColor: 'black',marginTop: getStatusBarHeight()}}>
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
                            {currentMerch.title.substring(0,20)}...
                        </Text>
                    </TouchableOpacity>
                </View> 

            <ScrollView style={{position: 'absolute', width: '100%', height: windowHeight-innerWindowHeight,top: getStatusBarHeight()+30}}>
                
                
                
                <View style={{backgroundColor: 'white'}}>

                {currentMerch.id <= 4 &&
                    <View style={{width: '100%', backgroundColor: 'white', minHeight: 50, alignItems: 'center'}}>
                        <Text style={{fontSize: 18}}>
                            {currentMerch.title.substring(0,14)}
                        </Text>

                        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                            {currentMerch.title.substring(15)}
                        </Text>
                    </View>
                
                }

                {currentMerch.id > 4  && currentMerch.id <= 12  &&
                    <View style={{width: '100%', backgroundColor: 'white', minHeight: 50, alignItems: 'center'}}>
                        
                        <Text style={{fontSize: 15}}>
                            {currentMerch.title.substring(0,13)}
                        </Text>

                        <Text style={{fontSize: 15}}>
                            {currentMerch.title.substring(13,30)}
                        </Text>

                        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                            {currentMerch.title.substring(30)}
                        </Text>
                    </View>
                
                }

                {currentMerch.id > 12  && currentMerch.id <= 20  &&
                    <View style={{width: '100%', backgroundColor: 'white', minHeight: 50, alignItems: 'center'}}>
                        <Text style={{fontSize: 18}}>
                            {currentMerch.title.substring(0,16)}
                        </Text>

                        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                            {currentMerch.title.substring(16)}
                        </Text>
                    </View>
                
                }


                {currentMerch.id > 20  && currentMerch.id <= 26  &&
                    <View style={{width: '100%', backgroundColor: 'white', minHeight: 50, alignItems: 'center'}}>
                        <Text style={{fontSize: 18}}>
                            {currentMerch.title.substring(0,18)}
                        </Text>

                        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                            {currentMerch.title.substring(18)}
                        </Text>
                    </View>
                
                }

                {currentMerch.id > 26  && currentMerch.id <= 31  &&
                    <View style={{width: '100%', backgroundColor: 'white', minHeight: 50, alignItems: 'center'}}>
                        <Text style={{fontSize: 18}}>
                            {currentMerch.title.substring(0,20)}
                        </Text>

                        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                            {currentMerch.title.substring(21)}
                        </Text>
                    </View>
                
                }    

                {currentMerch.id > 31  && currentMerch.id <= 36  &&
                    <View style={{width: '100%', backgroundColor: 'white', minHeight: 50, alignItems: 'center'}}>
                        <Text style={{fontSize: 18}}>
                            {currentMerch.title.substring(0,15)}
                        </Text>

                        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                            {currentMerch.title.substring(15)}
                        </Text>
                    </View>
                
                }

                {currentMerch.id > 36  && currentMerch.id <= 42  &&
                    <View style={{width: '100%', backgroundColor: 'white', minHeight: 50, alignItems: 'center'}}>
                        <Text style={{fontSize: 18}}>
                            {currentMerch.title.substring(0,18)}
                        </Text>

                        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                            {currentMerch.title.substring(18)}
                        </Text>
                    </View>
                
                }

                

                {currentMerch.images.length == 1 
                        
                        ?
                    <TouchableOpacity onPress={()=>setImageViewerProps({visible: true, index: 0})}>
                        <Image  
                            style={{width: singleImageWidth, height: singleImageWidth, borderColor: 'black', borderRadius: 9, marginHorizontal: 5,alignSelf: 'center'}} 
                            source={currentMerch.images[0]}
                        /> 
                    </TouchableOpacity>
                    
                        : 
                    
                    <ScrollView style={{width: '100%', alignSelf: 'center', alignContent: 'stretch'}} horizontal={true}>
                    
                        {currentMerch.images.map((img, indx)=>
                            <TouchableOpacity key={img} onPress={()=>setImageViewerProps({visible: true, index: indx})}>
                                <Image  
                                    style={{width: imageWidth, height: imageWidth* 1.525, borderColor: 'black', borderRadius: 9, marginHorizontal: 5,}} 
                                    source={img}
                                />
                            </TouchableOpacity>
                        )}
                                
                    </ScrollView>
                }

                <View style={{width: '98%', alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>
                        Описание
                    </Text>
                </View>

                {currentMerch.benefits.map((benefit)=>

                    <View key = {benefit} style={{width: '100%', minHeight: 35,flexDirection:'row',alignItems: 'center'}}>
                        <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}> 
                            <View style={{minHeight: 12,width: 12, backgroundColor: '#648218',borderRadius: 6, borderWidth:1}}>
                                
                            </View>
                        </View>
                        <View style={{width: '85%', justifyContent: 'center'}}> 
                            <Text style={{fontSize: 18}}>
                                {benefit}
                            </Text>
                        </View>
                    </View>
                )}

                    <Text   style={{fontSize: 19, fontWeight: '300', alignSelf: 'center',width: '95%'}}>
                        {currentMerch.desc}
                    </Text>

                <View style={{width: '100%', backgroundColor: 'white', minHeight: 100, alignItems: 'center', flexDirection: 'row'}}>
                
                    <View style={{width: '26%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 22, color: 'green', fontStyle: 'italic'}}>
                            {currentMerch.price} руб.
                        </Text>
                                
                        <Text style={{fontSize: 16, textDecorationLine: 'line-through', textDecorationColor: 'red', color: 'grey', fontStyle: 'italic'}}>
                            {currentMerch.prevPrice} руб.
                        </Text>

                        <View style={{minHeight: 35, width: '60%', borderRadius: 5, borderWidth: 1, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20}}>
                                -40%
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: '74%'}}>

                        <Text style={{alignSelf: 'center', fontSize: 18}}>
                            Размер
                        </Text>

                        
                            {currentMerch.sizes.length == 1 
                            
                                ?
                                
                                <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                                    <TouchableOpacity onPress={()=>setOrder({...order,size: currentMerch.sizes[0]})} style={{...styles.priceContainer, backgroundColor: currentMerch.sizes[0] === order.size ? 'lightblue': 'white',width: '60%', marginTop: 10}}>
                                        <Text>
                                            {currentMerch.sizes[0]}
                                        </Text>
                                    </TouchableOpacity> 
                                </View>
                            
                                    :

                                <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap',}}>
                                    {currentMerch.sizes.map((size1)=>

                                        <TouchableOpacity key = {size1} onPress={()=>setOrder({...order,size: size1})} style={{...styles.priceContainer, backgroundColor: size1 === order.size ? 'lightblue': 'white',}}>
                                            <Text>
                                                {size1}
                                            </Text>
                                        </TouchableOpacity>
                                
                                    )}
                                </View>
                                
                            }


                        

                        
                    </View>


                </View>


                <Text style={{alignSelf: 'center', fontSize: 18, marginTop: 10}}>
                    Заказать
                </Text>

                <View style={{width: '100%', backgroundColor: 'white', alignItems: 'center', flexDirection: 'row', marginVertical: 10, justifyContent: 'center'}}>
                
                    <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, fontVariant: ['small-caps']}}>
                            Количество:
                        </Text>
                    </View>

                    <View style={{ width: '50%', alignItems:'center', justifyContent: 'center'}}>
                       <View style={{height: 40, width: '70%', justifyContent: 'center', borderWidth: 1, backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => setOrder({...order, quantity: order.quantity > 1 ? order.quantity - 1 : order.quantity})} style={{ width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 22}}>
                                        -
                                    </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 22}}>
                                        {order.quantity}
                                    </Text>
                            </TouchableOpacity>
 
                            <TouchableOpacity onPress={() => setOrder({...order, quantity: order.quantity + 1})} style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 22}}>
                                        +
                                    </Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>

                <TouchableOpacity onPress={() => dispatch(setBasketCloth({...order,id: cloth.length + prazdniki.length + 1,}))} style={styles.intoBasket}>
                    <Text style={{fontSize: 20, fontVariant: ['small-caps']}}>  
                        В корзину
                    </Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
       
       

        <View style={{position: 'absolute', bottom: 0, borderTopWidth: 2}}>
            <HatBar />
        </View>

        </>
            
           
  );
}

const styles = StyleSheet.create({
    priceContainer :{
        minHeight: 40, 
        width: '47%',
        marginLeft: priceHeight,
        marginTop: priceHeight, 
        backgroundColor: 'white',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        elevation: 5,
        alignItems: 'center', 
        justifyContent: 'center'
    },
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
    intoBasket: {
        height: 40, 
        width: '50%', 
        alignItems:'center', 
        justifyContent: 'center', 
        borderWidth: 1, 
        backgroundColor: 'white', 
        alignSelf: 'center', 
        marginBottom: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    }
});