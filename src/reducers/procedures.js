import { GET_USER_DATA,
    APPLY_TASK_FOR_PROCEDURE, 
    REMOVE_CHOSEN_TASK,
    NEW_PROCEDURE_NAME,
    NEW_PROCEDURE_CREATE,
    EDIT_DATE,
   EDIT_PROCEDURE_LIST } from '../action/ProceduresActions'

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
       newProcedureName: '',
       prcedureNewDate: '',
       procedureNewTime: ''
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

       case EDIT_DATE:
               return { ...state, prcedureNewDate: action.payload[0], procedureNewTime: action.payload[1] }

       case EDIT_PROCEDURE_LIST:
           return { ...state, proceduresList: action.payload }

       case NEW_PROCEDURE_CREATE:
               return { ...state, 
                   proceduresList: state.proceduresList.concat(action.payload), 
                   chosenTasks: [],
                   procedureNewName: '',
                   prcedureNewDate: '',
                   newProcedureTime: ''}        

   default:
       return state
}
}