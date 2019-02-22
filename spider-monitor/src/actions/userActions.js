/**
 * Created by dolphin on 15/7/2017.
 */
export function setName(name) {
    /*return dispatch => {
     setTimeout(() => {
     dispatch({
     type: "SET_NAME",
     payload: name
     });
     }, 2000);
     };

     return {
     type: "SET_NAME",
     payload: name
     };*/

    return {
        type: "SET_NAME",
        payload: new Promise((resolved, reject) => {
            setTimeout(() => {
                resolved(name);
            }, 2000)
        })
    };
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
}