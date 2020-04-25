import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from '../assets/data/myEventsList'
import 'react-big-calendar/lib/css/react-big-calendar.css'
 
const localizer = momentLocalizer(moment)
 
const MyCalendar = props => (
  <div className="calender">
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar


// import React, {Component} from "react";

// class Schedule extends Component {
//     constructor(){
//         super();
//         this.state = {
//             isLoggedIn: false
//         }
//     }

//     render() {
//         let message;
//         const isLoggedIn =  this.state.isLoggedIn
//         if (isLoggedIn){
//             message = "in";
//         } else {
//             message = "out";
//         }
//         return (
//             <div>
//                 <h1>You are currently logged {message}</h1>
//             </div>
//         )
//     }
// }

// export default Schedule;