import * as types from './actionTypes'
import fortApi from '../api/mockFortApi'

export function loadFortsSuccess(forts) {
    return { type: types.LOAD_FORTS_SUCCESS, forts };
}

export function createFortSuccess(fort) {
    return { type: types.CREATE_FORT_SUCCESS, fort };
}

export function updateFortSuccess(fort) {
    return { type: types.UPDATE_FORT_SUCCESS, fort };
}

export function loadFort() {
    return function (dispatch) {
        return fortApi.getAllForts().then((forts) => {
            dispatch(loadFortsSuccess(forts));
        }).catch((error) => {
            throw (error);
        })
    }
}


export function saveFort(fort) {
    return function (dispatch, getState) {
        return fortApi.saveFort(fort).then((fort) => {
            fort._id ? dispatch(updateFortSuccess(fort)) :
                dispatch(createFortSuccess(fort));
        }).catch((error) => {
            throw (error);
        })
    }
}
