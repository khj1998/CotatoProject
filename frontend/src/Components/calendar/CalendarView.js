import  './CalendarView.css';
import {Calendar,dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React,{useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Navigation from '../../Layout/Navigation';

import CalendarHeader from './CalendarHeader';
import axios from 'axios';
import moment from 'moment';


const locales={
    "en-US":require("date-fns/locale/en-US")

}
const localizer=dateFnsLocalizer({
       format,
       parse,
       startOfWeek,
       getDay,
       locales}
)

const events=[
]

let startDate = {}
let endDate = {}

const Month_Parser = {
    "Jen" : 1,
    "Feb" : 2,
    "Mar" : 3,
    "Apr" : 4,
    "May" : 5,
    "Jun" : 6,
    "Jul" : 7,
    "Aug" : 8,
    "Sep" : 9,
    "Oct" : 10,
    "Nov" : 11,
    "Dec" : 12
}

const SUBMIT_FORMAT = {
    "author" :
    {
        "id" : -1
    },
    "content" : "",
    "startYear" : "",
    "startMonth" : "",
    "startDay" : "",
    "endYear" : "",
    "endMonth" : "",
    "endDay" : ""
}



function CalendarView(){

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);



    const onSubmit= async(e) => {
        e.preventDefault();
        startDate = newEvent.start.toString().split(' ',4);
        endDate = newEvent.start.toString().split(' ',4);
        SUBMIT_FORMAT["author"]["id"] = 1;
        SUBMIT_FORMAT["content"] = newEvent.title;
        SUBMIT_FORMAT["startYear"] = startDate[3];
        SUBMIT_FORMAT["startMonth"] = Month_Parser[startDate[1]];
        SUBMIT_FORMAT["startDay"] = startDate[2];
        SUBMIT_FORMAT["endYear"] = endDate[3];
        SUBMIT_FORMAT["endMonth"] = Month_Parser[endDate[1]];
        SUBMIT_FORMAT["endDay"] = endDate[2];
                 await axios.post(`http://localhost:8080/cotato`,SUBMIT_FORMAT,
            {
                withCredentials: false,
                 headers: { "Content-Type": "application/json" }
             })
             .then(
             (response) => {
             console.log(response);
             },
             (error) => {
             console.log(error.response.data);
             }
             );
};
    function handleAddEvent(){
        setAllEvents([...allEvents, newEvent]);
    };
    return(

        <div className="CalendarView">
            <div className="CalendarHeader">
                <Navigation />
                <CalendarHeader />
            </div>
            <div className="text">
                    <h3>일정을 입력해주세요</h3>
               <form onSubmit={(e)=>onSubmit(e)}>

                    <input type="text" placeholder="내용 입력" style={{ width: "20%", marginRight: "10px" }}
                         value={newEvent.title}
                         onChange={(e) => setNewEvent({ ...newEvent, title:e.target.value })} />

                    <DatePicker
                        dateFormat="yyyy.MM.dd"
                        placeholderText="시작일"
                        style={{ marginRight: "10px" }}
                        selected={newEvent.start}
                        onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker
                        dateFormat="yyyy.MM.dd"
                        placeholderText="종료일"
                        selected={newEvent.end}
                        onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                        등록하기
                    </button>

            <Calendar localizer={localizer}
             events={allEvents}
              startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
              </form>
              </div>
        </div>

    );
    };

export default CalendarView;