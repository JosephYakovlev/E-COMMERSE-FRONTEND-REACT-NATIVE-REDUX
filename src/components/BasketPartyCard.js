import React, {useState,useCallback, useEffect, useContext} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Alert, Modal} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { increaseBaloonQuantity, decreaseBaloonQuantity,increaseAnimatorQuantity, decreaseAnimatorQuantity,increaseFireworksQuantity, decreaseFireworksQuantity, deleteBasketPrazdnik} from '../redux/actions';

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth/4

export const BasketPartyCard = ({currentParty}) => {

    const navigation = useNavigation();

    const dispatch = useDispatch()

    console.log('currentParty')
    console.log(currentParty)


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
                                Праздник от «Пинеточной»
                            </Text>

                            <View style={{flexDirection:'row',width: '90%',alignSelf:'center'}}>

                        <Text style={{width: '60%',fontSize: 17} }>
                            Аниматоры:
                        </Text>

                        <View style={{width:'40%', flexDirection: 'row'}}>
                                <TouchableOpacity  onPress={() => dispatch(decreaseAnimatorQuantity(currentParty))} style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            -
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            {currentParty.animatorQuantity}
                                        </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={() => dispatch(increaseAnimatorQuantity(currentParty))} style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            +
                                        </Text>
                                </TouchableOpacity>
                            </View>  
                    </View>

                    <View style={{flexDirection:'row',width: '90%',alignSelf:'center'}}>

                        <Text style={{width: '60%',fontSize: 17} }>
                            Феерверки:
                        </Text>

                        <View style={{width:'40%', flexDirection: 'row'}}>
                                <TouchableOpacity  onPress={() => dispatch(decreaseFireworksQuantity(currentParty))} style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            -
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            {currentParty.fireworksQuantity}
                                        </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={() => dispatch(increaseFireworksQuantity(currentParty))} style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            +
                                        </Text>
                                </TouchableOpacity>
                            </View>  
                    </View>

                    <View style={{flexDirection:'row',width: '90%',alignSelf:'center'}}>

                        <Text style={{width: '40%',fontSize: 17} }>
                            Шарики:
                        </Text>

                        <View style={{width:'60%', flexDirection: 'row'}}>
                                <TouchableOpacity  onPress={() => dispatch(decreaseBaloonQuantity(currentParty))} style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            -
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            {currentParty.baloonQuantity}
                                        </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={() => dispatch(increaseBaloonQuantity(currentParty))} style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            +
                                        </Text>
                                </TouchableOpacity>
                            </View>  
                    </View>

                            <View style={{width: '100%',flexDirection: 'row', minHeight: 30}}>

                                <View style={{width: '40%',alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
                                    <Text style={{marginTop: 5, fontSize: 20, color: 'blue'}}>
                                        1
                                    </Text>

                                    <Text style={{marginTop: 5, fontSize: 19,marginLeft: 10}}>
                                        Заказ
                                    </Text>

                                </View>

                                <View style={{width: '60%',alignItems: 'center', justifyContent: 'space-around',flexDirection:'row'}}>
                                    
                                    <Text style={{marginTop: 5, fontSize: 17}}>
                                        На сумму:
                                    </Text>

                                    <Text style={{marginTop: 5, fontSize: 21,color: 'green'}}>
                                        {(currentParty.animatorPrice*currentParty.animatorQuantity)+(8*currentParty.baloonQuantity)+(currentParty.fireworksPrice*currentParty.fireworksQuantity)} р.
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

                                <TouchableOpacity onPress={() => dispatch(deleteBasketPrazdnik(currentParty))} style={{width: '50%',alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
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
                
                    <Text style={{fontSize: 15, fontWeight: '400', color: '#A1018B',}}>
                        Праздник от «Пинеточной»
                    </Text>

                    <View style={{flexDirection:'row',width: '100%'}}>

                        <Text style={{width: '60%',fontSize: 17} }>
                            Аниматоры:
                        </Text>

                        <View style={{width:'40%', flexDirection: 'row'}}>
                                <TouchableOpacity  onPress={() => dispatch(decreaseAnimatorQuantity(currentParty))} style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            -
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            {currentParty.animatorQuantity}
                                        </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={() => dispatch(increaseAnimatorQuantity(currentParty))} style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            +
                                        </Text>
                                </TouchableOpacity>
                            </View>  
                    </View>

                    <View style={{flexDirection:'row',width: '100%'}}>

                        <Text style={{width: '60%',fontSize: 17} }>
                            Феерверки:
                        </Text>

                        <View style={{width:'40%', flexDirection: 'row'}}>
                                <TouchableOpacity  onPress={() => dispatch(decreaseFireworksQuantity(currentParty))} style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            -
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            {currentParty.fireworksQuantity}
                                        </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={() => dispatch(increaseFireworksQuantity(currentParty))} style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            +
                                        </Text>
                                </TouchableOpacity>
                            </View>  
                    </View>

                    <View style={{flexDirection:'row',width: '100%'}}>

                        <Text style={{width: '40%',fontSize: 17} }>
                            Шарики:
                        </Text>

                        <View style={{width:'60%', flexDirection: 'row'}}>
                                <TouchableOpacity  onPress={() => dispatch(decreaseBaloonQuantity(currentParty))} style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            -
                                        </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            {currentParty.baloonQuantity}
                                        </Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity onPress={() => dispatch(increaseBaloonQuantity(currentParty))} style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20}}>
                                            +
                                        </Text>
                                </TouchableOpacity>
                            </View>  
                    </View>


                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Text style={{fontSize: 16, marginLeft: 10}}>
                            Сумма:
                        </Text>
                        <Text style={{fontSize: 18, marginLeft: 10,color:'green'}}>
                            {(currentParty.animatorPrice*currentParty.animatorQuantity)+(8*currentParty.baloonQuantity)+(currentParty.fireworksPrice*currentParty.fireworksQuantity)} р.
                        </Text>

                    </View>
                    

                </View>
                        

                <View style={{ width: '40%', alignItems: 'center', alignSelf: 'center'}}>
                    <Image source= {require('../../../frontend/assets/party1.jpg')} style={{
                        width: imageWidth+20,
                        height: imageWidth+20,
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

            
                
            <Image source= {require('../../../frontend/assets/party13.png')} style={{
                position:'absolute', 
                top: -27,
                right: 3,
                width: 60,
                height: 60,
            }}/>
                            
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
