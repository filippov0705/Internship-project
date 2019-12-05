import { MENU_SATE_CHANGE, REDIRECT_FROM_PAGE } from '../action/HeaderActions'

const initialState = () => {
    return {
        //TODO: add Procedures page states
    }
}


export function proceduresReducer(state = initialState(), action) {

    switch (action.type) {
                //TODO: add Procedures page logic of state change
        default:
            return state
    }
}