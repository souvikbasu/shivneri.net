import * as types from '../actions/actionTypes'

export default function fortReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_FORTS_SUCCESS:
            return action.forts;
        case types.CREATE_FORT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.fort)
            ];

        case types.UPDATE_FORT_SUCCESS:
            return [
                ...state.filter(fort=>fort._id!=action.fort._id),
                Object.assign({}, action.fort)
            ];
        default: return state;
    }
   
}