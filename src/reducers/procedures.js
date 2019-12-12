import { GET_USER_DATA, APPLY_TASK_FOR_PROCEDURE, 
         REMOVE_CHOSEN_TASK,
         NEW_PROCEDURE_NAME,
         NEW_PROCEDURE_CREATE } from '../action/ProceduresActions'

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
        newProcedureName: ''
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

        case NEW_PROCEDURE_NAME:
            return { ...state, newProcedureName: action.payload }

        case NEW_PROCEDURE_CREATE:
            return { ...state, 
                proceduresList: state.proceduresList.concat(action.payload), 
                chosenTasks: [],
                newProcedureName: ''}

        default:
            return state
    }
}