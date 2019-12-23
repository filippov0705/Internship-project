import {
  GET_USER_DATA,
  APPLY_TASK_FOR_PROCEDURE,
  REMOVE_CHOSEN_TASK,
  NEW_PROCEDURE_NAME,
  SET_PERIODISITY,
  EDIT_DATE,
  SET_CHOSEN_TASKS,
  EDIT_PROCEDURE_LIST,
  SET_POSSIBLE_TASKS,
  NEW_PROCEDURE_CREATE,
  SET_TARGET_PROCEDURE,
  CHANGE_TASK_LIST,
  CLEAR_CHOSEN_TASKS
} from "../action/ProceduresActions";
import { mockData } from "./mockData";

const initialState = () => {
  return {
    proceduresList: mockData.allProcedures,
    proceduresHeads: mockData.allProceduresHeads,
    possibleTasks: mockData.possibleTasks,
    chosenTasks: [],
    newProcedureName: "",
    prcedureNewDate: [],
    periodicity: "single",
    targetProcedure: [],
    scheduleEdit: false
  };
};

export function proceduresReducer(state = initialState(), action) {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        proceduresHeads: mockData.allProceduresHeads,
        proceduresList: mockData.allProcedures
      };

    case NEW_PROCEDURE_CREATE:
      return {
        ...state,
        proceduresList: [...state.proceduresList, action.payload],
        proceduresHeads: [
          ...state.proceduresHeads,
          { name: action.payload.name, id: action.payload.id }
        ]
      };

    case SET_POSSIBLE_TASKS:
      return { ...state, possibleTasks: mockData.possibleTasks };

    case SET_TARGET_PROCEDURE:
      return {
        ...state,
        targetProcedure: state.proceduresList.filter(
          item => item.id === action.payload
        )
      };

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
        proceduresList: action.payload,
        prcedureNewDate: []
      };

    case SET_PERIODISITY:
      return { ...state, periodicity: action.payload };

    case SET_CHOSEN_TASKS:
      return {
        ...state,
        targetProcedure: state.proceduresList,
        chosenTasks: state.proceduresList.find(
          item => item.id === action.payload
        ).tasks
      };

    case CLEAR_CHOSEN_TASKS:
      return { ...state, chosenTasks: [] };

    case CHANGE_TASK_LIST:
      return {
        ...state,
        chosenTasks: action.payload
      };

    default:
      return state;
  }
}
