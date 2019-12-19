export const NEW_PROCEDURE_CREATE = "NEW_PROCEDURE_CREATE";
export const SET_TARGET_PROCEDURE = "SET_TARGET_PROCEDURE";

export function newProcedureCreate(newProcedure) {
  return {
    type: NEW_PROCEDURE_CREATE,
    payload: newProcedure
  };
}

export function setTargetProcedure(id) {
  return {
    type: SET_TARGET_PROCEDURE,
    payload: id
  };
}
