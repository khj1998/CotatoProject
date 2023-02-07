import React from 'react';

function calendarReducer(state, action) {

    switch (action.type) {
        case 'INCREMENT':
            if (state.month < 11) {
                return {...state, "month" : state.month+1}
            }
            // 12월을 넘길 경우 Year + 1
            else {
                return {...state, "year": state.year + 1,"month": 0}
            }
        case 'DECREMENT':
            if (state.month > 0) {
                return { ...state, "month": state.month - 1}
            }
            // 1월 보다 작을 경우 Year - 1
            else {
                return { ...state, "year": state.year - 1, "month": 11}
            }
        case 'MODAL':
            return {...state, modal: {
                    ...state.modal,
                    visible: !state.modal.visible,
                    index: action.value
                }}
        case 'INSERT':
            // 해당 인덱스에 이미 일정이 있는 경우
            if (state.schedule[action.index] !== undefined) {
                return {...state, schedule: {
                        ...state.schedule,
                        [action.index]: [
                            ...state.schedule[action.index],
                            [action.todo, action.color]
                        ]
                    }}
            }
            // 해당 인덱스에 일정이 없는 경우
            else {
                return {...state, schedule: {
                        ...state.schedule,
                        [action.index]: [[action.todo, action.color]]
                    }}
            }
    }
}

export default calendarReducer;
