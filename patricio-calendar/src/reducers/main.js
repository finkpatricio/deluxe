import * as constants from '../constants/index';

const initialState = { 
    calendar: [
        { day: 2, description: 'Michael Jackson task' },
        { day: 2, description: 'Eminem task' },
        { day: 5, description: 'Nirvana task' },
        { day: 13, description: 'Rihanna task' },
        { day: 13, description: 'Guns and Rosas task' },
        { day: 17, description: 'Adele task' },
        { day: 17, description: 'Bon Jovi task' },
        { day: 25, description: 'Pearl Jam task' }
    ],
    selectedDay: '',
    selectedTask: '',
    modalOpen: false
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SELECT_DAY:
        return Object.assign({}, state, {
            selectedDay: action.payload
        });
    case constants.SELECT_TASK:
        return Object.assign({}, state, {
            selectedTask: action.payload
        });
    case constants.CHANGE_MODAL_STATE:
        return Object.assign({}, state, {
            modalOpen: action.payload
        });
    case constants.ADD_TASK:
        state.calendar.push({ day: action.payload.day, description: action.payload.description });
        return Object.assign({}, state, {
            calendar: state.calendar
        });
    case constants.UPDATE_TASK:
        state.calendar.forEach(element => {
            if (element.description === action.payload.oldDescription) {
                element.description = action.payload.newDescription;
            }
        });
        return Object.assign({}, state, {
            calendar: state.calendar
        });
    default:
      return state;
  }
}