import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import HatBar from '../components/HatBar';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setBasketPrazdnik } from '../redux/actions';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const partyWidth = windowWidth*0.75
const hatBarHeight = (windowWidth*0.9)/5.607
const innerWindowHeight = hatBarHeight+getStatusBarHeight()

const priceHeight = windowWidth/100*2



export default function OrderPrazdnik() {

    
    const {cloth,prazdniki} = useSelector(state=>state.BasketReducer)
    const dispatch = useDispatch()

    console.log('str Prazdnika')
    

    const [order,setOrder] = useState({
        animatorQuantity: 1,
        animatorPrice: 1000,
        baloonQuantity: 100,
        baloonPrice: 800,
        fireworksQuantity: 1,
        fireworksPrice: 5000,
    })

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


            <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 16, color: 'blue', marginHorizontal: 10, fontWeight: '400'}}>
                    Праздничное агенство
                </Text>
            </TouchableOpacity>
            
        </View>

        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth,position:'absolute',left:0, right:0, top: getStatusBarHeight() + 30, bottom:0}} source ={require('../../../frontend/assets/backgroundImage.jpg')}>

            


            <ScrollView style={{position: 'absolute', width: '100%', height: windowHeight-innerWindowHeight}}>
                <View style={{backgroundColor: 'white',width: '90%',borderWidth: 1, alignSelf: 'center', marginTop: 20}}>


                <Text style={{fontSize: 20, alignSelf: 'center'}}>
                    Заказать праздник
                </Text>

                <Text style={{fontSize: 20, alignSelf: 'center'}}>
                    из Пинеточной Страны
                </Text>

                <Image 
                    style={{width: partyWidth, height: partyWidth/1.78, borderRadius: 25,alignSelf:'center', borderWidth: 0.7, borderColor: 'grey'}} 
                    source ={require('../../../frontend/assets/party.jpg')}
                />

                <View style={{width:'95%',backgroundColor:'white',alignSelf:'center',borderWidth: 1,borderStyle:'dashed', marginTop: 15}}> 

                    <View style={{width: '100%',alignItems: 'center', flexDirection: 'row', marginVertical: 5, justifyContent: 'center'}}>

                    <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, fontVariant: ['small-caps']}}>
                            Аниматоры:
                        </Text>
                    </View>

                    <View style={{ width: '50%', alignItems:'center', justifyContent: 'center'}}>
                        <View style={{height: 40, width: '70%', justifyContent: 'center', borderWidth: 1, backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => setOrder({...order, animatorQuantity: order.animatorQuantity > 1 ? order.animatorQuantity - 1 : order.animatorQuantity})} style={{ width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 22}}>
                                        -
                                    </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 22}}>
                                        {order.animatorQuantity}
                                    </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setOrder({...order, animatorQuantity: order.animatorQuantity + 1})} style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 22}}>
                                        +
                                    </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', marginBottom: 10, justifyContent: 'center'}}>

                    <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                            Цена 1 человек/час:
                        </Text>

                        <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                            {order.animatorPrice}
                        </Text>
                    </View>

                    <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                            Сумма:
                        </Text>

                        <Text style={{fontSize: 18, fontVariant: ['small-caps']}}>
                            {order.animatorQuantity*order.animatorPrice}
                        </Text>
                    </View>
                </View>
                </View>  
                    
                <View style={{width:'95%',backgroundColor:'white',alignSelf:'center',borderWidth: 1,borderStyle:'dashed', marginTop: 15}}> 

                        
                        <View style={{width: '100%',alignItems: 'center', flexDirection: 'row', marginVertical: 5, justifyContent: 'center'}}>

                            <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 18, fontVariant: ['small-caps']}}>
                                    Феерверк:
                                </Text>
                            </View>

                            <View style={{ width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <View style={{height: 40, width: '70%', justifyContent: 'center', borderWidth: 1, backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity  onPress={() => setOrder({...order, fireworksQuantity: order.fireworksQuantity > 0 ? order.fireworksQuantity - 1 : order.fireworksQuantity })} style={{ width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 22}}>
                                                -
                                            </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 22}}>
                                                {order.fireworksQuantity}
                                            </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setOrder({...order, fireworksQuantity: order.fireworksQuantity + 1})} style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 22}}>
                                                +
                                            </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', marginBottom: 10, justifyContent: 'center'}}>

                            <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                                    Цена за 1 шт.:
                                </Text>

                                <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                                    {order.fireworksPrice}р.
                                </Text>
                            </View>

                            <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                                    Сумма:
                                </Text>

                                <Text style={{fontSize: 18, fontVariant: ['small-caps']}}>
                                    {order.fireworksPrice*order.fireworksQuantity}р.
                                </Text>
                            </View>
                        </View>
                        </View>


                        

                    <View style={{width:'95%',backgroundColor:'white',alignSelf:'center',borderWidth: 1,borderStyle:'dashed', marginTop: 15}}> 

                        <View style={{width: '100%',alignItems: 'center', flexDirection: 'row', marginVertical: 5, justifyContent: 'center'}}>
                    
                            <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 18, fontVariant: ['small-caps']}}>
                                    Шарики:
                                </Text>
                            </View>

                            <View style={{ width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <View style={{height: 40, width: '70%', justifyContent: 'center', borderWidth: 1, backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => setOrder({...order, baloonQuantity: order.baloonQuantity > 0 ? order.baloonQuantity - 100 : order.baloonQuantity})} style={{ width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 22}}>
                                                -
                                            </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 22}}>
                                                {order.baloonQuantity}
                                            </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setOrder({...order, baloonQuantity: order.baloonQuantity + 100})} style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 22}}>
                                                +
                                            </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', marginBottom: 10, justifyContent: 'center'}}>
                    
                            <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                                    Цена за 100 шт.:
                                </Text>

                                <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                                    {order.baloonPrice}р.
                                </Text>
                            </View>

                            <View style={{ height: 40, width: '50%', alignItems:'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, fontVariant: ['small-caps']}}>
                                    Сумма:
                                </Text>

                                <Text style={{fontSize: 18, fontVariant: ['small-caps']}}>
                                    {order.baloonQuantity*8} р.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{width: '100%', alignItems: 'center', flexDirection: 'row'}}>
                        <Text style={{fontSize: 18, marginLeft: 20}}>
                            Общая стоимость: 
                        </Text>
                            
                        <Text style={{fontSize: 20, marginLeft: 20, color: 'green'}}>
                            {(order.animatorPrice*order.animatorQuantity)+(8*order.baloonQuantity)+(order.fireworksPrice*order.fireworksQuantity)} р.
                        </Text>

                        
                    </View>

                    <TouchableOpacity onPress={() => dispatch(setBasketPrazdnik({...order,id: cloth.length + prazdniki.length + 1,}))} style={{width: '100%', alignItems: 'center', justifyContent:'center', marginVertical: 15}}>
                        <View style={{width: '60%', alignItems: 'center', justifyContent:'center',minHeight:40,borderRadius: 5, borderWidth: 1,backgroundColor: 'lightgreen'}}>
                            <Text>
                                Добавить 
                            </Text>
                            
                            <Text>
                                в корзину
                            </Text>
                        </View>
                    </TouchableOpacity>

                    

                          


                </View>

                <View style={{minHeight: 75}}>

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
        marginBottom: 60,
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