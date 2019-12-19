// import fakeData from '../mockData/fakeData';

export const GET_USER_DATA = "GET_USER_DATA";
export const APPLY_TASK_FOR_PROCEDURE = "APPLY_TASK_FOR_PROCEDURE";
export const REMOVE_CHOSEN_TASK = "REMOVE_CHOSEN_TASK";
export const NEW_PROCEDURE_NAME = "NEW_PROCEDURE_NAME";
export const EDIT_DATE = "EDIT_DATE";
export const EDIT_TIME = "EDIT_TIME";
export const EDIT_PROCEDURE_LIST = "EDIT_PROCEDURE_LIST";
export const SET_PERIODISITY = "SET_PERIODISITY";
export const SET_CHOSEN_TASKS = "SET_CHOSEN_TASKS";
export const SET_POSSIBLE_TASKS = "SET_POSSIBLE_TASKS";

export function getUserData(data) {
  return {
    type: GET_USER_DATA,
    payload: data
  };
}

export function setPossibleTasks(data) {
  return {
    type: SET_POSSIBLE_TASKS,
    payload: data
  };
}

export function applyTaskForProcedure(task) {
  return {
    type: APPLY_TASK_FOR_PROCEDURE,
    payload: task
  };
}

export function removeChosenTask(newArr) {
  return {
    type: REMOVE_CHOSEN_TASK,
    payload: newArr
  };
}

export function newProcedureName(name) {
  return {
    type: NEW_PROCEDURE_NAME,
    payload: name
  };
}

export function editProcedureDate(date) {
  return {
    type: EDIT_DATE,
    payload: date
  };
}

export function editProceduresList(list) {
  return {
    type: EDIT_PROCEDURE_LIST,
    payload: list
  };
}

export function setPeriodicity(periodicity) {
  return {
    type: SET_PERIODISITY,
    payload: periodicity
  };
}

export function setChosenTasks(tasks) {
  return {
    type: SET_CHOSEN_TASKS,
    payload: tasks
  };
}
