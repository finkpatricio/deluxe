import * as constants from '../constants/index';

export function changeModalState(value) {
    return {
        type: constants.CHANGE_MODAL_STATE,
        payload: value,
    };
}

export function selectDay(day) {
    return {
        type: constants.SELECT_DAY,
        payload: day,
    };
}

export function selectTask(task) {
    return {
        type: constants.SELECT_TASK,
        payload: task,
    };
}

export function addTask(data) {
    return {
        type: constants.ADD_TASK,
        payload: data,
    };
}

export function updateTask(data) {
    return {
        type: constants.UPDATE_TASK,
        payload: data,
    };
}
