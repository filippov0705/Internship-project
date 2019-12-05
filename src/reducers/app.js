import { MENU_SATE_CHANGE, REDIRECT_FROM_PAGE } from '../action/HeaderActions'

const initialState = () => {
    return {
//TODO: add states of App page
    }
}


export function appReducer(state = initialState(), action) {

    switch (action.type) {
//TODO: add some logic of the App page
        default:
            return state
    }
}