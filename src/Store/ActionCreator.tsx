import * as actionTypes from './ActionConstants';

export const addCardData = (cardData:any) => {
    return {
        type: actionTypes.ADD_CARD_DATA,
        cardData: cardData
    }
}