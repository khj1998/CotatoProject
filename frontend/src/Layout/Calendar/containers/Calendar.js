import React, {useReducer} from 'react';
import Modal from "./Modal";
import calendarReducer from "./reducer/CalendarReducer";
import MakeCalendar from "../module/MakeCalendar";


const today = new Date()

// 초기 상태
const initialState = {
     year: today.getFullYear(),
     month: today.getMonth(),
     modal: {
         visible: false,
         index: '',
     },
     schedule: []
 };


const Calendar = () => {
    const [state, dispatch] = useReducer(calendarReducer, initialState)

    // 날짜 관련
    const year = state.year;
    const month  = state.month;
    const yearMonth = year + "." + (month+1);
    const lastDate = parseInt(new Date(year, month+1, 0).getDate());
    const firstDay = parseInt(new Date(year, month, 1).getDay());

    // 일정
    const todo = state.schedule

    // Modal
    const visible = state.modal.visible
    const index = state.modal.index


    // Month 감소
    const onDecreases = () => {
        dispatch({ type: 'DECREMENT'})
    }

    // Month 증가
    const onIncreases = () => {
        dispatch({ type: 'INCREMENT'})
    }

    // Modal Active
    const changeVisible = (key) => {
        dispatch({ type: 'MODAL', value: key})
    }

    // 일정 입력
    const onConfirm = ({index, todo, color, todos}) => {
        if (todos.length != 0) {
            todos.map((item) => {
                dispatch({type: 'INSERT', index: item, todo:todo, color: color})
            })
        }
        else {
            dispatch({type: 'INSERT', index: index, todo: todo, color: color})
        }
        dispatch({ type: "MODAL"})
    }

    // 일정 입력 취소
    const onCancel = () => {
        dispatch({ type: "MODAL"})
    }


    return (
        <>
            <div className="Calendar">
                <div className="header">
                    <button className="move" onClick={onDecreases}>&lt;</button>
                    <p>{yearMonth}</p>
                    <button className="move" onClick={onIncreases}>&gt;</button>
                </div>
                <table>
                <thead>
                    <tr>
                        <td>Sun</td>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>Thu</td>
                        <td>Fri</td>
                        <td>Sat</td>
                    </tr>
                </thead>
                    <tbody>
                    {MakeCalendar({year, month ,firstDay, lastDate, changeVisible, todo, })}
                    </tbody>
                </table>
                <Modal index= {index} visible={visible} onConfirm={onConfirm} onCancel={onCancel}/>
            </div>
        </>
    )
}

export default React.memo(Calendar);
