
enum FIELD_CONDITION_TYPES {
    EQUAL = 'EQUAL'
}

type FIELD_CONDITION_LITERALS = keyof typeof FIELD_CONDITION_TYPES;

interface IEqualConditionOptions {
    condId: number
    option: string
}

export interface IFieldCondition {
    condId: number
    id: number
    condition: FIELD_CONDITION_LITERALS
    effectedFieldId: number
    from: string
    to: string
    isSelected: boolean
    equalOptions: IEqualConditionOptions[]
}

export enum FIELDS_VALIDATORS_FUNCTIONS {
    checkLength = 'checkLength',
    maxLength = 'maxLength',
    minLength = 'minLength',
    onlyDigits = 'onlyDigits',
    onlyHebrewLetters = 'onlyHebrewLetters',
    isAbove = 'isAbove',
    required = 'required',
    isIdValid = 'isIdValid',
    phoneNumber = 'phone_number',
    onlyHebrewAndDigits = 'onlyHebrewAndDigits'
}

export type FIELDS_VALIDATORS_FUNCTIONS_LITERALS = keyof typeof FIELDS_VALIDATORS_FUNCTIONS;

export type fieldsValidatorsManager = { [literal in FIELDS_VALIDATORS_FUNCTIONS_LITERALS]:
    (...args: any[]) => boolean };


export interface IFieldValidators {
    id: number
    functionName: FIELDS_VALIDATORS_FUNCTIONS_LITERALS
    param1?: string
    param2?: string
    param3?: string
    errorMsg: string
}

export type fieldValueType = string | string[]