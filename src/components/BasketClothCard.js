import React, {useState,useCallback, useEffect, useContext} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Modal} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { increaseClothQuantity, decreaseClothQuantity, deleteBasketItem } from '../redux/actions';

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth/4

export const BasketClothCard = ({currentCloth}) => {

    const navigation = useNavigation();

    const dispatch = useDispatch()

    console.log('currentCloth')
    console.log(currentCloth)


    const [showDeleteModal, setShowDeleteModal] = useState(false)

  
    const showModalDelete = () =>{
        setShowDeleteModal(true)
        console.log(1)
        }

    const hideModalDelete = () => {
        setShowDeleteModal(false)
    }

    
   
    return ( 
        <View style={styles.ticketContainer}>





















            <Modal 
                visible={showDeleteModal}  
                transparent
                onRequestClose = {()=>
                setShowDeleteModal(false)
                }
                hardwareAccelerated
                animationType='none'
            >
                <TouchableOpacity style={styles.modalOne} onPress = {hideModalDelete}>
                  <TouchableOpacity style={{width: '85%',  backgroundColor: 'white', }}>
                        <Text style={{marginTop: 10, fontSize: 19,marginLeft: 12}}>
                            Желаете удалить этот товар из корзины?
                        </Text>

                        <View style={styles.deleteArea}>
                            
                            <Text style={{marginTop: 5, fontSize: 17, color: 'blue', alignSelf: 'center', fontWeight:'600'}}>
                                {currentCloth.merchData.title}
                            </Text>

                            <View style={{width: '100%',flexDirection: 'row', minHeight: 30}}>

                                <View style={{width: '40%',alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
                                    <Text style={{marginTop: 5, fontSize: 19}}>
                                        {currentCloth.quantity}
                                    </Text>

                                    <Text style={{marginTop: 5, fontSize: 19,marginLeft: 10}}>
                                        Шт.
                                    </Text>

                                </View>

                                <View style={{width: '60%',alignItems: 'center', justifyContent: 'space-around',flexDirection:'row'}}>
                                    
                                    <Text style={{marginTop: 5, fontSize: 17}}>
                                        На сумму:
                                    </Text>

                                    <Text style={{marginTop: 5, fontSize: 21,color: 'green'}}>
                                        {currentCloth.quantity*currentCloth.price} р.
                                    </Text>
                                </View>
                            </View>
                        </View>


                        <View style={{width: '100%',flexDirection: 'row', marginTop: 25,marginBottom: 20}}>

                                <TouchableOpacity onPress = {hideModalDelete} style={{width: '50%',alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
                                    <View style={{width: '80%', backgroundColor: 'lightgreen',minHeight: 35, borderRadius: 5, borderWidth:1,alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 19}}>
                                            Оставить
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => dispatch(deleteBasketItem(currentCloth))} style={{width: '50%',alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
                                    <View style={{width: '80%', backgroundColor: 'red',minHeight: 35, borderRadius: 5, borderWidth:1,alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 19,fontWeight: 'bold', color:'white'}}>
                                            Удалить
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                  </TouchableOpacity>
                </TouchableOpacity>
            </Modal>














            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                
                <View style={styles.leftTicketCont}> 
                
                    <Text style={{fontSize: 15, fontWeight: '400', color: 'blue',}}>
                        {currentCloth.merchData.title.substring(0,20)}...
                    </Text>

                    <View style={{flexDirection:'row'}}>

                        <Text >
                            Размер:
                        </Text>

                        <Text style={{marginLeft: 5, fontStyle: 'italic', fontSize:16}}>
                            {currentCloth.size} 
                        </Text>  
                    </View>


                    <View style={{flexDirection:'row'}}>

                        <Text >
                            Цена за 1 шт:
                        </Text>

                        <Text style={{fontSize: 18, color: 'green', marginLeft: 5, fontStyle: 'italic'}}>
                            {currentCloth.price} р.
                        </Text>  
                    </View>


                    <View style={{flexDirection:'row'}}>

                        <View style={{width: '50%', alignItems: 'center', backgroundColor: 'white', minHeight: 40}}>
                            <Text>
                                Количество:
                            </Text>

                            <View style={{width:'100%', flexDirection: 'row'}}>
                            <TouchableOpacity  onPress={() => dispatch(decreaseClothQuantity(currentCloth))} style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20}}>
                                        -
                                    </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20}}>
                                        {currentCloth.quantity}
                                    </Text>
                            </TouchableOpacity>
 
                            <TouchableOpacity onPress={() => dispatch(increaseClothQuantity(currentCloth))} style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20}}>
                                        +
                                    </Text>
                            </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{width: '50%', alignItems: 'center', backgroundColor: 'white', minHeight: 40}}>

                            <Text>
                                Сумма:
                            </Text>

                            <Text style={{fontSize: 22,  color: 'green', marginLeft: 5, fontStyle: 'italic'}}>
                                {currentCloth.quantity*currentCloth.price} р.
                            </Text> 

                        </View>
                    </View>

                    


                </View>

                <View style={{ width: '40%', alignItems: 'center', alignSelf: 'center'}}>
                    <Image source= {currentCloth.avatar} style={{
                        width: imageWidth,
                        height: imageWidth+20,
                        borderWidth: 1,
                        borderColor: 'black',
                    }}/>
                </View>

        
            </View>


            <TouchableOpacity onPress={showModalDelete} style={{position:'absolute', bottom: -7,right: -7, minHeight: 30, width: 30,alignItems: 'center', justifyContent: 'center', borderWidth: 1, backgroundColor: 'white',borderRadius: 30}}>
                
                <Image source= {require('../../../frontend/assets/delete.jpg')} style={{
                        width: 20,
                        height: 20,
                        borderColor: 'black',
                    }}/>
            </TouchableOpacity>
                            
      </View>
      
    )
}
      

     


const styles = StyleSheet.create({
    ticketContainer: {
        backgroundColor: 'white',
        borderRadius: 1,
        margin: 10,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        flexDirection: 'row',
        width: '95%',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    
    image:{
        width: 140,
        height: 100,
        borderRadius: 5,
    },
    leftTicketCont:{
        width:'60%'
        
        
    },
    modalOne:{
     flex: 1,
     alignItems:'center',
     justifyContent: 'center',
     backgroundColor: '#00000099'
    },
    deleteArea: {
        width: '90%',
        borderWidth: 1,
        borderStyle: 'dashed',
        marginTop: 5,
        alignSelf: 'center',
        marginTop: 20
    }
 
})
