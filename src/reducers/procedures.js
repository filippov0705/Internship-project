import { GET_USER_DATA, APPLY_TASK_FOR_PROCEDURE, REMOVE_CHOSEN_TASK } from '../action/ProceduresActions'

const initialState = () => {
    return {
        proceduresList: [],
        possibleTasks: [{
                "name": "task_1",
            },
            {
                "name": "task_2",
            },
            {
                "name": "task_3",
            },
            {
                "name": "task_4",
            },
            {
                "name": "task_5",
            }],
        chosenTasks: [],
    }
}


export function proceduresReducer(state = initialState(), action) {

    switch (action.type) {
        case GET_USER_DATA:
            return { ...state, proceduresList: action.payload}

        case APPLY_TASK_FOR_PROCEDURE:
            return { ...state, chosenTasks: state.chosenTasks.concat(action.payload) }

        case REMOVE_CHOSEN_TASK:
            return { ...state, chosenTasks: action.payload}

        default:
            return state
    }
}