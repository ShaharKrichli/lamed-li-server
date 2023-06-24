import * as moment from 'moment-timezone';

export const currentHourString = () => {
    return moment().tz("Asia/Tel_Aviv").format("HH:mm");
}

export const currentDateString = () => {
    return moment().format("DD.MM.YYYY");
}

export const dateToString = (date?: Date) => {
    return moment(date).format("DD.MM.YYYY");
};

export const isDatePast = (date: moment.Moment) => {
    return date.diff(moment(), "hours") < 0;
};

export const stringToMoment = (date: string, format = "DD.MM.YYYY") => {
    return moment(date, format);
};

export const daysAfterToday = (days: number) => {
    return moment().add(days, 'days').format("YYYY-MM-DD");
}