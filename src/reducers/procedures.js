import {
  GET_USER_DATA,
  APPLY_TASK_FOR_PROCEDURE,
  REMOVE_CHOSEN_TASK,
  NEW_PROCEDURE_NAME,
  NEW_PROCEDURE_CREATE,
  SET_PERIODISITY,
  EDIT_DATE,
  SET_CHOSEN_TASKS,
  EDIT_PROCEDURE_LIST
} from "../action/ProceduresActions";

const initialState = () => {
  return {
    proceduresList: [],
    possibleTasks: [
      {
        name: "Get results"
      },
      {
        name: "Show results"
      },
      {
        name: "Mailing"
      },
      {
        name: "Сalculate the average"
      },
      {
        name: "Show maximum value"
      }
    ],
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

    case NEW_PROCEDURE_CREATE:
      return {
        ...state,
        proceduresList: state.proceduresList.concat(action.payload),
        chosenTasks: [],
        newProcedureName: "",
        prcedureNewDate: [],
        periodicity: "single"
      };

    default:
      return state;
  }
}
