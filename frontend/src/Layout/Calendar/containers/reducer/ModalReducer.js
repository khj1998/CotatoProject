import React from "react";

function ModalReducer(state, action) {
    switch (action.type) {
        // 색상 변경
        case 'COLOR':
            return {...state, color: action.value};
        // 일정 입력
        case 'TODO':
            return {...state, todo: action.value};
        // 체크 박스
        case 'CHECK':
            return {...state, checked: !action.value};
        // 상태 초기화
        case 'INITIALIZATION':
            return{
                color: '',
                todo: '',
                todos: '',
                checked: false,
            }
        // 종료일 설정    
        case 'TODOS':
            return {...state, date: action.value}
    }
}

export default ModalReducer