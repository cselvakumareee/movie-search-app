import React from 'react';
import * as actionConstants from './ActionConstants';


const initialState:any = {
    cardItems:[]
}

const reducer = (state=initialState, action:any) =>{
    switch(action.type){
        
        case actionConstants.ADD_CARD_DATA:
            //let updatedItems = [...state.cardItems];
             let updatedItems = action.cardData;
             return {
                 ...state,
                 cardItems: updatedItems
             }
        default:
            return initialState;    
    }
}

export default reducer;