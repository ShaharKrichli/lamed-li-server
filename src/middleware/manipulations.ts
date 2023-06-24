
// interfaces
import moment from "moment";
import { IExtraRequestData } from "src/models/extraRequestData/interfaces/extraRequestData.interface";
import { IPersonalRequest } from "src/models/personalRequest/interfaces/personalRequest.interface";


export const personalRequestManipulation = (personalRequestData: IPersonalRequest) => {
    return checkDateFormat(personalRequestData.begda.toString()) &&
           checkHourFormat(personalRequestData.hour)  && 
           checkExistAndOnlyDigits(personalRequestData.req_kind) &&
           checkExistAndOnlyDigits(personalRequestData.req_stat) &&
           checkExistAndOnlyDigits(personalRequestData.subty.toString()) &&
           checkExistAndOnlyDigits(personalRequestData.black_status)
    

}

const privateWorkManipulations = (extraRequestData?: IExtraRequestData) => {
    const newExtraRequestData = extraRequestData;

    let { isOk, from, to } = checkTime(extraRequestData.work_from_hr, extraRequestData.work_to_hr)
    if (!isOk) {
        return { isOk, newExtraRequestData }
    }

    newExtraRequestData.work_from_hr = from
    newExtraRequestData.work_to_hr = to

    const { isDateOk, begda, endda } = checkDates(extraRequestData.work_begda, extraRequestData.work_endda)
    if (!isDateOk) {
        isOk = isDateOk
        return { isOk, newExtraRequestData }
    }

    newExtraRequestData.work_begda = begda
    newExtraRequestData.work_endda = endda

    if (!extraRequestData.sachar) newExtraRequestData.sachar = "0";

    return { isOk, newExtraRequestData };
}

const financialHelpManipulations = (extraRequestData?: IExtraRequestData) => {
    let isOk = true
    let newExtraRequestData = extraRequestData
    if (newExtraRequestData.missing_furniture === undefined) {
        newExtraRequestData = undefined
    }
    return { isOk, newExtraRequestData }
}

const checkExistAndOnlyDigits = (str: string) => {
    return str && /^\d+$/.test(str);
}

const checkDates = (begda: string, endda: string) => {
    let isDateOk = true
    if (begda) {
        isDateOk = checkDateFormat(begda)
    }
    else {
        begda = moment(new Date()).format('YYYY-MM-DD');
    }
    if (endda && isDateOk) {
        isDateOk = checkDateFormat(endda)
        if (isDateOk) {
            isDateOk = begda <= endda
        }
    }
    else {
        endda = moment(new Date()).format('YYYY-MM-DD');
    }
    return { isDateOk, begda, endda }
}

const checkTime = (from: string, to: string) => {
    let isOk = true
    if (from) {
        isOk = checkHourFormat(from)
    }
    else {
        from = "23:59"
    }

    if (to && isOk) {
        isOk = checkHourFormat(to)
    }
    else {
        to = "00:00"
    }
    return { from, to, isOk }

}

const checkHourFormat = (str: string) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(str);

const checkDateFormat = (date: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}/;
    return date.match(regex) !== null
}


export const extraDateManipulation =
    new Map<number, (extraRequestData?: IExtraRequestData) => { isOk: boolean, newExtraRequestData: IExtraRequestData }>();
extraDateManipulation.set(462, privateWorkManipulations);
extraDateManipulation.set(404, financialHelpManipulations);