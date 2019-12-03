import { MENU_SATE_CHANGE, REDIRECT_FROM_PAGE } from '../action/HeaderActions'

const initialState = () => {
    return {
        isUserMenuActivated: false,
        isRedirected: false
    }
}


export function headerReducer(state = initialState(), action) {

    switch (action.type) {
        case MENU_SATE_CHANGE:
                return {...state, isUserMenuActivated: action.payload }

        case REDIRECT_FROM_PAGE:
                return {...state, isRedirected: action.payload }

        default:
            return state
    }
}