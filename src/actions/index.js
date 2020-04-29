
import * as types from '../actionTypes';

export const removeFeature = item => ({
    type: types.REMOVE_FEATURE,
    payload: item
})

export const buyItem = item => ({
    type: types.BUY_ITEM,
    payload: item
})