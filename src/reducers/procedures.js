import {
  GET_USER_DATA,
  APPLY_TASK_FOR_PROCEDURE,
  REMOVE_CHOSEN_TASK,
  NEW_PROCEDURE_NAME,
  SET_PERIODISITY,
  EDIT_DATE,
  SET_CHOSEN_TASKS,
  EDIT_PROCEDURE_LIST,
  SET_POSSIBLE_TASKS
} from "../action/ProceduresActions";

const initialState = () => {
  return {
    proceduresList: [],
    possibleTasks: [],
    chosenTasks: [],
    newProcedureName: "",
    prcedureNewDate: [],
    periodicity: "single"
  };
};

export function proceduresReducer(state = initialState(), action) {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, proceduresList: action.payload };

    case SET_POSSIBLE_TASKS:
      return { ...state, possibleTasks: action.payload };

    case APPLY_TASK_FOR_PROCEDURE:
      return {
        ...state,
        chosenTasks: state.chosenTasks.concat(action.payload)
      };

    case REMOVE_CHOSEN_TASK:
      return { ...state, chosenTasks: action.payload };

    case NEW_PROCEDURE_NAME:
      return { ...state, newProcedureName: action.payload };

    case EDIT_DATE:
      return { ...state, prcedureNewDate: action.payload };

    case EDIT_PROCEDURE_LIST:
      return {
        ...state,
        proceduresList: action.payload
      };

    case SET_PERIODISITY:
      return { ...state, periodicity: action.payload };

    case SET_CHOSEN_TASKS:
      return { ...state, chosenTasks: action.payload };

    default:
      return state;
  }
}
