import fakeData from '../mockData/fakeData';

export const GET_USER_DATA = "GET_USER_DATA";
export const APPLY_TASK_FOR_PROCEDURE = "APPLY_TASK_FOR_PROCEDURE";
export const REMOVE_CHOSEN_TASK = 'REMOVE_CHOSEN_TASK';
export const NEW_PROCEDURE_NAME = 'NEW_PROCEDURE_NAME';
export const NEW_PROCEDURE_CREATE = 'NEW_PROCEDURE_CREATE';
export const EDIT_DATE = 'EDIT_DATE';
export const EDIT_TIME = 'EDIT_TIME';
export const EDIT_PROCEDURE_LIST = 'EDIT_PROCEDURE_LIST';
export const SET_PERIODISITY = 'SET_PERIODISITY';




export function getUserData(data) {
    return {
        type: GET_USER_DATA,
        payload: fakeData
    }
}

export function applyTaskForProcedure(task) {
    return {
        type: APPLY_TASK_FOR_PROCEDURE,
        payload: task
    }
}

export function removeChosenTask(newArr) {
    return {
        type: REMOVE_CHOSEN_TASK,
        payload: newArr
    }
}

export function newProcedureName(name) {
    return {
        type: NEW_PROCEDURE_NAME,
        payload: name
    }
}

export function newProcedureCreate(newProcedure) {
    return {
        type: NEW_PROCEDURE_CREATE,
        payload: newProcedure
    }
}


export function editProcedureDate(date) {
    return {
        type: EDIT_DATE,
        payload: date
    }
}

export function editProceduresList(list) {
    return {
        type: EDIT_PROCEDURE_LIST,
        payload: list
    }
}

export function setPeriodicity(periodicity) {
    return {
        type: SET_PERIODISITY,
        payload: periodicity
    }
}
