export const GET_USER_DATA = "GET_USER_DATA";


export function getUserData(data) {
    return {
        type: GET_USER_DATA,
        payload: data
    }
}