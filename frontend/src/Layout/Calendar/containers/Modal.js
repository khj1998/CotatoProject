import React, { useCallback, useReducer} from 'react';
import Picker from "../component/Picker";
import Style from "../module/Style";
import ModalReducer from "./reducer/ModalReducer";
import CalcDate from '../module/CalcDate';
import styled from 'styled-components';
import voteButton from '../component/voteButton';

const Modal = ({index, visible, onConfirm, onCancel}) => {
    const initialState = {
        color: '',
        todo: '',
        todos: '',
        checked: false,
        date: ''
    };

    const [state, dispatch] = useReducer(ModalReducer, initialState)


    const color = state.color;
    const todo = state.todo;
    const todos = state.todos;
    const check = state.checked;
    const end = state.date

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            onConfirm({index, todo})
            dispatch({type: 'CHANGE', value: ''})
        }
    }
    
    // 초기화
    const Initialization = () => {
        dispatch({type: 'INITIALIZATION'})
    }

    // 색상 변경
    const changeColor = (color) => {
        dispatch({type: 'COLOR', value: color})
    }
    
    // 일정
    const onChange = useCallback(e => {
        dispatch({type: 'TODO', value: e.target.value})
    }, [])
    
    // 일정 종료일
    const onTodos = useCallback( e => {
        dispatch({type: 'TODOS', value: e.target.value})
    }, [])

    // 체크 박스
    const onCheck = () => {
        dispatch({type: 'CHECK', value: check})
    }
    
    // 입력 취소
    const cancel = () => {
        onCancel()
        Initialization()
    }
    
    // 입력
    const confirm = () => {
        const todos = CalcDate(index, end)
        onConfirm({index, todo, color, todos})
        Initialization()
        changeColor('')
    }

    //투표-> 이동 버튼
   // const voteButton= props=><voteB {...props}/>
  


    if (!visible) return null;
    return (
        <div className="fullscreen">
            <div className="modal">
                <p>{index}</p>
                <div className="input">
                <input placeholder="일정" value={todo} onChange={onChange} onKeyPress={onKeyPress}></input>
                {color !== '' && <div className="custom-check-box"
                                     style={Style(color)}/>}
                </div>
                <div className="end">
                    <p>종료일 설정</p>
                <input type = 'checkbox' onClick = {onCheck} />
                </div>
                <div className="choice-day">
                    { check === true &&
                    <div className="day">
                        <div className="end-day">
                            <input type="text" onChange={onTodos} placeholder="YEAR.MONTH.DATE"/>
                        </div>
                    </div>
                    }
                </div>
                <Picker changeColor = {changeColor}/>
                <div className="footer">
                    <button className="choice" onClick={confirm} >Confirm</button>
                    <button className="choice" onClick={cancel}>Cancel</button>
                </div>
                <div><button classname="choice" onClick={voteButton}>투표</button></div>
            </div>
        </div>
     );
};

export default Modal
