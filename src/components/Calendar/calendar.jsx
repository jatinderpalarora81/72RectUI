import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function Cal(props) {

    const [startDate, setStartDate] = useState(new Date());
    const todayDate = new Date();

    const excludedDates = [];
    const dates = ['2023-03-05', '2023-03-06']
        dates.forEach((date) => {
        excludedDates.push(new Date(date));
    });

    const events = [
        {
            "start": "2023-03-07",
            "end": "2023-03-09"
        },
        {
            "start": "2023-03-11T16:00:00+05:00",
            "end": "2023-03-16T20:00:00+05:00"
        }
    ];

    const disabledDateRanges = events.map(range => ({
        start: new Date(range.start),
        end: new Date(range.end)
    }));

    return (
        <DatePicker
            selected={startDate}
            onChange={date => {setStartDate(date); props.startDate(date)}}
            // excludeDates={excludedDates}
            excludeDateIntervals={disabledDateRanges}
            minDate={todayDate}
            // placeholderText="Select Date"
            // placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"

        />
    );

}

export default Cal;