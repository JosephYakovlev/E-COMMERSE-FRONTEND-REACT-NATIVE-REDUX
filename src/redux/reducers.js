import { SET_BASKET_CLOTHES } from "./actions";
import { SET_BASKET_PRAZDNIK } from "./actions";
import { INCREASE_CLOTH_QUANTITY } from "./actions";
import { DECREASE_CLOTH_QUANTITY } from "./actions";
import { INCREASE_BALOON_QUANTITY } from "./actions";
import { DECREASE_BALOON_QUANTITY } from "./actions";
import { INCREASE_ANIMATOR_QUANTITY } from "./actions";
import { DECREASE_ANIMATOR_QUANTITY } from "./actions";
import { INCREASE_FIREWORKS_QUANTITY } from "./actions";
import { DECREASE_FIREWORKS_QUANTITY } from "./actions";
import { DELETE_BASKET_ITEM } from "./actions";
import { DELETE_BASKET_PRAZDNIK } from "./actions";
import { DELETE_ALL_BASKET } from "./actions";

const initialBasketState = {
    cloth: [],
    prazdniki:[],
    name: '',
    email: '',
    phoneNumber: '',
}

function BasketReducer (state = initialBasketState, action) {

    let payloadPrice = action?.payload?.price ? action.payload.price  *  action.payload.quantity : 0
    console.log('haha')
    console.log(action.type)

    

    switch(action.type) {
        case SET_BASKET_CLOTHES: 
            return {...state, cloth: [...state.cloth, action.payload]}
        
        case SET_BASKET_PRAZDNIK: 
            return {...state, prazdniki: [...state.prazdniki, action.payload]}

        case INCREASE_CLOTH_QUANTITY:

            const reducedArray = state.cloth.map((i) => {
                if (i.id === action.payload.id) {
                    return {...i,quantity: action.payload.quantity+1}
                } 
                    return i
                }
            )

            console.log('reucedArray')
            console.log(reducedArray)


            return {...state, cloth: reducedArray}

        case DECREASE_CLOTH_QUANTITY:

            const reducedDecreasedArray = state.cloth.map((i) => {
                if (i.id === action.payload.id && i.quantity > 1) {
                    return {...i,quantity: action.payload.quantity-1}
                } 
                    return i
                }
            )

            console.log('reducedDecreasedArray')
            console.log(reducedDecreasedArray)


            return {...state, cloth: reducedDecreasedArray}

        case INCREASE_BALOON_QUANTITY:

            const increasedBaloons = state.prazdniki.map((i) => {
                if (i.id === action.payload.id) {
                    return {...i,baloonQuantity: action.payload.baloonQuantity+100}
                } 
                    return i
                }
            )
    
            console.log('increasedBaloons')
            console.log(increasedBaloons)
    
    
            return {...state, prazdniki: increasedBaloons}
        
        case DECREASE_BALOON_QUANTITY:

            const reducedBaloonArray = state.prazdniki.map((i) => {
                if (i.id === action.payload.id && i.baloonQuantity > 0) {
                    return {...i,baloonQuantity: action.payload.baloonQuantity-100}
                } 
                    return i
                }
            )
    
            console.log('reducedBaloonArray')
            console.log(reducedBaloonArray)
    
    
            return {...state, prazdniki: reducedBaloonArray}

            case INCREASE_FIREWORKS_QUANTITY:

            const increasedFireworks = state.prazdniki.map((i) => {
                if (i.id === action.payload.id) {
                    return {...i,fireworksQuantity: action.payload.fireworksQuantity+1}
                } 
                    return i
                }
            )

            console.log('increasedFireworks')
            console.log(increasedFireworks)


            return {...state, prazdniki: increasedFireworks}

        case DECREASE_FIREWORKS_QUANTITY:

            const reducedFireworksArray = state.prazdniki.map((i) => {
                if (i.id === action.payload.id && i.fireworksQuantity > 0) {
                    return {...i,fireworksQuantity: action.payload.fireworksQuantity-1}
                } 
                    return i
                }
            )

            console.log('reducedFireworksArray')
            console.log(reducedFireworksArray)


            return {...state, prazdniki: reducedFireworksArray}

        case INCREASE_ANIMATOR_QUANTITY:

            const increasedAnimators = state.prazdniki.map((i) => {
                if (i.id === action.payload.id) {
                    return {...i,animatorQuantity: action.payload.animatorQuantity+1}
                } 
                    return i
                }
            )
    
            console.log('increasedAnimators')
            console.log(increasedAnimators)
    
    
            return {...state, prazdniki: increasedAnimators}
        
        case DECREASE_ANIMATOR_QUANTITY:

            const reducedAnimatorArray = state.prazdniki.map((i) => {
                if (i.id === action.payload.id && i.animatorQuantity > 1) {
                    return {...i,animatorQuantity: action.payload.animatorQuantity-1}
                } 
                    return i
                }
            )
    
            console.log('reducedAnimatorArray')
            console.log(reducedAnimatorArray)
    
    
            return {...state, prazdniki: reducedAnimatorArray}
            
    
        case DELETE_BASKET_ITEM:

            const reducedDeletedArray = state.cloth.filter(i => 
                i.id !== action.payload.id
            )

            console.log('reducedDeletedArray')
            console.log(reducedDeletedArray)


            return {...state, cloth: reducedDeletedArray}

        case DELETE_BASKET_PRAZDNIK:

            const deletedPartyArray = state.prazdniki.filter(i => 
                i.id !== action.payload.id
            )
    
            console.log('deletedPartyArray')
            console.log(deletedPartyArray)
    
    
            return {...state, prazdniki: deletedPartyArray}

        case DELETE_ALL_BASKET:

    
            console.log('DELETEALLBASKET')
    
    
            return {...state, prazdniki: [], cloth: []}
            
        default:
            return state
    }
    
}

export default BasketReducer