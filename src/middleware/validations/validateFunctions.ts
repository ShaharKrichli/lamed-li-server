import { SPLITTER } from "src/common/constants/global";
import { FieldValidators } from "src/models/genericFields/entities/fieldsValidators.entity";
import { IFieldCondition, fieldsValidatorsManager, IFieldValidators, fieldValueType } from "./IValidation";

export const textFieldsFuncValidators: fieldsValidatorsManager = {
    checkLength: (textToCheck: fieldValueType, maxLength: number): boolean => {
        return textToCheck.length <= maxLength
    },
    maxLength: (textToCheck: fieldValueType, maxLength: number): boolean => {
        return textToCheck.length <= maxLength
    },
    minLength: (textToCheck: fieldValueType, minLength: number): boolean => {
        return textToCheck.length >= minLength
    },
    onlyDigits: (textToCheck: string): boolean => {
        return /^\d+$/.test(textToCheck)
    },
    isAbove: (textToCheck: string, maxNumber: string): boolean => {
        return +textToCheck <= +maxNumber
    },
    onlyHebrewLetters: (textToCheck: string): boolean => {
        return /^[\u0590-\u05FF ,.'-]+$/i.test(textToCheck)
    },
    required: (textToCheck: fieldValueType): boolean => {
        return textToCheck.length > 0
    },
    isIdValid: (textToCheck: string): boolean => {
        return new RegExp(/^\d{0,9}$/).test(textToCheck);
    },
    multPickedLength: (textToCheck: string, maxLength: number): boolean => {
        return textToCheck.split(SPLITTER).length <= maxLength;
    },
    phoneNumber: (textToCheck: string): boolean => {
        return textToCheck.length === 10 && textToCheck[0] === '0'
    },
    onlyHebrewAndDigits: (textToCheck: string): boolean => {
        return /^[\u0590-\u05FF ,.'-, \d]+$/i.test(textToCheck)
    }
    
};

export const checkValidaitons = (textValue: fieldValueType, validators: FieldValidators[]) => {
    let isTextValid = true, validFuncIndex
    for (
        validFuncIndex = 0;
        validFuncIndex < validators.length && isTextValid;
        validFuncIndex++
    ) {
        isTextValid = textFieldsFuncValidators[validators[validFuncIndex].functionName](
            textValue,
            validators[validFuncIndex].param1,
            validators[validFuncIndex].param2,
            validators[validFuncIndex].param3,
        );
    }
    return { isTextValid, validFuncIndex }
}

export const checkEquidity = (condition: IFieldCondition, textValue: fieldValueType): boolean => {
    if (typeof textValue === 'string') return condition.equalOptions.some(condition => condition.option === textValue)

    return textValue.filter(e => {
        return condition.equalOptions.some(condition => condition.option === e)
    }).length > 0
}

export const isEmptyAndRequired = (textValue: fieldValueType, isRequired: boolean) => {
    return !textValue.length && isRequired
}
