/**
 * Created by dolphin on 15/7/2017.
 */

export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    };
}

export function substractNumber(number) {
    return {
        type: "SUBSTRACT",
        payload: number
    };
}
