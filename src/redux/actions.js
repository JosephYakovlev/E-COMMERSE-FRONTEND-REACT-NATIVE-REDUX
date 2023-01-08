export const SET_BASKET_CLOTHES = 'SET_BASKET_CLOTHES'
export const SET_BASKET_PRAZDNIK = 'SET_BASKET_PRAZDNIK'
export const INCREASE_CLOTH_QUANTITY = 'INCREASE_CLOTH_QUANTITY'
export const DECREASE_CLOTH_QUANTITY = 'DECREASE_CLOTH_QUANTITY'
export const INCREASE_BALOON_QUANTITY = 'INCREASE_BALOON_QUANTITY'
export const DECREASE_BALOON_QUANTITY = 'DECREASE_BALOON_QUANTITY'
export const INCREASE_ANIMATOR_QUANTITY = 'INCREASE_ANIMATOR_QUANTITY'
export const DECREASE_ANIMATOR_QUANTITY = 'DECREASE_ANIMATOR_QUANTITY'
export const INCREASE_FIREWORKS_QUANTITY = 'INCREASE_FIREWORKS_QUANTITY'
export const DECREASE_FIREWORKS_QUANTITY = 'DECREASE_FIREWORKS_QUANTITY'
export const DELETE_BASKET_ITEM = 'DELETE_BASKET_ITEM'
export const DELETE_BASKET_PRAZDNIK = 'DELETE_BASKET_PRAZDNIK'
export const DELETE_ALL_BASKET = 'DELETE_ALL_BASKET'

export const setBasketCloth = cloth => dispatch => {
    
    dispatch({
        type: SET_BASKET_CLOTHES,
        payload: cloth
    })
}

export const setBasketPrazdnik = prazdniki => dispatch => {
    
    dispatch({
        type: SET_BASKET_PRAZDNIK,
        payload: prazdniki
    })
}

export const increaseClothQuantity = cloth => dispatch => {

    dispatch({
        type: INCREASE_CLOTH_QUANTITY,
        payload: cloth
    })
}

export const decreaseClothQuantity = cloth => dispatch => {

    dispatch({
        type: DECREASE_CLOTH_QUANTITY,
        payload: cloth
    })
}

export const increaseBaloonQuantity = prazdniki => dispatch => {

    dispatch({
        type: INCREASE_BALOON_QUANTITY,
        payload: prazdniki
    })
}

export const decreaseBaloonQuantity = prazdniki => dispatch => {

    dispatch({
        type: DECREASE_BALOON_QUANTITY,
        payload: prazdniki
    })
}

export const increaseAnimatorQuantity = prazdniki => dispatch => {

    dispatch({
        type: INCREASE_ANIMATOR_QUANTITY,
        payload: prazdniki
    })
}

export const decreaseAnimatorQuantity = prazdniki => dispatch => {

    dispatch({
        type: DECREASE_ANIMATOR_QUANTITY,
        payload: prazdniki
    })
}

export const increaseFireworksQuantity = prazdniki => dispatch => {

    dispatch({
        type: INCREASE_FIREWORKS_QUANTITY,
        payload: prazdniki
    })
}

export const decreaseFireworksQuantity = prazdniki => dispatch => {

    dispatch({
        type: DECREASE_FIREWORKS_QUANTITY,
        payload: prazdniki
    })
}

export const deleteBasketItem = cloth => dispatch => {

    dispatch({
        type: DELETE_BASKET_ITEM,
        payload: cloth
    })
}

export const deleteBasketPrazdnik = prazdniki => dispatch => {

    dispatch({
        type: DELETE_BASKET_PRAZDNIK,
        payload: prazdniki
    })
}

export const deleteAllBasket = prazdniki => dispatch => {

    dispatch({
        type: DELETE_ALL_BASKET,
        payload: prazdniki
    })
}