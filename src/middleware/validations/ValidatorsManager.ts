import { textFieldsFuncValidators } from "./validateFunctions";

//interfaces
import { IExtraRequestData } from "src/models/extraRequestData/interfaces/extraRequestData.interface";
import { IPersonalApplying } from "src/models/personalApplying/interfaces/personalApplying.interface";

const privateWorkValidation = (extraRequestData?: IExtraRequestData) => {
    const requiredFunc = textFieldsFuncValidators.required;
    return (
        requiredFunc(extraRequestData.work_name) && requiredFunc(extraRequestData.employer_name) &&
        requiredFunc(extraRequestData.profession) && requiredFunc(extraRequestData.sachar) &&
        requiredFunc(extraRequestData.work_begda) && requiredFunc(extraRequestData.work_endda) &&
        requiredFunc(extraRequestData.work_from_hr) && requiredFunc(extraRequestData.work_to_hr)
    );
}

export const requestValidators = new Map<number, (extraRequestData?: IExtraRequestData) => boolean>();
requestValidators.set(462, privateWorkValidation);

export const applyingValidation = (personalApplying: IPersonalApplying) => {
    const requiredFunc = textFieldsFuncValidators.required;
    return (requiredFunc(personalApplying.subty) && requiredFunc(personalApplying.desc));
}