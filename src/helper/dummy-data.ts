import moment from 'moment';

interface CalendarEvent {
    title: string;
    theme: string;
    startTime: moment.Moment;
    endTime: moment.Moment;
}



interface DummyDataObj {
    CALENDAR_INITIAL_EVENTS: CalendarEvent[];
}

const DummyData: DummyDataObj = Object.freeze({
    CALENDAR_INITIAL_EVENTS: [
        { title: "Product call", theme: "GREEN", startTime: moment().add(-12, 'd').startOf('day'), endTime: moment().add(-12, 'd').endOf('day') },
        { title: "Meeting with tech team", theme: "PINK", startTime: moment().add(-8, 'd').startOf('day'), endTime: moment().add(-8, 'd').endOf('day') },
        { title: "Meeting with Cristina", theme: "PURPLE", startTime: moment().add(-2, 'd').startOf('day'), endTime: moment().add(-2, 'd').endOf('day') },
        { title: "Meeting with Alex", theme: "BLUE", startTime: moment().startOf('day'), endTime: moment().endOf('day') }, 
    ],
});

export default DummyData;
