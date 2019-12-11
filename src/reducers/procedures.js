import { GET_USER_DATA } from '../action/ProceduresActions'

const initialState = () => {
    return {
        proceduresList: [],
        possibleTasks: [{
            "name": "task_1",
            "id": "1"
        },
        {
            "name": "task_2",
            "id": "2"
        },
        {
            "name": "task_3",
            "id": "3"
        },
        {
            "name": "task_4",
            "id": "4"
        },
        {
            "name": "task_4",
            "id": "5"
        }]
    }
}


export function proceduresReducer(state = initialState(), action) {

    switch (action.type) {
        case GET_USER_DATA:
            return { ...state, proceduresList: action.payload}

        default:
            return state
    }
}