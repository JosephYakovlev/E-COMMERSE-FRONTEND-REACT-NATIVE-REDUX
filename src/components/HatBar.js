import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Modal, ScrollView, TextInput,Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BasketClothCard } from './BasketClothCard';
import { BasketPartyCard } from './BasketPartyCard';
import { deleteAllBasket } from '../redux/actions';




const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth*0.90
const bagWidth = ((windowWidth/100)*30)-40
const basketWidth = windowWidth/3

const windowHeight = Dimensions.get('window').height

console.log('hatbar')
console.log(logoWidth / 4.42)

export default function HatBar() {

  const dispatch = useDispatch()

  const navigation = useNavigation();

  const {cloth, prazdniki} = useSelector(state=>state.BasketReducer)

 

  const clothPrices = cloth.map((item)=>{
    if(!item)
      return 
    return item.price*item.quantity
  })

  const clothOverallPrice = clothPrices.reduce(function( previousValue ,item) {
    return item + previousValue
  },0)

  const partyPrices = prazdniki.map((item)=>{
    if(!item)
      return 
    return (item.animatorPrice*item.animatorQuantity)+(8*item.baloonQuantity)+(item.fireworksPrice*item.fireworksQuantity)
  })

  const partyOverallPrice = partyPrices.reduce(function( previousValue ,item) {
    return item + previousValue
  },0)

  clothOverallPrice + partyOverallPrice 


  console.log('clothesHatBar')
  console.log(prazdniki.length)
  console.log(cloth.length)

  const [showEngModal, setShowEngModal] = useState(false)

  
  const showModalEng = () =>{
      setShowEngModal(true)
      console.log(1)
    }

  const hideModalEng = () => {
      setShowEngModal(false)
  }

  const [showAcceptModal, setShowAcceptModal] = useState(false)

  
  const showModalAccept = () =>{
      setShowAcceptModal(true)
      console.log(1)
    }

  const hideModalAccept = () => {
      setShowAcceptModal(false)
  }
  

  


  return (











    
    
    <View style={{width: '100%', flexDirection: 'row', backgroundColor:'white', height: logoWidth / 5.607}}>












            <Modal 
                visible={showAcceptModal}  
                transparent
                onRequestClose = {()=>
                setShowAcceptModal(false)
                }
                hardwareAccelerated
                animationType='none'
            >
                <TouchableOpacity style={{...styles.modalOne, backgroundColor: 'black'}} onPress = {hideModalAccept}>
                  <View style={{width: '95%', backgroundColor: 'white', borderRadius: 10, alignItems: 'center', paddingVertical: 50, paddingHorizontal: 10}}>

                    <Text style={{fontSize: 17, fontWeight: '300'}}>
                      {'\t'} Пожалуйста, укажите ваши контактные данные, чтобы мы могли отправить на них информацию о заказе. 
                    </Text>

                    <TextInput
                      placeholder="Электронная почта"
                      iconType="user"
                      autoCapitalize="none"
                      autoCorrect={false} 
                      style={styles.input}
                    />

                    <TextInput
                      placeholder="Телефон"
                      iconType="user"
                      autoCapitalize="none"
                      autoCorrect={false} 
                      style={styles.input}
                    />

                    <TouchableOpacity 
                      onPress={() => 
                        {
                          dispatch(deleteAllBasket(0))
                          hideModalAccept()
                          Alert.alert(
                            "Поздравляем, ваш заказ принят!",
                            "Мы направили информацию о заказе на указанные телефон и email.",
                            [
                              { text: "Ок"}
                            ]
                          )
                        }
                      } 
                      style={{
                        width: '60%', 
                        backgroundColor: 'green', 
                        minHeight: 50, 
                        borderRadius: 5, 
                        borderWidth: 1, 
                        alignItems:'center', 
                        justifyContent:'center', 
                        marginTop: 20
                      }}>
                        
                        
                        <Text style={{fontSize: 22, fontWeight: '700', color: 'white'}}>
                            Оформить заказ
                        </Text>
                    </TouchableOpacity>

                  </View>
                </TouchableOpacity>
            </Modal>













        <Modal 
                visible={showEngModal}  
                transparent
                onRequestClose = {()=>
                setShowEngModal(false)
                }
                hardwareAccelerated
                animationType='none'
            >
                <TouchableOpacity style={styles.modalOne} onPress = {hideModalEng}>
                  <View style={{width: '95%', height: 610, backgroundColor: 'white', borderRadius: 10, alignItems: 'center'}}>
                      <Text style={{fontSize: 20, marginTop: 10}}>
                        Корзина
                      </Text>

                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 20}}>
                          Товаров:
                        </Text>
                        <Text style={{fontSize: 20, marginLeft: 10}}>
                          {cloth.length + prazdniki.length}
                        </Text>
                      </View>

                      <View style={{position:'absolute', top: 65,width: '100%', minHeight: 2, backgroundColor: 'black'}}>

                      </View>


                      <ScrollView style={{height: 450, position:'absolute', top: 67, backgroundColor: 'lightblue'}}>

                        {prazdniki.length > 0 && prazdniki.map((prazdnik) => 
                           
                            <TouchableOpacity key = {prazdnik.id} onPress={()=>{navigation.navigate('OrderPrazdnikPage'),hideModalEng()}} style={{width: '100%'}}>
                              <BasketPartyCard currentParty={prazdnik} />
                            </TouchableOpacity>
                          )
                        }

                        {cloth.length > 0 && cloth.map((cloth) => 
                          
                            <TouchableOpacity key = {cloth.id} onPress={()=>{navigation.navigate('MerchPage',cloth.merchData),hideModalEng()}} style={{width: '100%'}}>
                              <BasketClothCard currentCloth = {cloth} />
                            </TouchableOpacity>
                          )
                        }


                       {cloth.length == 0 && prazdniki.length == 0 && 
                         <TouchableOpacity onPress={hideModalEng} style={{justifyContent: 'center'}}>
                           <Text style={{fontSize: 20, alignSelf: 'center',width: '100%',marginTop: 20, marginLeft: 5}}>
                             Ваша корзина пуста!
                           </Text>
                           <Text style={{fontSize: 20, alignSelf: 'center',width: '100%',marginTop: 20, marginLeft: 5,}}>
                             Просто выберите товар и добавьте его в корзину
                           </Text>

                           <Image style={{width: bagWidth*1.5, height: bagWidth*1.5, borderRadius: 30,alignSelf: 'center', marginTop: 50}} source ={require('../../../frontend/assets/bag1.jpg')}/>
                           
                          </TouchableOpacity>

                          



                         
                       }
                      </ScrollView>

                      <View style={{position:'absolute', top: 517,width: '100%', minHeight: 2, backgroundColor: 'black'}}>

                      </View>

                      
                      <View style={{position:'absolute', top: 519,alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                        
                        <View style={{flexDirection: 'row'}}>

                          <Text style={{fontSize: 20}}>
                            Сумма заказа:
                          </Text>

                          <Text style={{fontSize: 23,color: 'green', marginLeft: 10}}>
                            {clothOverallPrice + partyOverallPrice  || 0 } р.
                          </Text>

                        </View>


                        <View style={{flexDirection: 'row', width: '100%', height: 50}}>

                          <TouchableOpacity onPress={hideModalEng} style={{width: '50%', alignItems: 'center', justifyContent:'center'}}>
                            <View style={{width: '60%', alignItems: 'center', justifyContent:'center',minHeight:40,borderRadius: 5, borderWidth: 1,backgroundColor: 'lightblue'}}>
                              <Text>
                                Вернуться 
                              </Text>
                              <Text>
                                к покупкам
                              </Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={showModalAccept} style={{width: '50%', alignItems: 'center', justifyContent:'center'}}>
                            <View style={{width: '60%', alignItems: 'center', justifyContent:'center',minHeight:40,borderRadius: 5, borderWidth: 1,backgroundColor: 'lightgreen'}}>
                              <Text>
                                Оформить 
                              </Text>
                              <Text>
                                Заказ
                              </Text>
                            </View>
                          </TouchableOpacity>

                        </View>

                      </View>

                  </View>

                </TouchableOpacity>
            </Modal>




















      <TouchableOpacity style={{width: '100%'}}>
        
        <Image style={{width: logoWidth, height: logoWidth / 5.607, marginLeft: 5}} source ={require('../../../frontend/assets/logo12.jpg')}/>
        
      </TouchableOpacity>


    <TouchableOpacity onPress={showModalEng} style={{width: basketWidth,height: basketWidth,  alignItems: 'center', borderWidth: 1, borderRadius: 400, position: 'absolute', bottom: 2, right: 2 ,backgroundColor: 'white'}}>
      
      
        
        <Text style={{fontSize: 14, fontStyle: 'italic', color: 'black', marginTop: 3, fontVariant: ['small-caps']}}>
            Корзина:
        </Text>

        <Text style={{fontSize: 16, fontStyle: 'italic', color: 'black', fontVariant: ['small-caps']}}>
          {clothOverallPrice + partyOverallPrice  || 0 } р.
        </Text>
      
      <Image style={{width: bagWidth, height: bagWidth, borderRadius: 25,}} source ={require('../../../frontend/assets/bag1.jpg')}/>

      {cloth.length > 0  && 
       
      <View style={styles.basketQuantity}>
        <Text style={{fontSize: 16, color: 'white'}}>
          {cloth.length + prazdniki.length}
        </Text>
      </View>

      }

      {prazdniki.length > 0  && 
       
       <View style={styles.basketQuantity}>
         <Text style={{fontSize: 16, color: 'white'}}>
           {cloth.length + prazdniki.length}
         </Text>
       </View>
 
       }

  

    </TouchableOpacity>


  </View>

  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalOne:{
   flex: 1,
   alignItems:'center',
   justifyContent: 'center',
   backgroundColor: '#00000099'
  },
  basketQuantity: {
    position: 'absolute', 
    top: 5, 
    right: 5, 
    minHeight: 26, 
    width: 26, 
    backgroundColor: 'red', 
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  input: {
    width: "90%",
    margin: 10,
    padding: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    borderBottomWidth: 1,
  },
  input: {
    width: 350,
    margin: 10,
    padding: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    
  }
});